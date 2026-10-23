# Aşama 9 · T48–T51 ve K6

23 Ekim 2026. Üç bağımsız ajan araştırma, eşleme ve sözleşme incelemesi yaptı. Ana ajan uygulama, gerçek tarayıcı kontrolü ve entegrasyonu tamamladı.

## Sonuç

T48: aynı-origin ve native MPA desteği değerlendirildi; kapsam `atolye.html?sinif=5` ↔ `oyun-atolyesi/bahce.html`. T49: aynı clay bahçe görseli ve başlık iki ayrı tekil isimle eşleşir; görsel metne dönüşmez. Altıgen taşınmaz. Normal href kullanılır.

T50: Chromium 1363px oturumunda gerçek katalog bağlantısı, geri ve ileri gezinme geçti. `data-vt-last=matched` görüldü; tamamlandıktan sonra geçici isim sayısı 0. Giriş kapağı görünür kaldı, oyun başlamadı. `difficulty=hard&duration=120&level=3` doğrudan URL'sinde Zor ve 120 saniye seçili, düğme Görev 3 idi. Opt-in olmayan bu açılışta pilot off idi.

T51: gerçek tarayıcıda 390px iframe'in iç viewport'u 375px idi; pilot quiet, içerik/viewport genişliği 375/375 (yatay taşma yok). Bu fiziksel telefon testi değildir. Desteksiz API, reduced-motion/coarse/narrow ortak quiet dalı, eksik/yüklenmemiş görsel, çapraz-origin ve eksik/tekrarlı opt-in sözleşme testleriyle kontrol edildi. OS reduced-motion ve diğer tarayıcı motorları bu oturumda fiziksel olarak denenmedi. JavaScript kapalı katalog için gerçek noscript Bahçe bağlantısı vardır; oyun JS gerektirir.

`node tests/page-continuity-contract.cjs`, `node tests/bahce-entry-contract.cjs`, JS sözdizimi ve diff whitespace kontrolü geçti. Testler eski finished sözünün yeni eşlemeyi silmesini ve pageshow'un aktif isimleri erken silmesini özellikle yakalar. Bahçe testi URL fallback/duplicates, no-autostart, zamanlayıcı/background ve 8×3 görev sözleşmesini kapsar; görsel test değildir.

## K6 kararı: varsayılan kapalı

Yalnız açık `vt=clay` QA parametresiyle uygun masaüstünde çalışır. Native eşleme sinyali alındı, ancak hareketin algısal yararı ve gerçek cihaz maliyeti yeterince doğrulanmadı. Bu nedenle genel yayılım yapılmadı; ikinci animasyon motoru eklenmedi. Quiet/unsupported durumda normal bağlantı çalışır; animasyonu bekleyen yönlendirme yoktur. 180ms sınırlı görsel süre, erişim geciktirmez. Kaynak görsel yüklenmemişse beklenmez, geçiş atlanır.

Ana sayfa/entrance, main ve canlı yayın değiştirilmedi. T52 başlamadı; ayrı kullanıcı onayı bekliyor.

Kaynaklar: [Chrome MPA View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document), [MDN @view-transition](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition). Destek sınırlı olduğundan feature detection muhafazakârdır; event.viewTransition gerçek sinyaldir.
