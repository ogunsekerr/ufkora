# T09 — UFKORA ortak hareket dili önerisi
23 Ekim 2026. Yalnız tasarım sözleşmesi; mevcut animasyon kodu değiştirilmedi.

Fikir: nesne öğrencinin hamlesine kısa bir tepki verir; ders içeriği ve gezinme bekletilmez. Kil hissi ağır bulanıklık veya aşırı elastik deformasyonla değil küçük ölçek değişimi ve tutarlı zamanlamayla kurulur.

| Alan | Mevcut / korunan | Önerilen yeni davranış | Touch / klavye / reduce |
|---|---|---|---|
| Butona basma | Yerel farklı stiller | 90ms scale(.98); bırakma140ms ease-out; görsel alan küçülse de hitbox sabit | Touch aynı; klavyede anlık belirgin aktif durum; reduce transform yok |
| Sınıf durağı seçimi | Sınıf rengi ve etiket | Durum hemen değişir; gösterge180ms cubic-bezier(.22,1,.36,1) | Dokunmada tek hamle; klavyede odak sabit, reduce süre0 |
| Etkinlik/Oyun sekmesi | Mevcut semantik ve içerik | İçerik hemen erişilebilir; yalnız alt gösterge180ms, seçim bekletmez | Ok/Tab davranışı korunur; reduce gösterge anlık |
| Nesne keşfi | Onaylı renkli yakınlaştırma korunur | Yeni durakta en çok scale1.03 ve −3px,160ms ease; tek nesne, sabit hitbox | Yalnız hover:hover ve pointer:fine; touch hover simülasyonu yok; focus halkası hareketten bağımsız |
| Kartlar | Mevcut translateY−6px/scale1.025, görsel1.07 | Bu sözleşme mevcut değerleri sessizce değiştirmez; yalnız yeni bileşene küçük nesne hareketi uygulanır | Mevcut reduced-motion davranışı korunur |
| Açılan kısa açıklama | Yeni pilot alanı | İçerik JS'siz erişilebilir; opacity ve8px yer değişimi180ms; yükseklik kare kare animasyon yapılmaz | Dokunma/klavye ile açılır, reduce anlık |
| Sonuç geri bildirimi | Oyuna özgü açıklama/işaret korunur | Doğru/yanlış metni hemen; isteğe bağlı sonuç nesnesi220ms, tekrarlı zıplama yok | Renk dışında metin/işaret; reduce hareket yok |
| Bir defalık küçük grup gelişi | Yeni alan, gerekirse | En fazla3 öğe, 35ms aralık, toplam≤250ms; metin başlangıçta görünür | Mobil stagger yok; reduce gecikme yok |
| Menü/çekmece | Sonraki görevin alanı | Açılma220ms, kapanma160ms; kesilebilir; odak yönetimi hareket bitişini beklemez | Escape/odak dönüşü, reduce anlık |

## Değişmez giriş sözleşmesi
Altıgen mevcut scroll ilerlemesiyle çalışır; mikro etkileşim süreleri buna uygulanmaz. Yaklaşma p=.08–.62; kapı geçişi p≥.66; panel gelişi p=.68–.94; etkileşim p≥.94. Geri kaydırma geri kurulabilir; buton mevcut son konuma gider. Mobil lightweight yolu ve azaltılmış harekette normal erişim korunur.

## Mühendislik kararları
- Mevcut CSS/vanillaJS yeterli; bu aşamada Motion/GSAP/Three.js/React kurulmayacak.
- Yeni UI hareketlerinde transform/opacity öncelikli. Bunlar otomatik GPU veya sabit FPS garantisi değildir.
- Yeni tam ekran blur/filter, pointer dalgası, hareketli arka plan maskesi veya scroll motoru yok. Mevcut masaüstü kapı maskesi yeniden yazılmaz.
- will-change sürekli tüm sayfaya uygulanmaz; gereken öğeyle sınırlanır. Scroll ölçümü her kareye eklenmez.
- Hızlı seçimde eski animasyon iptal edilip son seçim kazanır; timeout zinciriyle eski içerik geri gelmez. Navigasyon animationend'e bağlanmaz.
- Reduced-motion sayfa ilk yükünde ve tercih değişiminde dikkate alınır; yeni motion bütünüyle anlık durum olur, içerik/odak kapalı kalmaz.
- Görünüm dışında veya sekme gizliyken yeni dekoratif döngü çalışmaz. Mevcut hero hareketleri bu belgeyle silinmez.

## Kabul ölçütleri — henüz uygulanmadı
Hızlı ardışık5 seçim, touch geri bildirim, klavye odağı, reduce açık ilk yük/tercih değişimi, arka plan sekmesi ve giriş regresyonu kontrol edilecek. Gerçek telefon ölçümü yapılmadan FPS/akıcılık artışı açıklanmayacak.

## Kaynak ve sınır
Kurallar proje brief'i, T03/T04 kaynak incelemesi ve Web Animation Design skill'inden sentezlenen UFKORA önerileridir; performans ölçümü değildir.
Motion Docs ücretsiz aramasında uzun sorgu sonuç vermedi; accessibility sorgusu press belgesini ve ücretsiz https://examples.motion.dev/js/press örneğini döndürdü. Bu görevde kaynak kodu alınmadı, paket kurulmadı. Motion+ kaynakları ve ücretli araçlar kullanılmadı. Süreler Motion tarafından zorunlu kılınmış değerler değildir.
