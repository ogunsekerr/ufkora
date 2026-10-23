(()=>{'use strict';
const rawSwitch=switchTab,rawStart=startNewGame,originalCard=document.getElementById('game-card').innerHTML;
const config={initial:'explore',image:'../assets/activities/cokgen.webp',imageAlt:'Oyun hamurundan çokgenler',outcomes:'MAT.5.3.5–6 · Çokgenleri doğru parçaları, kenar ve köşe ilişkileriyle inceleme. Kaynak katalog eşlemesi; bağımsız müfredat onayı değildir.',anchor:()=>document.querySelector('header'),scope:id=>document.getElementById('tab-'+id),select:rawSwitch,
 flows:{explore:{title:'Çokgen Laboratuvarı',goal:'Kenar sayısını değiştir, köşe ve kenar ilişkilerini incele.',example:'Bir beşgenin 5 kenarı ve 5 köşesi vardır. Kenar sayısını değiştirip karşılaştır.',levels:['Kolay · Köşe ve harf desteği','Orta · Yalnız köşe desteği','Zor · İşaretsiz inceleme']},game:{title:'Çokgen Oyunu',goal:'Çokgen özelliklerini seçerek açıkla; özel çizim alanını da kullanabilirsin.',example:'15 kenarlı bir çokgenin 15 köşesi vardır.',levels:['Kolay · İki seçenek','Orta · Üç seçenek','Zor · Dört seçenek']}},
 prepare(id,level){if(id==='explore'){resetLabView();document.getElementById('chk-vertices').checked=level!=='hard';document.getElementById('chk-labels').checked=level==='easy';renderLabCanvas()}else{document.getElementById('game-card').innerHTML=originalCard;rawStart()}},switchers:{switchTab:null},generators:['loadQuestion'],actions:['selectAnswer','nextQuestion'],completed:id=>id==='game'&&answered};
const api=window.UfkoraGeometryEntry(config);
// Keep every question and its original answer index; reduce distractors only.
const rawLoad=loadQuestion;window.loadQuestion=function(){rawLoad();const q=quizQuestions[currentQuestionIndex],count={easy:2,medium:3,hard:4}[api.level],keep=[q.correct,...q.options.map((_,i)=>i).filter(i=>i!==q.correct)].slice(0,count);document.querySelectorAll('.quiz-option-btn').forEach((b,i)=>{b.hidden=!keep.includes(i);b.setAttribute('aria-label',q.options[i])})};
// The previous result replaced game-card permanently; restore it before every retry.
window.startNewGame=()=>{document.getElementById('game-card').innerHTML=originalCard;rawStart()};
})();
