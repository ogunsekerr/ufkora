# T41–T47 · Katalog bildirimi ve tek hamlelik keşif

23 Ekim 2026. Kaynak uzak dal: task/t37-t40-topic-catalog @ a2bdec5. Aday dal: task/t41-t47-discovery-motion. Canlı yayın/main değişmedi.

## Görev sonuçları

| Görev | Değişiklik ve kanıt |
| --- | --- |
| T41 | Sonuç sayısı sınıf/tür/konu/arama bağlamıyla aria-live=polite, aria-atomic=true üzerinden bildirilir. Arama duyurusu 180 ms bekler; kart filtrelemesi hemen olur. Arama odağı search'te, native konu seçimi topic'te, Enter ile temizleme reset-filters'ta kaldı. Sonuç içindeki kaldırılan odağa status güvenli dönüşü var. Gerçek ekran okuyucu sesi test edilmedi. |
| T42 | 320/390 px tek, 768 px iki, 1440 px üç sütun. Dokuz kayıt korunuyor; içerik genişlikleri 305/375/753/1425 px, scrollWidth=clientWidth. 320 px'te uzun “26 Etkinliklik Çalışma Bankası” başlığı ve açık kazanım ayrıntıları taşmadı. Ayrı T42 raporu var. |
| T43 | Tek kavram için storyboard: aynı %50 alan, iki eş parçadan dört eş parçaya; 1/2 = 2/4. Kaynak metinde slash biçimi değil dikey kesir çizgileri kullanıldı. |
| T44 | Sabit iki durum CSS data-state üzerinden çalışır. Kesirler ve renkli alan JS olmadan anlamlı; çalışmayan Dene düğmesi varsayılan olarak gizlidir. Görsel kesin alanları koruyan CSS kil şerittir; yeni raster/SVG nesne seti üretilmedi. |
| T45 | Dene/Geri al, yalnız iki ek bölme çizgisini 180 ms transform/opacity ile değiştirir. Sonuç ve state anında güncellenir. Enter/Space gerçek Chromium'da çalıştı; odak mini-try üzerinde ve 3 px çerçeve görünür. Ölçülen renkli şerit oranı iki durumda yaklaşık .5 (transform yuvarlaması dahil); CSS genişliği tam %50. |
| T46 | Sınıfa ait mevcut gerçek clay nesnesi 6 px kısa konum/opacity tepkisi verir. Tüm paneli clipPath ile açan seçim animasyonu kaldırıldı. Tür sekmesi değişiminde aynı nesne yeniden üretilmez. Yalıtılmış panelde pointer ile 4→6→7→8→5 seçimleri doğru nesne/başlık/metin verdi; tam giriş akışında klavye Space ile sınıf değişimleri geçti. |
| T47 | Yeni animasyonlar tek seferlik ve kesilebilir. Mobil/coarse, reduced-motion ve klavyede anlık durum. Ekran dışı veya arka sekmede hareket iptal; son durum korunur. Tek IntersectionObserver yeni demo/nesne ve hero görünürlüğünü izler; yeni rAF/setInterval döngüsü yok. Eski aşağıdaki yarım autoplay gösterimi sabit modele dönüştü. Dekoratif hero döngüleri gizli/ekran dışı/geçişte durur; mobil/coarse'ta kapalıdır. |

## Kısa ekran düzeltmesi

320×600 ilk kontrolde ana eylemler ve yeni gösterim giriş alanına sığmıyordu. Kısa ekran düzeninde gereksiz üst etiket ve aşağı oku gizlendi; başlık okunaklı kaldı, iki ana eylem ve beş sınıf bağlantısı kompakt düzenlendi. Hero, logo/font ailesi ve altıgen evreleri korundu. 600 px yükseklikte ölçülen alt sınırlar:

| Çerçeve genişliği | Ana eylemler altı | Demo altı | Sınıf bağlantıları altı | Hero altı |
| --- | --- | --- | --- | --- |
| 320 | 357 px | 409 px | 487 px | 600 px |
| 390 | 307 px | 359 px | 437 px | 600 px |
| 768 | 333 px | 387 px | 467 px | 600 px |
| 1440 | 379 px | 433 px | 513 px | 600 px |

