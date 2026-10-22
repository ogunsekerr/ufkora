# T08 — Mobil sınıf istasyonları taslağı
23 Ekim 2026. Taslak hazır, kullanıcı görsel seçimini bekliyor. Canlı site değiştirilmedi.

T08-mobile.svg: 430×1620 çizim alanı. PNG render incelendi; gerçek cihaz veya responsive tarayıcı kanıtı değildir.

## Düzen
4–8 aynı sırayla dikey duraklar olarak listelenir. Sol tarafta matematik nesnesi, sağda sınıf adı ve iki satırlık açıklama, altında tek satır metinli giriş bağlantısı vardır. Bağlantı yolu tüm nesneleri birbirine bağlar; yatay taşan minyatür harita kullanılmaz.
5. sınıf örnek seçimi yüzey/kenarlık ve görünür “Seçili” metniyle anlatılır. Sınıf başına bağlantı 48px yüksekliği hedefler; hedef genişliği ve alanlar arası açıklık gerçek CSS uygulamasında kontrol edilir.
Sınıf seçimini değiştirmek için tüm sayfanın altına inmek zorunlu olmayacak. Taslaktaki alttaki özet bir devam alanıdır; her duraktaki doğrudan atölye bağlantısı bağımsız çalışır. Kalıcı tam ekran yükseklik/pin/scroll tutma yoktur.

## Ölçek ve tipografi
- Sınıf adı: Outfit29px; metin: Nunito16px; eylem:16px. Açıklamalar iki kısa satıra bölünür.
- Başlık Bricolage37px, ikinci satır29px; 320px uygulamada başlık akışkanlaşır, sabit430px canvas siteye kopyalanmaz.
- Mobil yan pay hedefi20px; 320px'te16px değerlendirilebilir. Nesne sütunu küçülebilir; metin asla görüntüye dönüştürülmez.
- 320px / 390px, metin %200 büyütme, yatay/dikey dönüş ve dokunma testleri T14 ve nihai kontrollerde yapılacaktır. Bunlar geçti diye işaretlenmedi.

## Uygulama sözleşmesi
Masaüstüyle aynı semantik liste ve DOM sırası; CSS yerleşimi değişir. Seçim için hover şartı yok, metin hareketle açılmaz. Nesne dekoratiftir; metin bağlantısı erişilebilir ad taşır. Başlık ve gezinme scroll animasyonu nedeniyle görünmez kalmaz.
Üstteki mevcut altıgen girişi ve aşamalı atölye gelişine dokunulmaz. Sayfaya ikinci scroll motoru eklenmez.

## Kapsam
Bu taslak yalnız sınıf istasyonlarını gösterir; tüm site veya oyunların mobil uyumunun tamamlandığı anlamına gelmez. T04 açık kontrolü bu çalışma kapatmaz. Geri bildirim sonrası T11–T15 uygulaması için ayrıca onay gereklidir.
