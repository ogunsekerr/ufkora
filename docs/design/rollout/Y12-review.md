# Y12 · Açı Kâşifi ve Radar Kulesi

Kaynak: etkinlikler/maarif-atolyesi.html. Görev dalındaki uygulamadır; gerçek cihaz kabulü ve canlı yayın yok.

| Adım | Sonuç |
| --- | --- |
| Y12-01 | Amaç: iletki hizalama, açı ölçümü ve dar/dik/geniş/doğru açı ayrımı. Başarı 50 puan; aynı görev ikinci kez puan vermez. Kaynak kazanım etiketlerinin resmî müfredat doğrulaması ayrı kalır. |
| Y12-02 | Mevcut 768×512 maarif.webp clay görseli açılıp incelendi. Girişte hizalama/60° örneği. Son cihaz netlik/boyut testi bekler. |
| Y12-03 | Native beş-akış giriş paneli. Kolay: hizalı iletki ve 30° katları; Orta: merkez oturmuş, hizalama öğrencide; Zor: merkez/hiza öğrencide ve tam derece hedefler. Gerçek görev/destek değişir. |
| Y12-04 | Süresiz/60/120/180, aktif-zaman sayacı, hidden ve geri bildirimde pause, süre sonu inert kilidi, dışarıda tekrar/ayarlar. Üretim adapter VM testi geçti. |
| Y12-05 | Üç ana tema ve geometri iki alt kontrolü korunur; giriş çalışma seçimi beş akışa doğrudan erişir. Küçük ekran tarayıcı kontrolü bekler. |
| Y12-06 | Üretim JS matematik/puan/adapter testi geçti; gerçek klavye/touch/OS reduced-motion ve screenshot kabulü yapılmadı, açık. |

Test: `node tests/maarif-rollout-contract.cjs`. 900 profil örneği, beş üretim akışı × üç seviye; tek ödül, hidden pause, expiry, retry. DOM simülasyonu cihaz testi değildir.
