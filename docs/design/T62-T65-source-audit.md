# T62–T65 · Yayın öncesi kaynak denetimi

23 Ekim 2026. Bu rapor ayrı denetim ajanının kaynak/üretim-JS kontrolleridir. Tarayıcı, gerçek telefon, ekran okuyucu ve OS medya tercihi ölçümü değildir. Giriş sahnesi dosyaları değiştirilmedi. Entegrasyon sırasında diğer ajanların değiştirdiği oyunlar bu raporla otomatik kabul edilmiş sayılmaz.

| Madde | Doğrulanan | Açık kabul |
| --- | --- | --- |
| T62 | Üretim entrance JS sözleşmesi; altı köşe, kapı/panel sırası, odak kapısı, buton ve geri/hızlı scroll davranış modeli | Son adayın gerçek tarayıcıda scroll, hızlı ters yön ve buton testi |
| T63 | Kaynakta semantik/native kontroller, odak, reduced-motion ve sınırlı renk çiftleri; bulunan Toplama geri bildirim hatası düzeltmeye iletildi | Son sürüm ekran matrisi, native %200 zoom, ekran okuyucu, dokunma ve görünür odak/örtüşme |
| T64 | Belirli commit için ham/gzip kaynak boyutları; motion kaynaklarının statik incelenmesi | Son aday tüm dosyaların boyutları, long task/INP/LCP, gerçek GPU/FPS ve cihaz maliyeti |
| T65 | Fiziksel cihaz erişimi bulunmadığı kaydedildi | Telefon ve masaüstü tarayıcılarının gerçek cihaz kabulü; bu madde bekler |

## T62 · Kapı ve panel sözleşmesi

`node tests/release-source-contract.cjs` gerçek `features/entrance/transition.js` dosyasını minimal DOM/event/RAF modeliyle çalıştırır. Geçti:

- Altı köşeli SVG kapı korunur; `.08–.62` yaklaşma ve `.66` kapı geçişi sonrası `.68–.94` panel gelişi kaynakta ayrıdır.
- `.68` dahil panel opaklığı sıfırdır. `.81` ara durumda panel hareketi başlar, fakat önizleme inert kalır; `.94` erişimi açar.
- Geri ve hızlı ters kaydırmada güncel scroll değeri kullanılır; panel tekrar görünmez/inert olur.
- Scroll kareleri cached geometry kullanır; ölçüm yalnız measure/resize/media değişiminde yenilenir.
- “Atölyeyi keşfet” normal hareket yolunda `.98` hedefe smooth scroll yapar. Reduced-motion'da preventDefault uygulanmaz, native anchor korunur ve önizleme inert değildir.
- Lite yolunda tam ekran clip-path kapalıdır; panelin opacity/translation ve odak sırası korunur.

`node tests/discovery-motion-contract.cjs` ve `node tests/page-continuity-contract.cjs` de geçti: durum değişimi animasyonu beklemez, hızlı tersleme/hidden/offscreen/reduced iptali, animasyon desteği olmayan yol ve eski transition temizleme yarışları. JS sözdizimi kontrolü geçti. Bunlar render/OS emülasyonu değildir.

Kaynakta masaüstü portal arka planının önceden var olan statik `blur(22px)` katmanı bulunur (`home.css`); lite override `filter:none` kullanır. Yeni blur eklenmedi. Masaüstü clip-path her scroll güncellemesinde değişir; bu nedenle “GPU garantili / sıfır paint maliyeti” iddiası kurulamaz.

## T63 · Erişilebilirlik ve responsive kaynak bulguları

Ana sayfada skip link, nav adları, önizlemede gerçek tab/tabpanel ilişkisi ve aria-selected/pressed değerleri kaynakta mevcut. Panel erken odak almayı inert ve pointer-events kapısıyla engeller. Ortak girişte native select, label-for, details/summary, role=status ve süre için role=timer kullanılır. Yeni ortak giriş/select/ana düğme min-height 48px; 700px altında tek kolon vardır. Bunlar gerçek dokunma hedefi ve taşma ölçümü değildir.

Kaynak renklerinin düz zemin üzerindeki hesaplanan kontrastları (WCAG sRGB luminance formülü): `#204b3b` / `#fff8eb` **9.33:1**; beyaz / `#075a44` **8.22:1**; odak moru `#6642c0` / `#fff8eb` **6.40:1**. Gradient/fotoğraf üstündeki metinler, bütün ekranlar ve tarayıcıda computed colors bu üç sayıyla doğrulanmış sayılmaz.

Toplama adapter incelemesinde bulunanlar:

| Bulgu | Durum |
| --- | --- |
| Yarışma yanlış yanıtı yalnız renk/class ile bildiriliyordu; örnek metni yalnız doğru cevabın ilerlettiğini söylüyordu | Ana ajan düzeltti: kalıcı role=status doğru/yanlış açıklaması ve her yanıtın ilerlediğini belirten örnek. Son görsel/ekran okuyucu kabulü bekler. |
| Şifre yanlış yanıtında renk dışında açıklama eksikti | Ana ajan düzeltti: wrapper doğru açılan harfi veya yanlışta tekrar/elde açıklamasını role=status içinde bildiriyor. Üretim testi geçti; son tarayıcı kabulü açık. |
| Şifre, sembol ve bonus puan kontrollerindeki parseInt, ondalık girişin tamsayı önekini kabul edebiliyordu | Ana ajan düzeltti: wholeAnswer tam /^\d+$/ kontrolü yapıyor. Üretim testinde üç akış × üç düzeyde .9 öneki yanlış kabul edildi; normal cevaplar ve puan tekrar koruması geçti. |

