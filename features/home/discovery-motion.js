(()=>{'use strict';
const mini=document.getElementById('hero-mini'),button=document.getElementById('mini-try'),result=document.getElementById('mini-result');
if(!mini||!button||!result)return;
const quiet=matchMedia('(prefers-reduced-motion: reduce), (max-width: 700px), (pointer: coarse)');
const groups=new Map();
function cancel(key){(groups.get(key)||[]).forEach(a=>a.cancel());groups.delete(key)}
function play(key,element,frames,duration=180){
 if(quiet.matches||document.hidden||!element.animate)return;
 const a=element.animate(frames,{duration,easing:'cubic-bezier(.22,1,.36,1)'});
 const running=groups.get(key)||[];running.push(a);groups.set(key,running);
 a.finished.then(()=>{const rest=(groups.get(key)||[]).filter(x=>x!==a);if(rest.length)groups.set(key,rest);else groups.delete(key)},()=>{});
}
button.hidden=false;
button.addEventListener('click',event=>{
 const quarters=mini.dataset.state!=='quarters';cancel('mini');
 mini.dataset.state=quarters?'quarters':'halves';
 button.textContent=quarters?'Geri al':'Dene';
 result.textContent=quarters?'Dört eş parçanın ikisi renkli.':'İki eş parçanın biri renkli.';
 // Keyboard changes are immediate; pointer motion never delays the state.
 if(event.detail===0)return;
 mini.querySelectorAll('.mini-quarter,.mini-three-quarter').forEach(cut=>play('mini',cut,quarters?[{transform:'scaleY(0)',opacity:0},{transform:'scaleY(1)',opacity:1}]:[{transform:'scaleY(1)',opacity:1},{transform:'scaleY(0)',opacity:0}]));
});
const preview=document.getElementById('workshop-preview'),worldObject=document.getElementById('class-world-object');
if(preview&&worldObject)preview.addEventListener('ufkora:grade-change',()=>{cancel('world');play('world',worldObject,[{transform:'translateY(6px)',opacity:.85},{transform:'translateY(0)',opacity:1}]);});
})();
