// Production module with event/animation substitutes; browser rendering is checked separately.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
function boot({quiet=false,animate=true}={}){
 const events={},observers=[],animations=[];let mediaChange;
 function node(id){return {id,dataset:{state:'halves'},hidden:true,textContent:'',events:{},classList:{toggle(){}},addEventListener(k,f){this.events[k]=f},querySelectorAll(){return cuts},animate:animate?function(frames,options){const a={cancelled:false,frames,options,finished:new Promise(()=>{}),cancel(){this.cancelled=true}};animations.push(a);return a}:undefined};}
 const mini=node('hero-mini'),button=node('mini-try'),result=node('mini-result'),preview=node('workshop-preview'),world=node('class-world-object'),hero=node('hero'),cuts=[node('quarter'),node('three-quarter')];
 const nodes=new Map([mini,button,result,preview,world].map(n=>[n.id,n]));
 const doc={hidden:false,body:{classList:{toggle(){}}},getElementById:id=>nodes.get(id),querySelector:()=>hero,addEventListener(k,f){events[k]=f}};
 const media={matches:quiet,addEventListener(k,f){mediaChange=f}};
 vm.runInNewContext(fs.readFileSync('features/home/discovery-motion.js','utf8'),{document:doc,matchMedia:()=>media,IntersectionObserver:class{constructor(fn){this.fn=fn;observers.push(this)}observe(){}},addEventListener(k,f){events[k]=f}});
 const visibility=(n,isIntersecting)=>observers[0].fn([{target:n,isIntersecting}]);
 visibility(mini,true);visibility(world,true);
 return {mini,button,result,preview,world,animations,doc,events,visibility,reduce(){media.matches=true;mediaChange()}};
}
let t=boot();assert.equal(t.button.hidden,false);t.button.events.click({detail:1});assert.equal(t.mini.dataset.state,'quarters');assert.equal(t.result.textContent,'Dört eş parçanın ikisi renkli.');assert.equal(t.animations.length,2);assert(t.animations.every(a=>a.options.duration===180));t.button.events.click({detail:1});assert.equal(t.mini.dataset.state,'halves');assert(t.animations.slice(0,2).every(a=>a.cancelled));t.visibility(t.mini,false);assert(t.animations.every(a=>a.cancelled));const count=t.animations.length;t.button.events.click({detail:1});assert.equal(t.animations.length,count);assert.equal(t.mini.dataset.state,'quarters');
t=boot();t.preview.events['ufkora:grade-change']({detail:{animate:true}});t.preview.events['ufkora:grade-change']({detail:{animate:true}});assert.equal(t.animations.length,2);assert.equal(t.animations[0].cancelled,true);t.doc.hidden=true;t.events.visibilitychange();assert(t.animations.every(a=>a.cancelled));t.preview.events['ufkora:grade-change']({detail:{animate:true}});assert.equal(t.animations.length,2);
t=boot();t.button.events.click({detail:0});assert.equal(t.mini.dataset.state,'quarters');assert.equal(t.animations.length,0);t.button.events.click({detail:1});t.reduce();assert(t.animations.every(a=>a.cancelled));const n=t.animations.length;t.button.events.click({detail:1});assert.equal(t.animations.length,n);
for(const config of [{quiet:true},{animate:false}]){t=boot(config);t.button.events.click({detail:1});t.preview.events['ufkora:grade-change']({detail:{animate:true}});assert.equal(t.mini.dataset.state,'quarters');assert.equal(t.animations.length,0);}
console.log('PASS: state is immediate; 180ms split; rapid reversal cancels; offscreen/hidden/reduced cancels; keyboard and quiet instant; no animate fallback. Simulation, not OS/browser media emulation.');
