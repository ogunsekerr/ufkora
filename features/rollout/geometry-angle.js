(()=>{'use strict';
const rawSwitch=switchActivity;
const config={initial:'1',image:'../assets/activities/aci.webp',imageAlt:'Oyun hamurundan açıölçer sahnesi',outcomes:'MAT.5.3.3–4 · Açıölçer okuma; özdeş, komşu ve ters açı ilişkileri. Kaynak katalog eşlemesidir.',anchor:()=>document.querySelector('header'),scope:id=>document.getElementById('activity'+id),select:id=>rawSwitch(Number(id)),
 flows:{'1':{title:'İletki Okuma',goal:'Doğru sıfır yönünü seç, iki kol arasındaki açıyı oku.',example:'Sağdaki 0° çizgisinden 40° çizgisine açılan açı 40° olur.',levels:['Kolay · Sağdan okuma + yardımcı','Orta · Soldan okuma','Zor · İki kol arasındaki fark']},'2':{title:'Özdeş ve Bilinmeyen Açılar',goal:'Eş açıları ve toplam ilişkisini kullanarak bilinmeyeni bul.',example:'Doğru açı 180°; iki eş açı 60° ise kalan açı 60° olur.',levels:['Kolay · Dik açıda özdeşler','Orta · Doğru açıda özdeşler','Zor · Ters açı ilişkileri']},'3':{title:'Açı Okçusu',goal:'Açı türünü seç, yayı hedef yönüne çevir ve balonu vur.',example:'40° dar açıdır. Dar açı türünü seçip yayı 40° yönüne çevir.',levels:['Kolay · İç ölçek + lazer','Orta · Dış ölçek','Zor · Açıyı hesapla']}},
 prepare(id,level){if(id==='1'){document.getElementById('toggleHelper').checked=level==='easy';setProtractorFilter({easy:'right',medium:'left',hard:'between'}[level])}else if(id==='2')setAngleFilter({easy:'identical_right',medium:'identical_straight',hard:'vertical'}[level]);else{document.getElementById('gameLaserToggle').checked=level==='easy';setGameMode({easy:'inner',medium:'outer',hard:'calculate'}[level])}},
 switchers:{switchActivity:x=>x},generators:['generateProtractorQuestion','generateAngleQuestion','generateBalloonMission'],actions:['checkProtractorAnswer','checkAngleAnswer','fireArrow'],
 completed:id=>id==='1'?!!currentPQuestion?.solved:id==='2'?!!currentAQuestion?.solved:!!currentGMission?.balloons.every(b=>b.popped),
 blocked:()=>activeTab===3&&!!currentGMission?.balloons.every(b=>b.popped),
 expire(){arrowAnimState=null}};
const api=window.UfkoraGeometryEntry(config);
const rawHit=evaluateArrowHit;window.evaluateArrowHit=function(...args){if(!api.playing||document.hidden)return;return rawHit(...args)};
})();
