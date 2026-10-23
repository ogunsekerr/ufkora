// Executes the actual catalog renderer with a small DOM. No layout/device claims.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
class Node{
 constructor(tag='div'){this.tagName=tag;this.children=[];this.dataset={};this.attrs={};this.style={setProperty(){}};this.events={};this._value=undefined;this.className='';this.textContent='';this.classList={add:x=>this.classes().add(x),toggle:(x,on)=>{const s=this.classes();if(on??!s.has(x))s.add(x);else s.delete(x)},contains:x=>this.classes().has(x)};}
 classes(){return this._classes??=new Set(this.className.split(' ').filter(Boolean))}
 append(...nodes){for(const n of nodes){n.parent=this;this.children.push(n)}}
 get childNodes(){return this.children}
 set value(v){this._value=v}get value(){return this._value??(this.tagName==='select'?this.children[0]?.value:'')??''}
 setAttribute(k,v){this.attrs[k]=v}addEventListener(k,f){this.events[k]=f}focus(){this.doc.activeElement=this}
 contains(n){return this===n||this.children.some(c=>c.contains(n))}replaceChildren(){this.children=[]}
 remove(){if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this)}
 replaceWith(...nodes){const p=this.parent,i=p.children.indexOf(this);p.children.splice(i,1,...nodes);nodes.forEach(n=>n.parent=p)}
 querySelector(s){return walk(this).find(n=>s[0]==='.'?n.className.split(' ').includes(s.slice(1)):n.tagName===s)||null}
}
function walk(n){return n.children.flatMap(c=>[c,...walk(c)])}
function boot(grade,disabled=[]){const nodes=new Map(),get=id=>{if(!nodes.has(id)){const n=new Node(['topic','type'].includes(id)?'select':'div');n.id=id;nodes.set(id,n)}return nodes.get(id)};
 for(const id of ['topic','type'])get(id).value='';get('search').value='';
 const doc={activeElement:null,body:new Node(),title:'',getElementById:get,createElement:t=>new Node(t),querySelector:s=>get(s)};for(const n of nodes.values())n.doc=doc;
 const context={document:doc,location:{search:'?sinif='+grade},URLSearchParams,Set,clearTimeout(){},setTimeout:f=>{f()},IntersectionObserver:class{observe(){}unobserve(){}disconnect(){}},window:{}};
 const ctx=vm.createContext(context);vm.runInContext(fs.readFileSync('catalog.js','utf8'),ctx);
 context.window.UfkoraClay={make:()=>new Node(),kind:()=>''};context.window.UfkoraPilotPreview={create:()=>new Node()};
 for(const g of [4,6,7,8])if(!disabled.includes(g))vm.runInContext(fs.readFileSync('features/workshop/grade-'+g+'.js','utf8'),ctx);
 vm.runInContext(fs.readFileSync('features/workshop/catalog.js','utf8'),ctx);
 return {get,doc,ctx,all:()=>walk(get('catalog')),filter(id,value){get(id).value=value;get(id).events[id==='search'?'input':'change']()}};
}
for(const [g,count,color]of [[4,2,'coral'],[6,2,'green'],[7,2,'blue'],[8,1,'purple']]){
 const t=boot(g);assert(t.doc.body.classList.contains(color));assert.equal(t.get('catalog').classList.contains('catalog-topics'),true);
 assert.equal(t.all().filter(n=>n.tagName==='article').length,count);
 const expected=vm.runInContext('window.UFKORA_CATALOG.filter(x=>x.grade==='+g+').map(x=>x.url)',t.ctx);
 assert.deepEqual(t.all().filter(n=>n.tagName==='a').map(n=>n.href).sort(),Array.from(expected).sort());
 t.filter('search','zzzz-no-result');assert.equal(t.get('empty').hidden,false);assert.equal(t.all().filter(n=>n.tagName==='article').length,0);
 t.get('reset-filters').events.click();assert.equal(t.get('empty').hidden,true);
 t.filter('topic','Geometri');assert(t.all().filter(n=>n.tagName==='article').length>=1);
 t.get('reset-filters').events.click();t.filter('type','Oyun');assert.equal(t.all().filter(n=>n.tagName==='article').length,g===4?1:0);
 t.get('reset-filters').events.click();const v=t.get('.catalog-primary').children[0].children[1];v.value='cards';v.events.change();assert.equal(t.get('catalog').classList.contains('catalog-topics'),false);
 const rollback=boot(g,[g]);assert.equal(rollback.get('catalog').classList.contains('catalog-topics'),false);
}
const invalid=boot(9);assert(invalid.doc.body.classList.contains('invalid-grade'));
const queue=JSON.parse(fs.readFileSync('docs/design/T59-rollout-backlog.json'));assert.equal(queue.units.length,47);assert.equal(new Set(queue.units.flatMap(u=>u.tasks.map(t=>t.id))).size,282);
console.log('PASS grades 4/6/7/8: counts, colors, URLs, topic/type/search/empty/reset, cards fallback and independent rollback; 47 queues/282 unique tasks. DOM simulation only.');
