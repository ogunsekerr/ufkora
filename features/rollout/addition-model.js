/* Four-digit sums with genuine carry complexity, no rejection sampling. */
(()=>{'use strict';
function pair(level='easy',overflow=false,random=Math.random){
 const int=(a,b)=>a+Math.floor(random()*(b-a+1));
 const required=level==='hard'?[0,1,2]:level==='medium'?[int(0,2)]:[];
 let a=0,b=0,carry=0;
 for(let col=0;col<4;col++){
  let x,y;
  if(col===3){x=int(overflow&&level==='hard'?5:1,overflow&&level==='hard'?9:4);y=int(overflow&&level==='hard'?5:1,overflow&&level==='hard'?9:4)}
  else if(required.includes(col)){x=int(1,9);y=int(Math.max(0,10-x-carry),9)}
  else{x=int(0,9-carry);y=int(0,9-x-carry)}
  a+=x*10**col;b+=y*10**col;carry=Math.floor((x+y+carry)/10);
 }
 return [a,b];
}
window.UfkoraAddition={pair};
})();
