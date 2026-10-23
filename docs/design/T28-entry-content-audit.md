# UFKORA · T28 — Oyun girişleri ve metin sadeleştirme incelemesi

23 Ekim 2026 · Kullanıcı talebi: tüm oyunlarda gereksiz yazıları azalt; sınıfla ilgisiz fazlalıkları kaldır; sade, anlaşılır ve amaca hizmet eden ekranlar oluştur.

## Kapsam / kanıt sınırı

T28 incelemesi tamamlandı. Üç pilotun gerçek yerel oyun ekranları açıldı ve aşağıda belirtilen davranışlar denendi. Katalogdaki 16 kayıt 12 farklı rota / 10 HTML dosyasına karşılık geliyor; kalan rotaların kaynak metinleri tarandı. Bunların tamamı tarayıcıda oynanıp bitirilmedi. Bu görev oyun kodlarını değiştirmez. T29 taslağı ve sadeleştirme uygulaması henüz başlamadı.

## Üç pilot: mevcut durum

| Oyun | Giriş | Zorluk | Süre | Tekrar / sıfırlama |
|---|---|---|---|---|
| Bahçe Mimarı | Kapak, Bahçemi kur ve Bölüm seç; başlatınca canvas odaklanır | Kolay/Orta/Zor yok. Çevre ölçüsünü göster/gizle desteği var; görev seçimi ayrı bir şey | Sayaç yok; çit yapım animasyonu oyun süresi değildir | start(n) çizimi/çimi ve görev durumunu sıfırlar; yıldızlar localStorage'da korunur. Menüye dönüşte çizimin silineceği belirtiliyor |
| Işık Rotası | Sayfa doğrudan 1/5 göreve açılır; ortak giriş ekranı yok | Seçici yok. 5 sabit görev; son iki görev bütünler açı ilişkisi kullanır | Sayaç/süre seçimi yok. Işın animasyon zamanı sayaç değildir | Tamamlanmamış görevde reset açıyı 20° yapar. Tamamlanmış görevde Yeniden başlat düğmesi reset yapmaz, mesaj gösterir; son görev sonrası yeniden oyna tur ve puanı sıfırlar |
| Sayı Kargo | Doğrudan 1/5 göreve açılır | Seçici yok. 5 sabit sayı, sıfırlı bölükler var | Sayaç/süre seçimi yok | Görev sıfırlama kasaları yuvalardan çıkarır; mevcut tur/puan korunur. Tamamlanan görevde Işık ile aynı tekrar kısıtı var |

Kaynaklar: `oyun-atolyesi/bahce.html` LEVELS/start/choose/menu, `oyun-atolyesi/kesif.html` defs/light/cargo/reset/check/next/retry.

### Tarayıcıda gerçekten denenenler

- Işık: verici 20°'den 40°'ye ayarlandı; Işığı gönder ile ilk hedef tamamlandı ve puan 1 oldu. Tekrar düğmesi tamamlanan görevi sıfırlamadı. Sonraki görev 2/5'e geçti, açı 20°'ye döndü, puan 1 kaldı.
- Kargo: 006 kasası Binler yuvasına yerleştirildi. Görevi yeniden başlat ile üç kasa yeniden seçilebilir hale geldi; tur 1/5 ve puan 0 kaldı. Yardım penceresi açıldı.
- Bahçe: kapak ve öğretmen/indirme/projeksiyon araçları görüldü. Bahçemi kur ile ilk görev başladı; odak canvas'a geçti. 4 m × 3 m görevi ve tekrarlanan yönergeler okundu. Sekiz görev bitirilmedi; yıldız kalıcılığı tarayıcı yeniden açılarak test edilmedi.

## Belirlenen sorunlar

1. Üç pilotun giriş davranışı tutarsız: biri kapaklı, ikisi doğrudan oyunda.
2. Üçünde de gerçek zorluk ve süre ayarı yok. Ortak panel yalnız görünüş olarak eklenemez; soru/destek parametresi ve sayaç davranışı gerçekten bağlanmalı.
3. Tamamlanmış görevde aktif kalan “Bu görevi yeniden başlat” etiketi gerçek davranışı karşılamıyor. Ya gerçek tekrar sağlanmalı ya düğme bu durumda gizlenmeli/etiketi değişmeli. Karar T32/T36 sözleşmesinde verilmeli.
4. Aynı görev metni, kullanım yönergesi, ipucu ve kazanım birkaç yerde tekrar ediyor.
5. Bazı öğrenci ekranlarında öğretmen, indirme, çıktı veya teknik kullanım açıklamaları baskın.
6. Toplama Adası'nda setQuizDifficulty(60/90) yalnız süreyi değiştiriyor. Bu, matematiksel zorluk seçimi değildir.
7. 26 Çalışma Bankası'nda 60sn düşünme sayacı elle başlar/durur; süre sonunda cevabı kilitlemez. Oyun bitiş sayacıyla aynı anlama gelmiyor. İki davranış aynı etiket altında birleştirilmemeli.
8. Toplama ve Çalışma Bankası setInterval sayaçları kullanıyor. Arka sekme, görünürlük, süre sonu ve tekrar ölçümleri henüz yapılmadı; zaman doğruluğu garanti edilmiyor.

