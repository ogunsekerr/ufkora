// Executes production Maarif script and entry with a minimal DOM; no browser/layout claims.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('etkinlikler/maarif-atolyesi.html','utf8');
let now=0;const nodes=new Map(),events={},intervals=[];
const context=new Proxy({}, {get:(o,k)=>k==='createLinearGradient'?()=>({addColorStop(){}}):()=>{}});
function node(id){if(nodes.has(id))return nodes.get(id);const classes=new Set();const n={id,value:'',textContent:'',innerText:'',hidden:false,inert:false,dataset:{},style:{},children:[],width:680,height:380,clientWidth:680,clientHeight:380,attrs:{},classList:{add(...a){a.forEach(x=>classes.add(x))},remove(...a){a.forEach(x=>classes.delete(x))},contains:x=>classes.has(x)},getContext:()=>context,getBoundingClientRect:()=>({left:0,top:0,width:680,height:380}),addEventListener(){},setAttribute(k,v){this.attrs[k]=v},append(x){this.children.push(x)},appendChild(x){this.children.push(x)},after(){},focus(){doc.activeElement=this},querySelector:()=>null,querySelectorAll:()=>[],set innerHTML(s){this.children=[];this._html=s;for(const m of s.matchAll(/id="([^"]+)"/g))node(m[1])},get innerHTML(){return this._html||''}};nodes.set(id,n);return n}
for(const m of html.matchAll(/id="([^"]+)"/g))node(m[1]);
const doc={hidden:false,body:{dataset:{}},activeElement:null,getElementById:node,createElement:()=>node('generated'+nodes.size),querySelector:()=>node('header'),querySelectorAll:()=>[],addEventListener:(k,f)=>events[k]=f};
const sandbox={document:doc,location:{search:'?akis=laser&difficulty=hard&duration=60'},URLSearchParams,performance:{now:()=>now},Math,console,requestAnimationFrame(){},cancelAnimationFrame(){},setTimeout(){},clearTimeout(){},setInterval:f=>{intervals.push(f);return intervals.length},clearInterval(){},innerWidth:1000,innerHeight:800,addEventListener:(k,f)=>events['window-'+k]=f};sandbox.window=sandbox;
const ctx=vm.createContext(sandbox),run=s=>vm.runInContext(s,ctx);
run(fs.readFileSync('features/rollout/maarif-model.js','utf8'));run(fs.readFileSync('features/rollout/active-clock.js','utf8'));run(html.match(/<script>([\s\S]*?)<\/script>/)[1]);run('soundEnabled=false');
const model=sandbox.UfkoraMaarifModel;
for(const level of ['easy','medium','hard'])for(let n=0;n<300;n++){
 const r=model.radar(level);assert(r.angle>=10&&r.angle<=180);assert.equal(r.snap,level!=='hard');assert.equal(r.align,level==='easy');
 const l=model.laser(level);assert.equal(l.given+l.missing,l.mode==='tumler'?90:180);assert(l.given>0&&l.missing>0);
 const p=model.potion(level);assert(p.n>=p.d&&p.n<2*p.d);assert(model.equalFraction(p.n,p.d,p.n*2,p.d*2));
 const c=model.carpet(level);assert(c.w>=2&&c.h>=2&&c.w<=8&&c.h<=5);
}
assert.equal(model.choices(0,[0,0]).length,4,'zero place value choices terminate');run("renderVaultQuestion('000000000',0)");assert.equal(node('vaultOptionsGrid').children.length,4,'production zero place-value choices terminate');
for(const level of ['easy','medium','hard']){
 run('maarifLevel='+JSON.stringify(level)+";geoState.subMode='protractor';newGeoMission()");const radarBefore=run('totalStars');const target=run('geoState.targetDegree');run(`geoState.userDegree=${target};geoState.userType=${JSON.stringify(target<90?'dar':target===90?'dik':target<180?'genis':'dogru')};fireRadarSignal();fireRadarSignal()`);assert.equal(run('totalStars'),radarBefore+50);
 run("geoState.subMode='laser';newGeoMission();geoState.laser.selectedChoice=geoState.laser.missingAngle");const before=run('totalStars');run('fireLaserBeam();fireLaserBeam()');assert.equal(run('totalStars'),before+50);
 run('generateCargoMission()');const count=node('cargoContainersPool').children.length;assert.equal(count,({easy:3,medium:6,hard:9}[level]));run('cargoState.placed={millions:cargoState.current.millions,thousands:cargoState.current.thousands,ones:cargoState.current.ones}');const b=run('totalStars');run('verifyCargoPeriods();verifyCargoPeriods()');assert.equal(run('totalStars'),b+50);
 run('generateCarpetOrder()');const m=run('carpetState.orderType==="perimeter"?2*(carpetState.wMeters+carpetState.hMeters):carpetState.wMeters*carpetState.hMeters');run('carpetState.userModeChoice=carpetState.orderType');node('inputCarpetMeasure').value=String(m);node('inputCarpetCost').value=String(m*run('carpetState.unitPrice'));const c=run('totalStars');run('submitCarpetOrder();submitCarpetOrder()');assert.equal(run('totalStars'),c+60);
 run('generatePotionRecipe();potionState.selectedCupDenom=potionState.targetDenom;potionState.pouredCount=potionState.targetNumer');const d=run('totalStars');run('verifyPotionMixture();verifyPotionMixture()');assert.equal(run('totalStars'),d+60);assert(node('potionRecipeTitle').innerHTML.includes('maarif-fraction'));
}
run(fs.readFileSync('features/rollout/maarif-entry.js','utf8'));assert.equal(doc.body.dataset.maarifStage,'entry');assert.equal(run('maarifLevel'),'hard');node('maarif-start').onclick();assert.equal(doc.body.dataset.maarifStage,'play');const tick=intervals.at(-1);
now=10000;tick();doc.hidden=true;events.visibilitychange();now=500000;tick();assert.equal(node('theme1Section').inert,false);doc.hidden=false;events.visibilitychange();now+=50000;tick();assert.equal(node('theme1Section').inert,true);assert.match(node('maarif-state').textContent,/Süre doldu/);node('maarif-retry').onclick();assert.equal(node('theme1Section').inert,false);node('maarif-settings').onclick();assert.equal(doc.body.dataset.maarifStage,'entry');
console.log('PASS five Maarif production flows × 3 levels; 900 profile samples; exact fraction equivalence; zero choices terminate; award dedup; native entry settings, hidden pause, expiry, retry. DOM simulation only.');
