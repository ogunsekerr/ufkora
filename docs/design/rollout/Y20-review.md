# Y20 · Yansıma Keşif Laboratuvarı

23 Ekim 2026. Kaynak: `etkinlikler/yansima.html` lab sekmesi. K7 onaylı; canlı yayın/cihaz kabulü yok.

| Adım | Uygulama / kanıt | Kabul sınırı |
| --- | --- | --- |
| Y20-01 | 7. sınıf yansıma keşfi; dik uzaklık eşitliği ve görüntü ilişkisi. Orijinal lab nesneleri, saat/şekil ve dört ayna türü korunur. | Resmî kazanım eşlemesi yeniden denetlenmedi. |
| Y20-02 | `yansima.webp` (768×512) clay sahnesi açılıp incelendi. Dikey aynada (−3,2)→(3,2) kısa örneği girişte. | Son küçük ekran netliği kontrol edilmedi. |
| Y20-03 | Native çalışma seçimiyle Keşif Laboratuvarı açılır; mesafe/kare/iz desteği başlangıçta açık, mevcut kontrollerden değiştirilebilir. Serbest laboratuvara sahte zorluk/puan veya boş oyun sekmesi eklenmedi. | Otomatik ölçme oyunu olduğu iddia edilmez. |
| Y20-04 | Süresiz/60/120/180 aktif zaman, hidden pause, süre sonu inert kilidi, ayarlar ve yeniden başlat. Görsel animasyon yardım/arka planda durur. | Üretim shell/clock VM testi; fiziksel görünürlük testi değil. |
| Y20-05 | Gerçek Laboratuvar/Etkinlik sekmeleri korunur; seçili durum aria-pressed ile bildirilir. Lab'dan etkinliğe geçiş gerçek soru oluşturur. | Yeni mobil tarayıcı kabulü açık. |
| Y20-06 | Reduced-motion'da yansıma anında son konuma gelir; tercih değişirse animasyon durur. Üretim reflect fonksiyonu tüm dört ayna türünde involüsyon ve uzaklık koruması testlerinden geçti. | Fiziksel touch/ekran okuyucu/OS/browser kabulü açık. |

Kontrol: `node tests/spatial-contract.cjs`, `node tests/spatial-entry-contract.cjs`, inline ve adapter syntax geçti. Eski `mainContainer` kimliği korunur; fullscreen/resize sözleşmesi değiştirilmedi. Geri bağlantıları kilitlenmez. Başlat odağı lab'ın native ilerleme kaydırıcısına gider. Bu rapor Y20'nin bütün cihaz kabulünü kapatmaz.
