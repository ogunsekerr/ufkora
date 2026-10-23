# T60 · Dört sınıfa ayrı katalog paketleri

23 Ekim 2026. Yalnız sunum yayıldı; oyunlara ortak giriş/mantık toplu uygulanmadı. İçerik, kazanım, görsel yolu ve oyun query parametreleri catalog.js kaynağından aynen kullanılır. Her sınıf kendi script'iyle etkinleşir; dosya/script devre dışı kalırsa yalnız o sınıf kart düzenine döner. Kartlar görünümü tüm etkin sınıflarda korunur.

| Sınıf | Paket commit'i | İçerik | Renk | İşlev testi | Yeni mobil tarayıcı |
| --- | --- | ---: | --- | --- | --- |
| 4 | c8fad23 | 2 | coral | Geçti | Erişim engeli nedeniyle bekler |
| 6 | 13b11bb | 2 | green | Geçti | Erişim engeli nedeniyle bekler |
| 7 | e59da23 | 2 | blue | Geçti | Erişim engeli nedeniyle bekler |
| 8 | cbb5182 | 1 | purple | Geçti | Erişim engeli nedeniyle bekler |

Üretim renderer'ı minimal DOM'da çalıştırıldı: sınıf başına içerik sayısı, tema rengi, katalogla birebir oyun URL'leri, konu/tür/arama, sıfır sonuç, reset, kart görünümü ve bağımsız paket eksikliğinde geri dönüş geçti. 8. sınıf yalnız ortak Birim Küp içeriyor; sınıfa özel oyun varmış gibi gösterilmedi. Ortak içeriğin 4–8. sınıf açıklaması korunur. 6. sınıfın Veri ve olasılık konusu kaynak topic sırasına dahil edilir.

Ortak konu sıraları CSS'i 1000/700 px eşiklerini koruyor. Bu kaynak incelemesi mobil tarayıcı kontrolü değildir. T57'deki tarayıcı güvenlik reddi nedeniyle son sürüm 320/390/768/1440 ekranlarının yeni ölçümü ve görsel kabulü açık. T60 paketleri görev dalında uygulanmıştır; tam kabul için sınıf başına mobil kontrol gereklidir. Canlı yayın yok.

Çalışan kontroller: catalog-rollout, bahce-entry, kesif-entry, page-continuity, discovery-motion sözleşmeleri; değişen JS syntax ve git diff whitespace. DOM simülasyonu fiziksel cihaz/OS davranışı değildir.