Browser erişiminin daha önce güvenlik politikasıyla reddedildiği T57 raporunda kayıtlıdır. Bu ajan Browser veya alternatif otomasyon yüzeyi kullanmadı, erişim kısıtını aşmadı. CSS zoom ile önceki ölçümler native %200 zoom olarak yeniden adlandırılmadı.

## T64 · Tekrarlanabilir kaynak maliyeti

Aşağıdaki tablo **3114aab** commit'inin dosyaları için `gzip.compress(bytes, mtime=0)` ile hesaplandı. Entegrasyondaki sonraki düzeltmeler/yeni aileler dahil değildir; yayın adayında yeniden ölçülmeli. gzip değeri HTTP transfer boyutu veya çalışma hızı değildir.

| Dosya | Ham bayt | gzip bayt |
| --- | ---: | ---: |
| features/entrance/transition.js | 4335 | 1560 |
| features/entrance/transition.css | 1444 | 548 |
| features/home/discovery-motion.js | 2717 | 1183 |
| features/home/discovery-motion.css | 5321 | 1737 |
| features/rollout/active-clock.js | 712 | 385 |
| features/rollout/addition-model.js | 727 | 424 |
| features/rollout/toplama-entry.js | 5959 | 2464 |
| features/rollout/content-entry.css | 2122 | 833 |

Yeni ortak clock rendering'e bağlı değildir; 100ms aralıkla aktif zamanı senkronlar. Her sayfada saat ve drawing loop sayısı gerçek profil ile gözlenmelidir. Paket kurulmadı, üretim telemetrisi veya gerçek cihaz performans sonucu alınmadı. FPS, pil, long task, INP ve LCP sonucu uydurulmadı.

## T65 · Cihaz kabulü

Fiziksel telefon ve gerçek masaüstü cihaz tarayıcısı bu ajan tarafından erişilmedi. T65 **bekler**. Kaynak/VM testi, bulut browser iframe'i veya CSS belge zoom'u bu cihaz şartının yerine geçmez. Son yayın adayına ait telefon + masaüstü sonuç kaydı olmadan bu rapor “tüm cihazlar geçti” kanıtı olamaz.

## Entegrasyon incelemesi · ek bulgular

Aşağıdaki ek kaynak kontrolleri paralel çalışan dosya aileleri hazır olduktan sonra yapıldı. Testler ayrı ajan tarafından tekrar çalıştırıldı; tarayıcı/cihaz kabulü anlamına gelmez.

| Bulgu / kontrol | Sonuç |
| --- | --- |
| Toplama yarışma Başlat odağı ilk gizli eski süre düğmesine gidebiliyordu | Ana ajan görünür quiz-options yanıt düğmesini hedefleyerek düzeltti; üretim regresyonu geçti. |
| Toplama süre bitiminde sonuç bölümü tümüyle inert oluyordu | Ana ajan yarışma özetini erişilebilir bırakıp yanıt kilidini koruyarak düzeltti; üretim regresyonu geçti. |
| Açı Okçusu eski ok callback'i yeniden başlatılan görevin global animasyonuna erişebiliyordu | Geometri ajanı shot + mission kimlik kontrolü ekledi. Eski callback'in yeni oku ilerletemediği/puanlayamadığı üretim regresyonu bağımsız tekrar geçti. |
| Küp/yansıma süre kilidi iç geri bağlantıları engelleyebiliyordu | Mekânsal ajan iki sayfada a[href] bağlantılarını capture engelinden çıkardı, açık odak hedefleri ekledi. Spatial source sözleşmesi bağımsız tekrar geçti. |
| Banka sayı cevabında tüm nokta/boşluklar siliniyor; hatalı grup `1.8` → `18` kabul edilebiliyordu | Banka ajanına tam sayı/binlik grup doğrulaması ve regresyon testi için iletildi. Yayın adayında kapanışı kontrol edilmeli. |
| Olasılık para/zar/birlikte ve serbest/üç görev türü | Üretim testleri bağımsız tekrar geçti: ilk örneklemi dondurma, adil model beklentisi, hidden/reset callback iptali, süre sonu ve tekrar. Yeni kritik kaynak hatası doğrulanmadı. |
| Maarif beş akış ve üç düzey | Üretim testleri bağımsız tekrar geçti: 900 profil örneği, kesir eşdeğerliği, puan tekrarı, süre/hidden/tekrar. |

Ana ajanın sağladığı yayın bağlamı (bu denetim ajanının Vercel çağrısı değildir): Vercel proje/deployment erişimi 403 kapsam hatası nedeniyle mevcut değil; production ve yedek dalın 006dc2b35bf07cd2fd316a3c779e68acd6b71f1b olduğu ana ajan tarafından doğrulandı. Bu nedenle T66/T68'in gerçek platform aday/yayın kontrolü bu raporla kapatılamaz.

Son entegrasyon notu: Çalışma bankasındaki 1.8 → 18 sorunu giderildi. Düz tam sayı veya tutarlı üçlü binlik gruplama kabul edilir; ondalık ve bozuk/karışık gruplama reddedilir. Üretim bank testi bu yeni regresyonlarla tekrar geçti (ana ajan doğrulaması).
