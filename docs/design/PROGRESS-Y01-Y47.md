# Y01–Y47 yayılım çalışma durumu

Kullanıcı kapsamı: 47 akışın her biri için Yxx-01…06 (282 alt görev). Canlı yayın yetkisi yok.

İlk dosya ailesi Toplama Macera Adası (Y01–Y05) uygulandı, fakat tarayıcı/mobil/touch kabulü yapılmadı. Yeni düzen kaynak testlerinden geçti; diğer 42 akışa doğrulanmadan topluca kopyalanmadı. T57'de kaydedilen tarayıcı erişim reddi devam eden kabul engelidir; yeni bir kullanıcı durdurması değildir.

| Kapsam | Uygulama | Kabul |
| --- | --- | --- |
| Y01–Y05 | Ortak giriş; 0/1/3 alt-basamak elde modeli; süre/süresiz; tekrar; arka plan duraklaması; puan güvenliği | Kaynak/VM testleri geçti; yeni görsel/klavye/touch/OS reduced-motion kabulü açık |
| Y06–Y47 | Kaynak envanteri ve ayrı T59 kartları mevcut; yeni UI/mantık uygulanmadı | Açık |

Kod ve test referansları: features/rollout/; tests/rollout-math-clock-contract.cjs; tests/toplama-rollout-contract.cjs. 6000 örnek çifti, beş gerçek akış × üç seviye, elde doğrulaması, tek puan, quiz bitiş kilidi; üretim entry'de otomatik başlamama, deep-link, hidden pause, süre sonu inert kilidi, tekrar ve ayarlar test edildi. Bunlar DOM simülasyonudur.

Eksikler nedeniyle hiçbir Yxx-06 tamamlandı işaretlenmedi. 282 görevin tamamlandığı iddia edilmez. İlk aile için tarayıcı erişimi tekrar sağlandığında ekran/etkileşim kabulü yapılacak; sonra sıradaki aileye geçilecek. Fiziksel dokunma erişimi yoksa ilgili madde açık kalacak.

Yeni query: Toplama sayfasında akis=act1|act2|act3|act4|quiz, difficulty=easy|medium|hard, duration=0|60|90|120|180. Eksik/geçersiz/yinelenen değerler act1/easy/0 olur. Süre yeni görevde sıfırlanır, gezinme puanı kendiliğinden silmez. Süre dolunca tekrar ve Ayarlar dışarıda erişilebilir; mevcut etkinlik inert olur. Yarışmanın eski 90/60 seçenekleri merkezi süre seçimine taşındı, 90 saniye korunur.

Matematik sınırı: dört sütunlu sembol/ikili işlem panolarında toplam 9999'u aşmaz. Beş sonuç hanesi olan Basamak/yarışma zor düzeyinde beş basamaklı toplam mümkündür. Temel sorularda Kolay 0, Orta 1, Zor alt üç sütunda 3 elde; üst sütunda ek elde olabilir. Yarışmanın zihinden yüzlük ekleme türü ayrı olarak korunur. Kazanım kodu katalogda bulunmadığından uydurulmadı.
