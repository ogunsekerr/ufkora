const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(require('path').resolve(__dirname,'../../../features/entrance/transition.js'),'utf8');
function scenario(width,coarse,reduced){
 const frames=[],events={},styles={},classes=new Set(),body=new Set();
 const classList=s=>({toggle:(k,v)=>v?s.add(k):s.delete(k)});
 const sequence={classList:classList(classes),offsetHeight:2400,getBoundingClientRect:()=>({top:-ctx.scrollY}),style:{setProperty:(k,v)=>styles[k]=v}};
 const preview={inert:false},shape={setAttribute(){}},svg={setAttribute(){},querySelector:()=>shape},link={addEventListener:(k,f)=>events.click=f};
 const motion={matches:reduced,addEventListener:(k,f)=>events.motion=f};const light={matches:width<=700||coarse,addEventListener:(k,f)=>events.light=f};
 const ctx={innerWidth:width,innerHeight:800,scrollY:0,Math,Array,matchMedia:q=>q.includes('reduced')?motion:light,requestAnimationFrame:f=>frames.push(f),addEventListener:(k,f)=>events[k]=f,document:{body:{classList:classList(body)},getElementById:id=>id==='workshop-preview'?preview:sequence,querySelector:()=>svg,querySelectorAll:()=>[link]},window:{scrollTo:o=>ctx.target=o}};
 vm.runInNewContext(src,ctx);const flush=()=>{while(frames.length)frames.shift()()};flush();
 function progress(p){ctx.scrollY=p*1600;events.scroll();flush()}
 return {ctx,styles,classes,body,preview,motion,events,flush,progress};
}
const checks=[];function check(name,f){f();checks.push({name,pass:true})}
for(const [name,width,coarse] of [['phone',390,true],['tablet-touch',1024,true],['narrow-fine',700,false]]){
 const s=scenario(width,coarse,false);
 check(name+': lightweight class',()=>assert(s.body.has('entrance-lite')));
 s.progress(.62);check(name+': hidden through door travel',()=>assert.equal(s.styles['--panel-opacity'],'0.000'));
 s.progress(.75);check(name+': gradual arrival without rotation',()=>{assert.equal(s.styles['--panel-opacity'],'0.178');assert.equal(s.styles['--panel-angle'],'0.00deg');assert(s.preview.inert)});
 s.progress(.94);check(name+': panel ready and interactive',()=>{assert(s.classes.has('panel-ready'));assert(!s.preview.inert)});
 s.progress(.25);check(name+': reverse restores hidden state',()=>{assert.equal(s.styles['--panel-opacity'],'0.000');assert(s.preview.inert)});
 s.motion.matches=true;s.events.motion();s.flush();check(name+': changing to reduced restores access',()=>{assert(!s.preview.inert);assert(!s.body.has('entrance-motion'));assert(!s.body.has('entrance-lite'))});
}
const r=scenario(390,true,true);check('initial reduced motion permits normal link fallback',()=>{let prevented=false;r.events.click({preventDefault(){prevented=true}});assert(!prevented);assert(!r.preview.inert);assert(!r.body.has('entrance-motion'))});
fs.writeFileSync(require('path').resolve(process.cwd(),'T04-logic-checks.json'),JSON.stringify({type:'Node VM with DOM stubs; NOT browser rendering or device performance',checks},null,2));console.log(checks.length+' logic assertions passed');
