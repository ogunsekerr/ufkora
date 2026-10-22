(()=>{'use strict';
const colors={4:'coral',5:'yellow',6:'green',7:'blue',8:'purple'},grade=Number(new URLSearchParams(location.search).get('sinif')),catalog=document.getElementById('catalog'),status=document.getElementById('catalog-status'),search=document.getElementById('search'),topic=document.getElementById('topic'),type=document.getElementById('type');
if(!Object.hasOwn(colors,grade)){document.body.classList.add('invalid-grade');status.textContent='Yukarıdan bir sınıf seçerek etkinliklerini açabilirsin.';return}
document.body.classList.add(colors[grade]);document.title=grade+'. Sınıf Atölyesi — Ufkora';document.getElementById('grade-title').textContent=grade+'. sınıf atölyesi';document.getElementById('grade-badge').textContent=grade;document.querySelector('[data-grade="'+grade+'"]').setAttribute('aria-current','page');
if(grade===8)document.getElementById('grade-description').textContent='Şu an ortak uzamsal düşünme etkinliğini keşfedebilirsin. Sınıfa özel içerikler eklendikçe burada görünecek.';
const themes={4:['#e59880','#f3ded0','abacus','Sayılarla yeni yollar bul.'],5:['#edca69','#eee7c8','angle','Açıları ve şekilleri keşfet.'],6:['#9dbb87','#dce8d5','balance','İlişkileri dengeye getir.'],7:['#87b9d1','#d9e8eb','geometry','Matematiğe farklı açılardan bak.'],8:['#baa0d0','#e5dcef','cubes','Parçaları birleştir, bütünü gör.']},theme=themes[grade];
document.body.style.setProperty('--world-bg',theme[1]);document.body.style.setProperty('--world-color',theme[0]);
document.getElementById('class-world-caption').textContent=theme[3];document.getElementById('class-world-object').append(window.UfkoraClay.make(theme[2]));
const motifObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('motif-seen');motifObserver.unobserve(e.target)}}),{threshold:.5});
const items=window.UFKORA_CATALOG.filter(x=>x.grade===grade);
[...new Set(items.map(x=>x.topic))].forEach(t=>{const o=document.createElement('option');o.value=t;o.textContent=t;topic.append(o)});
const normalize=s=>s.toLocaleLowerCase('tr-TR');
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
function render(){
const q=normalize(search.value.trim()),filtered=items.filter(x=>(!q||normalize([x.title,x.desc,x.topic,...x.codes].join(' ')).includes(q))&&(!topic.value||x.topic===topic.value)&&(!type.value||x.type===type.value));
motifObserver.disconnect();catalog.replaceChildren();
filtered.forEach(x=>{
const card=el('article','activity-card'),a=el('a','activity-launch');a.href=x.url;
const visual=el('div','activity-visual'),img=el('img');img.src=x.image;img.alt='';img.loading='lazy';img.width=768;img.height=512;visual.append(img,window.UfkoraClay.make(window.UfkoraClay.kind(x.title)));
const body=el('div','activity-body'),top=el('div','activity-top');top.append(el('span','activity-type',x.type),el('span','',x.topic));body.append(top,el('h2','',x.title),el('p','',x.desc));
if(x.common)body.append(el('span','common-note','4–8. sınıflar için ortak keşif'));
body.append(el('span','activity-go','Keşfetmeye başla ↗'));a.append(visual,body);card.append(a);
const curriculum=el('div','activity-curriculum');
if(x.codes.length){
curriculum.append(el('span','curriculum-label','Desteklediği kazanımlar'));
const chips=el('div','outcome-chips');x.codes.slice(0,3).forEach(code=>chips.append(el('span','outcome-code',code)));if(x.codes.length>3)chips.append(el('span','outcome-more','+'+(x.codes.length-3)));curriculum.append(chips);
const details=el('details','outcome-details');details.append(el('summary','',x.codes.length>3?'Tüm kazanımlar ve açıklamaları ('+x.codes.length+')':'Kazanım açıklamalarını gör'));
const list=el('ul');x.outcomes.forEach(outcome=>{const li=el('li');li.append(el('strong','outcome-code',outcome.code),el('p','',outcome.text.replace(new RegExp('^'+outcome.code.replaceAll('.','\\.')+'[.\\s]*'),'')));list.append(li)});details.append(list,el('p','curriculum-source','Kaynak: '+x.curriculumSource));curriculum.append(details);
}
if(x.curriculumNote)curriculum.append(el('p','curriculum-note',x.curriculumNote));
card.append(curriculum);catalog.append(card);motifObserver.observe(card);
});
status.textContent=filtered.length+' içerik gösteriliyor'+(grade===5?' · Çalışma bankasında ayrıca 26 kısa etkinlik var.':'.');document.getElementById('empty').hidden=filtered.length!==0;
}
document.getElementById('reset-filters').addEventListener('click',()=>{search.value='';topic.value='';type.value='';render()});
search.addEventListener('input',render);topic.addEventListener('change',render);type.addEventListener('change',render);render();
})();