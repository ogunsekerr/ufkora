// T62 source/runtime contract in a minimal DOM, not browser/scroll rendering evidence.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
function boot({reduced=false,lite=false}={}){
 const handlers={},frames=[],properties={},classes=new Set(),bodyClasses=new Set();let reads=0;
 const preview={inert:false},outline={attrs:{},setAttribute(k,v){this.attrs[k]=v}},highlight={attrs:{},setAttribute(k,v){this.attrs[k]=v}};
 const gateway={setAttribute(){},querySelector:s=>s==='.gateway-outline'?outline:highlight};
 const sequence={offsetHeight:3000,getBoundingClientRect(){reads++;return {top:1000-context.scrollY}},style:{setProperty(k,v){properties[k]=v}},classList:{toggle(k,v){if(v)classes.add(k);else classes.delete(k)}}};
 const link={addEventListener(k,f){handlers['link-'+k]=f}};
 const motion={matches:reduced,addEventListener(k,f){handlers.motion=f}},light={matches:lite,addEventListener(k,f){handlers.light=f}};
 const context={scrollY:1000,innerWidth:1440,innerHeight:1000,Math,requestAnimationFrame:f=>frames.push(f),matchMedia:s=>s.includes('prefers')?motion:light,addEventListener:(k,f)=>handlers[k]=f,window:{scrollTo:options=>context.scrollTarget=options},document:{getElementById:id=>id==='workshop-preview'?preview:sequence,body:{classList:{toggle(k,v){if(v)bodyClasses.add(k);else bodyClasses.delete(k)}}},querySelector:()=>gateway,querySelectorAll:()=>[link]}};
 vm.runInNewContext(fs.readFileSync('features/entrance/transition.js','utf8'),context);
 const flush=()=>{while(frames.length)frames.shift()()};flush();
 return {preview,sequence,properties,classes,bodyClasses,handlers,motion,light,outline,context,flush,reads:()=>reads,scroll(p){context.scrollY=1000+p*2000;handlers.scroll();flush()}};
}
let t=boot();assert.equal(t.properties['--aperture-opacity'],'0.000','resting hero must not contain a filled aperture');assert(t.preview.inert);assert.equal(t.properties['--panel-opacity'],'0.000');const reads=t.reads();
for(const p of [.08,.4,.62,.66,.67,.68]){t.scroll(p);assert.equal(t.properties['--panel-opacity'],'0.000');assert(t.preview.inert)}
assert.equal(t.properties['--aperture-opacity'],'1.000','background remains visible after passing the door');assert(t.classes.has('door-passed'));t.scroll(.81);assert(+t.properties['--panel-opacity']>0&&+t.properties['--panel-opacity']<1);assert(t.preview.inert);
t.scroll(.94);assert.equal(t.preview.inert,false);assert(t.classes.has('panel-ready'));assert.equal(t.reads(),reads,'scroll frames must use cached geometry');
assert.equal((t.outline.attrs.d.match(/L/g)||[]).length,5,'door retains six vertices');
t.scroll(.1);assert.equal(t.preview.inert,true);assert.equal(t.properties['--panel-opacity'],'0.000');
t.context.scrollY=2800;t.handlers.scroll();t.context.scrollY=1200;t.handlers.scroll();t.flush();assert.equal(t.properties['--panel-opacity'],'0.000','fast reverse uses latest scroll');
let prevented=false;t.handlers['link-click']({preventDefault(){prevented=true}});assert(prevented);assert.equal(t.context.scrollTarget.top,2960);assert.equal(t.context.scrollTarget.behavior,'smooth');
t.motion.matches=true;t.handlers.motion();t.flush();assert.equal(t.preview.inert,false);assert.equal(t.bodyClasses.has('entrance-motion'),false);prevented=false;t.handlers['link-click']({preventDefault(){prevented=true}});assert.equal(prevented,false,'reduced motion keeps native anchor navigation');
t=boot({lite:true});assert(t.bodyClasses.has('entrance-lite'));t.scroll(.67);assert.equal(t.properties['--panel-opacity'],'0.000');assert(t.preview.inert);t.scroll(.94);assert.equal(t.preview.inert,false);
const css=fs.readFileSync('features/entrance/transition.css','utf8');assert.match(css,/\.entrance-lite \.portal-section\{clip-path:none!important/);assert.match(css,/prefers-reduced-motion:reduce/);assert.match(css,/opacity:var\(--aperture-opacity,0\)/,'background defaults hidden before first frame');
console.log('PASS T62 six-vertex door, no panel before crossing, .94 focus gate, reverse/fast scroll, cached geometry, native reduced anchor and lite contract. DOM simulation only.');
