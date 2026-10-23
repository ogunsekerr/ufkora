# T02 · UFKORA içerik envanteri

23 Ekim 2026 · Kaynak commit: `006dc2b35bf07cd2fd316a3c779e68acd6b71f1b`. T02 yalnız kayıt oluşturdu; site değişmedi.

## Sayım özeti

| Sayım birimi | Sayı | Açıklama |
| --- | ---: | --- |
| Katalog kartı | 16 | Sınıflarda görünen kayıtlar; ortak içerik tekrarları dahil |
| Farklı açılış adresi | 12 | Query parametreleri ayrı; Birim Küp tekrarları tek |
| İçerik HTML dosyası | 10 | Keşif oyunları üç mod için aynı dosyayı kullanıyor |
| Eski yönlendirme sayfası | 1 | oyun-atolyesi/index.html; oyun değildir |
| Çalışma bankası modülü | 13 | Her modülde etkinlik + hızlı oyun |
| Banka alt çalışması | 26 | 13 etkinlik, 13 hızlı oyun; ayrı HTML değildir |

Bu satırlar farklı sayım birimleridir. Birbirine eklenerek “toplam benzersiz oyun” sayısı üretilemez. Sekmeler, soru turları, zorluk seçenekleri ve görünüm düğmeleri de aynı şey değildir.

## Sınıflardaki kart dağılımı

| Sınıf | Kart | Oyun | Diğer |
| --- | ---: | ---: | ---: |
| 4 | 2 | 1 | 1 |
| 5 | 9 | 4 | 5 |
| 6 | 2 | 0 | 2 |
| 7 | 2 | 0 | 2 |
| 8 | 1 | 0 | 1 |

Bu dağılım katalog türüne göredir: laboratuvarın kendi içindeki oyun sekmesi ana katalogda ayrıca Oyun kartı olmayabilir.

## Tekilleştirilmiş açılış adresleri

| Kimlik | İçerik | Sınıflar | Kaynak katalog türü | Yol | Katalog kazanım kodları |
| --- | --- | --- | --- | --- | --- |
| R01 | Toplama Macera Adası | 4 | Oyun | `etkinlikler/toplama-adasi.html` | Kaynakta yok |
| R02 | Birim küp stüdyosu | 4, 5, 6, 7, 8 | Laboratuvar | `etkinlikler/birim-kup.html` | MAT.7.4.1 |
| R03 | Çokgen laboratuvarı | 5 | Laboratuvar | `etkinlikler/cokgen.html` | MAT.5.3.5, MAT.5.3.6 |
| R04 | Açı Ustası | 5 | Laboratuvar | `etkinlikler/aci-ustasi.html` | MAT.5.3.3, MAT.5.3.4 |
| R05 | Maarif Simülasyon Üssü | 5 | Çalışma bankası | `etkinlikler/maarif-atolyesi.html` | MAT.5.3.3, MAT.5.3.4, MAT.5.1.1, MAT.5.4.1, MAT.5.4.2, MAT.5.4.3, MAT.5.4.4, MAT.5.1.3 |
| R06 | Bahçe Mimarı | 5 | Oyun | `oyun-atolyesi/bahce.html` | MAT.5.4.1, MAT.5.4.2, MAT.5.4.3, MAT.5.4.4 |
| R07 | Işık Rotası | 5 | Oyun | `oyun-atolyesi/kesif.html?oyun=isik` | MAT.5.3.3, MAT.5.3.4 |
| R08 | Çember Tamircisi | 5 | Oyun | `oyun-atolyesi/kesif.html?oyun=cember` | MAT.5.3.1, MAT.5.3.2 |
| R09 | Sayı Kargo | 5 | Oyun | `oyun-atolyesi/kesif.html?oyun=kargo` | MAT.5.1.1 |
| R10 | 26 Etkinliklik Çalışma Bankası | 5 | Çalışma bankası | `oyun-atolyesi/etkinlikler.html` | MAT.5.3.1, MAT.5.3.2, MAT.5.3.3, MAT.5.3.4, MAT.5.3.5, MAT.5.3.6, MAT.5.3.7, MAT.5.1.1, MAT.5.1.2, MAT.5.4.1, MAT.5.4.2, MAT.5.4.3, MAT.5.4.4 |
| R11 | Para ve Zar Laboratuvarı | 6 | Laboratuvar | `etkinlikler/olasilik-laboratuvari.html` | MAT.6.6.1 |
| R12 | Aynanın diğer tarafı | 7 | Laboratuvar | `etkinlikler/yansima.html` | MAT.7.3.1 |