850 px yükseklikte de dört genişlikte ana eylem/demo/sınıf bağlantıları hero içinde kaldı; yatay taşma görülmedi. Dar/kısa ekran sonucu fiziksel telefon testi değildir. 900 px altındaki ekranlarda mevcut aşağı ok ile son sınıf satırının üst üste binmesi önlendi; ana Atölyeyi keşfet bağlantısı aynıdır.

## Hareket değişikliği özeti

| Önce | Sonra |
| --- | --- |
| Sınıf değişiminde bütün panel için 500 ms clipPath veya mobil opacity/translate | Yalnız ilgili gerçek clay nesnesi, 180 ms; mobil/klavye/reduce anlık |
| Aşağıdaki kesir anlatımı görünür olunca otomatik 2.4–3 saniyelik dönüşüm | Sabit model; tek etkileşim hero içindeki Dene |
| Yeni etkileşimin kesintili/arka sekme yönetimi yok | Hızlı hamlede önceki animasyon iptal, gizlilik/görünürlük/tercih değişiminde durdurma |

## Doğrulama

- node --check: features/workshop/catalog.js, features/home/workshop-preview.js, features/home/discovery-motion.js.
- node tests/discovery-motion-contract.cjs: üretim modülünde anlık durum, 180 ms hareket, hızlı ters hamle, offscreen/hidden/reduce iptali, klavye, animate API fallback. Bu DOM/olay simülasyonudur; native OS media testi değildir.
- git diff --check geçti. features/entrance/ dosyaları önceki adayla birebir aynı. Yaklaşma .08–.62, panel .68–.94, ready .94 kaynak eşikleri değiştirilmedi.
- Gerçek Chromium katalog ve mini gösterim kontrolleri yukarıdadır. Tam giriş akışında Atölyeyi keşfet ve PageDown sonrası panel-ready/inert kaldırılması görüldü. Kapsamlı hızlı/geri scroll regresyonu T62'de kalır.
- CUA pointer aracı öğeyi otomatik ortalayarak scroll konumunu geri kaydırdı ve p<.94'te paneli inert yaptı. Bu nedenle beş ardışık pointer seçimi giriş scripti çıkarılmış yalnız-QA kopyada test edildi; tam sayfadaki pointer serisi geçti diye raporlanmaz. Tam sayfada klavye sınıf geçişleri doğrulandı.
- Ekran görüntüsü screenshots/T47-hero-section.jpg, giriş maskesi hariç yalıtılmış hero bölümünün gerçek Chromium görüntüsüdür. Tam sayfa ve kısa iframe ekran kaydında bazı screenshot çağrıları zaman aşımına uğradı; ölçüm sonuçları DOM'dan alındı, mobil ekran kanıtı sunulmaz.

## Kalan sınırlar

Gerçek iPhone/Safari/dokunma/ekran okuyucu, işletim sisteminin reduced-motion ayarı ve native %200 browser zoom doğrulanmadı. T37'nin zoom açığı açık. Kesin FPS/GPU veya daha hızlı öğrenme/bulma iddiası yok. Design Taste bağımsız inspector çalıştırılmadı; mevcut kimlik ve gerçek ekran gözlemiyle görsel kontrol yapıldı. Web Animation Design uygulandı; Motion Docs reduced-motion araması yapıldı, paket/ücretli örnek/üretim kredisi kullanılmadı.

T47'nin ortak hareket yaşam döngüsü, tek gösterim düzeni ve önizleme entegrasyonu için index + ortak JS/CSS birlikte güncellendi; 1–3 dosya tercihi bu küçük ortak sözleşme nedeniyle aşıldı. .openai, preview-public ve QA kopyaları Git'e girmez.

## Durma noktası

T41–T47 aday uygulaması ve belirtilen kontroller tamamlandı. T48'e geçilmedi. Main birleşmesi veya canlı yayın yok.
