const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
const source=fs.readFileSync('features/shared/page-continuity.js','utf8');
function setup({query='?sinif=5&vt=clay',quiet=false,supported=true,loaded=true}={}){
 const listeners={},names=new Map(),root={dataset:{}},art={complete:loaded,naturalWidth:loaded?100:0},title={};
 for(const n of [art,title])Object.assign(n,{dataset:{},getClientRects:()=>[{}],style:{setProperty:(k,v)=>names.set(n,v),removeProperty:()=>names.delete(n)},removeAttribute:()=>{delete n.dataset.vtPart}});
 const doc={documentElement:root,head:{append(){}},createElement:()=>({dataset:{}}),querySelector:s=>s.includes('img')?art:title,getElementById:()=>null,querySelectorAll:()=>[art,title].filter(n=>n.dataset.vtPart)};
 const window={navigation:{}};if(supported)Object.assign(window,{CSSViewTransitionRule:{},onpageswap:null,onpagereveal:null});
 const media={matches:quiet,addEventListener(){}};
 vm.runInNewContext(source,{document:doc,location:{href:'https://example.test/atolye.html'+query},URL,window,CSS:{supports:()=>true},matchMedia:()=>media,addEventListener:(k,f)=>listeners[k]=f,MutationObserver:class{observe(){}}});
 return {listeners,names,root,art};
}
const activation={from:{url:'https://example.test/atolye.html?sinif=5&vt=clay'},entry:{url:'https://example.test/oyun-atolyesi/bahce.html?difficulty=hard&vt=clay'}};
function transition(){let done;return {finished:new Promise(r=>done=r),finish:()=>done(),skipTransition(){this.skipped=true}}}
(async()=>{
 for(const query of ['?sinif=5','?sinif=4&vt=clay','?sinif=5&vt=clay&vt=clay'])assert.equal(setup({query}).root.dataset.vtPilot,'off');
 assert.equal(setup({supported:false}).root.dataset.vtPilot,'unsupported');assert.equal(setup({quiet:true}).root.dataset.vtPilot,'quiet');
 const s=setup(),a=transition(),b=transition();
 s.listeners.pageswap({viewTransition:a,activation});assert.equal(s.names.size,2);
 s.listeners.pageshow();assert.equal(s.names.size,2,'pageshow preserves active names');
 s.listeners.pageswap({viewTransition:b,activation});a.finish();await Promise.resolve();assert.equal(s.names.size,2,'old finish preserves new names');
 b.finish();await Promise.resolve();assert.equal(s.names.size,0);
 for(const altered of [{...activation,entry:{url:'https://other.test/oyun-atolyesi/bahce.html?vt=clay'}},{...activation,entry:{url:'https://example.test/oyun-atolyesi/bahce.html'}}]){const t=transition();s.listeners.pageswap({viewTransition:t,activation:altered});assert.equal(t.skipped,true)}
 const unloaded=setup({loaded:false}),t=transition();unloaded.listeners.pageswap({viewTransition:t,activation});assert.equal(t.skipped,true);
 assert.equal(s.listeners.click,undefined,'navigation is never intercepted');
 console.log('PASS page continuity lifecycle, opt-in, origin, fallback and unloaded art contracts');
})();
