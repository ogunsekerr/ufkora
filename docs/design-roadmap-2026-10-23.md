# UFKORA · Kontrollü tasarım uygulama planı

Tarih: 23 Ekim 2026 (Türkiye). Bu belge plan ve takip listesidir; tasarım uygulaması başlamadı.

## Güvenli başlangıç

- [x] B01 — Production deployment ve kaynak commit eşleşmesi doğrulandı.
- [x] B02 — `backup/2026-10-23-pre-design` GitHub dalı oluşturuldu ve SHA'sı yeniden okundu.
- [x] B03 — 48 kaynak dosyası ZIP'e alındı; ZIP ve her dosyanın SHA-256 değeri doğrulandı.
- [x] B04 — Erişilen yerel proje dosyalarının bu commit ile aynı olduğu doğrulandı.

**Sabit geri dönüş commit'i:** `006dc2b35bf07cd2fd316a3c779e68acd6b71f1b`

- Yedek: https://github.com/ogunsekerr/ufkora/tree/backup/2026-10-23-pre-design
- Commit: https://github.com/ogunsekerr/ufkora/commit/006dc2b35bf07cd2fd316a3c779e68acd6b71f1b
- Kaynak ZIP: https://github.com/ogunsekerr/ufkora/archive/006dc2b35bf07cd2fd316a3c779e68acd6b71f1b.zip
- Production kaydı: `dpl_CvLUcwX99rXzyQ3PvbfvtHGnQggh`
- O andaki deployment: https://ufkora-lprlp210b-ufkora.vercel.app
- Ana alan adları: https://ufkora.com ve https://ufkora.vercel.app

Yedek dal geliştirme için kullanılmaz. Kaynak ZIP'i; API anahtarları, Vercel/Resend hesap ayarları, DNS veya dış servis verilerinin yedeği değildir. Bu çalışmalar bu ayarları değiştirmeyecek. Deployment'ın sağlayıcıda saklanma süresi garanti değildir; asıl geri dönüş referansı Git commit'idir. Git dalı, teknik olarak değiştirilebilir bir referanstır; bu yüzden sabit SHA da kaydedilmiştir.

## Çalışma birimi ve kontrol düzeni

1. Her mikro görev yalnız bir davranış veya küçük bir arayüz parçasını ele alır. Tercihen 1–3 kaynak dosyası; ortak sözleşme gerekiyorsa dosya sayısı gerekçesiyle artırılır.
2. Görev büyürse sessizce kapsam genişletilmez; Txx-a / Txx-b olarak bölünür. Süre ve token için garanti verilmez; kapsam sınırı kullanılır.
3. Görev kartı: amaç → ilgili dosyalar → değişiklik → kabul ölçütü → doğrulama → commit → varsa eksik.
4. Bir iş yalnız kod yazıldığı için işaretlenmez. İlgili davranış kontrol edilince tamamlanır; gerçek cihaz testi yapılmadıysa ayrı bekleyen madde kalır.
5. Tamamlanan görev geri bildirimi: `Txx tamamlandı · ne değişti · neyle doğrulandı · commit/preview · sıradaki görev`. Gerçek zamanlı arka plan çalışması varsayılmaz; çalışma aktif oturumda sürer.
6. Her mikro görev ayrı commit; her görsel aşama ayrı preview/PR. Ana siteye yayın ancak ilgili kontrol kapısından sonra ve kullanıcı onayıyla.
7. Beğenilmeyen görev commit'i kendi dalında geri alınır; kabul edilmiş başka işleri geri almak gerekmez. Tam geri dönüşte sabit yedek commit'ten yeni restore dalı/PR açılır. Main'e force-push veya hard reset uygulanmaz.
8. Tasarım yönü değişikliği, yeni ücretli araç veya yeni runtime kütüphanesi ayrı karardır. İlerlemek için her küçük kod adımında tekrar izin istenmez; kullanıcı tarafından onaylanan paket içinde devam edilir.

## Token tüketimini azaltma

