# T55 · Üç pilotun öğrenci akışı

23 Ekim 2026. Çalışma dalı: task/t55-t56-flow-acceptance.

- [x] T55: 5. sınıf kataloğundan üç pilotun gerçek Başlat bağlantısı, kazanım/yardım, giriş, zorluk/süre, başlat, sonuç, tekrar ve geri yolları kontrol edildi. Önceki oturumun testleri yanında aşağıdaki yeni kontroller yapıldı.

| Pilot | Gerçek Chromium kontrolü |
| --- | --- |
| Bahçe Mimarı | Normal hareket açık (Hareketleri azalt kapalı): Enter/oklar ile 4×3 çizim → çit → 12 kare kaplama → 12 cevabı → 3 yıldız → görev 2 → yeniden başlat → menüye dön. Kazanım ve giriş ayarları önceki T37/T50 kontrollerinde doğrulanmıştı. |
| Işık Rotası | Katalog Geometri → örnek/kazanım → Başlat bağlantısı → Orta + 60 saniye → Enter ile Başlat → klavyeyle 40° → doğru → görev 2 → tekrar → Ayarlar. Tekrarda görev 2, puan 1 ve süreli oyun korundu. |
| Sayı Kargo | Katalog Sayılar → örnek/kazanım → Başlat bağlantısı → 180 saniye → 24/006/305 kasalarını Enter ile yerleştir → doğru → görev 2 → tekrar (180 sn, puan 1) → Ayarlar → Oyun seçimi → 5. sınıf kataloğu. |

## Bahçe açık sorununun düzeltmesi

Çit süresi yalnız requestAnimationFrame çizim karelerinden birikiyordu. Bu oturumda düşük kare ilerlemesi nedeniyle normal yol bekliyordu. Çit süresi mevcut performance.now aktif-zaman saatine bağlandı; çizim döngüsünün süreyi ilerletmesi kaldırıldı. Yardım/arka plan duraklaması ve çit sırasında görev sayacının durması korundu. Yeni motor veya animasyonu bekleyen yönlendirme yok.

Yeni üretim-JS regresyon testi, hiç render frame çalıştırmadan 800 ms çit + yardımda 5 sn + arka planda 5 sn + 800 ms çit senaryosunda paint aşamasına geçildiğini ve 60 sn görev süresinin korunmasını doğrular. Bahçe 8×3 ve Kargo/Işık 5×3 sözleşme testleri geçti. Inline JS sözdizimi ve diff kontrolü geçti.

T52–T54 raporundaki normal çit açık maddesi bu düzeltme ve yukarıdaki gerçek normal-akış kontrolüyle bu dal için kapandı. Bu kayıt tek başına canlı yayın onayı değildir. Son yayın adayında yeniden smoke kontrolü yapılmalı.

Fiziksel telefon/Safari, ekran okuyucu ve gerçek cihaz performans ölçümü yapılmadı. Bu görev T57'nin ekran matrisi veya T58'in yayılım kararı yerine geçmez. Önceki test sınırları geçerlidir.
