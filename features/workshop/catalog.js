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
// T38–T40 pilot: a reversible presentation of the existing grade-five data.
const viewLabel=el('label','catalog-view-label'),view=el('select');
if(grade===5){view.id='catalog-view';const caption=el('span','','Görünüm');viewLabel.append(caption,view);[['topics','Konu sıraları'],['cards','Kartlar']].forEach(([value,text])=>{const o=el('option','',text);o.value=value;view.append(o)});document.querySelector('.catalog-primary').append(viewLabel);view.addEventListener('change',render);}
const normalize=s=>s.toLocaleLowerCase('tr-TR');
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
function render(){
const q=normalize(search.value.trim()),filtered=items.filter(x=>(!q||normalize([x.title,x.desc,x.topic,...x.codes].join(' ')).includes(q))&&(!topic.value||x.topic===topic.value)&&(!type.value||x.type===type.value));
motifObserver.disconnect();catalog.replaceChildren();
const topicMode=grade===5&&view.value==='topics';
catalog.classList.toggle('catalog-topics',topicMode);
const rows=new Map();
// Only occupied rows are rendered, in the catalog's existing topic order.
const ordered=topicMode?[...filtered].sort((a,b)=>Number(b.title==='Bahçe Mimarı')-Number(a.title==='Bahçe Mimarı')):filtered;
ordered.forEach(x=>{
let destination=catalog;
if(topicMode){
 if(!rows.has(x.topic)){
 const section=el('section','topic-row'),heading=el('h2','topic-row-title',x.topic),list=el('ul','topic-list');
 heading.id='topic-row-'+rows.size;section.setAttribute('aria-labelledby',heading.id);section.append(heading,list);catalog.append(section);rows.set(x.topic,list);
 }
 const item=el('li','topic-item');rows.get(x.topic).append(item);destination=item;
}

const card=el('article','activity-card'),a=el(x.preview||topicMode?'div':'a','activity-launch');if(!x.preview&&!topicMode)a.href=x.url;if(x.preview)card.dataset.previewId=x.preview.id;
const visual=el('div','activity-visual'),img=el('img');img.src=x.image;img.alt=x.preview?.imageAlt||'';img.loading='lazy';img.decoding='async';img.width=x.preview?.imageWidth||768;img.height=x.preview?.imageHeight||512;visual.append(img,window.UfkoraClay.make(window.UfkoraClay.kind(x.title)));
const body=el('div','activity-body'),top=el('div','activity-top');top.append(el('span','activity-type',x.type),el('span','',x.topic));body.append(top,el(topicMode?'h3':'h2','',x.title));if(!topicMode)body.append(el('p','',x.desc));if(topicMode&&x.title==='Bahçe Mimarı'){card.classList.add('topic-featured');body.prepend(el('span','topic-featured-label','Öne çıkan oyun'));}
if(x.common)body.append(el('span','common-note','4–8. sınıflar için ortak keşif'));
if(!x.preview&&!topicMode)body.append(el('span','activity-go','Keşfetmeye başla ↗'));a.append(visual,body);card.append(a);
if(x.preview)card.append(window.UfkoraPilotPreview.create(x));
if(topicMode&&!x.preview){const launch=el('a','topic-start','Başlat ↗');launch.href=x.url;launch.setAttribute('aria-label',x.title+' · Başlat');card.append(launch);}
const curriculum=el('div','activity-curriculum');
if(topicMode)curriculum.append(el('p','topic-description',x.desc));
if(x.codes.length){
if(!topicMode)curriculum.append(el('span','curriculum-label','Desteklediği kazanımlar'));
const chips=el('div','outcome-chips');x.codes.slice(0,3).forEach(code=>chips.append(el('span','outcome-code',code)));if(x.codes.length>3)chips.append(el('span','outcome-more','+'+(x.codes.length-3)));if(!topicMode)curriculum.append(chips);
const details=el('details','outcome-details');details.append(el('summary','',x.codes.length>3?'Tüm kazanımlar ve açıklamaları ('+x.codes.length+')':'Kazanım açıklamalarını gör'));
const list=el('ul');x.outcomes.forEach(outcome=>{const li=el('li');li.append(el('strong','outcome-code',outcome.code),el('p','',outcome.text.replace(new RegExp('^'+outcome.code.replaceAll('.','\\.')+'[.\\s]*'),'')));list.append(li)});details.append(list,el('p','curriculum-source','Kaynak: '+x.curriculumSource));curriculum.append(details);
}
if(x.curriculumNote)curriculum.append(el('p','curriculum-note',x.curriculumNote));
if(topicMode){const detail=el('details','topic-content-details');detail.append(el('summary','','İçerik ve kazanımlar'));const nested=curriculum.querySelector('.outcome-details');if(nested){const summary=nested.querySelector('summary');summary.remove();nested.replaceWith(...nested.childNodes);}detail.append(curriculum);card.append(detail);}else card.append(curriculum);destination.append(card);motifObserver.observe(card);
});
status.textContent=filtered.length+' içerik gösteriliyor'+(grade===5?' · Çalışma bankasında ayrıca 26 kısa etkinlik var.':'.');document.getElementById('empty').hidden=filtered.length!==0;
}
document.getElementById('reset-filters').addEventListener('click',()=>{search.value='';topic.value='';type.value='';render()});
search.addEventListener('input',render);topic.addEventListener('change',render);type.addEventListener('change',render);render();
})();