- İlk adımda `docs/PROJECT-MAP.md` ve ilgili modül okunur; her görevde tüm depo/rapor tekrar okunmaz.
- Tasarım ölçütleri bir kez çıkarılır; sonraki görevler ilgili madde ve dosyaya başvurur.
- Birincil skill göreve göre seçilir. Bütün skill'ler her seferinde yüklenmez.
- UI UX Pro Max: UX/tutarlılık; Frontend Design: ilk görsel yön; Design Taste: seçili tasarım eleştirisi; Web Animation Design + Motion Docs: yalnız hareket görevleri; Frontend UI Engineering: uygulama; Web Design Guidelines: ilgili ekran denetimi.
- React rehberi yalnız gerçekten React/Next.js olan dosyada kullanılır. Mevcut statik yapı korunur.
- 21st yalnız hedefli kaynak araştırması için: normal bileşen araması hatalı; tema/şablon araması ve geliştirici bazlı listeleme çalışıyor. Hazır şablon veya bağımlılık doğrudan eklenmez.
- İlgili JS için sözdizimi, değişen davranış için anlamlı kontrol; tüm site taraması yalnız aşama kapılarında veya ortak dosya etkisi varsa.
- Tam ekran videoları ve yinelenen büyük görseller yerine gerekirse yalnız değişen alanın önce/sonrası gösterilir.
- `PROGRESS` kaydı: son kabul edilen commit, aktif görev, sıradaki görev ve bilinen sorunlar; kesinti sonrası buradan devam edilir.
- Kullanım limiti uyarısında durulur; ücretli kredi/otomatik yükleme kullanılmaz. Canlı limit sayacı yoksa kalan hak uydurulmaz.

## Korunacak sözleşme

Clay kimliği, onaylı logo, sınıf renkleri, Bricolage Grotesque / Nunito Sans / Outfit rolleri, mevcut 4–8 sınıf organizasyonu, oyun/etkinlik ayrımı ve kazanım bilgileri korunur. 4. sınıf kaldırılmaz.

Altıgenin mevcut evreleri: yaklaşma/geçiş 0.08–0.62; panelin hareket ederek belirmesi 0.68–0.94; ready 0.94. Hızlı/yavaş/geri kaydırma ve butonla geçişte panel erken görünmez. Bu eşikler mevcut kodun başlangıç sözleşmesidir; ölçülüp doğrulanmadan değiştirilmez.

İmleç su/blur/kırılma efektleri ve gökkuşağı geri gelmez. Mobilde tam ekran hareketli maske/blur/SVG filtresi eklenmez. Yeni React, Motion, GSAP veya Three.js ilk aşamanın gereği değildir.

## Aşama 1 — Mevcut davranışların kısa referansı

Odak: `features/entrance/`, `features/home/`, `catalog.js`. Tasarım değişikliği yok.

- [ ] T01 — Korunan davranışları tek referans dosyasına çıkar. **Bitti ölçütü:** logo/font/renk, giriş evreleri ve sınıf URL'leri kayıtta; yeniden tasarım yok.
- [ ] T02 — İçerik envanterini çıkar. **Bitti ölçütü:** katalog girdileri, ortak URL'ler, query ile açılan oyunlar ve banka içindeki alt oyunlar ayrı listeli; aynı oyun iki kez sayılmıyor.
- [ ] T03 — Masaüstü altıgen akışını kaydet. **Bitti ölçütü:** yaklaşma, tam geçiş, kademeli panel, hızlı ve geri scroll ile buton yolu kontrol edildi.
- [ ] T04 — Mobil ve reduced-motion başlangıcını kaydet. **Bitti ölçütü:** içerik erişilir, mobil hafif yol çalışır; ölçülmeyen FPS iddiası yok.
- [ ] T05 — Pilot kapsamını sabitle. **Öneri:** 5. sınıf; Bahçe Mimarı, Sayı Kargo ve Işık Rotası. **Bitti ölçütü:** üçü envanterden doğrulandı; mevcut girişleri ve kazanımları listeli.

**K1:** Başlangıç sorunları geliştirme kaynaklı sorunlardan ayrılır. Herhangi bir giriş hatası varsa yalnız o hataya ayrı küçük düzeltme görevi açılır; sahne yeniden yazılmaz.

