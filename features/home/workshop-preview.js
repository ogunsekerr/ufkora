(()=>{'use strict';
const preview=document.getElementById('workshop-preview');if(!preview)return;
const colors={4:'coral',5:'yellow',6:'green',7:'blue',8:'purple'};
const grades=[...preview.querySelectorAll('[data-preview-grade]')],tabs=[...preview.querySelectorAll('[data-preview-type]')],cards=document.getElementById('preview-cards'),status=document.getElementById('preview-status'),all=document.getElementById('preview-all');
let grade=5,type='activities';
const tablist=preview.querySelector('[role="tablist"]'),tabMotion=matchMedia('(prefers-reduced-motion: reduce)');
function placeTabIndicator(animate=false){
 if(!tablist)return;
 const selected=tabs.find(b=>b.dataset.previewType===type);if(!selected||!selected.offsetWidth)return;
 // Layout coordinates stay correct while the entrance transforms its parent.
 tablist.style.setProperty('--tab-indicator-duration',animate&&!tabMotion.matches?'180ms':'0ms');
 tablist.style.setProperty('--tab-indicator-x',selected.offsetLeft+'px');
 tablist.style.setProperty('--tab-indicator-width',selected.offsetWidth+'px');
 tablist.classList.add('has-clay-indicator');
}
const worlds={4:{color:'#e59880',bg:'#f3ded0',kind:'abacus',caption:'Sayılarla yeni yollar bul.'},5:{color:'#edca69',bg:'#eee7c8',kind:'angle',caption:'Açıları ve şekilleri keşfet.'},6:{color:'#9dbb87',bg:'#dce8d5',kind:'balance',caption:'İlişkileri dengeye getir.'},7:{color:'#87b9d1',bg:'#d9e8eb',kind:'geometry',caption:'Matematiğe farklı açılardan bak.'},8:{color:'#baa0d0',bg:'#e5dcef',kind:'cubes',caption:'Parçaları birleştir, bütünü gör.'}};
const world=document.getElementById('class-world'),worldObject=document.getElementById('class-world-object');

const node=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n};
function render(animateTab=false){
 const theme=worlds[grade];
 preview.style.setProperty('--world-color',theme.color);preview.style.setProperty('--world-bg',theme.bg);
 document.getElementById('atolye-onizleme').style.setProperty('--world-bg',theme.bg);
 document.getElementById('class-world-caption').textContent=theme.caption;
 worldObject.replaceChildren(window.UfkoraClay.make(theme.kind));world.dataset.grade=grade;
 preview.classList.remove(...Object.values(colors));preview.classList.add(colors[grade]);
 document.getElementById('preview-title').textContent=grade+'. sınıf atölyesi';document.getElementById('preview-number').textContent=grade;
 grades.forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.previewGrade)===grade)));
 tabs.forEach(b=>{const active=b.dataset.previewType===type;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1});
 cards.setAttribute('aria-labelledby',type==='games'?'preview-games-tab':'preview-activities-tab');
 const items=(window.UFKORA_CATALOG||[]).filter(x=>x.grade===grade&&(type==='games'?x.type==='Oyun':x.type!=='Oyun'));
 status.textContent=items.length?grade+'. sınıf · '+(type==='games'?'Oyunlar':'Etkinlikler')+' · '+Math.min(3,items.length)+' içerik gösteriliyor':'Bu sınıfta henüz oyun bulunmuyor.';
 cards.replaceChildren();
 items.slice(0,3).forEach(x=>{
  const a=node('a','preview-card');a.href=x.url;if(x.preview)a.dataset.previewId=x.preview.id;
  const img=node('img');img.src=x.image;img.alt=x.preview?.imageAlt||'';img.loading='lazy';img.decoding='async';img.width=x.preview?.imageWidth||768;img.height=x.preview?.imageHeight||512;
  const body=node('div','preview-card-body');body.append(node('span','',x.type.toLocaleUpperCase('tr-TR')+' · '+x.topic.toLocaleUpperCase('tr-TR')),node('h4','',x.title));
  const codes=(x.codes||[]).slice(0,2);body.append(node('span','preview-code',codes.length?codes.join(' · ')+(x.common?' · Ortak keşif':''):'Konu: '+x.topic));
  const go=node('span','preview-card-go',type==='games'?'Oyuna git':'Keşfe başla');go.append(node('span','','↗'));body.append(go);const visual=node('div','preview-visual');visual.append(img,window.UfkoraClay.make(window.UfkoraClay.kind(x.title)));a.append(visual,body);cards.append(a);
 });
 if(!items.length){const empty=node('div','preview-empty');empty.append(node('h4','','Yeni oyunlara yer açıyoruz.'),node('p','','Bu sınıfın mevcut keşiflerini Etkinlikler sekmesinde bulabilirsin.'));const b=node('button','','Etkinlikleri göster');b.type='button';b.addEventListener('click',()=>{type='activities';render(true);tabs[0].focus({preventScroll:true})});empty.append(b);cards.append(empty)}
 all.href='atolye.html?sinif='+grade;all.replaceChildren(document.createTextNode(grade+'. sınıf atölyesini aç '),node('span','','↗'));
 placeTabIndicator(animateTab);
}
grades.forEach(b=>b.addEventListener('click',()=>{grade=Number(b.dataset.previewGrade);render();if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const light=matchMedia('(max-width: 700px), (pointer: coarse)').matches;preview.animate(light?[{opacity:.75,transform:'translateY(6px)'},{opacity:1,transform:'none'}]:[{clipPath:'circle(16% at '+(10+(grade-4)*20)+'% 30%)',opacity:.6},{clipPath:'circle(150% at 50% 50%)',opacity:1}],{duration:light?220:500,easing:'cubic-bezier(.22,1,.36,1)'});}}));
tabs.forEach((b,i)=>{b.addEventListener('click',()=>{type=b.dataset.previewType;render(true)});b.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowLeft')next=1-i;else if(e.key==='Home')next=0;else if(e.key==='End')next=1;else return;e.preventDefault();type=tabs[next].dataset.previewType;render(true);tabs[next].focus({preventScroll:true})})});
render();
// Resize and late font loading only snap the decorative marker; content never waits.
if(tablist&&typeof ResizeObserver!=='undefined'){
 const tabSize=new ResizeObserver(()=>placeTabIndicator());tabSize.observe(tablist);tabs.forEach(b=>tabSize.observe(b));
}else addEventListener('resize',()=>placeTabIndicator(),{passive:true});
if(document.fonts)document.fonts.ready.then(()=>placeTabIndicator());
tabMotion.addEventListener('change',()=>placeTabIndicator());
const demo=document.getElementById('fraction-demo');
const replay=()=>{demo.classList.remove('is-demonstrating');requestAnimationFrame(()=>requestAnimationFrame(()=>demo.classList.add('is-demonstrating')))};
document.getElementById('fraction-replay').addEventListener('click',replay);
const seen=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){if(e.target===demo)replay();else e.target.classList.add('motif-seen');seen.unobserve(e.target)}}),{threshold:.4});
seen.observe(demo);document.querySelectorAll('.feature').forEach(card=>{card.querySelector('.feature-visual').append(window.UfkoraClay.make(window.UfkoraClay.kind(card.querySelector('h3').textContent)));seen.observe(card)});
const cardObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('motif-seen');cardObserver.unobserve(e.target)}}),{threshold:.6});
new MutationObserver(()=>cards.querySelectorAll('.preview-card:not(.motif-seen)').forEach(c=>cardObserver.observe(c))).observe(cards,{childList:true});
cards.querySelectorAll('.preview-card').forEach(c=>cardObserver.observe(c));

})();
