(()=>{'use strict';
const allowed=matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
const scene=document.querySelector('.hero-scene'),hero=document.querySelector('.hero-immersive'),image=scene?.querySelector('img'),sequence=document.getElementById('entrance-sequence');if(!image||!hero)return;
const SIZE=200,AREA=520,LIFE=1250,MAX=2,INTERVAL=100;
let source=null,box=null,pixels=null,frame=0,lastFrame=0,lastSpawn=-Infinity,lastPoint=null,enabled=false;
const ripples=[];
function clear(){cancelAnimationFrame(frame);frame=0;for(const r of ripples){clearTimeout(r.timer);r.canvas.remove();}ripples.length=0;lastPoint=null}
function usable(){return enabled&&!document.hidden&&!sequence.classList.contains('entrance-travelling')}
function prepare(){
 if(!image.complete||!image.naturalWidth)return false;
 box=scene.getBoundingClientRect();const bounds=image.getBoundingClientRect(),scale=Math.max(bounds.width/image.naturalWidth,bounds.height/image.naturalHeight);
 const w=Math.ceil(box.width),h=Math.ceil(box.height);if(!w||!h)return false;
 source=document.createElement('canvas');source.width=w;source.height=h;const c=source.getContext('2d',{willReadFrequently:true});if(!c)return false;
 const dw=image.naturalWidth*scale,dh=image.naturalHeight*scale;
 // Match the existing hero image's centred, bottom-aligned cover crop.
 c.filter='blur(2.5px)';
 c.drawImage(image,bounds.left-box.left+(bounds.width-dw)/2,bounds.bottom-box.top-dh,dw,dh);
 try{pixels=c.getImageData(0,0,w,h).data}catch{source=null;return false}return true;
}
function draw(r,now){
 const age=(now-r.born)/LIFE,fade=Math.pow(1-age,1.3),radius=84+age*12;
 const out=r.buffer,data=out.data,sw=source.width,sh=source.height,left=r.x-AREA/2,top=r.y-AREA/2,step=AREA/SIZE;
 for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++){
  const dx=x-SIZE/2,dy=y-SIZE/2,qx=dx+Math.sin(dy*.045+age*2)*9,qy=dy+Math.sin(dx*.04-age*2)*7,d=Math.hypot(qx,qy),i=(y*SIZE+x)*4;
  if(d>radius||d<.01){data[i+3]=0;continue}
  const edge=Math.min(1,(radius-d)/22),falloff=Math.pow(Math.max(0,1-d/radius),1.3),strength=falloff*fade;
  const driftX=(Math.sin(dy*.035+age*2.4)*16+r.vx*20-dx*.9)*strength;
  const driftY=(Math.cos(dx*.035-age*2)*12+r.vy*20-dy*.75)*strength;
  const sx=Math.max(0,Math.min(sw-2,left+x*step+driftX*step)),sy=Math.max(0,Math.min(sh-2,top+y*step+driftY*step));
  const ix=Math.floor(sx),iy=Math.floor(sy),fx=sx-ix,fy=sy-iy,a=(iy*sw+ix)*4,b=a+sw*4;
  for(let k=0;k<3;k++)data[i+k]=(pixels[a+k]*(1-fx)+pixels[a+4+k]*fx)*(1-fy)+(pixels[b+k]*(1-fx)+pixels[b+4+k]*fx)*fy;
  data[i+3]=Math.round(255*fade*edge*.88);
 }
 r.ctx.putImageData(out,0,0);
}
function tick(now){
 frame=0;if(!usable()){clear();return}
 if(now-lastFrame>=32){lastFrame=now;for(let i=ripples.length-1;i>=0;i--){const r=ripples[i];if(now-r.born>=LIFE){r.canvas.remove();ripples.splice(i,1)}else draw(r,now)}}
 if(ripples.length)frame=requestAnimationFrame(tick);
}
function move(e){
 if(!usable()||e.pointerType!=='mouse')return;if(!box||!source){if(!prepare())return}
 const x=e.clientX-box.left,y=e.clientY-box.top;if(x<0||y<0||x>box.width||y>box.height)return;
 const now=performance.now();if(lastPoint&&Math.hypot(x-lastPoint.x,y-lastPoint.y)<13)return;if(now-lastSpawn<INTERVAL)return;
 const vx=lastPoint?Math.max(-1,Math.min(1,(x-lastPoint.x)/35)):0,vy=lastPoint?Math.max(-1,Math.min(1,(y-lastPoint.y)/35)):0;
 lastSpawn=now;lastPoint={x,y};if(ripples.length===MAX){const oldest=ripples.shift();clearTimeout(oldest.timer);oldest.canvas.remove();}
 const canvas=document.createElement('canvas');canvas.width=canvas.height=SIZE;canvas.className='water-ripple';canvas.setAttribute('aria-hidden','true');canvas.style.transform='translate3d('+(x-AREA/2)+'px,'+(y-AREA/2)+'px,0)';const ctx=canvas.getContext('2d');if(!ctx)return;
 const r={canvas,ctx,x,y,vx,vy,born:now,buffer:ctx.createImageData(SIZE,SIZE)};r.timer=setTimeout(()=>{canvas.remove();const i=ripples.indexOf(r);if(i>=0)ripples.splice(i,1);if(!ripples.length){cancelAnimationFrame(frame);frame=0}},LIFE+100);ripples.push(r);scene.append(canvas);if(!frame)frame=requestAnimationFrame(tick);
}
function invalidate(){clear();source=pixels=box=null}
function configure(){enabled=allowed.matches&&!reduce.matches;invalidate();document.removeEventListener('pointermove',move);if(enabled)document.addEventListener('pointermove',move,{passive:true})}
allowed.addEventListener('change',configure);reduce.addEventListener('change',configure);addEventListener('resize',invalidate,{passive:true});addEventListener('scroll',invalidate,{passive:true});document.addEventListener('visibilitychange',clear);document.documentElement.addEventListener('pointerleave',clear);image.addEventListener('load',invalidate);scene.addEventListener('animationend',invalidate);configure();
})();
