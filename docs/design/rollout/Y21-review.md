# Y21 · Yansıma Kendin Taşı ve Çiz

23 Ekim 2026. Kaynak: `etkinlikler/yansima.html` activity sekmesi. K7 onaylı; canlı yayın/cihaz kabulü yok.

| Adım | Uygulama / kanıt | Kabul sınırı |
| --- | --- | --- |
| Y21-01 | Köşeleri doğru yansıma konumuna yerleştirme; puan yalnız doğru yerleştirmede. Aynı soruyu yeniden kontrol ederek/move edip geri getirerek tekrar puan alma engellendi. | Öğrenme başarısı ölçülmedi. |
| Y21-02 | Mevcut `yansima.webp` clay görseli ve (−3,2)→(3,2) örneği girişte. | Son cihaz boyut/okunurluk kabulü açık. |
| Y21-03 | Gerçek görev karmaşıklığı: iki nokta+dikey, dört köşe+yatay, çok noktalı F+eğik ayna. Kaynak shape/axis parametrelerini değiştirir; bütün eski şekil ve eksen butonları kullanılabilir. | Zorluk yalnız etiket değildir; otomatik başarı iddiası yok. |
| Y21-04 | Süresiz/60/120/180; aktif-zaman hidden pause; süre sonunda çizim korunarak inert kilit; tekrar/ayarlar dışarıda erişilebilir; yeni soru süreyi baştan verir. Doğru çözüm saati durdurur. | Gerçek cihaz süre/visibilitychange testi açık. |
| Y21-05 | Gerçek laboratuvar ve etkinlik sekmeleri korunur; başlatmada soru oluşturulur. Native köşe seçimi/X/Y/yerleştir formu drag zorunluluğunu kaldırır. | Küçük ekran/touch kabulü yapılmadı. |
| Y21-06 | Üretim matematik testi: 7 şekil×3 eksen×20 soru; dört aynada involüsyon/uzaklık; bir soruya tek ödül. Ulaşılamaz hedef düzeltildi: orijinal şekil bazen ±8'e çıkıyordu, öğrenci ±7'ye kilitliydi; bütün şablon artık aynı erişilebilir aralıkta ötelenir. | VM/render stub; gerçek klavye/touch/screenreader/OS reduced-motion kabulü açık. |

Kontrol: `node tests/spatial-contract.cjs`, `node tests/spatial-entry-contract.cjs`; inline/adapter syntax ve diff whitespace geçti. Kaynak şeklin biçimi bozulmadan yalnız bütünsel ötelenme sınırı düzeltilir. Başlat odağı native köşe seçimine gider. Bu kart tüm cihaz kabulü tamamlandı diye kapatılmaz.
