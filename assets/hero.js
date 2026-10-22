(()=>{'use strict';
const preview=document.getElementById('workshop-preview');if(!preview)return;
const colors={4:'coral',5:'yellow',6:'green',7:'blue',8:'purple'};
const grades=[...preview.querySelectorAll('[data-preview-grade]')],tabs=[...preview.querySelectorAll('[data-preview-type]')],cards=document.getElementById('preview-cards'),status=document.getElementById('preview-status'),all=document.getElementById('preview-all');
let grade=5,type='activities';
const node=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n};
function render(){
 preview.classList.remove(...Object.values(colors));preview.classList.add(colors[grade]);
 document.getElementById('preview-title').textContent=grade+'. sınıf atölyesi';document.getElementById('preview-number').textContent=grade;
 grades.forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.previewGrade)===grade)));
 tabs.forEach(b=>{const active=b.dataset.previewType===type;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1});
 cards.setAttribute('aria-labelledby',type==='games'?'preview-games-tab':'preview-activities-tab');
 const items=(window.UFKORA_CATALOG||[]).filter(x=>x.grade===grade&&(type==='games'?x.type==='Oyun':x.type!=='Oyun'));
 status.textContent=items.length?grade+'. sınıf · '+(type==='games'?'Oyunlar':'Etkinlikler')+' · '+Math.min(3,items.length)+' içerik gösteriliyor':'Bu sınıfta henüz oyun bulunmuyor.';
 cards.replaceChildren();
 items.slice(0,3).forEach(x=>{
  const a=node('a','preview-card');a.href=x.url;
  const img=node('img');img.src=x.image;img.alt='';img.loading='lazy';img.width=768;img.height=512;
  const body=node('div','preview-card-body');body.append(node('span','',x.type.toLocaleUpperCase('tr-TR')+' · '+x.topic.toLocaleUpperCase('tr-TR')),node('h4','',x.title));
  const codes=(x.codes||[]).slice(0,2);body.append(node('span','preview-code',codes.length?codes.join(' · ')+(x.common?' · Ortak keşif':''):'Konu: '+x.topic));
  const go=node('span','preview-card-go',type==='games'?'Oyuna git':'Keşfe başla');go.append(node('span','','↗'));body.append(go);a.append(img,body);cards.append(a);
 });
 if(!items.length){const empty=node('div','preview-empty');empty.append(node('h4','','Yeni oyunlara yer açıyoruz.'),node('p','','Bu sınıfın mevcut keşiflerini Etkinlikler sekmesinde bulabilirsin.'));const b=node('button','','Etkinlikleri göster');b.type='button';b.addEventListener('click',()=>{type='activities';render();tabs[0].focus()});empty.append(b);cards.append(empty)}
 all.href='atolye.html?sinif='+grade;all.replaceChildren(document.createTextNode(grade+'. sınıf atölyesini aç '),node('span','','↗'));
}
grades.forEach(b=>b.addEventListener('click',()=>{grade=Number(b.dataset.previewGrade);render();if(!matchMedia('(prefers-reduced-motion: reduce)').matches){preview.animate([{clipPath:'circle(16% at '+(10+(grade-4)*20)+'% 30%)',opacity:.6},{clipPath:'circle(150% at 50% 50%)',opacity:1}],{duration:500,easing:'cubic-bezier(.22,1,.36,1)'});}}));
tabs.forEach((b,i)=>{b.addEventListener('click',()=>{type=b.dataset.previewType;render()});b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowLeft')next=1-i;else if(e.key==='Home')next=0;else if(e.key==='End')next=1;else return;e.preventDefault();type=tabs[next].dataset.previewType;render();tabs[next].focus()})});
render();
const gateway=document.querySelector('.clay-gateway');
const motion=matchMedia('(prefers-reduced-motion: reduce)'),sequence=document.getElementById('entrance-sequence');let queued=false;
const clamp=n=>Math.max(0,Math.min(1,n));
function update(){
 queued=false;const enabled=!motion.matches;document.body.classList.toggle('entrance-motion',enabled);
 if(!enabled){preview.removeAttribute('style');preview.inert=false;return}
 const rect=sequence.getBoundingClientRect(),range=sequence.offsetHeight-innerHeight,p=clamp(-rect.top/Math.max(1,range)),travel=clamp((p-.1)/.65),ease=travel*travel*(3-2*travel),fade=clamp((p-.03)/.25);
 const radius=18+Math.hypot(innerWidth,innerHeight)*.7*Math.pow(ease,1.65);
 sequence.style.setProperty('--entrance-progress',p.toFixed(4));
 sequence.style.setProperty('--copy-opacity',(1-fade).toFixed(3));
 sequence.style.setProperty('--copy-y',(-100*fade).toFixed(1)+'px');
 sequence.style.setProperty('--copy-scale',(1+.12*fade).toFixed(3));
 sequence.style.setProperty('--scene-scale',(1.02+.65*ease).toFixed(3));
 sequence.style.setProperty('--scene-blur',(2*ease).toFixed(2)+'px');
 sequence.style.setProperty('--gateway-radius',radius.toFixed(2)+'px');
 sequence.style.setProperty('--gateway-scale',(radius/176).toFixed(4));
 sequence.style.setProperty('--gateway-opacity',clamp((p-.07)/.08).toFixed(3));
 sequence.style.setProperty('--panel-scale',(.82+.18*ease).toFixed(3));
 sequence.style.setProperty('--ornament-spread',(ease*170).toFixed(2)+'px');
 sequence.classList.toggle('panel-ready',p>=.74);
 preview.inert=p<.74;

}
function queue(){if(!queued){queued=true;requestAnimationFrame(update)}}
document.querySelectorAll('a[href="#atolye-onizleme"]').forEach(a=>a.addEventListener('click',e=>{if(motion.matches)return;e.preventDefault();const top=scrollY+sequence.getBoundingClientRect().top+(sequence.offsetHeight-innerHeight)*.98;window.scrollTo({top,behavior:'smooth'})}));
addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue,{passive:true});motion.addEventListener('change',queue);update();
})();
