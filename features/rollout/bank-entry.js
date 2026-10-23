(()=>{'use strict';
const params=new URLSearchParams(location.search),exact=(key,allowed,fallback)=>{const a=params.getAll(key);return a.length===1&&allowed.includes(a[0])?a[0]:fallback};
let duration=Number(exact('duration',['0','60','120','180'],'0')),pendingModule=Number(exact('module',Array.from({length:13},(_,i)=>String(i)),'0')),pendingMode=exact('mode',['activity','game'],'game'),stage='home';
bankDifficulty=exact('difficulty',['easy','medium','hard'],'easy');
const entry=document.createElement('section');entry.className='content-entry bank-entry';entry.hidden=true;entry.setAttribute('aria-labelledby','bank-entry-title');
entry.innerHTML='<img src="../assets/activities/banka.webp" alt="Oyun hamurundan matematik çalışma atölyesi" width="768" height="512"><div><p id="bank-entry-code"></p><h2 id="bank-entry-title"></h2><p id="bank-entry-goal"></p><details><summary>Örnek ve kazanım</summary><p id="bank-entry-example"></p><p id="bank-entry-outcome"></p></details><label for="bank-difficulty">Destek düzeyi (zorluk)</label><select id="bank-difficulty"><option value="easy">Kolay · Ön bilgi açık, daha az çeldirici</option><option value="medium">Orta · Ön bilgi isteğe bağlı</option><option value="hard">Zor · İlk deneme ön bilgisiz</option></select><p>Matematiksel görevler korunur. Çizimler öğretmen ölçütleriyle değerlendirilir; ölçme aracı desteği düzeye göre değişir.</p><label for="bank-duration">Tur süresi</label><select id="bank-duration"><option value="0">Süresiz</option><option value="60">60 saniye</option><option value="120">120 saniye</option><option value="180">180 saniye</option></select><button id="bank-begin">Başlat</button><button id="bank-cancel">Çalışma seçimine dön</button></div>';
$('home').after(entry);
const session=document.createElement('div');session.className='bank-session';session.hidden=true;session.innerHTML='<span id="bank-state" role="status"></span><button id="bank-retry">Turu yeniden başlat</button><button id="bank-settings">Ayarlar</button>';$('play').before(session);
const support=document.createElement('aside');support.className='bank-support';support.id='bank-support';support.setAttribute('aria-label','Ön bilgi desteği');$('instruction').after(support);
const hint=document.createElement('button');hint.id='bank-hint';hint.textContent='Ön bilgiyi göster';hint.onclick=()=>{support.hidden=false;hint.hidden=true};support.after(hint);
const rawStart=start,rawHome=home,rawStop=stopTimer;
const reasons=new Set();let timer;
function label(left){$('clock').textContent=left===Infinity?'Süresiz':Math.ceil(left/1000)+' sn'}
function expire(){if(stage!=='play')return;state.expired=true;pointerDown=false;dragAngle=false;draft=null;$('play').inert=true;$('bank-state').textContent='Süre doldu. Turu yeniden başlatabilir veya ayarlara dönebilirsin.';$('bank-retry').focus();$('timerToggle').textContent='Süre doldu';}
timer=window.UfkoraActiveClock({onTick:label,onExpire:expire});
function pause(reason){timer.pause();reasons.add(reason)}
function resume(reason){reasons.delete(reason);if(!reasons.size&&stage==='play'&&!state.expired)timer.resume()}
function roundLoaded(){state.expired=false;$('play').inert=false;support.textContent=modules[state.module].warm+' '+(q.type==='drawing'?'Önce doğru çizim aracını seç; ikinci noktayı seçmeden yerini kontrol et.':q.instruction);support.hidden=bankDifficulty!=='easy';hint.hidden=bankDifficulty!=='medium';$('bank-state').textContent='';reasons.clear();timer.start(duration);if(document.hidden)pause('hidden');if($('helpdialog').open)pause('help');$('timerToggle').textContent='Duraklat';}
window.UfkoraBankEntry={roundLoaded,markRevealed(){earned.add(roundKey())},sync(){timer.tick();return stage==='play'&&!state.expired&&!document.hidden&&!reasons.size}};
window.stopTimer=()=>{rawStop();timer.stop()};
window.resetTimer=()=>{rawStop();if(stage==='play')roundLoaded()};
window.toggleTimer=()=>{if(stage!=='play'||state.expired||state.checked||state.revealed||state.done)return;if(reasons.has('manual')){resume('manual');$('timerToggle').textContent='Duraklat'}else{pause('manual');$('timerToggle').textContent='Devam et'}};
$('timerToggle').onclick=window.toggleTimer;$('timerReset').textContent='Turu yeniden başlat';$('timerReset').onclick=()=>retry();
function open(i,mode){if(!Number.isInteger(i)||i<0||i>12||!['activity','game'].includes(mode))return;timer.stop();rawStop();pendingModule=i;pendingMode=mode;stage='entry';entry.hidden=false;session.hidden=true;$('home').classList.add('hide');$('play').classList.add('hide');$('play').inert=false;const m=modules[i];$('bank-entry-title').textContent=mode==='activity'?m.name:m.game;$('bank-entry-code').textContent='5. sınıf · '+m.code;$('bank-entry-goal').textContent=m.desc;$('bank-entry-outcome').textContent=m.goal;$('bank-entry-example').textContent=questionFor(i,mode,0).prompt;$('bank-difficulty').value=bankDifficulty;$('bank-duration').value=String(duration);$('bank-begin').focus();}
window.start=open;
function begin(){bankDifficulty=$('bank-difficulty').value;duration=Number($('bank-duration').value);stage='play';entry.hidden=true;session.hidden=false;rawStart(pendingModule,pendingMode);$('check').disabled?q.type==='drawing'&&canvas.focus():$('answers').querySelector('input,button')?.focus();}
function retry(){if(stage!=='play')return;state.expired=false;loadRound();}
// Retrying a checked round must not inflate score; keep the round's original earned result.
const earned=new Set(),bonusEarned=new Set();const rawCheck=check;
const roundKey=()=>state.module+':'+state.mode+':'+state.round;
window.check=function(){const key=roundKey(),before=state.scores.reduce((a,b)=>a+b,0),correctBefore=state.correct;if(!window.UfkoraBankEntry.sync())return;const alreadyChecked=earned.has(key);rawCheck();const after=state.scores.reduce((a,b)=>a+b,0);if(state.checked)earned.add(key);if(after>before&&alreadyChecked){state.scores[state.team]--;state.correct=correctBefore;updateScores();showFeedback(true,'Doğru. Tekrar çözümü; yeni puan eklenmedi. '+q.explain)}};
const rawBonus=$('bonus').onclick;$('bonus').onclick=()=>{const key=roundKey();if(bonusEarned.has(key))return;rawBonus();if(state.bonus)bonusEarned.add(key)};
$('check').onclick=window.check;
$('bank-begin').onclick=()=>{earned.clear();bonusEarned.clear();begin()};$('bank-retry').onclick=retry;$('bank-settings').onclick=()=>open(state.module,state.mode);
function goHome(){stage='home';timer.stop();entry.hidden=true;session.hidden=true;$('play').inert=false;rawHome()}
window.home=goHome;$('back').onclick=goHome;$('bank-cancel').onclick=goHome;
$('help').onclick=()=>{if(stage==='play')pause('help');$('helpdialog').showModal()};$('helpdialog').addEventListener('close',()=>resume('help'));
document.addEventListener('visibilitychange',()=>document.hidden?pause('hidden'):resume('hidden'));
setInterval(()=>{if(stage==='play')timer.tick()},100);
// Native keyboard construction: select tool with Tab; arrows move cursor, Enter chooses points.
let cursor={x:225,y:150},first=null;canvas.addEventListener('keydown',event=>{
 if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter',' ','Escape'].includes(event.key)||!window.UfkoraBankEntry.sync()||state.checked||state.revealed||state.done)return;
 event.preventDefault();if(event.key==='Escape'){first=null;draft=null;gridStart=null;draw();return}
 const dx=event.key==='ArrowLeft'?-30:event.key==='ArrowRight'?30:0,dy=event.key==='ArrowUp'?-30:event.key==='ArrowDown'?30:0;
 if(dx||dy){cursor.x=Math.max(45,Math.min(855,cursor.x+dx));cursor.y=Math.max(30,Math.min(360,cursor.y+dy));toast('İmleç: '+Math.round((cursor.x-45)/30)+', '+Math.round((cursor.y-30)/30));return}
 if(q.type==='grid'){if(!gridStart)gridStart=snap(cursor);else{setRect(cursor);gridStart=null}return}
 if(q.visual?.kind==='tiles'&&!q.visual.covered){const v=q.visual,s=52,x=(900-v.w*s)/2,i=Math.floor((cursor.x-x)/s),j=Math.floor((cursor.y-60)/s);if(i>=0&&i<v.w&&j>=0&&j<v.h){const key=i+','+j;tileMarks.has(key)?tileMarks.delete(key):tileMarks.add(key);draw()}return}
 if(q.type!=='drawing'&&state.module>=7)return;
 if(tool==='point'){shapes.push({type:'point',start:{...cursor},end:{...cursor},points:[{...cursor}]});draw();return}
 if(!first){first={...cursor};toast('İlk nokta seçildi. Oklarla ilerle, Enter ile tamamla.')}else{shapes.push({type:tool,start:first,end:{...cursor},points:[first,{...cursor}]});first=null;draw()}
});
if(params.has('module')||params.has('mode'))open(pendingModule,pendingMode);
})();
