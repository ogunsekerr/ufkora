# Y13 · Lazer Aynaları

Kaynak: etkinlikler/maarif-atolyesi.html. Görev dalındaki uygulamadır; gerçek cihaz kabulü ve canlı yayın yok.

| Adım | Sonuç |
| --- | --- |
| Y13-01 | Tümler/bütünler hedefte verilen ve eksik açının toplamı 90°/180°. Başarı 50 puan; aynı görev ikinci kez puan vermez. |
| Y13-02 | Mevcut 768×512 maarif.webp clay görseli incelendi. Giriş örneği: 35° + 55° = 90°. Son cihaz netlik/boyut testi açık. |
| Y13-03 | Ortak native giriş bağlandı. Kolay 10° katları; Orta 5° katları; Zor tam derece verilen açılar. Eksik açı tam toplamdan hesaplanır. |
| Y13-04 | Süresiz/60/120/180, aktif-zaman sayacı, hidden ve geri bildirimde pause, süre sonu inert kilidi, dışarıda tekrar/ayarlar. Üretim adapter VM testi geçti. |
| Y13-05 | Üç ana tema ve geometri iki alt kontrolü korunur; giriş çalışma seçimi beş akışa doğrudan erişir. Küçük ekran tarayıcı kontrolü bekler. |
| Y13-06 | Üretim JS matematik/puan/adapter testi geçti; gerçek klavye/touch/OS reduced-motion ve screenshot kabulü yapılmadı, açık. |

Test: `node tests/maarif-rollout-contract.cjs`. 900 profil örneği, beş üretim akışı × üç seviye; tek ödül, hidden pause, expiry, retry. DOM simülasyonu cihaz testi değildir.
