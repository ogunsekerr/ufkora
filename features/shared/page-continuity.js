/* Optional cross-document pilot. Never intercept or defer navigation. */
(()=>{'use strict';
const root=document.documentElement,current=new URL(location.href);
const exact=(url,key,value)=>{const a=url.searchParams.getAll(key);return a.length===1&&a[0]===value};
const route=url=>url.origin===current.origin&&(url.pathname==='/oyun-atolyesi/bahce.html'?'garden':url.pathname==='/atolye.html'&&exact(url,'sinif','5')?'catalog':null);
const opted=url=>exact(url,'vt','clay');
const here=route(current);root.dataset.vtPilot='off';
if(!here||!opted(current))return;
const supported='CSSViewTransitionRule'in window&&'onpageswap'in window&&'onpagereveal'in window&&'navigation'in window&&CSS.supports('view-transition-name','ufkora-bahce-art');
if(!supported){root.dataset.vtPilot='unsupported';return;}
const quiet=matchMedia('(prefers-reduced-motion: reduce), (max-width: 1000px), (pointer: coarse)');
const optIn=document.createElement('style');optIn.dataset.vtOptin='';document.head.append(optIn);
let active=null;
function clearNames(){document.querySelectorAll('[data-vt-part]').forEach(n=>{n.style.removeProperty('view-transition-name');n.removeAttribute('data-vt-part')})}
function configure(){const enabled=!quiet.matches;root.dataset.vtPilot=enabled?'armed':'quiet';optIn.textContent='@view-transition { navigation: '+(enabled?'auto':'none')+'; }';if(!enabled){active?.skipTransition();clearNames();}}
function pair(from,to){return from&&to&&opted(from)&&opted(to)&&((route(from)==='catalog'&&route(to)==='garden')||(route(from)==='garden'&&route(to)==='catalog'));}
function endpoints(){return here==='garden'?[document.querySelector('#cover .entry-scene img'),document.getElementById('entry-title')]:[document.querySelector('#catalog [data-preview-id="bahce-mimari"] .activity-visual img'),document.querySelector('#catalog [data-preview-id="bahce-mimari"] .activity-body :is(h2,h3)')];}
function apply(event,activation){
 const vt=event.viewTransition;if(!vt)return;
 clearNames();let from,to;
 try{from=activation?.from?.url?new URL(activation.from.url):null;to=activation?.entry?.url?new URL(activation.entry.url):null;}catch{}
 const nodes=endpoints();
 // Missing/unpainted/hidden endpoints use ordinary navigation, never wait for assets.
 if(quiet.matches||!pair(from,to)||nodes.some(n=>!n||!n.getClientRects().length)||!nodes[0].complete||!nodes[0].naturalWidth||(here==='garden'&&document.getElementById('cover').classList.contains('hide'))){root.dataset.vtLast='skipped';vt.skipTransition();return;}
 nodes.forEach((n,i)=>{n.dataset.vtPart=i?'title':'art';n.style.setProperty('view-transition-name',i?'ufkora-bahce-title':'ufkora-bahce-art')});
 root.dataset.vtLast='matched';active=vt;
 const cleanup=()=>{if(active===vt){clearNames();active=null}};
 vt.finished.then(cleanup,cleanup);
}
addEventListener('pageswap',event=>apply(event,event.activation));
addEventListener('pagereveal',event=>apply(event,window.navigation.activation));
addEventListener('pageshow',()=>{if(!active)clearNames()});quiet.addEventListener('change',configure);configure();
// Carry the explicit QA opt-in only on this pilot's existing real anchors.
function decorate(){if(here!=='catalog')return;document.querySelectorAll('#catalog a[href]').forEach(a=>{const url=new URL(a.href,current);if(route(url)==='garden'&&!url.searchParams.has('vt')){url.searchParams.set('vt','clay');a.href=url.pathname+url.search+url.hash;}})}
addEventListener('DOMContentLoaded',()=>{decorate();const catalog=document.getElementById('catalog');if(catalog)new MutationObserver(decorate).observe(catalog,{childList:true})},{once:true});
})();
