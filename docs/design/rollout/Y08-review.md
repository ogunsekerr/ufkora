# Y08 · İste Çizdir ve Çokgen Oyunu

Kaynak: `etkinlikler/cokgen.html`. Görev dalında uygulandı; production veya tam cihaz kabulü değildir.

| Adım | Uygulama / kanıt |
| --- | --- |
| Y08-01 | Amaç ve mevcut ilerleme incelendi. MAT.5.3.5–6 kaynak katalog eşlemesi; bağımsız resmî müfredat onayı değil. İlk cevap tek seferde 10 puan; toplam 80. Özel çizim ve yakınlaştırma korunur. Sonuç ekranı game-card içeriğini değiştirdiği için tekrar öncesi soru DOM'u geri kurulur. |
| Y08-02 | Mevcut clay katalog görseli girişe bağlandı, boyut 768×512 olarak ayrıldı; kısa matematik örneği var. Yeni ekran netlik/mobil görsel kabulü açık. |
| Y08-03 | Native giriş, otomatik başlamama, native düzey/süre seçimi ve Ayarlar. Aynı sekiz soru korunur; Kolay 2, Orta 3, Zor 4 seçenek. Azalan çeldirici sayısı destek düzeyidir; soru matematiği sahte biçimde değiştirilmez. |
| Y08-04 | Süresiz/60/120/180; aktif-zaman, süre bitince inert kapsam kilidi; dışarıda tekrar/ayarlar erişimi. Yeni soru saati sıfırlar; doğru yanıt saati durdurur. VM testi geçti; gerçek arka-sekme kabulü açık. |
| Y08-05 | Mevcut laboratuvar/oyun ve alt filtreler korunur. Gerçek küçük ekran/touch bu oturumda denenmedi. Sahte sekme yok. |
| Y08-06 | Üretim kaynak kodu VM testleri geçti. Klavye native input/button/range ile erişilebilir; gerçek browser/OS reduced-motion/telefon kabulü açık. Tamamlandı işaretlenmedi. |

## Doğrulama

`node tests/geometry-rollout-contract.cjs`: beş akışta giriş/süre/hidden pause/tekrar, üç gerçek açı okuma türü, açı ilişkileri, 8 çokgen sorusu ve sonuçtan tekrar; üç balonun azaltılmış harekette tamamlanması ve çift puan koruması. Beş balon modunda 500 rastgele görevde açılar sonlu ve üç hedef farklı. Inline JS ve yeni modüller sözdizimi kontrolünden geçti. DOM simülasyonu tarayıcı/mobil testi değildir.

## Ortak düzeltmeler ve sınırlar

- Çokgen sonuç ekranı sonrası yeniden başlatma soru DOM'unu geri kurar.
- Balon hesabında yerleşime uygun açısı kalmayan alt tür artık seçilmez; mevcut fallback aynı balonu tekrar edebiliyordu. Matematik sorusu ve hedef açısı birlikte korunur.
- Balon isabeti tek sefer uygulanır. Süre bitmiş/arka sekmedeki gecikmiş ok isabeti puan vermez. Her ok callback'i kendi atış ve görev kimliğini kontrol eder; tekrar sonrası eski callback yeni oku ilerletemez veya puan veremez (üretim VM regresyonu). Azaltılmış harekette ok görseli beklenmeden aynı değerlendirme uygulanır.
- Entry query: flow, difficulty, duration; eksik/geçersiz/yinelenen değer initial/easy/0.

Tarayıcı politikası nedeniyle gerçek görsel/klavye/touch kontrolü yapılmadı; root entegrasyon kabulünde yeniden ele alınmalı.
