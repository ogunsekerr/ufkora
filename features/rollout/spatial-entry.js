/* Purpose-led entry/session shell for spatial exploration. No invented scores. */
(()=>{'use strict';
window.UfkoraSpatialEntry={mount({target,title,grade,image,goal,example,options,setup,retry,onPause=()=>{},focus=()=>target.querySelector('button,input,select,canvas')}){
 const entry=document.createElement('section');entry.className='content-entry spatial-entry';entry.setAttribute('aria-labelledby','spatial-entry-title');
 entry.innerHTML='<img width="768" height="512"><div><p id="spatial-grade"></p><h2 id="spatial-entry-title"></h2><p id="spatial-goal"></p><details><summary>Örnek ve çalışma amacı</summary><p id="spatial-example"></p></details><label for="spatial-task">Çalışma</label><select id="spatial-task"></select><label for="spatial-duration">Süre</label><select id="spatial-duration"><option value="0">Süresiz</option><option value="60">60 saniye</option><option value="120">120 saniye</option><option value="180">180 saniye</option></select><button id="spatial-start">Başlat</button></div>';
 const $=id=>entry.querySelector('#'+id);entry.querySelector('img').src=image;entry.querySelector('img').alt=title+' oyun hamuru sahnesi';$('spatial-grade').textContent=grade;$('spatial-entry-title').textContent=title;$('spatial-goal').textContent=goal;$('spatial-example').textContent=example;
 options.forEach(o=>{const n=document.createElement('option');n.value=o.value;n.textContent=o.label;$('spatial-task').append(n)});
 const bar=document.createElement('div');bar.className='content-session spatial-session';bar.hidden=true;bar.innerHTML='<span id="spatial-clock" role="timer" aria-label="Kalan çalışma süresi"></span><span id="spatial-state" role="status"></span><button id="spatial-retry">Yeniden başlat</button><button id="spatial-settings">Ayarlar</button>';
 target.before(entry,bar);let active=false,expired=false,choice=options[0].value,duration=0;
 const state=()=>bar.querySelector('#spatial-state');
 const clock=window.UfkoraActiveClock({onTick:left=>{bar.querySelector('#spatial-clock').textContent=left===Infinity?'Süresiz':Math.ceil(left/1000)+' sn'},onExpire(){active=false;expired=true;target.inert=true;onPause();state().textContent='Süre doldu. Çalışman korundu; yeniden başlayabilirsin.';bar.querySelector('#spatial-retry').focus()}});
 function begin(){choice=$('spatial-task').value;duration=Number($('spatial-duration').value);target.hidden=false;target.inert=false;entry.hidden=true;bar.hidden=false;expired=false;
  if(setup(choice)===false){active=false;state().textContent='Sahne açılamadı. Ayarlara dönüp yeniden deneyebilirsin.';return}
  active=true;state().textContent='';clock.start(duration);if(document.hidden)clock.pause();focus()?.focus();
 }
 function settings(){clock.stop();active=false;onPause();target.inert=true;target.hidden=true;entry.hidden=false;bar.hidden=true;$('spatial-start').focus()}
 $('spatial-start').onclick=begin;bar.querySelector('#spatial-settings').onclick=settings;bar.querySelector('#spatial-retry').onclick=()=>{if(retry)retry(choice);begin()};
 target.hidden=true;target.inert=true;
 document.addEventListener('visibilitychange',()=>{if(document.hidden){clock.pause();onPause()}else clock.resume()});setInterval(()=>{if(active)clock.tick()},100);
 return {get active(){return active},get expired(){return expired},mayEdit(){clock.tick();return active&&!expired&&!document.hidden},restartClock(){if(active){expired=false;clock.start(duration);state().textContent=''}},completed(){if(active){clock.stop();state().textContent='✓ Tamamlandı. Yeni çalışma veya yeniden başlat ile devam et.'}},settings};
}};
})();
