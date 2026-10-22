# T06 — Mevcut tasarım değerleri
23 Ekim 2026. Kaynak baseline: 006dc2b35bf07cd2fd316a3c779e68acd6b71f1b.
Durum: envanter tamamlandı, kullanıcı onayı bekleniyor. T07 başlamadı. T04 mobil görsel kontrolü açık.
Bu belge mevcut kaynak değerlerinin kaydıdır; yeni tasarım sistemi uygulanmadı. Ölçüler tarayıcı computed-style ölçümü değildir. Ortam, specificity, !important, medya koşulları ve etkileşim durumları sonuçları değiştirebilir.

## 1. Ana renkler
assets/site.css içindeki son koşulsuz :root tanımları:
| Rol | Değer |
|---|---|
| Ana yazı --ink | #204b3b |
| İkincil yazı --muted | #4f624b |
| Ana yüzey --cream | #f3e9d8 |
| Koyu yeşil --forest | #075a44 |
| Yardımcı vurgu --lime | #dedb70 |
| 4. sınıf / mercan | #e98d71 |
| 5. sınıf / sarı | #edc85f |
| 6. sınıf / yeşil | #a5bd77 |
| 7. sınıf / mavi | #8dbcc7 |
| 8. sınıf / mor | #b39acb |

Önemli: Dosyanın başındaki eski palet nihai palet değildir. --muted önce #63736b, sonra #63745c ve en son #4f624b olarak yazılmıştır. Bu görevde hiçbir tanım kaldırılmadı.

### Sahneye özgü mevcut tonlar
features/home/workshop-preview.js worlds tablosu:
| Sınıf | Nesne rengi | Arka plan | Nesne |
|---|---|---|---|
| 4 | #e59880 | #f3ded0 | Abaküs |
| 5 | #edca69 | #eee7c8 | Açıölçer |
| 6 | #9dbb87 | #dce8d5 | Terazi |
| 7 | #87b9d1 | #d9e8eb | Geometrik nesne |
| 8 | #baa0d0 | #e5dcef | Küpler |

Bunlar ana tokenlarla aynı hex değildir; nesne/sahne varyantları olarak kayıtlıdır. Otomatik eşitlenmeyecek.

## 2. Tipografi
| Rol | Kaynakta onaylı font | İlgili kural |
|---|---|---|
| Başlıklar | Bricolage Grotesque | typography.css h1–h6 !important |
| Logo yazısı | Bricolage Grotesque | site.css .brand, 750 ağırlık |
| Gövde, menü, form, düğme | Nunito Sans | typography.css body/button/input/select/textarea/nav/p/li/td/th !important |
| Sayısal ve matematik etiketleri | Outfit | .score/.timer/.counter/.tag/.badge/.pill/.activity-type/.tabular-nums/[data-math-label]/svg text; tabular-nums |

Fontlar Google Fonts @import ile yükleniyor; font-display=swap URL'de mevcut. Bu görev ağ/font yüklenmesini yeniden ölçmedi.
Ağırlıklar: Bricolage 400/500/600/700/750/800; Nunito 400/500/600/650/700/800; Outfit 400/500/600/700.

### Mevcut boyutlar — seçili ana kurallar
| Alan | Geniş ekran kaynak kuralı | ≤700px kaynak kuralı |
|---|---|---|
| Hero başlık | clamp(60px,6.4vw,98px) | clamp(37px,8.5vw,57px) |
| Hero açıklama | 24px; line-height 1.55 | 19px |
| Hero ana buton | 19px; min-height 64px | 16px; min-height 56px |
| Hero sınıf bağlantısı | 17px; min-height 50px | 14px; min-height 46px |
| Hareketli giriş paneli başlığı | 40px | 29px |
| Panel sınıf düğmesi | 17px; min-height 48px | 13px; min-height 46px |
| Panel Etkinlikler/Oyunlar | 19px; taban min-height 48px | 17px |
| Panel kart başlığı | 25px | 21px |
| Panel kazanım kodu | 13px | 11px |
| Panel üst küçük etiket | 11px | 8px |
| Panel durum satırı | 15px | 13px |
| Katalog kart başlığı | 28px taban | 27px; daha dar koşullarda 25px |
| Katalog kart açıklaması | 16px | İlgili responsive kurallarla birlikte değerlendirilir |

Ara aralıklar da var: ≤1000px hero 54–76px, açıklama22px; ≥1500px panel başlığı44px, kart28px. ≤360px hero butonu15px; kısa masaüstü ekranında ayrı hero başlık kuralı var.
Bu değerler tek bir düz ölçek değildir; mevcut responsive istisnalar korunmuştur.

