# UFKORA — T21 ve T22 kontrol kaydı

23 Ekim 2026 · `task/t21-t22-pilot-foundation`

- [x] T21 — Üç pilot için kart veri alanları belirlendi.
- [x] T22 — İlk pilot Bahçe Mimarı'nın mevcut clay görselinin gösterimi iyileştirildi.
- [ ] T23 — Kullanıcı onayı bekleniyor; başlanmadı.

## T21 · Kart veri sözleşmesi

Tek kaynak `catalog.js` olarak korundu. Yeni bir paralel katalog veya kütüphane eklenmedi.

| Alan | Anlamı |
|---|---|
| title | Oyunun mevcut adı |
| grade | Mevcut sınıf düzeyi |
| codes / outcomes | Mevcut kazanım kodları ve açıklamaları |
| curriculumSource / curriculumNote | Kaynak ve eşleşme sınırları |
| desc | Mevcut kısa kart açıklaması |
| image | Mevcut clay varlığının yolu |
| url | Mevcut oyun hedefi |
| preview.id | Üç pilot için sabit kimlik |
| preview.goal | Oyuna özgü kısa öğrenme amacı; sonraki önizleme görevlerinde kullanılacak |
| preview.imageAlt / imageWidth / imageHeight | T22'de ilk pilot için açıklama ve gerçek kaynak boyutları; diğer iki görsel T23/T24 kapsamı |

| Pilot | Sınıf | Korunan kodlar | Amaç |
|---|---|---|---|
| Bahçe Mimarı | 5 | MAT.5.4.1–MAT.5.4.4 | Dikdörtgen bahçenin kenarlarını değiştirerek alan ve çevre ilişkisini keşfetmek |
| Sayı Kargo | 5 | MAT.5.1.1 | Sayıları milyonlar, binler ve birler bölüklerine ayırıp yerleştirmek |
| Işık Rotası | 5 | MAT.5.3.3, MAT.5.3.4 | Açıyı ölçüp bütünler açıyı hesaplayarak ışığı yönlendirmek |

Kodlar mevcut taslak kaynak kayıtlarından korunmuştur; bu görev yeni MEB doğrulaması yapıldığı anlamına gelmez. Kodu eksik kayıtlar boş bırakıldı. Yeni kazanım kodu üretilmedi. Üç pilotun amaç alanı henüz sayfada yeni bir panel olarak gösterilmez; “Nasıl oynanır?” arayüzü T25 kapsamındadır. Ana sayfadaki mevcut ilk üç oyun sırası değiştirilmedi.

## T22 · Bahçe Mimarı görseli

Mevcut `assets/activities/bahce.webp` incelendi ve yeniden kullanıldı: 768×512, 3:2, 66.178 bayt (yaklaşık 65 KiB). Clay doku, kare bölmeler, kırmızı çevre çiti, bitkiler ve gölet oyunun temasına uygundur. Yeni görüntü üretilmedi; dosya yeniden sıkıştırılıp ayrıntı kaybettirilmedi.

Sadece bu pilotun ana sayfa ve sınıf kartında `object-fit: contain` uygulanır. Ana sayfanın basık görsel yuvasında bahçenin tamamı görünür; yanlarda krem boşluk oluşması bilinçli tercihtir. Kaynak boyutları ve alternatif metin iki dinamik kart üreticisinde kullanılır. Lazy loading korunur, async decoding eklenir. Onaylı hover yakınlaştırması ve reduced-motion kuralları değiştirilmez; yakınlaştırma sırasında kenar kesilmesi mevcut davranışın parçasıdır.

## Kontroller

- `node --check`: katalog ve iki kart üreticisi geçti.
- `git diff --check` geçti.
- Node/VM karşılaştırması: 16 kaydın önceki tüm alanları birebir aynı; yalnız üç pilotta preview alanı eklendi. Üç kimlik benzersiz. Mevcut tüm oyun hedefleri ve görsel dosyaları yerinde. Pilot kodları mevcut outcome kodlarıyla eşleşiyor.
- Tarayıcıda Bahçe araması 1 sonuç; sınıf kartında kaynak 768×512, yüklü, alternatif metin dolu, contain etkin.
- Ana sayfa Atölyeyi keşfet → Oyunlar akışı çalıştı; Bahçe görseli tam kadrajda ve aynı oyun hedefine bağlı. Giriş animasyonu dosyaları değiştirilmedi.
- 390px dış iframe (iç genişlik 375px): kart 335px, scrollWidth 375px; yatay taşma yok. Oyun bağlantısından Tab ile kazanım açıklamasına geçiş çalıştı.
- Değişen katalog/önizleme modüllerinden hata gözlenmedi. Tarayıcı uzantısı kayıtları ve yerel HTTP ana sayfasında `assets/contact.js` kaynaklı `crypto.randomUUID is not a function` kaydı var. İletişim modülü bu değişiklikte düzenlenmedi; HTTPS üretim ortamı bu görevde test edilmedi.

Fiziksel mobil/Safari testi yapılmadı. Üretim/main yayını yapılmadı. Mevcut logo, fontlar, sınıf renkleri ve altıgen giriş zamanlaması korundu. T23–T24 görselleri veya T25 çekmecesi henüz uygulanmadı.
