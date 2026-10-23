# Y06 · Küp oluşturma ve görünüş inceleme

23 Ekim 2026. Kaynak: `etkinlikler/birim-kup.html`. K7 kullanıcı onaylıdır; bu rapor canlı yayın veya gerçek cihaz kabulü değildir.

| Adım | Uygulama / kanıt | Kabul sınırı |
| --- | --- | --- |
| Y06-01 | Serbest uzamsal keşif; bir küp birim hacimdir. Eklenen benzersiz küp sayısı hacimdir. 4–8 ortak kapsam korunur; yeni puan veya sınıfa özel kazanım kodu uydurulmadı. | Resmî müfredat yeniden denetlenmedi. |
| Y06-02 | Mevcut `kup.webp` (768×512) açılıp clay görünümü incelendi. Tek küp/ikinci küp görünüşü karşılaştıran kısa örnek girişte. | Son cihaz netliği/mobil ölçümü yapılmadı. |
| Y06-03 | Native giriş ve gerçek yapı karmaşıklığı seçimi: tek küp / dört küplü yapı / sekiz küplü 2×2×2. Bunlar gerçek mevcut presetleri yükler. Serbest laboratuvara sahte Kolay/Orta/Zor oyunu veya puanı eklenmedi. | Bu bir otomatik değerlendirmeli yeni oyun değildir. |
| Y06-04 | Süresiz/60/120/180 aktif zaman; hidden pause; süre sonunda yapı korunarak inert kilidi; yeniden başlat seçilen yapıyı yükler. Ayarlar görünüş dışında erişilebilir. | Saat/shell üretim JS testi geçti; gerçek visibilitychange cihaz testi değil. |
| Y06-05 | Altı mevcut preset, bütün mevcut kamera/2D görünüşler, renk/çizgi/PNG seçenekleri korunur. Preset/2D görünüş yüzeylerine Enter/Space desteği eklendi. | Gerçek küçük ekran/WebGL kabulü açık. |
| Y06-06 | Native koordinat sütun/kat/sıra girişleriyle küp ekle/sil; render edilmiş görsele tıklama şart değil. Reduced-motion'da damping kapanır, değişiklik izlenir. Altı preset, hacim, dedup, önden doluluk ve üstten yükseklik toplamı üretim kodunda geçti. | Fiziksel touch/klavye/WebGL/rendered ekran ve OS reduced-motion kabulü yapılmadı; kart tamamen kapatılmaz. |

WebGL başlatma Başlat'tan önce çalışmaz. Başlatma hatası mevcut açıklamalı geri dönüşü gösterir; geri bağlantıları süre kilidinden muaf kalır. Başlangıç odağı native X sütun girişine gider. Genel arka plan/efekt veya paket kurulmadı.

Kontrol: `node tests/spatial-contract.cjs`, `node tests/spatial-entry-contract.cjs`; inline/adapter JS syntax, diff whitespace geçti. Testler DOM/render stub kullanır; GPU/gerçek cihaz performans kanıtı değildir. Serbest laboratuvar zorluk seçimi için yeniden etiketlenmedi: giriş gerçek başlangıç yapısının karmaşıklığını seçer.
