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
grades.forEach(b=>b.addEventListener('click',()=>{grade=Number(b.dataset.previewGrade);render()}));
tabs.forEach((b,i)=>{b.addEventListener('click',()=>{type=b.dataset.previewType;render()});b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowLeft')next=1-i;else if(e.key==='Home')next=0;else if(e.key==='End')next=1;else return;e.preventDefault();type=tabs[next].dataset.previewType;render();tabs[next].focus()})});
render();
const motion=matchMedia('(prefers-reduced-motion: reduce)'),desktop=matchMedia('(min-width: 701px)'),section=document.getElementById('atolye-onizleme'),scene=document.querySelector('.hero-immersive .hero-scene');let queued=false;
function update(){queued=false;const enabled=!motion.matches&&desktop.matches;document.body.classList.toggle('hero-motion',enabled);if(!enabled){scene.style.removeProperty('--landscape-shift');return}const r=section.getBoundingClientRect(),progress=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight*.85)));preview.style.setProperty('--panel-y',(45*(1-progress)).toFixed(1)+'px');preview.style.setProperty('--panel-angle',(7*(1-progress)).toFixed(2)+'deg');preview.style.setProperty('--panel-scale',(.92+.08*progress).toFixed(3));scene.style.setProperty('--landscape-shift',Math.min(scrollY*.08,65).toFixed(1)+'px')}
function queue(){if(!queued){queued=true;requestAnimationFrame(update)}}
addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue,{passive:true});motion.addEventListener('change',queue);desktop.addEventListener('change',queue);update();
})();
