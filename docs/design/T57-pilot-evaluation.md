# T57 · Pilot değerlendirmesi

23 Ekim 2026. Başlangıç karşılaştırması: `7af6d93` (Aşama 9 sonu); incelenen pilot: `32226b4` (T56). Bu çalışma yeni tasarım önerisi değildir.

| Alan | Önce | Sonra / kanıt |
| --- | --- | --- |
| Bahçe sonucu | Uzun parçacık kutlaması | 180ms clay damgası, kalıcı açıklama; T52–T54 |
| Yanlış yanıt | Açıklama, ağırlıkla renk | ↻ Yeniden dene + açıklama; T55 gerçek görev akışı |
| Press/seçim | Yerel farklı süreler | 120ms ortak press, native checked / aria-pressed / çerçeve |
| Normal çit | Kare teslimine bağımlı | Aktif-zaman saati; framesiz regresyon ve gerçek normal akış geçti |
| Katalog süre etiketi | Süre sınırı yok | Süre seçilebilir; T56 tarayıcı kontrolü |

## Ekran ve erişim kanıtı

| İstenen genişlik | Son mevcut kanıt | Sınır |
| --- | --- | --- |
| 320 | T37: üç girişte taşma yok, kullanılabilir genişlik 305 | Önceki sürüm; son sürümün yeni ölçümü değil |
| 390 | T37: üç girişte taşma yok, kullanılabilir 375; T51 katalog 375/375 | Önceki sürüm; fiziksel telefon değil |
| 768 | T37: üç girişte taşma yok, kullanılabilir 753 | Önceki sürüm |
| 1440 | T37: üç girişte taşma yok, kullanılabilir 1425 | Önceki sürüm |

T37'de CSS belge ölçeği %200 ile de kontrol yapılmıştı; native tarayıcı zoom değildir. T55'te üç pilotun son sürümünde klavye/sonuç/tekrar/geri akışı geçti. OS reduced-motion yeni hareketleri CSS ile kapatır; Bahçe içindeki Hareketleri azalt kontrolü de damgayı/press'i kapatır. Son OS ayarı testi, fiziksel telefon, Safari ve ekran okuyucu yapılmadı.

Yeni 16 ekran matrisi için preview hazırlandı, ilk açılışta sunucu connection refused verdi. Sunucu başlatıldıktan sonra mevcut hata sekmesini edinme isteği tarayıcı güvenlik politikasıyla reddedildi (izin verilmeyen protokol). Alternatif tarayıcı yüzeyi veya otomasyonla kısıt aşılmadı. Bu nedenle yeni görsel matris açık; T57 raporu hazırlanmış olsa da son sürüm görsel kabulü tamamlandı sayılmaz.

Mevcut görseller: [T39 masaüstü](screenshots/T39-topic-rows.jpg), [T40 dar katalog](screenshots/T40-mobile-topic-rows.jpg). Bunlar son sürümün ekran görüntüsü olarak sunulmaz.

## Ölçülebilen kaynak maliyeti

Aşağıdaki gzip yerel `gzip.compress` ölçümüdür; sunucu transfer boyutu veya hız ölçümü değildir. FPS, long task, INP/LCP ve cihaz pil maliyeti ölçülmedi.

| Dosya | Önce bayt | Sonra bayt | Sonra gzip bayt |
| --- | ---: | ---: | ---: |
| features/shared/pilot-feedback.css | 0 | 2131 | 712 |
| features/shared/page-continuity.js | 3616 | 3616 | 1589 |
| features/shared/page-continuity.css | 742 | 742 | 326 |
| oyun-atolyesi/bahce.html | 52081 | 52084 | 18104 |
| oyun-atolyesi/kesif.html | 38798 | 39012 | 12205 |
| features/workshop/catalog.js | 7897 | 7897 | 3221 |

Yeni bağımlılık, font veya raster varlık yok. View Transition varsayılan kapalı; ikinci motor yok. Son sürüm ekran matrisi ve fiziksel cihaz ölçümü açık kabul maddeleridir.
