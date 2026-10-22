# T13 yeniden ele alma + T14–T16 ekip çalışması
23 Ekim 2026. Kullanıcı iki ekip arkadaşı istedi; çalışma üç ayrı worktree'de hazırlandı ve merkezde birleştirildi. Main/üretim değişmedi. T17 başlamadı.

## T13 — yeni öneri, görsel onay bekliyor
Önceki düz vektör nesneler kaldırıldı. Mevcut gerçek clay sahnesi artık tek bir sabit sıra olarak kullanılmıyor: nesneler CSS sprite pencereleriyle ayrı ayrı kadrajlanıp farklı yüksekliklere yerleştirildi; küçük temas yüzeyleri, sınıfa göre yüzey tonu ve ince, iki tonlu kil bağlantısı eklendi. Bütün nesneler tek mevcut57KB görseli paylaşır; beş ayrı büyük indirme yok.
Bu yeni üretilmiş bağımsız clay varlık seti değildir. Imagegen tekrar HTTP400 Unknown parameter reasoning hatası verdi; ücretli API/CLI alternatifi kullanılmadı. Kaynak görselin bazı bağlantı parçaları ve zemini crop içinde kalır. Darken blend ve kenar maskesi birleşimi yumuşatır; özel transparan asset kalitesi veya yeni clay modelleme tamamlandı iddiası yoktur. Kullanıcı materyal/kompozisyonu hâlâ onaylayabilir veya reddedebilir.
CSS maske yalnız küçük sabit görsel pencerelerinde kullanılır; tam ekran animasyonlu maske/blur eklenmedi. Nesne art alanı ve hitbox ayrı; mevcut giriş sahnesine dokunulmadı.

## T14 — mobil düzen hazır
Aynı4–8 listesi ve native bağlantılar tek sütun dikey duraklara dönüşür. Nesne solda, sınıf/açıklama/eylem sağda. İnce dikey bağlantı metinden uzak nesne sütununda kalır.
Merkezî QA'da desktop300px slot yüksekliğinin mobil görseli uzattığı görüldü; height:auto + square art alanıyla düzeltildi.
Chrome iframe içerisinde390 ve320px genişlikte gerçek CSS responsive render kontrolü yapıldı. Dikey scrollbar nedeniyle içerik clientWidth değerleri375/305px; her iki durumda scrollWidth≤clientWidth, yatay taşma yok.390'da beş bağlantı335×192px;320'de265px genişlikte ve192–203px yükseklikte; nesne alanı112px kare.
Bu fiziksel telefon, touch pointer emülasyonu veya Safari testi değildir. İki iframe'in eşzamanlı kontrolünde browser timeout yaşandı; tek iframe sayfasıyla kontrol tamamlandı. Screenshot clip API timeout verdiği için orijinal tam viewport kanıtları korundu; dar görünüm soldadır, sağ boşluk QA sayfasına aittir.

## T15 — etkileşim hazır
Hover yalnız hover:hover + pointer:fine; nesne−3px/scale1.025, eylem yüzeyi belirginleşir. Anchor hitbox yerinde kalır.
Focus-visible çizgisi ve alt çizgi; press yalnız eylem üzerinde.scale(.98). Reduce media kuralı transform/transition'ı kapatır.
Masaüstünde hover/focus görünümü kontrol edildi; fiziksel dokunma ve gerçek OS reduce tercihiyle render kontrolü hâlâ açık. T04 bütünüyle kapanmış sayılmaz.

## T16 — clay sekme göstergesi hazır
6px kil şeridi, seçili sekmenin ölçülerine gider; transform süresi180ms. İçerik, aria-selected ve tabIndex aynı eventte güncellenir, animasyonun bitmesi beklenmez. Reduce, resize ve font yüklemede konum anlık düzeltilir.
Gerçek tarayıcıda Oyunlar tıklaması ve ArrowLeft/End klavye geçişi doğrulandı. Oyunlar seçiliyken x150px/genişlik105px ve panel aria-labelledby preview-games-tab; üç oyun gösteriliyor.
Ayrıca birleşmiş JS üzerinde9 Node VM/DOM-stub kontrolü geçti: ilk durum, senkron içerik, hızlı ardışık seçim, Arrow/Home/End odağı, çalışma sırasında reduce, reduce açık seçim ve yeniden ölçüm. Bu test gerçek cihaz değildir. node --check ve diff --check geçti.

## Değişen dosyalar
- index.html: sınıf nesne kapları ve sürümlü CSS/JS bağlantıları
- features/home/class-stations.css: T13 clay kadrajları ve desktop kompozisyon
- features/home/class-stations-mobile.css: T14/T15, ayrı modül
- features/home/home.css: T16 gösterge stilleri
- features/home/workshop-preview.js: T16 konum ve resize/reduce mantığı

48baseline kaynağında değişenler yalnız index.html, home.css, workshop-preview.js; ek iki sınıf CSS dosyası baseline'da yoktur. Logo, typography, assets/mobile, katalog/oyunlar, iletişim ve giriş transition dosyaları değişmedi. Yeni runtime dependency yok.
Önceki HTTP preview contact.js crypto.randomUUID kısıtı bu görevin dışında; mail gönderilmedi.

## Ekip kayıtları
- Root: T13, entegrasyon ve tarayıcıQA
- mobile_stations_t14_t15: commit07ecdc45bc6e091426e1ba52f46887fd42054cf9
- tabs_t16: commit2fbfd0bc7c009477f6a3a2f1f6eb73d1f9f3796a
- Birleşik yerel dal: task/t13-t16-clay-rework; çalışma sürümleri GitHub'da aynı isimli dalda saklandı.

## Sonraki kapı
T13 görsel yönünün kullanıcı onayı bekleniyor. T14–T16 uygulaması review için hazır; gerçek cihaz/touch/reduce ve Safari kontrolleri açık. Canlıya aktarım veya T17 için otomatik yetki yok.