## Aşama 2 — Görsel ve hareket sözleşmesi

Bu aşama rapordaki A+B birleşimini somutlaştırır; C yalnız mevcut imza giriş ve sınırlı tanıtım vurgusudur.

- [ ] T06 — Mevcut tokenları çıkar. **Bitti ölçütü:** renk/başlık/gövde/sayı/buton/gölge/boşluk değerleri kayıtlı; onaylı değerler değiştirilmedi.
- [ ] T07 — Sınıf istasyonlarının masaüstü taslağını göster. **Bitti ölçütü:** 4–8 numaraları, nesneleri, bağlantıları ve hızlı erişim tek görünümde anlaşılır.
- [ ] T08 — Aynı alanın mobil taslağını göster. **Bitti ölçütü:** dikey duraklar, metinli bağlantılar, aynı sıralama; küçük yatay harita sıkıştırması yok.
- [ ] T09 — Ortak hareket dilini tanımla. **Bitti ölçütü:** press/seçim/keşif/sonuç süreleri ayrı, hover-touch-reduced-motion karşılıkları belirli; giriş scroll evreleri sabit.
- [ ] T10 — Görsel varlık kurallarını tanımla. **Bitti ölçütü:** clay malzeme, ışık, incelik, netlik, görsel oranı ve dosya bütçesi belirli; bulanık/kalın nesne sorunu yeniden üretilmiyor.

**K2:** Görsel taslak seçimi. Yeni yön belirlenmeden tüm sayfa kodlanmaz. Logo/font değişikliği bu paketin parçası değildir.

## Aşama 3 — Bağlantılı sınıf istasyonları (rapor 04)

Odak: ana sayfadaki mevcut sınıf seçimi. İlk uygulama yalnız bu alanı etkiler.

- [ ] T11 — Semantik sınıf bağlantılarını hazırla. **Bitti ölçütü:** mevcut URL ve sınıf renkleriyle klavye erişimi; içerik JS olmadan da ulaşılabilir.
- [ ] T12 — Masaüstü yerleşimini uygula. **Bitti ölçütü:** sınıf numaraları ve kil nesneleri okunaklı; zorunlu seviye/kilit algısı yok.
- [ ] T13 — Hafif bağlantı çizgisini ekle. **Bitti ölçütü:** çizgi nesneleri bağlar, metnin üzerinden geçmez; yeni render motoru yok.
- [ ] T14 — Mobil dikey yerleşimi uygula. **Bitti ölçütü:** 320/390 px'te taşma yok; aynı DOM ve sınıf sırası korunur.
- [ ] T15 — Hover/focus/press geri bildirimini ekle. **Bitti ölçütü:** bilgi harekete saklanmaz; touch'ta takılı hover yok; reduced-motion'da anlık durum.

**K3:** Yalnız sınıf alanının masaüstü/mobil önizlemesi değerlendirilir. Beğenilmezse bu beş görev yalıtılmış biçimde geri alınabilir.

## Aşama 4 — Atölye navigasyonu (rapor 03 ve 09)

Odak: `features/home/workshop-preview.js`, `features/workshop/catalog.js`, ilgili stil dosyası.

- [ ] T16 — Etkinlikler/Oyunlar sekmesine kayan clay gösterge ekle. **Bitti ölçütü:** içerik anında erişilir; mevcut seçim ve ARIA davranışı korunur.
- [ ] T17 — Sekme klavyesi ve odaklarını doğrula. **Bitti ölçütü:** ok tuşu/Tab/odak; reduced-motion durumunda gösterge bekletmez.
- [ ] T18 — Sınıf, tür ve filtreyi metinli araç rafında grupla. **Bitti ölçütü:** mevcut filtre sonuçları aynı, ikonlar etiketi ikame etmiyor.
- [ ] T19 — Mobil ek araç çekmecesini ekle. **Bitti ölçütü:** 3–4 ana araç görünür; aç/kapa, Escape ve odak dönüşü çalışır.
- [ ] T20 — Sabit bar ve safe-area kontrolü yap. **Bitti ölçütü:** içerik veya başlat butonu örtülmez; ekran döndürmede düzen bozulmaz.

