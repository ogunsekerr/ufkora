(()=>{'use strict';
const preview=document.getElementById('workshop-preview'),sequenceElement=document.getElementById('entrance-sequence');if(!preview||!sequenceElement)return;
const motion=matchMedia('(prefers-reduced-motion: reduce)'),sequence=document.getElementById('entrance-sequence');let queued=false,lastProgress=-1,metrics;
const lightweight=matchMedia('(max-width: 700px), (pointer: coarse)');
function measure(){document.body.classList.toggle('entrance-motion',!motion.matches);document.body.classList.toggle('entrance-lite',!motion.matches&&lightweight.matches);metrics={top:scrollY+sequence.getBoundingClientRect().top,range:Math.max(1,sequence.offsetHeight-innerHeight),diagonal:Math.hypot(innerWidth,innerHeight)};lastProgress=-1;queue()}
const gateway=document.querySelector('.clay-gateway svg'),outline=gateway.querySelector('.gateway-outline'),highlight=gateway.querySelector('.gateway-highlight');
function drawDoor(radius){const w=innerWidth,h=innerHeight,cx=w*.5,cy=h*.55,stroke=Math.max(10,Math.min(22,radius*.035)),r=radius+stroke*.577;gateway.setAttribute('viewBox','0 0 '+w+' '+h);const points=Array.from({length:6},(_,i)=>{const a=(-90+i*60)*Math.PI/180;return [(cx+Math.cos(a)*r).toFixed(2),(cy+Math.sin(a)*r).toFixed(2)]});const path='M'+points.map(p=>p.join(' ')).join('L')+'Z';outline.setAttribute('d',path);outline.setAttribute('stroke-width',stroke.toFixed(2));highlight.setAttribute('d',path);highlight.setAttribute('transform','translate(-1 -1)');}
const clamp=n=>Math.max(0,Math.min(1,n));
function update(){
 queued=false;const enabled=!motion.matches;document.body.classList.toggle('entrance-motion',enabled);document.body.classList.toggle('entrance-lite',enabled&&lightweight.matches);
 if(!enabled){preview.inert=false;return}
 if(!metrics)metrics={top:scrollY+sequence.getBoundingClientRect().top,range:Math.max(1,sequence.offsetHeight-innerHeight),diagonal:Math.hypot(innerWidth,innerHeight)};
 const p=clamp((scrollY-metrics.top)/metrics.range);if(Math.abs(p-lastProgress)<.0008)return;lastProgress=p;
 const light=lightweight.matches,travel=clamp((p-.1)/.65),ease=travel*travel*(3-2*travel),fade=clamp((p-.03)/.25);
 const radius=60+metrics.diagonal*.8*Math.pow(ease,1.65);
 drawDoor(light?45+metrics.diagonal*.85*ease:radius);
 sequence.classList.toggle('entrance-travelling',p>.04);
 if(light){
  sequence.style.setProperty('--copy-opacity',(1-fade).toFixed(3));
  sequence.style.setProperty('--copy-y',(-40*fade).toFixed(1)+'px');
  sequence.style.setProperty('--lite-reveal',clamp((p-.2)/.45).toFixed(3));
  sequence.style.setProperty('--lite-y',((1-ease)*28).toFixed(1)+'px');
  sequence.style.setProperty('--lite-ring-scale',(.5+ease*7).toFixed(3));
  sequence.style.setProperty('--lite-ring-opacity',(clamp((p-.06)/.12)*(1-clamp((p-.5)/.18))).toFixed(3));
  sequence.classList.toggle('panel-ready',p>=.68);preview.inert=p<.68;return;
 }
 sequence.style.setProperty('--entrance-progress',p.toFixed(4));
 sequence.style.setProperty('--copy-opacity',(1-fade).toFixed(3));
 sequence.style.setProperty('--copy-y',(-100*fade).toFixed(1)+'px');
 sequence.style.setProperty('--copy-scale',(1+.12*fade).toFixed(3));
 sequence.style.setProperty('--scene-scale',(1.02+.1*ease).toFixed(3));
 sequence.style.setProperty('--scene-blur',(0).toFixed(2)+'px');
 const cx=innerWidth*.5,cy=innerHeight*.55;const points=Array.from({length:6},(_,i)=>{const a=(-90+i*60)*Math.PI/180;return (cx+Math.cos(a)*radius).toFixed(1)+'px '+(cy+Math.sin(a)*radius).toFixed(1)+'px'});
 sequence.style.setProperty('--gateway-aperture','polygon('+points.join(',')+')');
 sequence.style.setProperty('--gateway-scale',(radius/181).toFixed(4));
 sequence.style.setProperty('--gateway-opacity',clamp((p-.07)/.08).toFixed(3));
 sequence.style.setProperty('--panel-scale',(.82+.18*ease).toFixed(3));
 sequence.style.setProperty('--ornament-spread',(ease*170).toFixed(2)+'px');
 sequence.classList.toggle('panel-ready',p>=.74);
 preview.inert=p<.74;

}
function queue(){if(!queued){queued=true;requestAnimationFrame(update)}}
document.querySelectorAll('a[href="#atolye-onizleme"]').forEach(a=>a.addEventListener('click',e=>{if(motion.matches)return;e.preventDefault();const top=scrollY+sequence.getBoundingClientRect().top+(sequence.offsetHeight-innerHeight)*.98;window.scrollTo({top,behavior:'smooth'})}));
addEventListener('scroll',queue,{passive:true});addEventListener('resize',measure,{passive:true});motion.addEventListener('change',measure);lightweight.addEventListener('change',measure);measure();
})();
