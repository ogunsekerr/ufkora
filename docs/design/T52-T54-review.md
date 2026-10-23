# Aşama 10 · T52–T54

23 Ekim 2026. Kapsam: Bahçe Mimarı, Sayı Kargo ve Işık Rotası. Çember Tamircisi ortak dosyada bulunsa da pilot seçicilerine dahil değildir.

| Önce | Sonra |
| --- | --- |
| Farklı hover/press hareketleri | Ortak 120ms press, .98 ölçek; odaklı klavye ve disabled kontrolde ölçek yok |
| Seçimde ağırlıkla renk | Çerçeve, native radyo checked; kasa ve cevap düğmelerinde aria-pressed |
| Bahçe sonunda 65 parçacık, birkaç saniye | 180ms küçük clay damgası; bekletmeden sonraki görev |
| Kargo/Işık durum metni | ✓ Doğru / ↻ Yeniden dene + mevcut matematik açıklaması; kısa aynı clay işareti |

- [x] T52: ortak CSS tokenları; CSS transition tersine dönebilir, timer/interaction kilidi yok. Yeni bağımlılık yok.
- [x] T53: Bahçe sonuç damgası, yanlışta açıklama ve yeniden deneme; uzun konfeti kaldırıldı. Birlikte incele yolunun 2 yıldız kuralı korunur; damga doğru yanıt iddiası yerine görevin tamamlandığını bildirir.
- [x] T54: Kargo ve Işık'ta aynı anlam dili. Metin/işaret renk olmadan okunur; Kargo seçim durumu aria-pressed ile bildirilir. Çember modu için mesaj önekleri eklenmez.

## Doğrulama

Üretim JS ile mevcut sözleşme testleri geçti: Bahçe 8×3 görev; Kargo/Işık 5×3 görev, URL varsayılan/tekrarlı parametreler, otomatik başlamama, zamanlayıcı, arka plan/yardım duraklaması, tekrar ve puan korunması. Yeni doğru mesaj kontrolleri Kargo/Işık görev döngüsünde doğrulandı. Inline JS sözdizimi ve git diff whitespace kontrolü geçti.

Gerçek Chromium'da Işık: Enter ile Başlat, 20° yanlış → açıklama, slider Home/ArrowRight ile 40° → doğru ve Sonraki görev açık; damga computed duration 0.18s. Kargo: boş yük yanlış → açıklama, Enter ile 24/006/305 yerleştirme → doğru ve Sonraki görev açık. Bahçe: klavyeyle 4×3 çizim; hareket azaltma yolunda 12 kare kaplama; 11 yanlış → açıklama, 12 doğru → ✓ Görev tamamlandı ve 3 yıldız. Sonraki düğme erişilebilir.

Normal Bahçe çit animasyonu bu tarayıcı oturumunda 'Çitler kuruluyor' aşamasında ilerlemedi. Yeni değişiklik bu çizim döngüsünü değiştirmiyor; kök neden doğrulanmadı. Hareket azaltma yolunda görevin tamamlanması normal yolun kabul testi yerine geçmez. T55 kabulünde yeniden incelenmesi gereken açık maddedir.

OS reduced-motion CSS yolu tüm yeni hareketleri kapatır; Bahçe'nin Hareketleri azalt kutusu da ortak press ve damgayı kapatır. OS ayarı ve fiziksel dokunmatik cihaz bu oturumda denenmedi. Yeni hover hareketi yok; pointer gerektiren kontrol eklenmedi. Fiziksel telefon, ekran okuyucu ve Safari kabulü yapılmadı; FPS veya öğrenme/kazanım başarısı artışı iddiası yok.

Ana sayfa, entrance, puan kuralları ve canlı yayın değiştirilmedi. T55–T60 bu görevin kapsamı değildir.

## Canlıya geçiş öncesi zorunlu kontrol · kullanıcı kararı

Bahçe Mimarı'nın normal hareket yolunda çit kurulumu → kaplama → soru → sonuç → tekrar/sonraki görev akışı canlıya alınmadan önce yeniden doğrulanacak. Sorun sürerse kök neden incelenip çalışması için gerekli düzeltmeler yapılacak ve akış tekrar test edilecek. Yalnız hareket azaltma yolunun çalışması bu maddeyi kapatmaz. Normal akışın geçtiğine ilişkin kanıt kaydedilmeden bu açık sorun çözülmüş sayılmayacak ve ilgili sürüm canlıya alınmayacak. Bu kayıt canlı yayın onayı değildir.