## Bütün katalog için sadeleştirme listesi — kaynak taraması

| İçerik | Kaldır / kısalt / taşı önerisi | Öğrenci ekranında koru |
|---|---|---|
| Bahçe Mimarı · 5 | Minihelp, controlhint ve Mina'nın aynı yönlendirmesini birleştir. Üst/alt tekrar eden kazanımları Bilgi'ye taşı. HTML indir, projeksiyon ve öğretmen araçlarını Öğretmen altında grupla | Geçerli boyut koşulu, birim, sayaçlar, ana eylem, ihtiyaç anında ipucu |
| Işık Rotası · 5 | Üst gain, alt açıklama ve başlangıç durum metnini azalt. Uzun help yalnız istenince açılsın | Hedef, verici açısı, Işığı gönder, kısa doğru/yanlış nedeni |
| Sayı Kargo · 5 | Legend, yardım ve varsayılan durum tekrarını azalt. Her turda bütün teknik kullanım açıklamasını gösterme | Hedef sayı, üç bölük etiketi, sıfırların anlamı, gönder/kontrol |
| Çember Tamircisi · 5 | Ortak kesif.html değişiklikleri moda özel uygulanmalı; Işık/Kargo metni sızmamalı. Uzun araç açıklaması yardımda | Yarıçap/çap hedefi, pergel açıklığı, çizimi tamamlama durumu |
| Toplama Macera Adası · 4 | Robot paragrafı ve üst yönergeyi birleştir; basamak özeti yardımda. Dekoratif sıfatlar/tekrar puan açıklamaları kısalsın. 60/90sn kontrolü Süre olarak adlandırılsın | Basamak hizası, elde, soru, cevap, tek kontrol ve ihtiyaç anında ipucu |
| Açı Ustası · 5 | Konu anlatımı bloklarını isteğe bağlı yap; Adım 1/2 metinlerini kısalt; uzun soru tipi etiketlerini sadeleştir | Sıfırdan başlama, ölçek seçimi, açı ilişkisi, sorunun şartı |
| Çokgen Laboratuvarı · 5 | “Büyülü”, “sır perdesi”, “öğretmenin sırrı”, sınırsız motor gibi dolaylı adları kaldır/kısalt. Çok sayıda 15+ hızlı seçeneği daha fazlasına taşı. Yaklaşık iç açı hesabının ana hedef için gerekliliğini öğretmenle değerlendir | Kenar/köşe, kapalı şekil, çizdirme ve keşif sorusu. Üst sınıf olduğuna dair kaynak olmadan konu silinmez |
| Maarif Simülasyon Üssü · 5 | Radar/teleprompter/lojistik/simya gibi üst üste anlatı etiketlerini azalt; etkin görev dışı açıklamaları sakla. Basamak röntgeni gibi adları anlaşılırlaştır | Yalnız seçili etkinliğin sorusu ve araçları; bölük, birim ve gerekli matematiksel ipucu |
| 26 Çalışma Bankası · 5 | İndirme, projeksiyon, puanlama ve öğretmen notlarını öğretmen alanına taşı. Uzun giriş ile sınıf hazır mı metinlerini kısalt | Görev, etkinlik/oyun seçimi, gerekli araç, kontrol, sonraki tur; düşünme sayacının isteğe bağlı oluşu |
| Para ve Zar Laboratuvarı · 6 | Üç uzun kavram kartını yardımda göster; tekrar eden tıkla yönergelerini kaldır. İlk ekranda seçili deneye odaklan | Deney, sonuçlar, deneme sayısı ve karşılaştırma. Deneme artışı her adımda kesin yaklaşma gibi anlatılmamalı |
| Yansıma · 7 | Uzun şekil menülerini grupla; açıklama kartlarını ihtiyaç anına taşı. MORPA gibi marka/işlev dışı örneği kaldırma adayı olarak işaretle. Orijin seçeneğinin ders hedefiyle ilişkisini doğrulamadan silme | Simetri doğrusu, dik/eşit uzaklık, hedef şekil, kontrol ve gerekçeli ipucu |
| Birim Küp · ortak 4–8 | PowerPoint ipuçları, PNG/şeffaflık ve kenar çizgisi teknik ayarlarını öğretmen/çıktı alanına taşı | Küp ekle/sil, yön seçimi, yapı ve görünümler. Ortak etkinlik olduğu için 4–8 erişimini kaldırma |

