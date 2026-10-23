/* Specific learning challenges; no timer-as-difficulty substitution. */
(()=>{'use strict';
const int=(a,b,r=Math.random)=>a+Math.floor(r()*(b-a+1));
const pick=(a,r=Math.random)=>a[int(0,a.length-1,r)];
const model={
 radar(level,r=Math.random){return {angle:level==='easy'?pick([30,60,90,120,150,180],r):level==='hard'?int(11,179,r):pick([30,35,45,50,60,70,75,90,110,120,135,150,180],r),base:level==='easy'?0:pick([0,-10,10,-15],r),snap:level!=='hard',align:level==='easy'}},
 laser(level,r=Math.random){const mode=r()>.5?'tumler':'butunler',total=mode==='tumler'?90:180,step=level==='easy'?10:level==='medium'?5:1,given=int(1,total/step-1,r)*step;return {mode,given,missing:total-given}},
 cargo(m,level){const base=[m.millions,m.thousands,m.ones],pool=new Set(level==='easy'?base:[...base,...m.distractors]);if(level==='hard'){for(let n=17;pool.size<9;n+=113)pool.add(String(n%1000).padStart(3,'0'))}return [...pool]},
 carpet(level,r=Math.random){return {w:int(level==='easy'?2:4,level==='easy'?5:level==='medium'?6:8,r),h:int(level==='easy'?2:3,level==='easy'?4:5,r)}},
 potion(level,r=Math.random){const d=pick(level==='easy'?[2,4]:level==='hard'?[3,5,6]:[2,3,4,5,6],r);return {n:d+int(0,d-1,r),d}},
 choices(correct,seed=[]){const set=new Set([correct,...seed]);for(let delta=1;set.size<4;delta++)set.add(correct+delta);return [...set].slice(0,4)},
 fraction(n,d){return `<span class="maarif-fraction" role="math" aria-label="${n} bölü ${d}"><span aria-hidden="true">${n}</span><span aria-hidden="true">${d}</span></span>`},
 equalFraction(a,b,c,d){return a*d===c*b}
};
window.UfkoraMaarifModel=model;
})();
