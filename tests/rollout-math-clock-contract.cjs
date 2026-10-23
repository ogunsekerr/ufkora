const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const w={};vm.runInNewContext(fs.readFileSync('features/rollout/addition-model.js','utf8'),{window:w,Math});
for(const level of ['easy','medium','hard'])for(const overflow of [false,true])for(let n=0;n<1000;n++){
 const [a,b]=w.UfkoraAddition.pair(level,overflow);assert(a>=1000&&a<=9999&&b>=1000&&b<=9999);if(!overflow)assert(a+b<10000);
 let carry=0,count=0;for(let col=0;col<3;col++){carry=Math.floor((Math.floor(a/10**col)%10+Math.floor(b/10**col)%10+carry)/10);count+=carry}
 assert.equal(count,{easy:0,medium:1,hard:3}[level]);
}
vm.runInNewContext(fs.readFileSync('features/rollout/active-clock.js','utf8'),{window:w,performance:{now:()=>0}});
let now=0,expired=0;const c=w.UfkoraActiveClock({now:()=>now,onExpire:()=>expired++});c.start(60);now=1000;c.tick();assert.equal(c.remaining,59000);c.pause();now=50000;c.tick();assert.equal(c.remaining,59000);c.resume();now+=59000;c.tick();assert.equal(expired,1);c.tick();assert.equal(expired,1);c.start(0);now+=99999999;c.tick();assert.equal(c.remaining,Infinity);c.stop();
console.log('PASS 6000 addition pairs: 0/1/3 carry complexity, four-digit board limits; active clock expiry once, pause and untimed.');
