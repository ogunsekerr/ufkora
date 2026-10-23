# Banka ailesi · Y22–Y47

26 ayrı çalışma için ortak native giriş bağlandı. Özgün 13 kazanım/26 mod/3 tur soruları, öğretmen çizim değerlendirmesi ve puan birikimi korunur. Destek düzeyi gerçek etkileşimi değiştirir; yeni daha zor matematik içeriği eklendiği iddia edilmez. Kolay, 3+ şıklı soruda tek yanlış çeldiriciyi kaldırır; cevap endeksi korunur. Kolay ölçme aracını açık başlatır; diğer düzeylerde gereken araç düğmesi kalır. Ön bilgi Orta'da isteğe bağlı, Zor'da ilk denemede kapalıdır.

Süre tur başına Süresiz/60/120/180; yardım/arka plan/manual pause ayrı nedenlerle tutulur. Süre bitince play inert ve check/reveal/next/bonus/pointer/keyboard guard'ları kapalıdır; tekrar/ayarlar dışarıda erişilebilir. Reset aynı turu açar. Aynı tur tekrar çözülünce puan ve ilk-kontrol sayacı şişmez; çözümü gördükten sonra tekrar ederek ilk-deneme puanı alınmaz. Gerekçe bonusu aynı turda ikinci kez verilmez; öğretmenin manuel puan düzeltmesi korunur.

Klavye: canvas Tab ile erişilir. Oklar imleci taşır; Enter ilk/ikinci noktayı seçer, Escape taslağı iptal eder. Kareli dikdörtgen gerçek setRect/validate yoluna gider. Diğer çizimler seçili araçla nokta/iki nokta üretir; serbest çizim otomatik doğru sayılmaz. Çizimler öğretmen ölçütleriyle değerlendirilir. Pointer/touch mevcut native mekanizmadır; gerçek touch bu oturumda denenmedi.

Üretim testleri: 234 tur, doğru cevapların korunması, adaptif çeldiriciler, no-autostart, geçersiz/yinelenen URL varsayılanları, hidden/help pause, expiry/tekrar, ilk-kontrol/çözüm sonrası puan güvenliği, keyboard 5×5 grid. Bağımsız kontrol: açı ölçüleri; fayans satır×sütun; 6×4 çim, giriş hariç çit ve 30 TL/metre fatura. Tüm testler VM/DOM simülasyonudur.

Yeni query: module=0..12, mode=activity|game, difficulty=easy|medium|hard, duration=0|60|120|180. Eksik/geçersiz/duplicate değerler 0/game/easy/0. Deep-link yalnız giriş açar. Tüm aile için son tarayıcı, 320/390/768/1440 görüntüleri, gerçek dokunma/OS reduced-motion/ekran okuyucu kabulü açık. K7 onayı uygulamayı yetkilendirdi; yapılmayan kabulü tamamlandı yapmaz.

Bağımsız inceleme düzeltmesi: sayısal cevap artık ayırıcılar silinmeden önce bütün dizge olarak doğrulanır. Düz rakamlar veya aynı ayırıcıyla tam üçlü binlik gruplar kabul edilir (1800 / 1.800 / 1 800). 1.8, 18.0, 1 8 ve karışık ayırıcılar reddedilir. Üretim regresyonu, gerçek 18 cevabında 1.8'in kabul edilmediğini; gerçek 24 006 305 cevabında geçerli üç biçimin aynı değeri verdiğini doğrular.
