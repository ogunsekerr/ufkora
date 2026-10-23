# T37–T40 · Giriş kontrolü ve 5. sınıf konu sıraları

23 Ekim 2026. Kaynak: T34–T36 (uzak commit 1e1f252). Çalışma dalı task/t37-t40-topic-catalog. Main/canlı yayın değişmedi.

## Sonuç

- T37: üç pilotun gerçek Chromium giriş kontrolleri yapıldı. Native radyolarda ok tuşları, Tab, görünür 3 px odak, Enter ile Başlat ve canvas'a odak geçişi geçti. 320/390/768/1440 px iframe × %100/%200 CSS belge ölçeğinde yatay taşma yok. **Native tarayıcı %200 yakınlaştırması kontrol edilmedi; T37 bu madde nedeniyle kısmen açık.** Gerçek iPhone/Safari ve dokunma da doğrulanmadı. Kaynak oyuna ek CSS/JS değişikliği gerekmedi.
- T38: mevcut dokuz kayıt için taslak ve eşleme kaydedildi. Yeni içerik veya kazanım eklenmedi.
- T39: section/h2 + ul/li konu sıraları, h3 kart başlıkları ve bağımsız native details ayrıntıları uygulandı. Her içerikte ayrı gerçek Başlat bağlantısı var. Konu sıralarını kapatan ek katman yok; details içinde details yok. Üç pilotun mevcut örnek hamlesi Nasıl oynanır içinde; diğer içeriklerin mevcut açıklamaları İçerik ve kazanımlar içinde.
- T40: Geometri 6, Sayılar 1, Karma konular 2 kayıtla tamamlandı. Bahçe Mimarı yalnız bir kez, kendi sırasında öne çıkıyor. Filtreler yalnız dolu sıraları üretir. Konu başlığının kartlarda gereksiz tekrarı kaldırıldı. Kartlar görünümüne dönüş seçeneği korundu. 4/6/7/8. sınıflar eski görünümde kaldı.

## Gerçek tarayıcı kanıtları

Desteklenen sites-preview üzerinden bulut Chromium. Genişlikler fiziksel cihaz değil iframe çerçevesidir; kaydırma çubuğuyla içerik genişlikleri 305/375/753/1425 px oldu.

| Kontrol | Sonuç |
| --- | --- |
| Varsayılan 5. sınıf | 9 kart, 3 dolu sıra, 1 öne çıkan oyun |
| Oyun filtresi | 4 kart, Geometri + Sayılar |
| Oyun + Sayılar | 1 kart, yalnız Sayılar |
| Eşleşmeyen arama | 0 kart, 0 sıra, boş sonuç metni görünür |
| Filtreleri temizle + Kartlar | 9 kart, konu sırası yok |
| Konu sıralarına dönüş | 9 kart ve 3 sıra geri gelir |
| Kazanım ve örnek | Enter ile açılır; kazanım açıklamaları/kaynak korunur |
| Dahili bağlantı yapısı | 9 özgün hedef, iç içe bağlantı yok |
| Görseller | 9 görsel yüklü; yeni varlık üretilmedi |
| 320/390 px katalog | Tek sütun, scrollWidth = clientWidth |
| 768 px katalog | İki sütun, yatay taşma yok |
| 1440 px katalog | Üç sütun, yatay taşma yok |
| 4/6/7/8. sınıf regresyonu | Sırasıyla 2/2/2/1 kart; pilot görünüm seçicisi ve konu sıraları yok |

Node --check features/workshop/catalog.js ve git diff --check geçti. İnceleme CUA üzerinden yapıldı; skill'in bağımsız inspector betiği çalıştırılmadı, sayısal estetik/erişilebilirlik puanı verilmedi. Clay varlıklar, renkler ve onaylı tipografi korundu. Ekran görüntüleri bu klasörün screenshots altındadır. Görünüm iframe testleri fiziksel mobil performans sonucu değildir.

## Değişen kaynak

features/workshop/catalog.js, features/workshop/topic-rows.css, atolye.html. Katalog veri kaynağı ve oyun kaynakları değişmedi. .openai ve preview-public yalnız yerel QA; Git'e dahil edilmedi.

## Durma noktası

T38–T40 uygulandı ve ilgili kontroller geçti. T37'nin native %200 zoom kabul maddesi açık. T41'e başlanmadı. Canlıya yayın ve tüm sınıflara yayılım yok.