## Aşama 5 — Oyun önizlemeleri (rapor 05 ve 06)

Odak: önce üç pilot oyun. Sonradan diğer içeriklere yayılır.

- [ ] T21 — Kart veri alanlarını düzenle. **Bitti ölçütü:** ad, sınıf, kazanım, amaç ve görsel alanları belirli; doğrulanamayan kazanım kodu uydurulmuyor.
- [ ] T22 — İlk pilotun clay görselini hazırla/iyileştir. **Bitti ölçütü:** net, optimize, doğru oran ve alternatif metin; mevcut kaliteli varlık öncelikli.
- [ ] T23 — İkinci pilotun clay görselini hazırla/iyileştir. **Bitti ölçütü:** aynı malzeme/ışık dili, oyuna özgü nesne.
- [ ] T24 — Üçüncü pilotun clay görselini hazırla/iyileştir. **Bitti ölçütü:** aynı görsel aile, aynı görselin tekrarı değil.
- [ ] T25 — “Nasıl oynanır?” çekmecesini ilk kartta uygula. **Bitti ölçütü:** amaç/örnek hamle/süre açık; ayrı Başlat hedefi, iç içe link yok; mobilde yerinde açılır.
- [ ] T26 — Çekmeceyi diğer iki karta yay. **Bitti ölçütü:** bağımsız aç/kapa ve doğru içerik; klavye ve ekran okuyucu durumu açık.
- [ ] T27 — Üç karta ayrı matematiksel mikro hareket ekle. **Bitti ölçütü:** yalnız nesnenin anlamlı parçası hareket eder; onaylı renkli yakınlaştırma korunur; eşzamanlı sürekli salınım yok.

## Aşama 6 — Ortak oyun giriş paneli (rapor 07 ve 08)

İlk olarak ortak UI, sonra her oyunun gerçek davranışına bağlama. “Bölünebilme Tenceresi” erişilebilen dosyası bulunursa referans; bulunamazsa bulunduğu iddia edilmez.

- [ ] T28 — Mevcut oyun girişlerini ve ayarlarını karşılaştır. **Bitti ölçütü:** desteklenen zorluk/süre ve yeniden başlatma davranışı oyun bazında listeli.
- [ ] T29 — Başlangıç panelinin küçük taslağını sun. **Bitti ölçütü:** amaç, kazanım, zorluk, süre ve Başlat sırası anlaşılır.
- [ ] T30 — Zorluk seçiciyi oluştur. **Aday:** Kolay / Orta / Zor; alternatif adlar ayrı karar. **Bitti ölçütü:** açıklamalı native seçim, yalnız renkle anlatılmıyor.
- [ ] T31 — Süre seçiciyi oluştur. **Aday:** 60 / 120 / 180 saniye / Süresiz. **Bitti ölçütü:** gerçek süre ile saat karışmıyor; sürükleme zorunlu değil.
- [ ] T32 — Başlat sözleşmesini tanımla. **Bitti ölçütü:** zorluk/süre parametresi, geçersiz değer fallback'i, direkt URL ve yeniden başlatma yolu açık.
- [ ] T33 — İlk pilot oyunu bağla. **Bitti ölçütü:** zorluk soru/yardım parametresini gerçekten değiştirir; sayaç yalnız oyun başlayınca çalışır.
- [ ] T34 — İkinci pilot oyunu bağla. **Bitti ölçütü:** aynı panel, oyuna özgü gerçek parametreler; önceki oyundan durum sızıntısı yok.
- [ ] T35 — Üçüncü pilot oyunu bağla. **Bitti ölçütü:** aynı giriş davranışı; yanlış/eksik parametre güvenli varsayılana döner.
- [ ] T36 — Süresiz, süre sonu ve tekrar oynama akışını kontrol et. **Bitti ölçütü:** biten oyunda sayaç devam etmez; arka sekme zamanı doğru ele alınır; reset seçimi bilinçli korur/sıfırlar.
- [ ] T37 — Giriş panelinin mobil/klavye kontrolünü tamamla. **Bitti ölçütü:** rahat hedefler, görünen odak, %200 zoom, panelde taşma yok.

