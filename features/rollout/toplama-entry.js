(()=>{'use strict';
const flows={
 act1:['Basamak Atölyesi','Sayıları basamaklarına göre topla, eldeleri göster.','1243 + 2321 = 3564. Önce birler basamağından başla.'],
 act2:['Şifre Bulmaca','Toplamları bul, sayı-harf anahtarıyla şifreyi aç.','1243 + 2321 = 3564. Anahtarda 3564 ile eşleşen harfi bul.'],
 act3:['Kayıp Semboller','Eksik rakamları toplama ilişkilerinden bul.','1243 + 2321 = 3564 işleminde birler rakamı 4 olur.'],
 act4:['İkili İşlem Dedektifi','İki işlemdeki eksik rakamları bul ve bağlantı sorusunu çöz.','Önce her işlemin birler sütunundan başla; sonra istenen rakamları topla.'],
 quiz:['Toplama Şampiyonası','Toplama sorularını yanıtla; süreyi kendin seç.','Bir soruda tek yanıt verilir. Doğru yanıt sonraki soruya geçirir.']};
const params=new URLSearchParams(location.search),exact=(key,allowed,fallback)=>{const a=params.getAll(key);return a.length===1&&allowed.includes(a[0])?a[0]:fallback};
let flow=exact('akis',Object.keys(flows),'act1'),duration=Number(exact('duration',['0','60','90','120','180'],'0')),running=false,settingUp=false;
additionLevel=exact('difficulty',['easy','medium','hard'],'easy');
const nav=document.querySelector('nav'),entry=document.createElement('section');entry.className='content-entry';entry.id='content-entry';entry.setAttribute('aria-labelledby','content-title');
entry.innerHTML='<img src="../assets/activities/toplama.webp" alt="Oyun hamurundan toplama atölyesi" width="768" height="512"><div><p>4. sınıf · Toplama</p><h2 id="content-title"></h2><p id="content-goal"></p><details><summary>Örnek ve kazanım</summary><p id="content-example"></p><p>Doğal sayılarla toplama, basamak değeri ve elde ilişkisi. Kaynak katalogda resmî kazanım kodu yok; kod uydurulmadı.</p></details><label for="content-difficulty">Zorluk</label><select id="content-difficulty"><option value="easy">Kolay · Eldesiz temel işlemler</option><option value="medium">Orta · Bir eldeli temel işlemler</option><option value="hard">Zor · Çok eldeli temel işlemler</option></select><p>Zorluk, temel toplama sorularındaki elde sayısını değiştirir. Yarışmadaki zihinden yüzlük ekleme soruları korunur.</p><label for="content-duration">Süre</label><select id="content-duration"><option value="0">Süresiz</option><option value="60">60 saniye</option><option value="90">90 saniye</option><option value="120">120 saniye</option><option value="180">180 saniye</option></select><button id="content-start">Başlat</button></div>';
nav.after(entry);
const bar=document.createElement('div');bar.className='content-session';bar.id='content-session';bar.innerHTML='<span id="content-clock" role="timer" aria-label="Kalan süre"></span><span id="content-state" role="status"></span><button id="content-retry">Yeniden başlat</button><button id="content-settings">Ayarlar</button>';entry.after(bar);
const $=id=>document.getElementById(id),section=()=>$('section-'+flow);
let clock;
function tick(left){$('content-clock').textContent=left===Infinity?'Süresiz':Math.ceil(left/1000)+' sn';if(flow==='quiz'&&running){quizTimeLeft=left===Infinity?Infinity:Math.ceil(left/1000);updateQuizHUD()}}
clock=window.UfkoraActiveClock({onTick:tick,onExpire(){running=false;section().inert=true;$('content-state').textContent='Süre doldu. Tekrar deneyebilirsin.';if(flow==='quiz')endTimedQuiz();$('content-retry').focus()}});
const rawSwitch=switchTab,rawQuiz=startTimedQuiz;
function open(id){clock.stop();running=false;quizRunning=false;if(quizInterval){clearInterval(quizInterval);quizInterval=null}flow=id;rawSwitch(id);section().inert=false;entry.hidden=false;document.body.dataset.contentStage='entry';$('content-title').textContent=flows[id][0];$('content-goal').textContent=flows[id][1];$('content-example').textContent=flows[id][2];$('content-difficulty').value=additionLevel;$('content-duration').value=String(duration);$('content-state').textContent='';}
window.switchTab=id=>open(id);
function begin(){settingUp=true;additionLevel=$('content-difficulty').value;duration=Number($('content-duration').value);entry.hidden=true;document.body.dataset.contentStage='play';section().inert=false;rawSwitch(flow);running=true;
 if(flow==='quiz'){quizDuration=duration;rawQuiz();clearInterval(quizInterval);quizInterval=null}else({act1:generateAct1Problem,act2:initCipherPuzzle,act3:generateAct3Problem,act4:generateAct4Problem}[flow])();
 settingUp=false;clock.start(duration);if(document.hidden)clock.pause();$('content-state').textContent='';section().querySelector('input,button')?.focus();}
$('content-start').onclick=begin;$('content-retry').onclick=begin;$('content-settings').onclick=()=>{open(flow);$('content-start').focus()};
// Existing new-problem buttons restart this activity's clock, not the quiz's question clock.
for(const name of ['generateAct1Problem','initCipherPuzzle','generateAct3Problem','generateAct4Problem']){const raw=window[name];window[name]=function(...args){const r=raw(...args);if(running&&!settingUp){section().inert=false;clock.start(duration);$('content-state').textContent=''}return r}}
for(const name of ['checkAct1','checkAct3','checkAct4','checkCipherItem']){const raw=window[name];window[name]=function(...args){if(!running||document.hidden)return;clock.tick();if(!running)return;const r=raw(...args);const done=flow==='act1'?act1Solved:flow==='act3'?act3Solved:flow==='act4'?act4Solved:currentCipher?.questions.every(q=>q.solved);if(done){clock.stop();$('content-state').textContent='✓ Tamamlandı. Yeni soru veya yeniden başlat ile devam et.'}return r}}
window.startTimedQuiz=()=>{if(flow==='quiz')begin()};
const rawSubmit=submitQuizOption;window.submitQuizOption=(...args)=>{clock.tick();if(!running||document.hidden)return;return rawSubmit(...args)};
document.addEventListener('visibilitychange',()=>{if(document.hidden)clock.pause();else clock.resume()});
setInterval(()=>{if(running)clock.tick()},100);
open(flow);
})();
