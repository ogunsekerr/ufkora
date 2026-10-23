# T04 — Mobil ve azaltılmış hareket kontrolü
23 Ekim 2026. Durum: KISMEN TAMAMLANDI. Mobil tarayıcı görsel doğrulaması bekliyor; T05 başlamadı.

## Kapsam ve yöntem
Baseline 006dc2b kaynakları incelendi: features/entrance/transition.js, transition.css, features/home/home.css, assets/site.css, index.html ve docs/PROJECT-MAP.md.
Asıl transition.js Node VM içinde DOM taslaklarıyla çalıştırıldı. Bu bir tarayıcı render testi veya gerçek cihaz performans ölçümü değildir.
Mevcut desteklenen tarayıcı API'sinde viewport/device emülasyonu ve reduced-motion emülasyonu bulunmadığından bu seçenekler zorlanmadı; işletim sistemi tercihleri değiştirilmedi.

## Sonuçlar
19 mantık kontrolü geçti:
- 390px dokunmatik, 1024px dokunmatik, 700px ince işaretçili üç senaryo.
- Her senaryoda lightweight sınıfı, p=.62 panel gizliliği, p=.75 kademeli geliş ve sıfır dönme, p=.94 etkileşim açılması, p=.25 geri dönüş ve çalışma sırasında reduce tercihine geçiş.
- Başlangıçta reduce açıkken normal bağlantı davranışı engellenmiyor ve panel inert kalmıyor.

## CSS incelemesi
| Alan | Kaynakta mevcut davranış |
|---|---|
| Hafif mobil yol | 280svh; clip-path:none!important; panel translate3d ve opacity |
| Mobil arka plan | home.css entrance-lite pseudo katmanında filter:none, sabit renk gradyanları |
| Hero | Hafif yolda görsel transform ve filter kapalı |
| Azaltılmış hareket | entrance-motion sınıfı kaldırılıyor; kapı display:none; global animation/transition kapalı ve scroll-behavior:auto |
| Mobil sınıf düğmeleri | Beş kolon; min-height 46px |
| Mobil panel | max-height calc(100svh - 24px); gerçek kısa ekran taşması ayrıca görülmeli |

## Açık doğrulamalar
- 390×844 ve 360×640 gibi gerçek/render edilmiş dar ekranlarda metin taşması, panel iç kaydırması ve oyun sekmesine dokunma.
- iOS Safari adres çubuğu ve yön değişiminin svh/geçiş ölçülerine etkisi.
- Reduced-motion açıkken gerçek CSS görünürlüğü ve klavye odağı.
- Fiziksel cihazda akıcılık/FPS. Transform/opacity kullanımı tek başına performans garantisi değildir.
- Mobilde JS yine kapı SVG çizimi ve aperture değişkeni hesaplıyor; CSS maske kullanmasa da kalan işlem maliyeti ölçülmedi.

## T03 notunun netleştirilmesi
T03'te gözlenen yumuşak masaüstü arka planın kaynakta karşılığı home.css .portal-section:before filter:blur(22px) kuralıdır. Bu imleç etkisi değildir. Hafif mobil yol aynı pseudo katmanda filter:none kullanır. T03 --scene-blur=0 ölçümü yalnız ilgili değişkeni tanımlıyordu; sayfada hiç blur olmadığı anlamına gelmez.

## Değişiklik ve ilerleme
Site kodu, animasyonlar ve yayın değiştirilmedi. Yalnız kontrol belgeleri eklendi.
T04 görsel kısmı tamamlandı diye işaretlenmedi. Sonraki göreve otomatik geçilmez.
