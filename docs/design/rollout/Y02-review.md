# Y02 · Şifre Bulmaca

Kaynak: etkinlikler/toplama-adasi.html. Yeni uygulama görev dalındadır; canlı yayın ve tam kabul yok.

| Adım | Durum ve kanıt |
| --- | --- |
| Y02-01 | Amaç/ayar/ilerleme kaynakta incelendi. Toplama ve basamak ilişkisi; kod kaynakta yok. Puan kuralları korunarak yinelenen ödül engellendi. |
| Y02-02 | Mevcut toplama.webp görseli açılıp incelendi (768×512 clay ada); girişte kısa örnek var. Son cihaz netlik/boyut kontrolü açık. |
| Y02-03 | Native giriş bağlandı; gerçek elde karmaşıklığı değişiyor. Sözleşme testi geçti; tarayıcı kabulü açık. |
| Y02-04 | Aktif-zaman saati, süresiz/60/90/120/180, süre sonu kilidi, reset ve hidden pause üretim adapter testiyle geçti; gerçek visibilitychange kabulü açık. |
| Y02-05 | Beş native sekme korunur, seçimde giriş açılır. Gerçek küçük ekran testi yapılamadı; açık. |
| Y02-06 | Üretim JS matematik/puan testleri geçti. Native klavye, fiziksel touch ve OS reduced-motion son kabulü açık; tamamlandı değil. |

Ortak ayrıntılar: [yayılım durumu](../PROGRESS-Y01-Y47.md). Test: node tests/toplama-rollout-contract.cjs.