**K4:** Zorluk adları, kesin süre seçenekleri ve üç oyunun gerçek zorluk eşlemesi değerlendirilir. UI'da görünen ama oyunda etkisi olmayan ayar kabul edilmez.

## Aşama 7 — Katalog sunumu (rapor 12)

- [ ] T38 — Tek sınıf için konu sıraları taslağını hazırla. **Bitti ölçütü:** aynı içerikler konu başlıkları altında; bir öne çıkan oyun; yeni içerik/kazanım icat edilmez.
- [ ] T39 — İlk konu sırasını semantik liste/disclosure ile uygula. **Bitti ölçütü:** örnek ve kazanımlar açılır; doğrudan oyun bağlantısı erişilir.
- [ ] T40 — Pilot sınıfın diğer konu sıralarını tamamla. **Bitti ölçütü:** boş kategori yok, gereksiz aç/kapa derinliği yok.
- [ ] T41 — Filtre sonuç sayısını ve odak davranışını ekle. **Bitti ölçütü:** aria-live ile anlamlı bildirim; filtrelemede odak kaybolmaz.
- [ ] T42 — Dar ekran ve liste taramasını kontrol et. **Bitti ölçütü:** tek sütun, uzun başlık/kazanım metni taşmıyor; hızlı bulma mevcut düzenden kötüleşmiyor.

**K5:** Pilot katalog görünümü seçilir. Mevcut görünüm onaysız tüm sınıflarda kaldırılmaz.

## Aşama 8 — Hero ve arka plan (rapor 01 ve 11)

- [ ] T43 — Tek matematiksel mini gösterim için storyboard hazırla. **Bitti ölçütü:** bir kavram, tek kısa hareket; “keşfet” silinmesi ve girişle dikkat çatışması yok.
- [ ] T44 — Mini gösterimin sabit iki durumunu uygula. **Bitti ölçütü:** hareket olmadan da kavram anlaşılır; ana başlık/CTA erişilir.
- [ ] T45 — “Dene” ile kısa hareketi ekle. **Bitti ölçütü:** touch/klavye eşdeğerliği; reduced-motion'da sabit karşılık; sonsuz döngü yok.
- [ ] T46 — Sınıf seçimine tepki veren arka plan nesnesini ekle. **Bitti ölçütü:** yalnız ilgili nesne kısa konum/ışık değişimi; imleç takibi yok.
- [ ] T47 — Ekran dışı ve mobil hareket bütçesini uygula. **Bitti ölçütü:** gereksiz loop/observer yok; mobil sahne sakin, metin arka planla karışmıyor.

## Aşama 9 — Sayfalar arası görsel süreklilik (rapor 10)

- [ ] T48 — Native View Transition desteğini ve tek pilot rotayı değerlendir. **Bitti ölçütü:** destek kontrolü, aynı-origin koşulları ve normal bağlantı fallback'i kayıtlı.
- [ ] T49 — Bir oyun nesnesi → oyun başlığı eşlemesini uygula. **Bitti ölçütü:** benzersiz geçiş adı; altıgen başka sayfalarda tekrarlanmıyor.
- [ ] T50 — Geri/ileri, deep-link ve parametreli URL'yi doğrula. **Bitti ölçütü:** geçmiş gezinmesi ve doğrudan açılış bozulmaz.
- [ ] T51 — Mobil/reduced-motion/fallback kontrolünü yap. **Bitti ölçütü:** desteklenmeyen tarayıcıda normal geçiş; büyük ekran büyütme zorunluluğu ve erişim gecikmesi yok.

**K6:** Geçiş pilotu yarar sağlamazsa bu özellik kapalı kalabilir; raporda durum ve gerekçesi işaretlenir. Destek sorunu yüzünden ikinci animasyon motoru kurulmaz.

## Aşama 10 — Hareket dili ve pedagojik geri bildirim

Raporun birleşik stratejisi; mevcut oyunların davranışına göre sınırlı uygulama.

