# Y09 · İletki Okuma

Kaynak: `etkinlikler/aci-ustasi.html`. Görev dalında uygulandı; production veya tam cihaz kabulü değildir.

| Adım | Uygulama / kanıt |
| --- | --- |
| Y09-01 | Amaç ve mevcut ilerleme incelendi. MAT.5.3.3–4 kaynak katalog eşlemesi; bağımsız resmî müfredat onayı değil. Doğru cevap 10 puan; aynı sorunun tekrar doğrulanması puan eklemez. |
| Y09-02 | Mevcut clay katalog görseli girişe bağlandı, boyut 768×512 olarak ayrıldı; kısa matematik örneği var. Yeni ekran netlik/mobil görsel kabulü açık. |
| Y09-03 | Native giriş, otomatik başlamama, native düzey/süre seçimi ve Ayarlar. Kolay sağdan okuma+yardımcı; Orta soldan okuma; Zor iki kol arasındaki fark. Bunlar mevcut gerçek soru türleridir. Tüm tür filtresi korunur. |
| Y09-04 | Süresiz/60/120/180; aktif-zaman, süre bitince inert kapsam kilidi; dışarıda tekrar/ayarlar erişimi. Yeni soru saati sıfırlar; doğru yanıt saati durdurur. VM testi geçti; gerçek arka-sekme kabulü açık. |
| Y09-05 | Mevcut laboratuvar/oyun ve alt filtreler korunur. Gerçek küçük ekran/touch bu oturumda denenmedi. Sahte sekme yok. |
| Y09-06 | Üretim kaynak kodu VM testleri geçti. Klavye native input/button/range ile erişilebilir; gerçek browser/OS reduced-motion/telefon kabulü açık. Tamamlandı işaretlenmedi. |

## Doğrulama

`node tests/geometry-rollout-contract.cjs`: beş akışta giriş/süre/hidden pause/tekrar, üç gerçek açı okuma türü, açı ilişkileri, 8 çokgen sorusu ve sonuçtan tekrar; üç balonun azaltılmış harekette tamamlanması ve çift puan koruması. Beş balon modunda 500 rastgele görevde açılar sonlu ve üç hedef farklı. Inline JS ve yeni modüller sözdizimi kontrolünden geçti. DOM simülasyonu tarayıcı/mobil testi değildir.

## Ortak düzeltmeler ve sınırlar

- Çokgen sonuç ekranı sonrası yeniden başlatma soru DOM'unu geri kurar.
- Balon hesabında yerleşime uygun açısı kalmayan alt tür artık seçilmez; mevcut fallback aynı balonu tekrar edebiliyordu. Matematik sorusu ve hedef açısı birlikte korunur.
- Balon isabeti tek sefer uygulanır. Süre bitmiş/arka sekmedeki gecikmiş ok isabeti puan vermez. Her ok callback'i kendi atış ve görev kimliğini kontrol eder; tekrar sonrası eski callback yeni oku ilerletemez veya puan veremez (üretim VM regresyonu). Azaltılmış harekette ok görseli beklenmeden aynı değerlendirme uygulanır.
- Entry query: flow, difficulty, duration; eksik/geçersiz/yinelenen değer initial/easy/0.

Tarayıcı politikası nedeniyle gerçek görsel/klavye/touch kontrolü yapılmadı; root entegrasyon kabulünde yeniden ele alınmalı.
