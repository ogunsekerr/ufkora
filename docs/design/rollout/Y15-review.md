# Y15 · Halı ve Bahçe Ustası

Kaynak: etkinlikler/maarif-atolyesi.html. Görev dalındaki uygulamadır; gerçek cihaz kabulü ve canlı yayın yok.

| Adım | Sonuç |
| --- | --- |
| Y15-01 | Alan/çevre seçiminden miktar ve birim fiyatla maliyet. Başarı 60 puan; tekrar kontrol puanı şişirmez. |
| Y15-02 | Mevcut 768×512 maarif.webp clay görseli incelendi. Giriş örneği: 4×3 m: alan 12 m², çevre 14 m. Son cihaz netlik/boyut testi açık. |
| Y15-03 | Ortak native giriş bağlandı. Kolay 2–5 × 2–4 m; Orta 4–6 × 3–5 m; Zor 4–8 × 3–5 m kenarlar. Mezura/alan/çevre araçları korunur. |
| Y15-04 | Süresiz/60/120/180, aktif-zaman sayacı, hidden ve geri bildirimde pause, süre sonu inert kilidi, dışarıda tekrar/ayarlar. Üretim adapter VM testi geçti. |
| Y15-05 | Üç ana tema ve geometri iki alt kontrolü korunur; giriş çalışma seçimi beş akışa doğrudan erişir. Küçük ekran tarayıcı kontrolü bekler. |
| Y15-06 | Üretim JS matematik/puan/adapter testi geçti; gerçek klavye/touch/OS reduced-motion ve screenshot kabulü yapılmadı, açık. |

Test: `node tests/maarif-rollout-contract.cjs`. 900 profil örneği, beş üretim akışı × üç seviye; tek ödül, hidden pause, expiry, retry. DOM simülasyonu cihaz testi değildir.