- [ ] T52 — Pilotlarda ortak press/seçim tokenlarını uygula. **Bitti ölçütü:** kısa, tutarlı ve kesilebilir etkileşim; her kontrole farklı efekt yok.
- [ ] T53 — Bir oyunda sonuç geri bildirimini iyileştir. **Bitti ölçütü:** doğruya kısa clay damgası; yanlışta açıklama/yeniden deneme; sarsıntı ve uzun konfeti yok.
- [ ] T54 — Diğer iki pilotta aynı anlam dilini uygula. **Bitti ölçütü:** renk dışında metin/işaret var; kazanım başarısı ölçülmeden başarı iddiası yok.

## Aşama 11 — Pilotun kabulü ve kontrollü yayılım

- [ ] T55 — Üç pilotun öğrenci akışını kontrol et. **Bitti ölçütü:** sınıf → etkinlik/oyun → kazanım → zorluk/süre → başlat → sonuç → tekrar/geri eksiksiz.
- [ ] T56 — Öğretmen akışını kontrol et. **Bitti ölçütü:** sınıf/konu filtresi → kazanım → örnek → oyuna hızlı erişim; tanıtım geçişi zorunlu bekletmiyor.
- [ ] T57 — Pilotun önce/sonra değerlendirmesini sun. **Bitti ölçütü:** 320/390/768/1440 görünümleri, klavye/reduced-motion, ölçülebilen performans ve eksikler; test edilmeyenler açık.
- [ ] T58 — Yayılım kararını kaydet. **Bitti ölçütü:** kabul edilen bileşenler, düzeltilmesi gerekenler, ertelenenler ve son kabul commit'i listeli.
- [ ] T59 — Envanterdeki diğer içerikler için tek tek alt görevler aç. **Bitti ölçütü:** her farklı oyun/alt oyun için `Yxx-01...06`; ortak URL'deki modlar ayrıca ele alınmış; sadece katalog girdisi sayısıyla “tümü bitti” denmiyor.
- [ ] T60 — Kabul edilen sınıf/katalog sunumunu 4, 6, 7 ve 8. sınıfa ayrı paketlerle yay. **Bitti ölçütü:** sınıf başına doğru içerik, renk, URL, boş durum ve mobil kontrolü; bir sınıfın sorunu diğerini bloke etmiyor.

**Her oyun/alt oyun için tekrarlanan yayılım kartı:**

- [ ] Yxx-01 — Gerçek amaç/kazanım/ayar eşlemesini doğrula; mevcut ilerleme kurallarını kaydet.
- [ ] Yxx-02 — Clay görselini ve kısa nasıl-oynanır örneğini hazırla; netlik/boyut kontrolü.
- [ ] Yxx-03 — Ortak giriş panelini bağla; zorluk gerçekten değişsin.
- [ ] Yxx-04 — Süre/süresiz/reset/arka sekme davranışını doğrula.
- [ ] Yxx-05 — İlgili oyun/etkinlik sekmelerini, varsa ikinci oyun sekmesini ve küçük ekranı kontrol et. Bir laboratuvara yeni oyun gerekiyorsa ayrı içerik görevi aç; sahte boş sekme ekleme.
- [ ] Yxx-06 — Klavye/touch/reduced-motion ve oyuna özgü matematik kontrolü; ayrı commit ve sonuç kaydı.

**K7:** Pilot onayı olmadan tüm oyunlara toplu UI veya oyun mantığı değişikliği yapılmaz. Yxx sayısı T02'de netleşir; şu an bilinmeyen alt oyun sayısı için süre/token tahmini uydurulmaz.

## Aşama 12 — Son doğrulama ve yayın

