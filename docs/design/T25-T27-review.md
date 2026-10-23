# UFKORA — T25–T27 tamamlanma kaydı

23 Ekim 2026 · `task/t25-t27-pilot-previews`

- [x] T25 — Bahçe Mimarı kartında yerinde açılan Nasıl oynanır alanı ve ayrı Başlat hedefi.
- [x] T26 — Aynı yapının Sayı Kargo ve Işık Rotası'na yayılması; her açıklama bağımsız.
- [x] T27 — Her pilotta ayrı matematiksel mikro hareket.
- [ ] T28 — Kullanıcı onayı bekleniyor; ortak giriş paneli incelemesine geçilmedi.

## Kapsam ve davranış

Sınıf atölyesindeki üç pilot karta amaç, nasıl oynanır, örnek hamle ve süre/görev bilgisi eklendi. Native details/summary kullanıldı; mobilde sayfa akışında açılır, modal değildir. Escape kapatıp odağı kendi başlığına döndürür. Bağımsız açıklamalar aynı anda açık kalabilir. Birinin açılması komşu kartları boş sütunlara uzatmaz.

Pilot kartın dış bağlantısı kaldırılıp içerik kabına dönüştürüldü; ayrı, kalıcı Başlat bağlantısı gerçek oyun URL'sine gider. Başlat açıklamanın dışında yer alır; iç içe bağlantı veya düğme yoktur. Diğer kartlar önceki bağlantı davranışını korur. Ana sayfanın kompakt önizleme paneli ve giriş zamanlaması değiştirilmedi; yardım bileşeni yalnız sınıf atölyesinde yüklenir.

Yeni `features/workshop/pilot-preview.js` ve `.css` dosyaları eklenir; veri tek kaynak `catalog.js` içinde kalır. Yeni kütüphane yoktur.

## Oyun kodlarından alınan içerik

| Pilot | Örnek hamle | Süre bilgisi / kaynak |
|---|---|---|
| Bahçe Mimarı | 4×3 bahçe: 12 m² alan, 14 m çevre | Süre sınırı yok; 8 görev. bahce.html LEVELS ve öğretmen açıklaması |
| Sayı Kargo | 24 / 006 / 305 kasalarını Milyonlar / Binler / Birler yuvalarına koyma | Süre sınırı yok; 5 görev. kesif.html cargo ve round akışı |
| Işık Rotası | İlk hedef için vericiyi 40° yapıp gönderme | Süre sınırı yok; 5 görev. kesif.html light ve setAngle/check akışı |

Kaynak kodları okundu; bu çalışma oyunların baştan sona oynanıp tamamlandığı anlamına gelmez. Yeni zorluk veya süre seçimi eklenmedi. Süre tahmini uydurulmadı. Kazanımlar ve oyun hedefleri değişmedi.

## Hareket karşılaştırması

| Önce | Sonra |
|---|---|
| Bahçe için özel matematiksel örnek yok | 4×3 clay görünümlü modelde yalnız son birim kare yerleşir |
| Kargo için özel matematiksel örnek yok | Yalnız 006 kasası Binler yuvasına oturur |
| Işık için özel matematiksel örnek yok | Sabit açı modelinde yalnız verici yönü 20°'den 40°'ye döner |
| Sürekli yeni hareket yok | Açıklama açıldığında 260ms, bir tekrar; kapalıyken çalışmaz |

Modeller kesin sayısal ilişkiler için HTML/CSS ile oluşturulmuştur; düz SVG köşe simgeleri veya fotoğrafın tamamını sallama eklenmedi. İnce ışık/gölgeyle clay hacmi verilir. Hareketler yalnız transform/opacity kullanır. `prefers-reduced-motion: no-preference` dışında yeni animasyon uygulanmaz; reduce kuralı ayrıca none belirtir. Onaylı renkli yakınlaştırma korunur. Gökkuşağı, imleç dalgalanması veya blur yoktur.

## Doğrulama

- Katalog ve değişen iki JS modülü için `node --check`, `git diff --check` geçti.
- Node/VM karşılaştırması: 16 kaydın önceki alanları birebir korundu; yalnız üç pilotun howTo/example/durationLabel alanları eklendi.
- Tarayıcıda Oyun filtresi 4 içerik. Bahçe ve Işık açıklamaları aynı anda açık; Kargo bağımsız kapalı. Escape Işık açıklamasını kapattı ve doğru summary odağı döndü.
- Enter ile Bahçe aç/kapa çalıştı. Erişilebilir ağaç açık/kapalı durumunu ve üç ayrı oyun adını gösterdi. Fiziksel ekran okuyucuyla test yapılmadı.
- DOM kontrolü: iç içe link, link içinde details veya button sayısı 0; üç ayrı Başlat URL'si doğru.
- 320px dış iframe: Kargo açıklaması açık, iç genişlik 305px ve scrollWidth 305px; yatay taşma yok. Tab summary'den Başlat'a geçti. Başlat'a Enter ile gidildiğinde Sayı Kargo başlığı yüklendi. Oyun tamamlanmadı.
- Üç animasyonun tarayıcı computed değerleri ayrı isim, 0.26s ve iteration-count 1. Reduced-motion kapısı CSS üzerinden kontrol edildi; OS tercihi değiştirilerek veya fiziksel cihazla bu görevde test edilmedi.
- Masaüstü açıklama ve mobil Kargo kanıtları kaydedildi.

Gerçek cihaz performans/FPS iddiası yok. T04 fiziksel cihaz kontrolü açık. Üretim/main yayını yapılmadı. T28 için yeniden onay alınacak.
