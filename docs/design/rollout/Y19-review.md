# Y19 · Zar Deneyi

Kaynak: `etkinlikler/olasilik-laboratuvari.html`. Kullanıcı K7 yayılımını onayladı; canlı yayın bu raporla yapılmış sayılmaz.

Serbest deney korunur. İsteğe bağlı görevlerde 10 atışta 1 gelme sıklığı, 20 atışta yüzde sıklık, 60 atışta adil modelin beklenen sayısı sorulur. İkisi birlikte görünümü para ve zarın ortak görünümüdür; üçüncü bağımsız oyun değildir.

| Adım | Uygulama ve kanıt |
| --- | --- |
| Y19-01 | Amaç/ayar/ilerleme kaynağı incelendi. Katalogdaki MAT.6.6.1 eşlemesi korundu; resmî müfredat uygunluğu bağımsız ölçülmedi. |
| Y19-02 | Mevcut clay görseli açılıp incelendi (768×512); native girişte amaç ve kısa örnek/yardım var. Yeni raster/ücretli varlık yok. Cihaz netliği açık. |
| Y19-03 | Native giriş ve gerçek destek/soru türü seçenekleri bağlandı. Serbest laboratuvara sahte güçlük etiketi uygulanmaz. Otomatik başlamaz. |
| Y19-04 | Süresiz/60/120/180, tekrar, arka plan ve süre sonu davranışı üretim-JS sözleşmeleriyle doğrulandı. |
| Y19-05 | Mevcut modlar korundu; yeni boş oyun sekmesi yok. Küçük ekran CSS'i ve native kontroller kaynakta mevcut; gerçek responsive kontrolü açık. |
| Y19-06 | `node tests/probability-entry-contract.cjs` geçti. Gerçek klavye/touch/OS reduced-motion/Safari ve cihaz performansı denenmedi; tam kabul açık. |

Olasılık testi: coin/dice/both × serbest/üç görev türü; ilk örneklem dondurulur, görev sırasında yeniden sıfırlama yeni örneklem açar; eski atış callback'i reset/ayar/süre sonundan sonra veriyi değiştiremez. Hidden esnasında bitmemiş atış iptal edilir, kayıtlı veri korunur. OS reduced-motion yolunda bekleme 0 ms olur; bu VM taklididir, OS testi değildir. Boş tabloda 0/0 yerine “Henüz veri yok”; kesirler çizgiyle gösterilir. Deneysel sıklığın her yeni atışta teorik değere yaklaşacağı iddiası kaldırıldı.