- [ ] T61 — Tüm katalog ve dahili linkleri doğrula. **Bitti ölçütü:** sınıf/tür/kazanım/görsel/oyun rotası ve query parametreleri doğru.
- [ ] T62 — Giriş sahnesi regresyonunu yeniden kontrol et. **Bitti ölçütü:** altıgen tamamlanmadan panel yok; panel hareket ederek gelir; geri/hızlı scroll ve buton aynı sözleşmede.
- [ ] T63 — Erişilebilirlik ve responsive son kontrolü. **Bitti ölçütü:** görünen odak, anlaşılır etiketler, uygun kontrast, renk dışı anlam, %200 zoom; otomatik testin sınırları belirtilir.
- [ ] T64 — Performans profilini değerlendir. **Bitti ölçütü:** yeni varlık/JS maliyeti, uzun işler ve hareket kaynakları kontrol edildi; laboratuvar ölçümü gerçek cihaz sonucu diye sunulmaz.
- [ ] T65 — Gerçek cihaz kontrolünü tamamla. **Bitti ölçütü:** erişilebilen telefon ve masaüstü tarayıcısı ayrı kayıtlı; cihaz erişimi yoksa madde bekler, “mobil tamamen test edildi” denmez.
- [ ] T66 — Yayın öncesi aday sürümü sabitle. **Bitti ölçütü:** preview URL, aday commit, değişiklik özeti, bilinen eksikler ve geri dönüş referansı sunuldu.
- [ ] T67 — Kullanıcı yayın onayını kaydet. **Bitti ölçütü:** onaylanan somut aday belli; önceki yedek dal aynen duruyor.
- [ ] T68 — Yayın ve yayın sonrası kısa kontrolü yap. **Bitti ölçütü:** production commit doğrulandı; giriş/sınıf/oyun/iletişim smoke kontrolü; sorun varsa ilgili commit veya production deployment için geri dönüş önerisi.

## Raporun 12 önerisi nerede uygulanıyor?

| Rapor önerisi | Görevler |
| --- | --- |
| 01 · Hero matematik gösterimi | T43–T45 |
| 02 · Altıgen sahne sözleşmesi | T01, T03–T04, T62 |
| 03 · Kayan sekme göstergesi | T16–T17 |
| 04 · Bağlantılı sınıf istasyonları | T07–T08, T11–T15 |
| 05 · Oyun önizleme çekmecesi | T21–T26 |
| 06 · Anlamlı nesne hover'ı | T27, T52 |
| 07 · Gerçek zorluk seçimi | T28–T30, T32–T37, Yxx |
| 08 · Süre ön ayarları | T31–T37, Yxx |
| 09 · Metinli araç rafı | T18–T20 |
| 10 · Sayfa geçişi | T48–T51 |
| 11 · Sakin geometrik arka plan | T46–T47 |
| 12 · Açılan konu sıraları | T38–T42 |

## Kontrol kapılarında karara bağlanacaklar

Bunlar şimdi yeni soru olarak çalışmayı durdurmaz; ilgili taslak hazır olduğunda somut seçeneklerle sunulur.

- K2: A clay + B keşif birleşiminin görsel yoğunluğu ve 4. sınıfın görünürlüğü; mevcut sınıf kaldırılmaz.
- K3/K5: bağlantılı seçim ve konu sıralarının son görünümü; mevcut hızlı erişim korunur.
- K4: kesin zorluk adları, süre değerleri ve her oyunun gerçek parametreleri.
- K6: View Transition'ın destek ve mobil maliyetine göre yayılması veya gerekçeli ertelenmesi.
- K7: pilot sonuçları sonrası tüm içeriklere yayılım.
- Yayın: yalnız somut preview/adayı kontrol ettikten sonra.

## Başlangıç ilerleme kaydı

- Tamamlanan: B01–B04.
- Bekleyen: T01–T68 ve T02'den sonra açılacak Yxx kartları.
- Aktif uygulama: yok; bu tur yedekleme ve planlama.
- Bir sonraki görev: T01; sonra T02–T05.
- Son güvenli kaynak commit'i: `006dc2b35bf07cd2fd316a3c779e68acd6b71f1b`.
- Araç durumu: UI UX Pro Max, Frontend Design, Design Taste ve dört ek skill kaydedildi; Motion Docs araması çalışıyor; 21st normal bileşen araması hatalı, diğer doğrulanan yollar kullanılabilir. Her görevde erişim varmış gibi varsayılmaz.

Kaynak rapor: UFKORA_Tasarim_Arastirma_Karar_Raporu.docx, sürüm 1; öneriler s.6–9, strateji s.14, kararlar s.15. Bu plan üçüncü bir tasarım yönünü gizlice uygulamaya sokmaz; rapordaki alternatifler karar çerçevesi olarak korunur.
