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
 const light=lightweight.matches,travel=clamp((p-.08)/.54),ease=travel*travel*(3-2*travel),fade=clamp((p-.03)/.2);
 // Finish passing through the door before revealing any workshop content.
 const cover=Math.max(innerWidth*.5,(innerWidth*.25+innerHeight*.55*Math.sqrt(3)/2))/(Math.sqrt(3)/2)+24;
 const radius=60+(cover-60)*ease;
 const reveal=clamp((p-.68)/.26),arrival=reveal*reveal*(3-2*reveal);
 drawDoor(radius);
 sequence.classList.toggle('entrance-travelling',p>.04);
 sequence.classList.toggle('door-passed',p>=.66);
 // The clipped background must not paint a solid hexagon over the resting hero.
 sequence.style.setProperty('--aperture-opacity',clamp((p-.04)/.1).toFixed(3));
 sequence.style.setProperty('--copy-opacity',(1-fade).toFixed(3));
 sequence.style.setProperty('--copy-y',(-(light?40:100)*fade).toFixed(1)+'px');
 sequence.style.setProperty('--copy-scale',(1+.12*fade).toFixed(3));
 sequence.style.setProperty('--scene-scale',(1.02+.1*ease).toFixed(3));
 sequence.style.setProperty('--scene-blur','0px');
 sequence.style.setProperty('--panel-opacity',arrival.toFixed(3));
 sequence.style.setProperty('--panel-y',((1-arrival)*(light?64:130)).toFixed(1)+'px');
 sequence.style.setProperty('--panel-angle',((1-arrival)*(light?0:6)).toFixed(2)+'deg');
 sequence.style.setProperty('--lite-reveal',clamp((p-.48)/.14).toFixed(3));
 sequence.style.setProperty('--gateway-opacity',(clamp((p-.04)/.1)*(1-clamp((p-.62)/.04))).toFixed(3));
 const cx=innerWidth*.5,cy=innerHeight*.55;
 const points=Array.from({length:6},(_,i)=>{const a=(-90+i*60)*Math.PI/180;return (cx+Math.cos(a)*radius).toFixed(1)+'px '+(cy+Math.sin(a)*radius).toFixed(1)+'px'});
 sequence.style.setProperty('--gateway-aperture','polygon('+points.join(',')+')');
 sequence.style.setProperty('--ornament-spread',(ease*170).toFixed(2)+'px');
 sequence.classList.toggle('panel-ready',p>=.94);
 preview.inert=p<.94;

}
function queue(){if(!queued){queued=true;requestAnimationFrame(update)}}
document.querySelectorAll('a[href="#atolye-onizleme"]').forEach(a=>a.addEventListener('click',e=>{if(motion.matches)return;e.preventDefault();const top=scrollY+sequence.getBoundingClientRect().top+(sequence.offsetHeight-innerHeight)*.98;window.scrollTo({top,behavior:'smooth'})}));
addEventListener('scroll',queue,{passive:true});addEventListener('resize',measure,{passive:true});motion.addEventListener('change',measure);lightweight.addEventListener('change',measure);measure();
})();
