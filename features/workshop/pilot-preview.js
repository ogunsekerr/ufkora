/* Native inline disclosure: each card owns its state, keyboard behavior and route. */
(()=>{'use strict';
 const node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e};
 function model(id){
  const scene=node('div','pilot-model pilot-model--'+id);scene.setAttribute('aria-hidden','true');
  if(id==='bahce-mimari'){
   const patch=node('div','pilot-garden');for(let i=0;i<12;i++)patch.append(node('span',i===11?'pilot-tile pilot-moving':'pilot-tile'));
   scene.append(patch,node('span','pilot-math','4 × 3 = 12 m²'));
  }else if(id==='sayi-kargo'){
   const slots=node('div','pilot-slots');['Milyonlar','Binler','Birler'].forEach((label,i)=>{const slot=node('div','pilot-slot');slot.append(node('span','',label),node('strong','pilot-crate'+(i===1?' pilot-moving':''),['24','006','305'][i]));slots.append(slot)});scene.append(slots);
  }else if(id==='isik-rotasi'){
   const dial=node('div','pilot-dial');dial.append(node('span','pilot-baseline'),node('span','pilot-ray pilot-moving'),node('strong','pilot-angle','40°'));scene.append(dial,node('span','pilot-math','Vericinin yönünü ayarla.'));
  }
  return scene;
 }
 function create(item){
  const data=item.preview,wrap=node('div','pilot-preview'),details=node('details','pilot-help'),summary=node('summary','','Nasıl oynanır?');
  summary.setAttribute('aria-label',item.title+': Nasıl oynanır?');details.append(summary);
  const content=node('div','pilot-help-body');content.append(node('h3','','Amacın'),node('p','',data.goal),node('h3','','Nasıl?'),node('p','',data.howTo),node('h3','','Örnek hamle'),model(data.id),node('p','',data.example),node('p','pilot-duration',data.durationLabel));details.append(content);
  details.addEventListener('keydown',event=>{if(event.key==='Escape'&&!event.defaultPrevented&&details.open){event.preventDefault();details.open=false;summary.focus({preventScroll:true})}});
  const start=node('a','pilot-start','Başlat ↗');start.href=item.url;start.setAttribute('aria-label',item.title+' oyununu başlat');wrap.append(details,start);return wrap;
 }
 window.UfkoraPilotPreview={create};
})();
