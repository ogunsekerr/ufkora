# T05 — Pilot kapsamı ve kabul ölçütleri
Tarih: 23 Ekim 2026. Durum: hazırlık tamamlandı; pilot seçimi kullanıcı onayını bekliyor.
T04 mobil görsel / gerçek cihaz doğrulaması açık kalır. Bu belge onaylandığında bile bu kontrol geçmiş sayılmaz.

## Önerilen pilot: 5. sınıf, üç oyun
| Öncelik | Oyun | Mevcut giriş | Katalogdaki kazanım kodları | Seçim gerekçesi |
|---|---|---|---|---|
| 1 | Bahçe Mimarı | oyun-atolyesi/bahce.html | MAT.5.4.1 · MAT.5.4.2 · MAT.5.4.3 · MAT.5.4.4 | Alan/çevre; çizim, kaplama, açıklama ve sekiz bölümle en kapsamlı akış |
| 2 | Sayı Kargo | oyun-atolyesi/kesif.html?oyun=kargo | MAT.5.1.1 | Bölükler, sıfırlı gruplar; sürükleme yanında tıklama/klavye alternatifleri |
| 3 | Işık Rotası | oyun-atolyesi/kesif.html?oyun=isik | MAT.5.3.3 · MAT.5.3.4 | Açı okuma ve bütünler açı; kaydırıcı, +/− ve açıölçer yardımını sınar |

Kodlar mevcut katalogdan aktarılmıştır; resmî müfredat eşleştirmesi bu görevde yeniden onaylanmamıştır. 4., 6., 7. ve 8. sınıf içerikleri korunur; bu pilotta yeniden düzenlenmez.

## Bugünkü girişler
- Bahçe Mimarı: kapak üzerinde başlat ve görev seçimi; sekiz bölümlü oyun. Öğretmen panelinde hareket azaltma ve çizimde çevre hesabını gösterme seçenekleri var. Mevcut açıklamaya göre süre baskısı/can kaybı yok.
- Sayı Kargo: query parametresi ilgili modu açıyor; reset ile beş görevli oyun doğrudan hazırlanıyor. Ortak zorluk/süre seçmeli başlangıç ekranı henüz yok.
- Işık Rotası: aynı sayfa ve aynı başlangıç mantığı; ilk üç görev açı okuma, son iki görev bütünler ilişki üzerinden çalışıyor. Açıölçer aç/kapat ve bir derecelik kontroller mevcut.
- Mevcut bölüm sayısı veya “hızlı” zaman seçimi, tek başına gerçek zorluk seviyesi sayılmayacak.

## Sonraki tasarım çalışmasında ortaklaştırılacak sınır
Sınıf → Etkinlikler/Oyunlar → kazanım ve kısa açıklama → zorluk/süre → başlat → oyuna özgü sahne → sonuç/tekrar/atölyeye dön.
Bu bir hedef akıştır, bugünkü arayüzün tamamlandığı iddiası değildir.
Ortaklaştırma ilk etapta dış kabuk, okunabilirlik, seçimler ve geri dönüş akışıdır. Canvas oyun mekanikleri topluca yeniden yazılmaz; oyuna özgü çizim/kontrol korunur.
İkinci sekmede Oyunlar görünürlüğü ve kazanım kodları kaybolmaz.

## Sonraki görevlerde değerlendirilecek zorluk yaklaşımı — henüz uygulanmayacak
| Oyun | Yardım ve içerik üzerinden olası fark | Süre için koruma |
|---|---|---|
| Bahçe Mimarı | Mevcut çevre göstergesi yardımı; alan/çevre ilişkisine göre görev grupları. Sekiz bölümün pedagojik sırası önce öğretmen onayıyla değerlendirilir. | Süresiz keşif korunur; sayaç zorunlu olmaz. |
| Sayı Kargo | Sıfırlı bölük sayısı, sayı büyüklüğü ve gösterilen yerleştirme ipuçları. Üç seçeneğin anlamlı veri seti gerekir. | Süre seçimi sayıların matematiksel zorluğunun yerine geçmez. |
| Işık Rotası | Doğrudan ölçme / ilişkiden hesaplama ve açıölçer yardımı; yalnız toleransı azaltarak zorlaştırma yapılmaz. | Süre dolmasının davranışı ayrıca onaylanır; öğrenci yanıtı habersiz silinmez. |

Süre preset değerleri, varsayılan zorluk ve sayaç bitiş davranışı T28–T32 görevlerinde somutlaştırılıp onaylanacak; burada karara bağlanmıyor.

## Teknik etki ve risk
- Üç pilot iki HTML dosyasına dağılır. Sayı Kargo ve Işık Rotası, pilot dışı Çember Tamircisi ile kesif.html dosyasını paylaşır. Bu dosyaya yapılacak her değişiklik üç modu kapsayan regresyon kontrolü gerektirir.
- Bahçe Mimarı yıldız ve görev ilerlemesini saklar; gelecekteki düzenleme mevcut kayıtları gereksiz yere sıfırlamayacak.
- Dokunma, klavye ve canvas koordinatlarının responsive eşleşmesi doğrulanacak. T04 eksikliği bu testlerle kapatılmadan mobil hazır denmeyecek.
- Yeni framework, animasyon kütüphanesi veya ücretli servis bu pilot seçimi için gerekli değildir.
- Logo, onaylı üç font, marka renkleri ve altıgen giriş korunur; imleç dalgası ve gökkuşağı eklenmez.

## Pilotun ileride kabulü için kontrol listesi
- [ ] Üç oyun sınıf ve Oyunlar sekmesinden doğru açılıyor.
- [ ] Kazanım kodu, açıklama ve oyuna özgü net clay görsel mevcut.
- [ ] Zorluk seçimi gerçek içerik/yardım farkı yaratıyor.
- [ ] Süresiz seçenek var; sayaç yalnız başlangıçta çalışıyor.
- [ ] Tekrar / geri dönüş / sonuç ve oyunlar arası durum temizliği çalışıyor.
- [ ] Çember Tamircisi ortak dosya değişikliğinden etkilenmiyor.
- [ ] Dar ekran, klavye, reduced-motion ve gerçek cihaz kontrolleri tamam.
- [ ] Öğretmen incelemesi ve kullanıcı onayı sonrası diğer sınıflara yayılıyor.

Bu maddeler gelecekteki pilot uygulamasına aittir; T05 tamamlanması bunların geçtiği anlamına gelmez.

## Bu görevde yapılan
T02 envanteriyle üç oyun, bağlantılar ve kazanımlar karşılaştırıldı; ilgili iki HTML'den mevcut başlangıç ve kontrol mantığı doğrulandı. Yalnız bu kapsam belgesi oluşturuldu; site kodu, görseller ve yayın değişmedi.
T06 henüz başlamadı. Kullanıcı pilotu onaylarsa T06'da mevcut renk, tipografi, boyut, boşluk ve gölge değerleri çıkarılacak.
