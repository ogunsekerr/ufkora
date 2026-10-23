# T34–T36 · İkinci ve üçüncü pilot bağlantısı

23 Ekim 2026. Başlangıç: task/t30-t33-bahce-entry. Çalışma dalı: task/t34-t36-pilot-entry.

## Uygulama

- T34 — Sayı Kargo ortak giriş düzenine bağlandı: mevcut clay görsel, kısa amaç, açılır yardım/kazanım, açıklamalı native Kolay/Orta/Zor ve Süresiz/60/120/180 saniye. Ortak keşif dosyasında Işık Rotası için de temel bağlantı aynı commit'te kuruldu (c9b3bbc).
- Kargo zorluğu yardım düzeyidir: Kolay kasa üzerinde bölük ipucu; Orta ilk kontrol sonrasında; Zor yalnız sayılar. Tekrarlı 008 kasaları aynı matematiksel değeri temsil eder; doğru yerleştirme kuralları değişmedi.
- T35 — Işık Rotası bağlantısı doğrulandı (16c2e1c). Kolay tüm görevlerde açıölçer açık; Orta bütünler görevlerinde isteğe bağlı; Zor aynı isteğe bağlı destekle beraber sayı etiketleri 10 yerine 30 derecede gösterilir. 5 derecelik çizgiler ve 1 derecelik ayar korunur. Açıölçer düğmesi aria-pressed durumunu bildirir. Bütünler koşulu kısa yönergede korunur.
- URL difficulty=easy|medium|hard, duration=0|60|120|180. Eksik, geçersiz, yinelenen ayarlar easy/0 olur. Direkt URL giriş ekranını açar, oyunu başlatmaz. Her yüklemede oyun modu kendi durumunu oluşturur; ayarlar localStorage üzerinden taşınmaz.
- T36 — Sayaç görev başına performance.now ile işler. Başlat/sonraki görev/tekrar tam süre verir; arka sekmede ve yardımda durur. Görev tamamlandığında/süre bittiğinde ilerlemez. Süre sonunda hamleler kilitli, tekrar ve Ayarlar erişilir. Aynı görevi tekrar çözmek puanı artırmaz. Ayarlara dönüş mevcut görevi bırakır; Başlat yeni oturumu ve puanı sıfırlar, seçilen ayarları korur.
- Tamamlanmış Işık/Kargo görevi artık yeniden başlatılabilir. Çember Tamircisi mevcut giriş ve tekrar davranışını korur.
- Öğrenci ekranından uzun kazanım metni ve tekrar eden alt açıklamalar kaldırıldı; yardımda erişilebilir. Kartlar, ana sayfa ve giriş animasyonu değiştirilmedi. Oyun sahneleri yeniden tasarlanmadı.

## Doğrulama ve sınırları

Geçti: node --check (kesif inline script), git diff --check, node tests/kesif-entry-contract.cjs, node tests/bahce-entry-contract.cjs.

DOM simülasyonunda üretim JS çalıştırıldı: iki pilot × üç zorluk × beş görev; geçersiz/yinelenen parametre; otomatik başlamama; üç süre ve Süresiz; arka sekme/yardım duraklaması; bitiş kilidi; tamamlanmış görevi tekrar; puan tekrarı; Ayarlar sonrası yeniden başlama; Çember modu izolasyonu. Bahçe testinde sekiz görev × üç destek düzeyi ve saat sözleşmesi geçti.

**T36 otomatik davranış kontrolleri geçti; gerçek tarayıcı kabulü açık.** Bu oturumda tarayıcı/telefon görüntüsü üretilmedi. Native radyo klavyesi, gerçek visibilitychange, dokunma, responsive görünüm, %200 zoom ve Safari doğrulanmadı. Bu sonuçlar cihaz testi yerine geçmez. Önceki T33 görsel kabul eksikleri devam eder. T37'ye geçilmedi; main veya canlı yayın değiştirilmedi.
