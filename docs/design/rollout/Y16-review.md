# Y16 · Simyacı İksir Laboratuvarı

Kaynak: etkinlikler/maarif-atolyesi.html. Görev dalındaki uygulamadır; gerçek cihaz kabulü ve canlı yayın yok.

| Adım | Sonuç |
| --- | --- |
| Y16-01 | Birim kesir kabıyla reçetedeki miktar; eşdeğer kesir tam çapraz çarpımla kabul edilir. Başarı 60 puan, tekrar kontrol puanı şişirmez. Resmî kazanım kodu uydurulmadı. |
| Y16-02 | Mevcut 768×512 maarif.webp clay görseli incelendi. Giriş örneği: Yarım litrelik kaptan üç kez dökerek bir buçuk litre. Son cihaz netlik/boyut testi açık. |
| Y16-03 | Ortak native giriş bağlandı. Kolay payda 2/4; Orta 2–6; Zor 3/5/6. Seçilecek tüm kaplar korunur. Kesirler HTML ve canvas üzerinde çizgiyle gösterilir. |
| Y16-04 | Süresiz/60/120/180, aktif-zaman sayacı, hidden ve geri bildirimde pause, süre sonu inert kilidi, dışarıda tekrar/ayarlar. Üretim adapter VM testi geçti. |
| Y16-05 | Üç ana tema ve geometri iki alt kontrolü korunur; giriş çalışma seçimi beş akışa doğrudan erişir. Küçük ekran tarayıcı kontrolü bekler. |
| Y16-06 | Üretim JS matematik/puan/adapter testi geçti; gerçek klavye/touch/OS reduced-motion ve screenshot kabulü yapılmadı, açık. |

Test: `node tests/maarif-rollout-contract.cjs`. 900 profil örneği, beş üretim akışı × üç seviye; tek ödül, hidden pause, expiry, retry. DOM simülasyonu cihaz testi değildir.
