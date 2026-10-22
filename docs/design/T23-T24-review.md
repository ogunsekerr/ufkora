# UFKORA · T23–T24

23 Ekim 2026 · Dal: `task/t23-t24-clay-pilots`

- [x] T23 — İkinci pilot Sayı Kargo görseli incelendi; gösterim ve alternatif metin düzenlendi.
- [x] T24 — Üçüncü pilot Işık Rotası görseli incelendi; gösterim ve alternatif metin düzenlendi.
- [ ] T25 — Kullanıcı onayı bekleniyor. Nasıl oynanır çekmecesi henüz eklenmedi.

## Görsel karar

Yeni görsel üretilmedi. Mevcut kaliteli WebP varlıkları önceliklendirildi. İki görselde de krem zemin, yumuşak ışık ve hacimli oyun hamuru nesneleri bulunuyor; Bahçe Mimarı ile aynı malzeme ailesini sürdürüyorlar. Aynı görselin varyasyonu değiller.

| Pilot | Varlık | Boyut / dosya | Ayırt edici sahne |
|---|---|---|---|
| Sayı Kargo | assets/activities/kargo.webp | 768×512 · 49.972 bayt | Kargo bandı, üç renkli kasalar ve küpler |
| Işık Rotası | assets/activities/isik.webp | 768×512 · 35.528 bayt | Işık kaynağı, ayna ve hedef |

Kaynaklar yeniden sıkıştırılmadı; ayrıntı kaybı veya ek indirme maliyeti oluşturulmadı. Sayı Kargo görselindeki küpler dekoratif temsildir; kesin bir basamak sayısı modeli değildir. Işık görseli atmosferik önizlemedir; ölçülü optik diyagram olarak sunulmaz.

T22 ile aynı scoped contain kuralı iki pilota uygulandı. Özellikle ana sayfanın basık görsel yuvasında kasalar ile kaynak–ayna–hedef sahnesi kırpılmadan görünür. Oran farkında krem boşluk oluşabilir. Mevcut renkli hover yakınlaştırması korunur; hover sırasında kenar kırpılması önceki davranışın parçasıdır. İki kart üreticisi T22'de hazırlanmış alternatif metin ve kaynak boyutu alanlarını kullanır; bu görev o alanları iki pilotta doldurur.

## Kontrol

- `node --check catalog.js` ve `git diff --check` geçti.
- Node/VM karşılaştırması: 16 kaydın yalnız iki pilotunda imageAlt/imageWidth/imageHeight eklendi. Ad, sınıf, amaç, kod, açıklama, görsel yolu ve oyun hedefleri aynı kaldı.
- Masaüstü sınıf sayfasında üç pilotun kaynakları yüklü, 768×512 ve contain etkin. İki yeni alternatif metin erişilebilir bağlantı açıklamalarında göründü.
- Kargo ve Işık aramaları ayrı ayrı 1 içerik gösterdi. Bağlantılar aynı kesif.html dosyasına doğru oyun parametresiyle gidiyor.
- 390px dış iframe: iki pilotta iç genişlik ve scrollWidth 375px; yatay taşma görülmedi. Fiziksel telefon testi yapılmadı.
- İki kartın ekran görüntüleri alındı. Ana sayfa kart üreticisi ve organizasyonu değiştirilmedi; bu görevde ana sayfa akışı tekrar test edilmedi.

Oyun içlerine girilip oynanmadı; oyun kodları düzenlenmedi. Altıgen giriş, sınıflar, logo, fontlar ve kazanımlar korundu. Yeni bağımlılık, ücretli üretim veya üretim/main yayını yok. T25 için yeniden onay alınacak.
