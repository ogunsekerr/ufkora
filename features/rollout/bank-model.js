/* Bank support levels preserve every original question and mathematical answer. */
(()=>{'use strict';
function adapt(original,level){
 const q={...original};if(q.visual&&typeof q.visual==='object')q.visual={...q.visual};
 if(level==='easy'&&q.type==='choice'&&q.options.length>2){
  const wrong=q.options.findIndex((_,i)=>i!==q.answer),keep=q.options.map((v,i)=>({v,i})).filter(x=>x.i!==wrong);
  q.options=keep.map(x=>x.v);q.answer=keep.findIndex(x=>x.i===original.answer);
 }
 if(q.protractor||q.visual?.kind==='angle'){q.protractor=true;if(q.visual&&typeof q.visual==='object')q.visual.protractor=level==='easy'}
 return q;
}
window.UfkoraBankModel={adapt};
})();
