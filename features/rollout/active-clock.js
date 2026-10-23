/* Active time is independent of rendering and never includes hidden/paused time. */
(()=>{'use strict';
window.UfkoraActiveClock=function({now=()=>performance.now(),onTick=()=>{},onExpire=()=>{}}={}){
 let left=0,at=now(),running=false,paused=false;
 function tick(){const t=now();if(running&&!paused&&left!==Infinity)left=Math.max(0,left-(t-at));at=t;onTick(left);if(running&&left===0){running=false;onExpire()}return left}
 return {tick,start(seconds){running=false;left=seconds?seconds*1000:Infinity;paused=false;at=now();running=true;onTick(left)},pause(){tick();paused=true},resume(){at=now();paused=false},stop(){tick();running=false},get running(){return running},get remaining(){return left}};
};
})();
