(()=>{'use strict';
// Persistent displacement field: pointer strokes bend the original image,
// rather than laying blurred copies or circular lenses over it.
const allowed=matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
const scene=document.querySelector('.hero-scene'),image=scene?.querySelector('img'),sequence=document.getElementById('entrance-sequence');if(!image||!sequence)return;
const CELL=26,RADIUS=110,MAX_FORCE=64;
let enabled=false,box=null,canvas=null,ctx=null,source=null,output=null,w=0,h=0,cols=0,rows=0,fx,fy,nx,ny,frame=0,lastFrame=0,lastPoint=null,lastInput=0,previous=null;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function usable(){return enabled&&!document.hidden&&!sequence.classList.contains('entrance-travelling')}
function stop(){cancelAnimationFrame(frame);frame=0;canvas?.remove();canvas=ctx=source=output=box=null;lastPoint=previous=null;fx=fy=nx=ny=null}
function prepare(){
 if(!image.complete||!image.naturalWidth)return false;
 box=scene.getBoundingClientRect();w=Math.ceil(box.width);h=Math.ceil(box.height);if(!w||!h)return false;
 const bounds=image.getBoundingClientRect(),scale=Math.max(bounds.width/image.naturalWidth,bounds.height/image.naturalHeight),dw=image.naturalWidth*scale,dh=image.naturalHeight*scale;
 const cache=document.createElement('canvas');cache.width=w;cache.height=h;const c=cache.getContext('2d',{willReadFrequently:true});if(!c)return false;
 c.drawImage(image,bounds.left-box.left+(bounds.width-dw)/2,bounds.bottom-box.top-dh,dw,dh);
 try{source=c.getImageData(0,0,w,h).data}catch{stop();return false}
 canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;canvas.className='water-ripple';canvas.setAttribute('aria-hidden','true');ctx=canvas.getContext('2d');if(!ctx){stop();return false}
 output=ctx.createImageData(w,h);cols=Math.ceil(w/CELL)+1;rows=Math.ceil(h/CELL)+1;fx=new Float32Array(cols*rows);fy=new Float32Array(cols*rows);nx=new Float32Array(cols*rows);ny=new Float32Array(cols*rows);scene.append(canvas);return true;
}
function inject(x,y,dx,dy,pressure){
 const radius=RADIUS+pressure*85,gain=.18+pressure*1.2;
 const x0=Math.max(1,Math.floor((x-radius)/CELL)),x1=Math.min(cols-2,Math.ceil((x+radius)/CELL)),y0=Math.max(1,Math.floor((y-radius)/CELL)),y1=Math.min(rows-2,Math.ceil((y+radius)/CELL));
 for(let gy=y0;gy<=y1;gy++)for(let gx=x0;gx<=x1;gx++){
  const px=gx*CELL-x,py=gy*CELL-y,d2=(px*px+py*py)/(radius*radius);if(d2>=1)continue;
  const k=(1-d2)*(1-d2),i=gy*cols+gx;
  fx[i]=clamp(fx[i]+dx*k*gain,-MAX_FORCE,MAX_FORCE);fy[i]=clamp(fy[i]+dy*k*gain,-MAX_FORCE,MAX_FORCE);
 }
}
function simulate(dt){
 let peak=0,x0=cols,y0=rows,x1=0,y1=0;const damping=Math.pow(.89,dt),mix=.14;
 for(let y=1;y<rows-1;y++)for(let x=1;x<cols-1;x++){
  const i=y*cols+x;
  // Neighbour exchange spreads the stroke continuously, then restores it.
  nx[i]=(fx[i]*(1-mix)+(fx[i-1]+fx[i+1]+fx[i-cols]+fx[i+cols])*mix*.25)*damping;
  ny[i]=(fy[i]*(1-mix)+(fy[i-1]+fy[i+1]+fy[i-cols]+fy[i+cols])*mix*.25)*damping;
  const force=Math.abs(nx[i])+Math.abs(ny[i]);peak=Math.max(peak,force);
  if(force>.08){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y)}
 }
 [fx,nx]=[nx,fx];[fy,ny]=[ny,fy];
 return peak<.12?null:{x:Math.max(0,(x0-2)*CELL),y:Math.max(0,(y0-2)*CELL),right:Math.min(w,(x1+2)*CELL),bottom:Math.min(h,(y1+2)*CELL)};
}
function render(b){
 if(previous)ctx.clearRect(previous.x,previous.y,previous.right-previous.x,previous.bottom-previous.y);
 const data=output.data;
 for(let y=b.y;y<b.bottom;y++){
  const gy=y/CELL,iy=Math.min(rows-2,Math.floor(gy)),ty=gy-iy;
  for(let x=b.x;x<b.right;x++){
   const gx=x/CELL,ix=Math.min(cols-2,Math.floor(gx)),tx=gx-ix,i=iy*cols+ix,di=(y*w+x)*4;
   const dx=(fx[i]*(1-tx)+fx[i+1]*tx)*(1-ty)+(fx[i+cols]*(1-tx)+fx[i+cols+1]*tx)*ty;
   const dy=(fy[i]*(1-tx)+fy[i+1]*tx)*(1-ty)+(fy[i+cols]*(1-tx)+fy[i+cols+1]*tx)*ty;
   const strength=Math.abs(dx)+Math.abs(dy);if(strength<.06){data[di+3]=0;continue}
   // Sample sharp source pixels; the displacement itself creates refraction.
   const sx=clamp(x-dx,0,w-2),sy=clamp(y-dy,0,h-2),px=Math.floor(sx),py=Math.floor(sy),a=(py*w+px)*4,bp=a+w*4,ux=sx-px,uy=sy-py;
   const slope=(fx[i+1]-fx[Math.max(0,i-1)]+fy[i+cols]-fy[Math.max(0,i-cols)])/(CELL*2);
   const energy=clamp((strength-3)/38,0,1),fold=clamp(Math.abs(slope)*1.6,0,1),shine=Math.max(0,-slope)*8*energy;
   // Low-amplitude spectral highlights follow compressed parts of the flow.
   const phase=dx*.075+dy*.06+slope*2;
   for(let c=0;c<3;c++){
    const base=(source[a+c]*(1-ux)+source[a+4+c]*ux)*(1-uy)+(source[bp+c]*(1-ux)+source[bp+4+c]*ux)*uy;
    const tint=Math.sin(phase+c*2.094)*5*energy*fold;
    data[di+c]=clamp(base+Math.min(9,shine)+tint,0,255);
   }
   data[di+3]=Math.round(255*Math.min(1,strength/1.8));
  }
 }
 ctx.putImageData(output,0,0,b.x,b.y,b.right-b.x,b.bottom-b.y);previous=b;
}
function tick(now){
 frame=0;if(!usable()){stop();return}
 if(now-lastFrame>=32){const dt=clamp((now-lastFrame)/32,.5,2);lastFrame=now;const b=simulate(dt);if(!b){stop();return}render(b)}
 frame=requestAnimationFrame(tick);
}
function move(e){
 if(!usable()||e.pointerType!=='mouse')return;if(!canvas&&!prepare())return;
 const x=e.clientX-box.left,y=e.clientY-box.top,now=performance.now();if(x<0||y<0||x>w||y>h){lastPoint=null;return}
 if(lastPoint&&now-lastInput<180){const dx=x-lastPoint.x,dy=y-lastPoint.y,distance=Math.hypot(dx,dy);if(distance>1){const elapsed=clamp(now-lastInput,8,100),speed=distance/elapsed,pressure=clamp(speed/1.8,0,1),parts=Math.min(8,Math.ceil(distance/28)),force=Math.min(60,speed*elapsed)/parts;for(let j=1;j<=parts;j++)inject(lastPoint.x+dx*j/parts,lastPoint.y+dy*j/parts,dx/distance*force,dy/distance*force,pressure);if(!frame){lastFrame=now-32;frame=requestAnimationFrame(tick)}}}
 lastPoint={x,y};lastInput=now;
}
function configure(){enabled=allowed.matches&&!reduce.matches;stop();document.removeEventListener('pointermove',move);if(enabled)document.addEventListener('pointermove',move,{passive:true})}
allowed.addEventListener('change',configure);reduce.addEventListener('change',configure);addEventListener('resize',stop,{passive:true});addEventListener('scroll',stop,{passive:true});document.addEventListener('visibilitychange',stop);document.documentElement.addEventListener('pointerleave',stop);scene.addEventListener('animationend',stop);configure();
})();
