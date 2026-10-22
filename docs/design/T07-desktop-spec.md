# T07 — Masaüstü sınıf istasyonları taslağı
23 Ekim 2026. Taslak hazır; görsel yön kullanıcı seçimini bekliyor. Canlı site değiştirilmedi.

## Fikir ve korunanlar
UFKORA'nın birbirine bağlanan matematik nesneleri, öğrencinin özgürce seçebildiği sınıf duraklarına dönüşür. 4→8 sırası müfredat organizasyonudur; görev kilidi, ilerleme zorunluluğu ve kazanılmamış rozet yoktur. Mevcut logo, üç font, beş sınıf rengi ve nesne eşleşmesi korunur.
T07-desktop.svg 1440×1000 kaynak taslağıdır. PNG aynı taslağın render edilmiş önizlemesidir; tarayıcı ekran görüntüsü değildir. Nesneler mevcut clay-motifs.js SVG şekillerinden alınmıştır; nihai foto gerçekçi kil varlığı olarak sunulmaz.

## Kompozisyon
- Solda iki satır başlık; sağda tek destek cümlesi.
- Ortada aynı büyüklükte kart kutuları yerine yükseklikleri hafifçe değişen beş nesne durağı.
- Tek adaçayı bağlantı çizgisi nesnelerin arkasından geçer, yazıya girmez. Gökkuşağı değildir.
- Her durakta görünür sınıf numarası, nesne ve metinli “Atölyeyi aç” bağlantısı.
- 5. sınıf örnek seçimi yalnız renk değil çevre çizgisi ve “seçili” metniyle belirtilir.
- Alttaki Etkinlikler/Oyunlar örneği mevcut önizlemeyle ilişkiyi anlatır; yeni ikinci katalog yaratma veya mevcut giriş panelini taşıma izni değildir. T11–T15 yalnız mevcut sınıf bölümünde uygulanır; sekme çalışmaları T16 sonrasındadır.

## Gerçek hedefler
4: /atolye.html?sinif=4; 5: /atolye.html?sinif=5; 6: /atolye.html?sinif=6; 7: /atolye.html?sinif=7; 8: /atolye.html?sinif=8.
Renk/nesne: mercan-abaküs, sarı-açıölçer, yeşil-terazi, mavi-geometrik nesne, mor-küpler.
8. sınıfta ortak uzamsal düşünme etkinliği bulunduğu notu korunur; mevcut olmayan içerik sayısı yazılmaz.

## Etkileşim sınırı
Metin bağlantısı tek tıklamayla sınıfa gider. Önizleme seçimi ayrıca yapılacaksa ayrı, açık etiketli kontrol olmalı; bağlantı içine düğme yerleştirilmez. Sadece seçim için ilk tıklama tüketilip ikinci tıklama gerektirilmez.
DOM sırası 4–8, normal bağlantılar JS kapalıyken de çalışır. Dekoratif nesne/çizgi aria-hidden; sınıf adını bağlantı taşır. Seçim rengi odağın yerine geçmez. İlk görünüm içerikleri animasyonu beklemez.

## Görsel kontrol ve sınırlar
SVG render açılıp incelendi; başlık/nesne/bağlantı alanlarında üst üste binme görülmedi. İlk render'da WebP logo desteklenmediği için aynı logo kayıpsız PNG biçimine çevrilerek gömüldü; logo tasarımı değiştirilmedi. Üç gerçek font Google Fonts kaynaklarından yalnız taslak render klasörüne alındı; fontconfig eşleşmeleri doğrulandı, sisteme paket kurulmadı.
Bu SVG responsive web testi değildir. T04 mobil gerçek görünüm ve cihaz kontrolü açık kalır. Taslak fontları hedef sistemde yoksa SVG açılışında fallback olabilir; PNG referans görünümü sabittir.
