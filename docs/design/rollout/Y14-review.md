# Y14 · Bölükler ve Basamak Röntgeni

Kaynak: etkinlikler/maarif-atolyesi.html. Görev dalındaki uygulamadır; gerçek cihaz kabulü ve canlı yayın yok.

| Adım | Sonuç |
| --- | --- |
| Y14-01 | Milyonlar/binler/birler yerleşimi ve basamak değeri. Konteyner aşaması 50, kasa aşaması 40 puan; her aşama tek ödül. Sıfır basamak seçenek döngüsü sonlu hale getirildi. |
| Y14-02 | Mevcut 768×512 maarif.webp clay görseli incelendi. Giriş örneği: 24 006 305 ve yer tutucu sıfırlar. Son cihaz netlik/boyut testi açık. |
| Y14-03 | Ortak native giriş bağlandı. Kolay 3, Orta 6, Zor 9 konteyner seçeneği. Röntgen desteği tüm düzeylerde korunur. |
| Y14-04 | Süresiz/60/120/180, aktif-zaman sayacı, hidden ve geri bildirimde pause, süre sonu inert kilidi, dışarıda tekrar/ayarlar. Üretim adapter VM testi geçti. |
| Y14-05 | Üç ana tema ve geometri iki alt kontrolü korunur; giriş çalışma seçimi beş akışa doğrudan erişir. Küçük ekran tarayıcı kontrolü bekler. |
| Y14-06 | Üretim JS matematik/puan/adapter testi geçti; gerçek klavye/touch/OS reduced-motion ve screenshot kabulü yapılmadı, açık. |

Test: `node tests/maarif-rollout-contract.cjs`. 900 profil örneği, beş üretim akışı × üç seviye; tek ödül, hidden pause, expiry, retry. DOM simülasyonu cihaz testi değildir.
