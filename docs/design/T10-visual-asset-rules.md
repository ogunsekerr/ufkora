# T10 — Clay görsel varlık kuralları önerisi
23 Ekim 2026. Yalnız üretim ve kabul standardı; yeni ücretli görsel üretilmedi, mevcut dosyalar değiştirilmedi.

## Malzeme ve karakter
Mat, hafif dokulu oyun hamuru; temiz siluet, yumuşak yönlü ışık, sınırlı temas gölgesi. Plastik parlaklık, pelüş/şeker hissi ve aşırı bebeksi karakterler yok. Matematik nesnesi bir bakışta tanınır; öğe kalabalığı ve kalın çerçeveyle kapatılmaz.
Işık tüm ailede sol üstten yaklaşık35–45°; bu bir üretim hedefidir. Aynı ailede kamera eğimi, ışık sıcaklığı ve gölge yönü değişmez. Ana renkler T06'ya bağlı, açık/koyu yüzler bunun malzeme varyantıdır.

## İncelik ve netlik
- Nesne konturu varsa ekranda1.5–3px hedef; derinlik dış siyah çizgiyle kurulmaz. Her motifi zorla aynı kalınlığa sokmak yerine görsel ağırlık eşitlenir.
- Nesne çevresinde yaklaşık%10–14 güvenli alan; kritik parçalar kırpılmaz. Küçük gösterimde iç boşluklar kapanmaz.
- Hamur izi yalnız yakın bakışta hissedilir. Tam ekran blur/ışık saçılması/düşük çözünürlüğü gizleyen filtre yok.
- Etiketler ve kazanım kodları görsel içine basılmaz; gerçek HTML metni olur.
- Logo dosyasının şekli ve renk sırası aynen korunur; küçük versiyon yeniden üretilmez.

## Kullanım türü ve başlangıç bütçesi
Bunlar ölçülmüş mevcut dosya boyutları veya garanti değil, yeni üretim için önerilen üst hedeflerdir.
| Varlık | Kaynak / sunum | Boyut hedefi | Yükleme |
|---|---|---|---|
| Sınıf nesnesi | Mevcut temiz SVG öncelikli; karmaşık clay için şeffaf WebP | SVG≤12KB/nesne; WebP≤60KB/nesne | Beş nesne toplam≤300KB; kritik görünümdekiler öncelikli |
| Oyun kartı | 4:3 master1200×900; responsive480/800w türevler | Mobil türev≤80KB; geniş≤140KB | İlk ekran dışı lazy; width/height veya aspect-ratio ayrılmış |
| Tek sahne / sınıf manzarası | Gerekirse1600px geniş WebP | ≤220KB | Yalnız gerçekten kullanılan görünümde |
| Logo | Mevcut onaylı varlık | Mevcut dosya korunur | Yerleşim ölçüsü ayrılır |

Dosya bütçesi bozulursa okunabilirlikten önce çözünürlük/kadraj/karmaşıklık değerlendirilir. 2× kaynağı1× görünümde kullanmak tek başına kalite garantisi değildir. AVIF yalnız mevcut pipeline ve tarayıcı fallback testi uygunsa değerlendirilir; format uğruna yeni build kurulmaz.

## Pilotların farklılaşması
- Bahçe Mimarı: birim karelere bölünmüş bahçe, ince çit; alan ile çevre ayrımı anlaşılır. Metin görselde değil HTML'de.
- Sayı Kargo: milyonlar/binler/birler düzenini çağrıştıran üç kasa ve yerleştirme yuvası. Kasalarda sayı varsa matematiksel düzen öğretmen kontrolünden geçer; rastgele dekoratif işlem yazılmaz.
- Işık Rotası: açıölçer, tek verici ve hedef; ışın geometrik açıyla tutarlı. Neon parıltı veya ışın kalabalığı yok.
Bu tarifler üretim brief'idir; görseller henüz oluşturulmadı. Önce mevcut kaliteli varlıklar denetlenir; dış üretim/kredi yalnız ayrıca izin verilirse kullanılır.

## Erişilebilirlik ve dosya disiplini
Bilgi taşıyan oyun görseli kısa ve amaca dönük alt metin alır; yanında aynı bilgiyi anlatan sınıf motifi dekoratifse boş alt/aria-hidden. Sadece renkle sınıf ayrımı yapılmaz.
Önerilen dosya yeri mevcut assets/activities/ düzeniyle uyumlu olacak; örneğin garden-card-480.webp, sayi-kargo-card-800.webp. Aynı adla kırıcı overwrite yerine sürümlü yeni varlık ve küçük kapsamlı referans güncellemesi. Lisans/kaynak, ölçü, byte ve alt metin varlık kaydına eklenir.

## Kabul kapısı
%100 ve%200 görünüm; masaüstü ve320/390px örnek kadraj; açık/koyu yüzey; sıkıştırma artefaktı; şeffaf kenar saçağı; aynı ışık/yön; gerçek logo ve font; hesap/kazanım anlamı; dosya bütçesi. Kontrol geçmeden tüm oyunlara yayılmaz.
T07/T08'de mevcut vektör motifler yerleşimi anlatır; bu standartta nihai clay kalitesi onaylandı sayılmaz. T04 mobil canlı kontrolü açık kalır.
