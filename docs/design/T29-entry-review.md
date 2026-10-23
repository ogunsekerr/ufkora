# UFKORA · T29 ortak giriş taslağı

23 Ekim 2026 · Dal: `task/t29-entry-draft`

- [x] T29 — Kısa giriş ekranı taslağı hazırlandı ve tarayıcıda gösterildi.
- T30–T33 kullanıcı tarafından önceden onaylandı; istenen başlama zamanı 23 Ekim 2026 07.00 Europe/Istanbul.
- Zamanlanmış görev oluşturma girişimi 5/5 aktif görev limiti nedeniyle reddedildi. Otomasyon OLUŞMADI. Bir mevcut görev kullanıcı seçimiyle duraklatılmadan 07.00 çalışması planlanmış sayılmaz.

## Taslak

`docs/design/T29-entry-draft.html` yalnız ayrı bir inceleme sayfasıdır. Oyun rotalarına bağlanmadı; üretim arayüzünü değiştirmedi. Görünen zorluk/süre seçenekleri statik taslak parçalarıdır; Başlat devre dışıdır. T30–T31 uygulanmış gibi gösterilmez.

Sıra: sınıf/oyun adı → tek kısa amaç → isteğe bağlı kazanım ve yardım → zorluk → görev süresi → Başlat.

Onaylı clay görseli, logo, renkler ve fontlar kullanılır. Kazanım açıklaması başlangıçta kapalıdır. Öğretmen/indirme/projeksiyon araçları öğrenci girişini doldurmaz. Dekoratif tekrar sloganı çıkarıldı.

## T30–T33 için önerilen sözleşme

- Zorluk: Kolay / Orta / Zor. Gerçek uygulamada native radio ve açıklamalı etiketler kullanılmalı. Seçili renk tek işaret olmamalı.
- Kolay varsayılanı: ölçüler ve adım desteği görünür. Orta: ölçüler kontrol sırasında; Zor: desteği azaltılmış ilişki görevleri. Kesin görev eşlemesi T32'de oyunun gerçek LEVELS verisinden belirlenmeli; yeni sınıf dışı konu eklenmemeli.
- Süresiz varsayılan. Diğer seçenekler 60 / 120 / 180 saniye.
- Taslakta **Görev süresi** etiketi tercih edildi: seçilen süre sekiz görevin tümüne uygulanmamalı. Ortak sözleşme görev başına olacaksa her yeni görevde seçilen süreden yeniden başlamalı. Sürenin bitmesi öğrenilmiş yıldızları silmemeli; gerçek süre sonu davranışı T32'de açıkça kayıtlı olmalı.
- Sayaç yalnız Başlat sonrasında çalışmalı. Yardım/öğretmen penceresi, arka sekme, görev sonu, tekrar ve URL parametreleri T32/T33'te ele alınmalı.
- Geçersiz URL değerleri güvenli varsayılana dönmeli. Zorluk yalnız metin etiketi olarak kalmamalı; gerçek yardım/soru davranışını değiştirmeli.
- Metin sadeleştirme T28 kuralları ve AGENTS.md'ye göre yapılmalı. Matematiksel koşul ve birimler korunmalı.

Bu davranışlar T29'da çalışan oyuna uygulanmadı; sonraki uygulama için öneridir. T30–T33'ün ardından T34'e geçilmeden durulacak.

## Kontrol

- Tarayıcıda masaüstü taslak gösterildi; logo ve clay görseli yüklendi, body fontu Nunito Sans.
- 390px iframe kontrolü: document clientWidth ve scrollWidth 390px, yatay taşma yok.
- Taslakta yalnız native yardım açılır alanı etkileşimlidir; gerçek zorluk/süre sayaç testi yapılamaz çünkü henüz bağlı değildir.
- Fiziksel mobil/Safari testi yapılmadı. Oyun kodu, giriş animasyonları ve üretim/main değiştirilmedi.
