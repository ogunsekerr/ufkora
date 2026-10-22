# T03 — Masaüstü altıgen giriş kontrolü
Tarih: 23 Ekim 2026. Durum: tamamlandı, kullanıcı onayı bekleniyor. T04 başlamadı.
İncelenen canlı adres: https://ufkora.com/
Tarayıcı: uzak Chrome; viewport 1363×936 CSS piksel. Fiziksel Mac/Safari veya telefon testi değildir.
Bu görev yalnız gözlem ve kayıt içerir; site kaynak kodu ve yayın değiştirilmedi.

## Ölçülen aşamalar
| Konum | Gözlem |
|---|---|
| scrollY=0 | Panel opacity=0, translateY=130px, rotate=6deg. Hero ve küçük altıgen mevcut. |
| scrollY=468 (p=.25), geri dönüş | Panel opacity=0; kapı tekrar görünür, panel-ready ve door-passed kaldırılmış. |
| scrollY=936 (p=.50) | Altıgen kenarları ekranın dışına yaklaşırken panel görünmüyor. Görsel T03-01. |
| scrollY=1404 (p=.75) | Kapı kaybolmuş; panel opacity=.178, translateY=106.8px, rotate=4.93deg. Görsel T03-02. |
| scrollY=1872 (p=1) | Panel opacity=1, translateY=0, rotate=0; panel-ready ve door-passed mevcut. Görsel T03-03. |
| Giriş butonu, yerleşmiş son durum | Atölyeyi keşfet bağlantısı scrollY=1835, panel opacity=1 ve panel-ready durumuna ulaştı. |
| Büyük ileri kaydırma, yerleşmiş son durum | scrollY=3744; panel-ready korunuyor. Ara karelerin kesintisizliği video/FPS ile ölçülmedi. |

## Sonuç
Kapı yaklaşımı ile panel gelişi ayrı aşamalarda çalışıyor. Panel, kapı büyürken tam görünür durumda beklemiyor. Geri kaydırıldığında sahne geri kuruluyor. Semantik bağlantı tıklamasıyla giriş son durumu doğrulandı; ilk koordinat/AX tıklaması hareket başlatmadığından tek denemede kesin başarı iddiası yoktur.

## Görsel kalite ve riskler
- Geçiş arka planı belirgin biçimde yumuşak/blur görünümlü. Bu, silinen imleç dalgası değildir; ölçülen --scene-blur=0px. Görsel varlığın kendisi veya diğer CSS katmanları ayrı kalite kontrolü gerektirir; bu adımda değiştirilmedi.
- Hero ortasındaki küçük yeşil altıgen başlangıçta açıklama satırını kısmen örtüyor. Sonraki tasarım kararında incelenecek; otomatik düzeltme yapılmadı.
- Desktop hareketli aperture/clip-path maliyeti ölçülmedi. Gerçek FPS, Safari ve düşük donanım sonucu hakkında hüküm yok.
- Büyük kaydırmada ara aşamaların kısa görünmesi scroll kontrollü yapının doğal sonucu olabilir; kare kare kayıt yapılmadı.
- Konsol kaydındaki iki hata chrome-extension kaynaklı metadata hatasıdır; UFKORA uygulama hatası olarak sınıflandırılmadı.
- Mobil ve reduced-motion canlı kontrolü T04 kapsamındadır.

## Değişiklik kaydı
Yalnız bu kontrol raporu eklendi. Marka, logo, fontlar, sınıf/oyun düzeni ve mevcut animasyon kodu korunmuştur.
Sonraki adım: kullanıcı T03 onayından sonra T04.
