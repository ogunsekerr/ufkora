# T48 · Native sayfalar arası geçiş sınırı

23 Ekim 2026. Üç ajan araştırma/eşleme/doğrulama incelemesinde; ana ajan entegrasyon ve K6'dan sorumlu.

Pilot yalnız aynı-origin /atolye.html?sinif=5 ↔ /oyun-atolyesi/bahce.html. ufkora.com ile ufkora.vercel.app farklı origin; ikisi arasında geçiş yok. İki belge CSS opt-in vermelidir; MPA için document.startViewTransition çağrılmaz. CSSViewTransitionRule, pageswap/pagereveal ve navigation.activation destekleri ihtiyatlı aday kontrolüdür; gerçek geçişin yetkili sinyali event.viewTransition'dır.

Normal href, history ve oyun parametreleri korunur. preventDefault/router/pushState, animasyon bitişini bekleme, yeni kitaplık, timer/render-blocking bekleyiş veya ikinci motor yok. Erken pagereveal listener klasik head script'iyle kurulur. Geçiş yapılamazsa gezinme yine gerçekleşir.

Eşleme: aynı bahce.webp görseli → giriş görseli ve kart başlığı → entry-title. İki ayrı benzersiz ad; clay görseli metne şekil değiştirmez. Altıgen diğer sayfalara taşınmaz. Başlamış oyunun kapağı zorla açılmaz; gizli/eksik eşleme normal geçişe döner. Geçici isimler finished ve pageshow'da temizlenir; BFCache içinde isim kalmaz.

K6 öncesi yalnız açık QA parametresi vt=clay ile aday pilot. Varsayılan kapalı. Dar/coarse/reduced-motion/unsupported durumda opt-in ve isimler kapalı kalır. Etkin genişlik için >=1001 px ve fine pointer gerekir. Parametre ürün arayüzüne kontrol olarak eklenmez. Yanlış/tekrarlı vt parametresi kapalı kabul edilir.

Kaynaklar (23 Ekim 2026):
- https://developer.chrome.com/docs/web-platform/view-transitions/cross-document
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition
- https://developer.mozilla.org/en-US/docs/Web/API/Window/pagereveal_event

MDN özelliği Limited availability olarak işaretliyor. Destek tüm tarayıcılarda varmış gibi sunulmaz. K6 sonucu gerçek pilot değerlendirmesiyle ayrıca kaydedilir.