## 3. Buton, seçim, yüzey ve odak
- Ortak .btn: font16px/1.35, ağırlık800, min-height54px, padding16px 24px, radius10px.
- Hero override: padding18px 30px, gap24px, radius12px; mobil padding15px 17px, gap14px.
- Panel sınıf seçimi: radius10px; seçili durumda inset 0 2px 2px #fff5 ve 0 3px 0 #153a311a.
- Standalone etkinlik düğmelerinde typography.css min-height/min-width44px; ana sayfa/katalog bu kapsam dışında.
- Genel focus-visible: 3px #ff936d, offset5px. Kart girişinde 3px --forest ve offset−4px gibi yerel karşılıklar var. Bu kayıt kapsamlı erişilebilirlik onayı değildir.
- Katalog kartı radius14px; önizleme kartı masaüstü14px/mobil12px; panel22px/mobil16px.
- Sayısal sınıf butonundaki normal Outfit font tanımı, typography.css button font-family !important kuralını her durumda geçmez. Sayısal rolün gerçek DOM eşleşmesi uygulama aşamasında kontrol edilecek.

## 4. Boşluk ve genişlik
- Temel .wrap: min(1280px,calc(100% - 96px)); ara/mobil kurallarda 56px/40px toplam kenar boşlukları.
- Ana sayfa içerik bölümleri ayrıca tam genişlik + yan padding max(48px,calc((100vw - 1280px)/2)); mobil20px.
- Hareketli panel genişliği min(1680px,calc(100% - 64px)); ≤1000px toplam32px, ≤700px toplam20px kenar payı.
- Panel içerik padding26px 32px 22px; mobil16px 14px; ≥1500px30px 42px.
- Önizleme kart aralığı16px; mobil10px.
- Panel sekme aralığı25px; mobil22px. Hero buton aralığı mobil10px; sınıf etiket aralığı12px, mobil7px.
- Kodda 4/8 tabanlı ortak --space-* sistemi yok; 7,10,14,18,22,26 gibi yerel değerler var. Yeni ölçek uygulanmadı.

## 5. Gölgeler ve clay derinliği
| Alan | Kaynak değer |
|---|---|
| Üst menü palet katmanı | 0 5px 22px #5742220b |
| Hero butonu | 0 6px 18px #123b3320 |
| Hareketli önizleme paneli | 0 22px 70px #102f3050, 0 0 0 1px #fff8 |
| Hafif mobil panel | 0 10px 28px #102f3033 |
| Önizleme kart hover | 0 12px 22px #244d3920 |
| Katalog kart focus-within | 0 12px 25px color-mix(in srgb,var(--class-bg) 50%,transparent) |
| Katalog kart hover | 0 18px 34px color-mix(in srgb,var(--class-bg) 55%,transparent) |

Kart hover yalnız uygun hover koşulunda translateY(−6px) scale(1.025), görsel scale(1.07) kullanıyor. Ayrıntılı hareket sözleşmesi T09'dadır; burada değişiklik yok.

## 6. Pilot iç ekranlarda farklar
- Bahçe ve Keşif oyunlarının DOM arayüzü ortak typography.css dosyasını yüklüyor.
- Canvas yazıları CSS mirasını kullanmıyor: bahce.html txt() ve kesif.html text() açıkça 700 ...px Arial atıyor. Bu nedenle “tüm oyun yazıları üç marka fontuyla uyumlu” denemez.
- kesif.html içindeki eski Arial/Inter normal DOM kuralları typography.css !important kapsamına giren elemanlarda baskılanabilir. Kaynakta font adı görülmesi tek başına etkin font kanıtı değildir.
- Keşif sahnesinde #112b35 gövde ve #172d4c canvas çevresi; Bahçe kendi sahne renklerini kullanıyor. Oyunların iç renkleri tek bir ortak token tablosundan yönetilmiyor.
- Yerel modern-controls/color-controls katmanları ve !important kuralları var; ileride parça parça ortaklaştırılacak, toplu silinmeyecek.

## 7. Sonraki kararlar için kayıtlı bulgular
1. Ana tokenlar korunacak; sahne tonları ayrı rol olarak kalacak.
2. Canvas font uyumu ve yüklenme sonrası yeniden çizim, pilot uygulamasında ele alınacak.
3. Mobil8px etiket/11px kazanım kodu okunabilirliği gerçek dar ekran görüntüsüyle incelenecek; bu görev kontrast/uygunluk testi değildir.
4. Yeni token sistemi onaylanırsa mevcut değerleri isimlendiren bir katman tercih edilecek. Bu görev ortak CSS'yi yeniden yazma izni değildir.
5. Logo dosyası assets/ufkora-clay-logo.webp korunur. Reduced-motion, altıgen fazları, sınıf organizasyonu değişmez.

## Doğrulama ve değişiklik kaydı
Beş ortak CSS dosyasından kaynak sırası ve medya bağlamıyla 784 ilgili yaprak kuralı yerel olarak çıkarıldı. Son koşulsuz --ink ve --muted değerleri otomatik doğrulandı. Ek JSON dosyası kaynak SHA256'larını ve son kök tokenlarını içerir; CSS cascade motoru değildir.
Yeni bağımlılık kurulmadı. Site kodu/görseli/yayını değiştirilmedi; görsel önce-sonra kanıtı oluşturulmadı, çünkü bu görev belge envanteridir.
T06 belgesinin onayından sonra yalnız T07 masaüstü sınıf istasyonları taslağına geçilecek.
