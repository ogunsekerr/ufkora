// Production source + adapter with a minimal DOM. This is not a browser/device test.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('oyun-atolyesi/etkinlikler.html','utf8');
function boot(query=''){
 let now=0;const nodes=new Map(),events={},intervals=[];let generated=0;
 const graphics=new Proxy({}, {get:(_,p)=>p==='createLinearGradient'?()=>({addColorStop(){}}):()=>{}});
 function create(tag='div',id){const classes=new Set();const n={tagName:tag,id:id||'',children:[],dataset:{},style:{},attrs:{},value:'',checked:false,hidden:false,inert:false,disabled:false,textContent:'',events:{},open:false,classList:{add(...x){x.forEach(v=>classes.add(v))},remove(...x){x.forEach(v=>classes.delete(v))},contains:x=>classes.has(x),toggle(x,v){if(v??!classes.has(x))classes.add(x);else classes.delete(x)}},setAttribute(k,v){this.attrs[k]=v},getAttribute(k){return this.attrs[k]},addEventListener(k,f){this.events[k]=f},append(...xs){for(const x of xs){this.children.push(x);if(x.id)nodes.set(x.id,x)}},before(...xs){xs.forEach(x=>{if(x.id)nodes.set(x.id,x)})},after(...xs){xs.forEach(x=>{if(x.id)nodes.set(x.id,x)})},focus(){doc.activeElement=this},getContext:()=>graphics,showModal(){this.open=true},close(){this.open=false;this.events.close?.()},getBoundingClientRect:()=>({left:0,top:0,width:900,height:390}),setPointerCapture(){},querySelector(s){return this.children.find(n=>s.includes(n.tagName))||null},set innerHTML(s){this._html=s;this.children=[];for(const m of s.matchAll(/<(button|input|span|select|div|h2|p|aside)[^>]*>/g)){const id=m[0].match(/id="([^"]+)"/);if(id){const x=node(id[1]);x.tagName=m[1];this.children.push(x)}}},get innerHTML(){return this._html||''}};if(id)nodes.set(id,n);return n;}
 function node(id){return nodes.get(id)||create('div',id)}
 const doc={hidden:false,body:create('body'),documentElement:{outerHTML:html},activeElement:null,getElementById:node,createElement:t=>create(t),addEventListener(k,f){events[k]=f},querySelectorAll(s){if(s==='#answers button')return node('answers').children.filter(x=>x.tagName==='button');return []}};
 const sandbox={document:doc,location:{search:query},URLSearchParams,performance:{now:()=>now},setInterval:f=>{intervals.push(f);return intervals.length},clearInterval(){},setTimeout(){},clearTimeout(){},confirm:()=>true,console};sandbox.window=sandbox;sandbox.scrollTo=()=>{};
 const ctx=vm.createContext(sandbox);const run=s=>vm.runInContext(s,ctx);
 for(const p of ['active-clock','bank-model'])run(fs.readFileSync('features/rollout/'+p+'.js','utf8'));
 run(html.match(/<script>([\s\S]*?)<\/script>/)[1]);run(fs.readFileSync('features/rollout/bank-entry.js','utf8'));
 return {run,node,doc,events,intervals,advance(ms){now+=ms;intervals.at(-1)()},start(i,mode,level='easy',seconds=0){run(`start(${i},'${mode}')`);node('bank-difficulty').value=level;node('bank-duration').value=String(seconds);node('bank-begin').onclick()}};
}
let covered=0;
for(const level of ['easy','medium','hard'])for(let m=0;m<13;m++)for(const mode of ['activity','game']){
 const t=boot();assert.equal(t.run('q'),undefined,'no automatic play');t.start(m,mode,level,60);
 for(let r=0;r<3;r++){
  assert.equal(t.run('state.round'),r);assert.equal(t.run('state.expired'),false);
  const q=t.run('q'),base=t.run(`questionFor(${m},'${mode}',${r})`);
  assert.equal(q.prompt,base.prompt);assert.equal(q.explain,base.explain);
  if(q.type==='choice')assert.equal(q.options[q.answer],base.options[base.answer],'preserve answer across option reduction');
  if(level==='easy'&&base.type==='choice'&&base.options.length>2)assert.equal(q.options.length,base.options.length-1);
  if(level==='hard')assert.equal(t.node('bank-support').hidden,true);
  if(q.type==='drawing')t.run('reveal()');
  else{if(q.type==='choice')t.run('state.selected=q.answer');if(q.type==='number'){t.node('numeric').value=String(q.answer);if(q.requireRadius)t.run('radius=180')}if(q.type==='grid')t.run('rect={x:0,y:0,w:q.target===1?3:5,h:q.target===1?7:5}');t.run('check()');assert.equal(t.run('state.checked'),true);const before=t.run('state.scores.reduce((a,b)=>a+b,0)');t.run('check()');assert.equal(t.run('state.scores.reduce((a,b)=>a+b,0)'),before)}
  t.run('next()');covered++;
 }
 assert.equal(t.run('state.done'),true,`${m}/${mode}/${level}: ${t.run('JSON.stringify(state)')}`);
}
let t=boot('?module=4&module=7&mode=game&difficulty=bad&duration=60x');assert.equal(t.run('q'),undefined);assert.equal(t.node('bank-entry-title').textContent,'Yanlış Usta');assert.equal(t.run('bankDifficulty'),'easy');
t=boot();t.start(7,'game','hard',60);t.advance(1000);assert.equal(t.node('clock').textContent,'59 sn');t.doc.hidden=true;t.events.visibilitychange();t.advance(500000);assert.equal(t.node('clock').textContent,'59 sn');t.doc.hidden=false;t.events.visibilitychange();t.node('help').onclick();t.advance(500000);assert.equal(t.node('clock').textContent,'59 sn');t.node('helpdialog').close();t.advance(59000);assert.equal(t.run('state.expired'),true);assert.equal(t.node('play').inert,true);const scores=t.run('JSON.stringify(state.scores)');t.run('state.selected=0;check();reveal();next()');assert.equal(t.run('JSON.stringify(state.scores)'),scores);assert.equal(t.run('state.round'),0);t.node('bank-retry').onclick();assert.equal(t.run('state.expired'),false);assert.equal(t.node('clock').textContent,'60 sn');
// Round replay does not add a second award.
t=boot();t.start(7,'game');t.node('numeric').value=String(t.run('q.answer'));t.run('check()');const score=t.run('state.scores[0]'),correct=t.run('state.correct');t.node('bank-retry').onclick();t.node('numeric').value=String(t.run('q.answer'));t.run('check()');assert.equal(t.run('state.scores[0]'),score);assert.equal(t.run('state.correct'),correct);
// Keyboard-only grid construction is routed to real setRect/validation.
t=boot();t.start(9,'activity');const key=k=>t.node('canvas').events.keydown({key:k,preventDefault(){}});key('Enter');for(let i=0;i<5;i++)key('ArrowRight');for(let i=0;i<5;i++)key('ArrowDown');key('Enter');assert.equal(t.run('rect.w'),5);assert.equal(t.run('rect.h'),5);t.run('check()');assert.equal(t.run('state.checked'),true);
console.log(`PASS ${covered} production rounds (26 flows ×3 levels ×3 rounds), preserved answers, support difficulty, no autostart, duplicate/invalid URL, background/help pause, expiry lock, retry dedup, keyboard grid. DOM simulation only.`);

// Wrong/revealed first attempts cannot become first-try points through retry.
for(const revealFirst of [false,true]){t=boot();t.start(7,'game');if(revealFirst)t.run('reveal()');else{t.node('numeric').value='1';t.run('check()')}t.node('bank-retry').onclick();t.node('numeric').value=String(t.run('q.answer'));t.run('check()');assert.equal(t.run('state.correct'),0);assert.equal(t.run('state.scores[0]'),0)}
console.log('PASS first-check/reveal scoring preserved across retries.');

// Independent arithmetic checks for measuring, tile area and garden invoice tasks.
t=boot();for(const mode of ['activity','game'])for(let r=0;r<3;r++){const tile=t.run(`questionFor(10,'${mode}',${r})`);assert.equal(tile.answer,tile.visual.w*tile.visual.h)}
for(let r=0;r<3;r++){const angle=t.run(`questionFor(2,'activity',${r})`);assert.equal(angle.answer,angle.visual.value)}
assert.deepEqual(Array.from(t.run("[0,1,2].map(r=>questionFor(12,'activity',r).answer)")),[6*4,2*(6+4)-2,(2*(6+4)-2)*30]);
t.start(2,'activity','hard');assert.equal(t.run('q.protractor'),true,'Hard level retains the measuring tool toggle');assert.equal(t.run('protractor'),false);
console.log('PASS independent angle/area/fence/invoice arithmetic; hard level retains required measuring tool.');