Kodlar kaynak katalogdaki beyanlardır; güncel resmî müfredatla eşleştirme bu görevin kapsamında değildir. Kod veya başlık düzeltilmedi.

## Sayfa içindeki çalışma alanları

### P01 · Toplama Macera Adası

Kaynak: `etkinlikler/toplama-adasi.html`; sınıflar: 4.

- **P01-act1 — Basamak Atölyesi**. Kontrol: `switchTab('act1')`; kaynak satırı 123.
- **P01-act2 — Şifre Bulmaca**. Kontrol: `switchTab('act2')`; kaynak satırı 131.
- **P01-act3 — Kayıp Semboller**. Kontrol: `switchTab('act3')`; kaynak satırı 139.
- **P01-act4 — İkili İşlem Dedektifi**. Kontrol: `switchTab('act4')`; kaynak satırı 147.
- **P01-quiz — Süreli Toplama Şampiyonası**. Kontrol: `switchTab('quiz')`; kaynak satırı 155.

Beş sekme vardır. Yarışmadaki 90 saniye Normal / 60 saniye Hızlı seçenekleri iki ayrı oyun değildir. İlgili setQuizDifficulty fonksiyonu yalnız süreyi değiştirir.

### P02 · Birim Küp Stüdyosu

Kaynak: `etkinlikler/birim-kup.html`; sınıflar: 4, 5, 6, 7, 8.

- **P02-sandbox — Küp oluşturma ve görünüş inceleme**. Kontrol: `mode-add`; kaynak satırı 478.

Tek ortak uzamsal çalışma: küp ekle/sil, izometrik/ön/üst/sağ/sol/serbest 3D görünümler, arka plan ve PNG dışa aktarma. Görünümler ayrı oyun sayılmadı.

### P03 · Çokgen Laboratuvarı

Kaynak: `etkinlikler/cokgen.html`; sınıflar: 5.

- **P03-explore — Keşif ve Laboratuvar**. Kontrol: `switchTab('explore')`; kaynak satırı 71.
- **P03-game — İste Çizdir ve Çokgen Oyunu**. Kontrol: `switchTab('game')`; kaynak satırı 74.

İki ana sekme: laboratuvar ve oyun. Oyun soruları/turları bağımsız uygulama olarak sayılmadı.

### P04 · Açı Ustası

Kaynak: `etkinlikler/aci-ustasi.html`; sınıflar: 5.

- **P04-1 — İletki Okuma**. Kontrol: `switchActivity(1)`; kaynak satırı 65.
- **P04-2 — Özdeş ve Bilinmeyen Açılar**. Kontrol: `switchActivity(2)`; kaynak satırı 69.
- **P04-3 — Açı Okçusu / Balon Avı**. Kontrol: `switchActivity(3)`; kaynak satırı 73.

Balon Avı içinde all/inner/outer/calculate/multi modları var. Bunlar aynı oyun içindeki beş soru/oynama modudur; üç ana çalışma alanına ayrıca eklenip yeni oyun gibi sayılmaz.

### P05 · Maarif Simülasyon Üssü

Kaynak: `etkinlikler/maarif-atolyesi.html`; sınıflar: 5.

- **P05-protractor — Açı Kâşifi ve Radar Kulesi**. Kontrol: `switchGeoSubMode('protractor')`; kaynak satırı 181.
- **P05-laser — Lazer Aynaları**. Kontrol: `switchGeoSubMode('laser')`; kaynak satırı 184.
- **P05-cargo — Sayı ve Lojistik / Bölükler ve Basamak Röntgeni**. Kontrol: `switchTheme(2)`; kaynak satırı 131.
- **P05-carpet — Halı ve Bahçe Ustası**. Kontrol: `switchTheme3Sub('carpet')`; kaynak satırı 420.
- **P05-potion — Simyacı İksir Laboratuvarı**. Kontrol: `switchTheme3Sub('potion')`; kaynak satırı 423.

Üç ana tema altında beş çalışma alanı: geometri 2, sayı/lojistik 1, alan/çevre-kesir 2. Sayı/lojistikte bölük oluşturma ve basamak röntgeni; halıda çevre/alan görevleri; iksirde birim kap seçimi aynı akışın parçalarıdır.

### P06 · Bahçe Mimarı

Kaynak: `oyun-atolyesi/bahce.html`; sınıflar: 5.

