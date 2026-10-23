# T01 · UFKORA koruma sözleşmesi

Durum: tamamlandı — yalnız belge/kod referansı kaydı. Tasarım veya oyun kodu değişmedi.

## Dayanak ve sınır

Başlangıç commit'i: `006dc2b35bf07cd2fd316a3c779e68acd6b71f1b`.
Yedek dal: `backup/2026-10-23-pre-design`.

T01'de 48 kaynak dosyası yedek manifestiyle yeniden karşılaştırıldı; hiçbir dosya değişmedi. Aşağıdaki davranışlar kodda doğrulandı. Bu, tarayıcıda görsel doğrulama veya gerçek cihaz testi değildir; bunlar T03/T04 kapsamındadır. Mevcut kusurlar “korunacak özellik” sayılmaz; ayrı görev ve kanıtla ele alınır.

## Kimlik

| Alan | Korunacak değer | Kod dayanağı |
| --- | --- | --- |
| Logo | Mevcut çok renkli clay U varlığı; dosya hash'i kanıt dosyasında | `assets/ufkora-clay-logo.webp`, `index.html` |
| Logo/büyük başlık | Bricolage Grotesque | `assets/typography.css`, `assets/site.css` |
| Metin/menü/kontroller | Nunito Sans | `assets/typography.css` |
| Sayı, sayaç, matematik etiketleri | Outfit; tabular-nums | `assets/typography.css` |
| Zemin / ana metin | `--cream: #f3e9d8`, `--ink: #204b3b` | `assets/site.css` |
| Malzeme | Oyun hamuru; mevcut görsel aile ve sınıf nesneleri | `assets/activities/`, `features/shared/clay-motifs.js` |

Fontların CSS'te tanımlandığı doğrulandı; Google Fonts'un gerçek tarayıcıdaki yüklenmesi bu adımda test edilmedi. Logo eski kullanıcı yüklemesiyle piksel piksel karşılaştırılmadı; korunan varlık yayındaki mevcut dosyadır.

## Sınıf, renk ve yönlendirme

| Sınıf | Renk ailesi / ana token | Mevcut sınıf yolu | Nesne |
| --- | --- | --- | --- |
| 4 | Mercan / `#e98d71` | `atolye.html?sinif=4` | Abaküs |
| 5 | Sarı / `#edc85f` | `atolye.html?sinif=5` | Açıölçer |
| 6 | Yeşil / `#a5bd77` | `atolye.html?sinif=6` | Terazi |
| 7 | Mavi / `#8dbcc7` | `atolye.html?sinif=7` | Geometri nesnesi |
| 8 | Mor / `#b39acb` | `atolye.html?sinif=8` | Küpler |

`features/home/workshop-preview.js` ve `features/workshop/catalog.js` dünya/nesne katmanında aynı ailelerin farklı tonlarını da kullanıyor: sırasıyla `#e59880`, `#edca69`, `#9dbb87`, `#87b9d1`, `#baa0d0`. Bunlar kayıt altına alındı; “tutarlılık” gerekçesiyle sessizce tek renge indirgenmedi.

4. sınıf mevcut olduğu için korunur. 8. sınıftaki ortak içerik açıklaması silinmez veya sınıfa özel içerik varmış gibi sunulmaz. Ortak oyun/laboratuvarın sınıflar arası kullanımı ve kazanım kodları korunur; eksik kod uydurulmaz.

## Altıgen ve atölye gelişi

İlgili kaynaklar: `features/entrance/transition.js`, `features/entrance/transition.css`; yapı `index.html`.

