# Clay tutarlılığı düzeltmesi ve T17
23 Ekim 2026. Üç kişilik çalışma. T18 başlamadı; canlı site ve main değiştirilmedi.

## Görsel düzeltmeler
1. Kart köşeleri: ana sayfa önizleme, featured ve katalog kartlarının görseli içindeki tekrar eden SVG motif katmanı scoped CSS ile display:none. Asıl clay thumbnail, başlık, kazanım kodu, bağlantı ve mevcut yakınlaştırma kuralları korunur. Motif DOM üreticisi silinmedi; bu nedenle tüm sitedeki SVG'ler kaldırıldı denmiyor.
2. Başlık nesnesi: “Açıları ve şekilleri keşfet” sağındaki flat SVG yalnız bu dekoratif alanda gizlenir; gerçek clay açıölçer aynı cached57KB sahneden kadrajlanır.4–8 sınıflarında abaküs/açıölçer/terazi/geometrik nesne/küpler eşleşir.
3. Aynı kural sınıf kataloğundaki başlık nesnesine de uygulanır. Desktop128px, mobil95px,≤360px80px kare; mevcut world şeridinin yüksekliği/padding'i büyütülmedi. Blend dekoratif katman seviyesine taşınarak açık renkli görsel zeminin belirgin kare olarak kalması azaltıldı.
Yeni görsel üretimi veya ücretli servis yok. Bunlar mevcut gerçek clay görsellerin kadrajlarıdır; yeni şeffaf3D varlık seti değildir.

## T17 klavye/odak
- Gerçek Chrome önizlemesinde ArrowLeft/ArrowRight/Home/End: odak, aria-selected, tabIndex ve panel aria-labelledby birlikte doğru güncelleniyor.
- Seçili Oyunlar'dan Tab ilk oyun kartına; Shift+Tab seçili Oyunlar'a döndü.
-8.sınıf Oyunlar boş durumunda nativeTab ile “Etkinlikleri göster” düğmesine ulaşıldı. Enter sonrasında Etkinlikler seçildi, odak preview-activities-tab'a döndü; outer scroll1835px'te kaldı.
- Programatik sekme/boş durum odak çağrıları focus({preventScroll:true}) kullanıyor. Giriş evreleri, kapı hızı veya panel gating değiştirilmedi.
- Dokuz NodeVM/DOM-stub kontrolü yeniden geçti: senkron içerik, hızlı değişim, Arrow/Home/End, reduce tercihi değişimi ve yeniden ölçüm. node --check ve git diff --check geçti.
- Azaltılmış hareket için kod mantığı doğrulandı; gerçek OS ayarıyla browser/device testi yapılmış sayılmaz. Ekran okuyucu/telefon/Safari kontrolü hâlâ açık.

## Görsel doğrulama
Ana sayfada başlıkSVG computed display:none ve üç preview kart köşe motifinin display:none olduğu doğrulandı; başlık nesnesi128×128px.
Katalog4,5,6,7,8 sayfalarında ayrı ayrı doğru başlık, doğru crop background-position ve görünür vektör köşe sayısı0 doğrulandı.
Oyunlar sekmesindeki üç clay görsel ve başlık açıölçeri gerçek tarayıcı ekran görüntüsünde kayıtlıdır: T17-clay-consistency-proof.svg orijinal JPEG'i gömülü taşır.
Bazı locator etkileşimleri scroll-into-view sırasında girişin etkileşim aralığı dışına kaydı ve timeout verdi; görünür düğmelere doğrudan UI tıklaması/nativeTab ile kontroller tamamlandı. Bu otomasyon kısıtı için giriş animasyonu yeniden yazılmadı. Bir geçici browser transport hatası sonrasında aynı tab ile devam edildi.

## Dosyalar
- Yeni features/shared/card-art.css
- Yeni features/shared/class-world-art.css
- index.html ve atolye.html: scoped CSS bağlantıları
- features/home/workshop-preview.js: iki programatikfocus çağrısı
Logo/fontlar, sınıf düzeni, kaynak oyunlar, kazanım içeriği, giriş transition dosyaları ve iletişim değişmedi. CSS/JS sürüm bağlantıları güncellendi.

## Ekip
Kart görselleri: mobile_stations_t14_t15, kaynak commit75c7cfb2a4a39ab0c4ca8a4812706c814234e566.
Başlık nesneleri: tabs_t16, kaynak commit857bd878ca4aebaa254c590d2c798a069cfcf5e1.
Root: entegrasyon, blend düzeltmesi, T17 focus ve tarayıcıQA.
Durum: görsel düzeltme ve T17 review için tamam; T18 ve üretime aktarım için otomatik onay yok.
