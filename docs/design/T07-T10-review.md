# T07–T10 inceleme paketi
23 Ekim 2026. Kullanıcı T07–T10 hazırlığını önceden onayladı; bu onay T11 uygulamasını kapsamaz.

## Görev durumu
- [x] T01 koruma sözleşmesi
- [x] T02 içerik envanteri
- [x] T03 masaüstü giriş kontrolü
- [ ] T04 mobil/reduced-motion gerçek görünüm kontrolü açık; 19 kod mantık kontrolü geçti
- [x] T05 üç pilot oyun kapsamı
- [x] T06 mevcut tasarım değerleri
- [x] T07 masaüstü taslağı hazır
- [x] T08 mobil taslağı hazır
- [x] T09 hareket sözleşmesi hazır
- [x] T10 clay varlık kuralları hazır
- [ ] T11 başlamadı; kullanıcının taslakları seçmesi ve açık uygulama onayı bekleniyor

## Görseller ve belgeler
- [Masaüstü SVG](T07-desktop.svg) — [T07 açıklaması](T07-desktop-spec.md)
- [Mobil SVG](T08-mobile.svg) — [T08 açıklaması](T08-mobile-spec.md)
- [T09 hareket dili](T09-motion-contract.md)
- [T10 görsel standartları](T10-visual-asset-rules.md)

Taslaklar statik yerleşim önerileridir; çalışan site ekranı veya mobil tarayıcı testi değildir. Mevcut kil motifleri yerleşimi göstermek için kullanıldı; nihai clay üretimi yapılmadı. PNG önizlemeler aynı SVG kaynaklarından render edildi. Üç marka fontunun render eşleşmesi doğrulandı. Font dosyaları yalnız geçici render klasöründedir; siteye font/dependency eklenmedi.

## Kontroller
48 donmuş kaynak dosyasının SHA256 değeri yedek listesiyle eşleşti; değiştirilmiş site dosyası yok. İki SVG XML olarak doğrulandı ve render görselleri açılıp incelendi. Taslak üretiminde ilk logo format uyumsuzluğu düzeltildi; logo şekli değiştirilmedi. Mobil çizgi son sınıfa kadar uzatıldı.
Canlı site/yayın, mevcut giriş ve oyunlar değiştirilmedi. Yeni ücretli API, görsel üretim kredisi veya paket kurulumu kullanılmadı.
İşlevsellik, responsive gerçek HTML, ekran okuyucu ve cihaz performansı testi bu statik taslaklar üzerinde yapılmış sayılmaz.

## T11 için istenecek karar
Bu bağlantılı durak düzeni masaüstü ve mobil için kabul ediliyor mu?
Kabul edilirse T11 yalnız mevcut sınıf bölümünün semantik ve JS olmadan çalışan 4–8 sınıf bağlantılarını hazırlar. Görsel yerleşim T12, çizgi T13, mobil yerleşim T14 ve geri bildirim T15 kapsamındadır. Altıgen, diğer bölümler ve oyun içleri T11 kapsamında değişmeyecek.
T11 bitince yine raporlanır ve sonraki adım için onay beklenir; T07–T10 toplu ön onayı sonraki görevlere taşınmaz.