- **P06-main — Sekiz bölümlü bahçe oyunu**. Kontrol: `const LEVELS=`; kaynak satırı 25.

Tek oyun, sekiz bölüm: İlk filiz; Çiti uzat; İnce uzun bahçe; Kendi yolunu bul; Fayansları taşı; Uzun yol; En yeşil tasarım; Mahalleye açılış. Öğretmen ayarları ve bölüm seçimi ayrı oyun değildir.

### P07 · Keşif oyunları

Kaynak: `oyun-atolyesi/kesif.html`; sınıflar: 5.

- **P07-isik — Işık Rotası**. Kontrol: `isik:{title:'Işık Rotası'`; kaynak satırı 10.
- **P07-cember — Çember Tamircisi**. Kontrol: `cember:{title:'Çember Tamircisi'`; kaynak satırı 10.
- **P07-kargo — Sayı Kargo**. Kontrol: `kargo:{title:'Sayı Kargo'`; kaynak satırı 10.

Üç ayrı katalog bağlantısı: `?oyun=isik`, `?oyun=cember`, `?oyun=kargo`. Üçünün değişiklik alanı ortak dosyadır. Eksik/geçersiz parametrede kaynak varsayılanı isik.

### P08 · 26 Etkinliklik Çalışma Bankası

Kaynak: `oyun-atolyesi/etkinlikler.html`; sınıflar: 5.

Aşağıdaki 13 modül tablosunun her satırı iki bağımsız seçim içerir; aynı sayfada `start(index, activity/game)` ile açılır.

### P09 · Para ve Zar Laboratuvarı

Kaynak: `etkinlikler/olasilik-laboratuvari.html`; sınıflar: 6.

- **P09-coin — Madeni Para Deneyi**. Kontrol: `setMode('coin')`; kaynak satırı 231.
- **P09-dice — Zar Deneyi**. Kontrol: `setMode('dice')`; kaynak satırı 234.

coin ve dice iki deneydir. both bu ikisini birlikte gösterir; üçüncü bağımsız deney değildir. Tek/çoklu deney atışları yeni oyun olarak sayılmadı.

### P10 · Aynanın Diğer Tarafı

Kaynak: `etkinlikler/yansima.html`; sınıflar: 7.

- **P10-lab — Keşif Laboratuvarı**. Kontrol: `tabBtnLab`; kaynak satırı 63.
- **P10-activity — Kendin Taşı ve Çiz**. Kontrol: `tabBtnActivity`; kaynak satırı 66.

İki ana sekme: keşif laboratuvarı ve kendin taşı/çiz etkinliği. Hazır ayrı bir hızlı oyun sekmesi bu kayıtta doğrulanmadı; yokmuş gibi silme veya varmış gibi gösterme yapılmadı.

## Çalışma bankası: 13 modül / 26 alt çalışma

| Modül / kod | Etkinlik kimliği ve adı | Hızlı oyun kimliği ve adı |
| --- | --- | --- |
| 0 · MAT.5.3.1 | B01-A · Geometri takım çantası | B01-G · Yanlış Usta |
| 1 · MAT.5.3.2 | B02-A · Rayları Kur | B02-G · İddiayı Sına |
| 2 · MAT.5.3.3 | B03-A · Tahmin Et, Ölç | B03-G · Açıölçer Dedektifi |
| 3 · MAT.5.3.4 | B04-A · Kavşak Laboratuvarı | B04-G · Açı Akrabaları |
| 4 · MAT.5.3.5 | B05-A · Doğrulardan Şekle | B05-G · Çokgen Kapısı |
| 5 · MAT.5.3.6 | B06-A · Şekil Kimliği | B06-G · Mümkün mü? |
| 6 · MAT.5.3.7 | B07-A · Çemberden Üçgen | B07-G · Eşkenar Kilidi |
| 7 · MAT.5.1.1 | B08-A · Bölük Atölyesi | B08-G · Sayı Spikeri |
| 8 · MAT.5.1.2 | B09-A · Mini Grubun Alışverişi | B09-G · Kalan Ne Olacak? |
| 9 · MAT.5.4.1 | B10-A · 20 Birimlik Çit | B10-G · Eksik Bahçe |
| 10 · MAT.5.4.2 | B11-A · Fayans Ustası | B11-G · Örtünün Altında |
| 11 · MAT.5.4.3 | B12-A · Aynı Alan, Başka Çevre | B12-G · İddiayı Çürüt |
| 12 · MAT.5.4.4 | B13-A · Bahçeyi Hazırla | B13-G · Ustanın Faturasını Denetle |