Bu tablo yeni resmî müfredat doğrulaması değildir. Mevcut kazanım kayıtları korunur. Bir matematiksel konuyu “bu sınıfı ilgilendirmiyor” diyerek silmeden önce hedef ve kaynak kontrolü yapılır. 8. sınıfta katalogda yalnız ortak Birim Küp kaydı bulunuyor; sınıfa özel yeni oyun varmış gibi davranılmaz.

## Eklenen kalıcı tasarım maddesi: kısa öğrenci ekranı

- Ana görev tek kısa cümle olsun; hedef olarak yaklaşık 8–16 sözcük kullanılabilir. Anlam veya erişilebilirlik için gerekliyse bu sınır zorlanmaz.
- Ekranda bir ana eylem; gerekli yan araçlar kısa fiillerle adlandırılsın.
- Soru şartları, sayılar, birimler ve matematiksel gerekçe kesilmesin. Yanlış cevap geri bildirimi yalnız “yanlış” değil, sonraki hamleyi destekleyen kısa bir cümle olsun.
- Uzun kullanım, öğretmen, kazanım ve teknik bilgiler ayrı yardım/öğretmen alanında erişilebilir kalsın; gelişigüzel silinmesin.
- Aktif oyunun sınıfı/hedefiyle ilgisiz marka, tanıtım ve tekrar metinleri çıkarılsın.
- Yazı sayısını azaltmak için font küçültme, açıklamasız ikon kullanma veya gerekli bilgiyi erişilemez yapma kabul edilmez.
- Klavye/dokunma yönergeleri bağlama uygun verilsin; yalnız fareye bağlı anlatım kalmasın.

### Pilotlarda somut metin taslağı

| Yer | Mevcut | Önerilen |
|---|---|---|
| Bahçe ilk görev | Mahalleye küçük bir çiçek bahçesi yapalım. Kenarları 4 m ve 3 m olsun. | 4 m × 3 m bir bahçe çiz. |
| Bahçe tekrarlı kontrol yönergesi | İki köşeye tıkla veya sürükle / İlk köşeyi seç; sonra karşı köşeyi belirle… | İki köşe seç. · Ayrıntı İpucu'da |
| Işık ilk görev | Hedefin açısını açıölçerden oku. Vericiyi o yöne çevir ve ışığı gönder. | Hedef açısını oku, vericiyi çevir, ışığı gönder. |
| Kargo görevi | Görevi tamamla; sonra kontrol et. + bölük yerleştirme açıklamaları | Kasaları doğru bölüklere yerleştir. · Hedef sayı ayrıca görünür |
| Ortak tekrar | Bu görevi yeniden başlat | Görevi sıfırla · yalnız gerçekten sıfırlıyorsa |

## Plan eki ve sonraki küçük işler

- [x] T28 — Üç pilotun giriş/zorluk/süre/tekrar durumunu incele.
- [x] T28-S0 — Kataloğun tamamında gereksiz metin ve olası kapsam fazlalığı listesi çıkar; kalıcı kuralı kaydet.
- [ ] T29 — Ortak giriş taslağını kısa öğrenci metinleriyle sun. Henüz uygulama yok.
- [ ] T33-S — Bahçe entegrasyonunda tekrar eden metinleri kaldır/taşı; görev şartlarını koru.
- [ ] T34-S — İkinci pilot entegrasyonunda aynı sadeleştirmeyi uygula.
- [ ] T35-S — Üçüncü pilot entegrasyonunda aynı sadeleştirmeyi uygula.
- [ ] S-01…S-09 — Kalan dokuz rotaya, pilotlardan sonra birer küçük görevle yay; her birinde sınıf hedefi ve mobil/klavye kontrolü yap.

Sadeleştirme maddesi bundan sonraki her oyun görevinin kabul ölçütüne dahildir. T28-S0 yalnız analizdir; oyun metinleri henüz değiştirilmedi. Sonraki uygulamalar kullanıcının adım onayıyla ilerleyecek.