| Evre | Kod değeri | Korunacak davranış |
| --- | --- | --- |
| Kapının yaklaşması | `travel = clamp((p - .08) / .54)` | İlerleme .08–.62 aralığında yaklaşır; panel bu sırada görünmez |
| Kapının kaybolması | Gateway opacity .62–.66; door-passed .66 | Kapı geçilmeden panel tam görünür hâle gelmez |
| Panelin ortaya çıkması | `reveal = clamp((p - .68) / .26)` | .68–.94 aralığında opaklık ve konum birlikte kademelenir |
| Etkileşimin açılması | `panel-ready` .94; `preview.inert = p < .94` | Görsel sahne tamamlanmadan panel kontrolleri aktif olmaz |
| Masaüstü panel | 130px başlangıç ötelemesi, 6 derece rotateX | Panel bir anda karşıya yerleştirilmez |
| Hafif/mobil panel | 64px başlangıç ötelemesi; yalnız translate + opacity | Masaüstü maskesi zorunlu olmaz |
| Kaydırma alanı | Masaüstü 300svh, hafif yol 280svh | Rastgele hızlandırılmaz; değiştirmek ayrı değerlendirme gerektirir |
| Atölyeyi keşfet | `.98` ilerleme hedefine scroll | Aynı sahnenin yolunu kullanır; ikinci geçiş sistemi açılmaz |

`p` normalize kaydırma ilerlemesidir; saniye değildir. Mobil/hafif yol `(max-width: 700px), (pointer: coarse)` ile seçilir. Mobilde dış kabuk .48–.62 aralığında hazırlanabilir; iç panelin opacity'si .68 öncesi sıfırdır. Dış kabuğun değerini panelin görünmesiyle karıştırma.

Reduced-motion durumunda sahne zorunlu geçit olmaz; `preview.inert=false` olur ve kapı gizlenir. Pasif scroll dinleyicisi ve requestAnimationFrame kuyruğu korunur. Bunlar tek başına FPS garantisi değildir.

## Mevcut kullanıcı akışları

- Ana sayfadaki “Matematiği keşfet” üzerindeki karalamanın silinmesi ve metnin kendisi korunur.
- Etkinlikler/Oyunlar ayrımı, sınıf seçimi, sekmelerin ARIA durumları ve ok tuşu davranışları korunur.
- Mevcut renkli hover yakınlaştırması tasarım iyileştirmesinde kaldırılmaz; touch ve reduced-motion karşılıkları ayrıca doğrulanır.
- Oyun/katalog URL'leri, doğrudan bağlantılar, geri gezinme, kazanım bilgileri ve filtreler kapsam dışı değişiklikle bozulmaz.
- İletişim formu ve Resend bağlantısı tasarım görevi gerekçesiyle yeniden kurulmaz; gizli ayarlar değiştirilmez.
- Her oyunda gerçek zorluk/süre desteği olduğu bu aşamada iddia edilmiyor; T02/T28 envanteri bunu belirleyecek.

## Kesin sınırlar

İmleç su/blur/kırılma efektleri ve gökkuşağı arka planı geri gelmez. Kaldırılmış pointer efektinin index'ten yüklenmediği kontrol edildi; bütün görsellerin piksel taraması yapılmadı. Mobilde tam ekran hareketli clip-path, blur veya SVG filtresi eklenmez. Logo/font/marka renkleri kullanıcı seçimi olmadan değiştirilmez.

Hazır bileşen için React'e geçiş yapılmaz; Motion/GSAP/Three.js otomatik eklenmez. Skill'lerin stil tercihleri bu sözleşmeyi geçersiz kılamaz. Kullanıcı her görevden sonra onay istediği için T02, T01 onayı gelmeden başlamaz.

## Tamamlanma kanıtı

- [x] Logo varlığı ve font rolleri koddan doğrulandı.
- [x] Beş sınıfın mevcut yolları, ana renkleri ve dünya tonları kaydedildi.
- [x] Giriş evreleri, mobil yol, reduced-motion ve etkileşim eşiği kaydedildi.
- [x] Önceki özelliklerin korunması ve yasak efektler tek belgede toplandı.
- [x] 48 kaynak dosyasının hash'leri aynı; 15 statik kontrol geçti.
- [x] Canlı site/main kaynaklarında tasarım değişikliği yok.
- [ ] Tarayıcıdaki gerçek giriş davranışı: T03, henüz yapılmadı.
- [ ] Gerçek mobil/reduced-motion davranışı: T04, henüz yapılmadı.

Sonraki görev yalnız kullanıcı onayıyla T02: içerik envanteri. T01'de ekran değişmediği için önce/sonra ekran görüntüsü yok; kod ve hash kanıtı sunuldu.