A = activity, G = game. Modül indeksleri kaynak kodda 0–12 aralığındadır. Örnek: B01-A → `data-open="0,activity"`; B01-G → `data-open="0,game"`. Bu seçimler URL parametresi olarak uygulanmış sayılmıyor. Her akışın üç tur yapısı kodda bulunuyor; 78 tur yuvası 78 farklı oyun anlamına gelmez.

## Tespit edilen kapsam ve dikkat noktaları

- **F01 — Birim Küp beş sınıfta aynı URL ile kullanılıyor.** UI/ayar adaptörü bir kez, sınıf bağlantı kontrolleri beş kez; beş farklı oyun olarak geliştirilmez.
- **F02 — 26 çalışma 26 HTML dosyası değil: 13 modül × etkinlik/oyun modu.** Her module_index+mode ayrı alt görev kimliğiyle izlenir.
- **F03 — Işık, Çember ve Kargo aynı kesif.html dosyasını oyun query parametresiyle paylaşıyor.** Ortak dosya değiştiğinde üç modun regresyonu birlikte kontrol edilir.
- **F04 — Toplama Macera Adası katalogda kazanım kodu içermiyor.** Yetkili kazanım kaynağından doğrulanacak; bu adımda kod eklenmedi.
- **F05 — Bölünebilme Tenceresi adı bu snapshot HTML dosyalarında bulunmadı.** Gerekirse ayrı kaynak istenecek; eksik dosya mevcutmuş gibi kullanılmayacak. Başka bir adla var olması dışlanmıyor.
- **F06 — Toplama yarışmasında Normal/Hızlı etiketli kontrol yalnız quizDuration değerini değiştiriyor.** Gerçek soru zorluğu ile süre seçimi T28–T37 sırasında ayrılacak; henüz davranış değiştirilmedi.
- **F07 — Banka zamanlayıcısı 60 saniye başlangıçlı ve elle başlatılabilir; süre bitince cevap vermeye devam edilebiliyor.** Otomatik oyun sonu varsayılmayacak; yeni süre politikası ayrı kararla.
- **F08 — Olasılıkta iki deney var; both üçüncü oyun değil, iki deneyi birlikte gösteren görünüm.** Aynı deneyi tekrar saymadan üç görünüm kontrol edilecek.

## Yayılımda tekrarları nasıl önleyeceğiz?

- Sayfa başına Pxx, açılış adresi başına Rxx, bankada modül+mod başına Bxx-A/G kimliği kullanılacak.
- Birim Küp bir ortak uygulama olarak düzenlenecek; beş sınıf bağlantısı ayrıca kontrol edilecek.
- kesif.html değişince üç query modu birlikte kontrol edilecek.
- Banka ortak motorunun UI değişikliği ile her modülün amaç/soru/zorluk davranışı ayrı takip edilecek.
- Maarif’in beş alanı, Toplama’nın beş sekmesi ve Açı Ustası’nın alt oyun modları kart sayısının arkasında unutulmayacak.
- Nihai Yxx geliştirme görevleri T59 aşamasında pilot onayından sonra açılacak; T02 envanteridir, toplu uygulama izni değildir.

## Doğrulama ve sınırlar

- [x] 16 katalog girdisi saf veri olarak okundu; 12 URL ve 10 dosya tekilleştirildi.
- [x] Tüm katalog hedef dosyaları ve görselleri mevcut.
- [x] 13 banka modülü ve 26 farklı modül/mod anahtarı doğrulandı.
- [x] 11 HTML dosyasının tamamı: 10 içerik + 1 eski yönlendirme olarak hesaba katıldı.
- [x] İç çalışma alanlarının kontrol işaretleri kaynakta bulundu.
- [x] 48 kaynak dosyasının hash değerleri yedekle aynı.
- [ ] Gerçek tarayıcıda oyun/sekme çalışması ve linklerin ağ üzerinden açılması: bu görevde yapılmadı.
- [ ] Matematiksel doğruluk ve resmî kazanım kodu doğrulaması: bu görevde yapılmadı.

Toplam 13 otomatik statik kontrol geçti. UI değiştirilmediği için görsel önce/sonra kanıtı yok; envanter ve kaynak satırları kanıttır.

**T02 tamamlandı. T03 (masaüstü altıgen davranışının kaydı) başlamadı; kullanıcı onayı bekleniyor.**
