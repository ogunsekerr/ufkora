# Y17 · Çember Tamircisi

Kaynak: `oyun-atolyesi/kesif.html`. Kullanıcı K7 yayılımını onayladı; canlı yayın bu raporla yapılmış sayılmaz.

Yarıçap/çap verisinden pergel açıklığını seç; 72 küçük yayla tam çember oluştur. Kolay hedef kesikli çemberi gösterir, Orta ilk kontrolden sonra gösterir, Zor gizler. Mevcut beş görev ve 30° düğmesi korunur.

| Adım | Uygulama ve kanıt |
| --- | --- |
| Y17-01 | Amaç/ayar/ilerleme kaynağı incelendi. Katalogdaki MAT.5.3.1 · MAT.5.3.2 eşlemesi korundu; resmî müfredat uygunluğu bağımsız ölçülmedi. |
| Y17-02 | Mevcut clay görseli açılıp incelendi (768×512); native girişte amaç ve kısa örnek/yardım var. Yeni raster/ücretli varlık yok. Cihaz netliği açık. |
| Y17-03 | Native giriş ve gerçek destek/soru türü seçenekleri bağlandı. Serbest laboratuvara sahte güçlük etiketi uygulanmaz. Otomatik başlamaz. |
| Y17-04 | Süresiz/60/120/180, tekrar, arka plan ve süre sonu davranışı üretim-JS sözleşmeleriyle doğrulandı. |
| Y17-05 | Mevcut modlar korundu; yeni boş oyun sekmesi yok. Küçük ekran CSS'i ve native kontroller kaynakta mevcut; gerçek responsive kontrolü açık. |
| Y17-06 | `node tests/circle-entry-contract.cjs` geçti. Gerçek klavye/touch/OS reduced-motion/Safari ve cihaz performansı denenmedi; tam kabul açık. |

Çember testi: beş görev × üç destek seviyesi, yanlış/doğru, puan tekrarı, otomatik başlamama, yardım/hidden pause, süre sonu dönme kilidi, tekrar ve yinelenen/geçersiz parametreler. Işık/Kargo regresyon testi de geçti; yalnız eski circle-isolation beklentisi artık entry enabled + no-autostart olarak güncellendi.
