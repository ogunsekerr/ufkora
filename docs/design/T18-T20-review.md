# UFKORA · Aşama 4 tamamlanma kaydı — T18–T20

23 Ekim 2026 · Çalışma dalı: `task/t18-t20-workshop-tools`

## Tamamlanan işler

- [x] T18 — Sınıf bağlantıları, arama, içerik türü ve konu filtresi metinli tek araç alanında toplandı. Seçili sınıf renk, kenarlık ve alt çizgiyle belirtiliyor. Filtreleri temizle düğmesi üç alanı sıfırlıyor.
- [x] T19 — Mobilde konu filtresi yerinde açılan native details alanına taşındı. Arama, sınıf ve tür görünür kalıyor. Escape kapanışı odağı summary başlığına döndürüyor; seçilen değer korunuyor. Masaüstünde konu alanı açık. Modal veya odak tuzağı eklenmedi.
- [x] T20 — Araçlar normal belge akışında bırakıldı. Sabit bar eklenmedi; içerik ve başlat bağlantıları örtülmüyor. Safe-area boşlukları, kısa yatay ekran ve en az 44px kontroller düzenlendi.

T16–T17'nin önceki çalışmalarıyla Aşama 4 uygulaması tamamlandı. T21 başlatılmadı; kullanıcı onayı bekleniyor.

## Teknik kapsam

`atolye.html` ve `features/workshop/catalog.js` düzenlendi. Dört küçük, atölyeye özgü dosya eklendi: `catalog-tools.css`, `catalog-drawer.css`, `catalog-drawer.js`, `catalog-safe-area.css`.

Ek animasyon veya arayüz kütüphanesi kurulmadı. Oyun verileri, kazanım kodları, oyun rotaları, ana sayfa, onaylı logo ve fontlar, altıgen giriş zamanlaması değiştirilmedi. Mevcut clay görselleri korunuyor; yeni görsel üretildiği iddia edilmiyor. Üretim/main dağıtımı yapılmadı.

## Doğrulama

- İki JavaScript dosyasında `node --check`; `git diff --check` geçti.
- Gerçek tarayıcıda 5. sınıf: tüm içerikler 9; Oyun 4; Oyun + Sayılar 1; eşleşmeyen arama 0 ve boş durum mesajı görünür; temizleme sonrası 9 içerik.
- 390px dış iframe: konu alanı başlangıçta kapalı. Açma, konu seçimi, Escape ile kapanma, SUMMARY odağı ve seçimin korunması doğrulandı.
- 320px dış iframe: içerik genişliği 305px; scrollWidth 305px, yatay taşma yok. Görünür en küçük kontrol yüksekliği 44.39px.
- 700×360 dış iframe: içerik genişliği/scrollWidth 685px; araç alanı static, filtre gövdesi overflow visible. İç içe kaydırma tuzağı eklenmedi.
- 800px dış iframe: içerik genişliği/scrollWidth 785px. İki sütun; konu seçimi yaklaşık 496px genişliğinde, sıkışmıyor.
- Masaüstü ve mobil açık konu alanı ekran görüntüleri alındı. İframe kontrolleri CSS/DOM davranışını doğrular; fiziksel telefon testi değildir.

## Açık kontroller ve karar

Gerçek iOS/Safari, çentik safe-area, ekran klavyesi ve fiziksel cihazda yön değiştirme T04 cihaz kontrolü kapsamında açık. Bu çalışma gerçek cihaz performansı/FPS sertifikasyonu değildir.

Sonraki görev T21: kartların ad, sınıf, kazanım, amaç ve görsel veri alanlarını düzenlemek. Doğrulanmayan kazanım kodu eklenmeyecek. Yalnız kullanıcı onayıyla başlanacak.
