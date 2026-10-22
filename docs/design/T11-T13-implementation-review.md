# T11–T13 uygulama kaydı
23 Ekim 2026. Kullanıcı T11–T13'ü onayladı; T14 başlamadı, tekrar onay bekleniyor.

## Sonuç
- T11: #atolye bölümü başlığıyla adlandırıldı; native nav ve açık adlandırılmış 4–8 sınıf bağlantıları.
- T12: beş nesneli masaüstü istasyonları; aynı sıralama, sınıf renkleri, büyük numaralar, kısa açıklamalar ve doğrudan atölye bağlantıları.
- T13: nesnelerin arkasında tek dekoratif, statik SVG yol. Çizgi yeri ayrılmış nesne alanında kalır; metin ve bağlantı hitbox'ına müdahale etmez. pointer-events:none ve aria-hidden.

## Kapsam
Yalnız index.html içindeki mevcut sınıf bölümü ve yeni features/home/class-stations.css. CSS bağlantısı sürümlendi. Eski ortak stiller topluca silinmedi. Yeni kütüphane/build/JS yok. Nesneler mevcut clay-motifs.js vektörlerinin statik HTML kopyalarıdır; JS kapalıyken de çizilir. Nihai yeni clay görselleri üretilmedi.
1001px ve üstü yeni masaüstü yerleşimi kullanır. Dar ekranlarda mevcut birleşik clay sahnesi ve kompakt bağlantılar korunacak geçici düzen vardır; T08'in dikey taslağı T14'te ayrıca uygulanacak. Mobil tamamlandı denmiyor.
T07'deki alt önizleme özeti bu görevde yeniden oluşturulmadı; mevcut atölye paneli ve sekmeleri kendi yerinde korunur. Bu alan navigasyon olduğundan “5. sınıf seçili” gibi sahte bir seçim eklenmedi.

## Gerçek tarayıcı doğrulaması
Yerel managed preview, Chrome 1363×936:
- Beş bağlantı Enter ile açıldı; 4.,5.,6.,7.,8. sınıf başlıkları ve query adresleri doğru.
- Tab ile 4. sınıftan5. sınıfa odak geçti; solid focus outline doğrulandı.
- Yatay overflow yok.
- SVG yol alanı alt sınırı564.406px; sınıf etiketleri580.406px'te başlıyor; çizgi metin alanına girmiyor.
- Uygulama scriptleri çıkarılmış test HTML'sinde5. sınıf bağlantısı Enter ile çalıştı. Preview sunucusunun live-reload scripti yine enjekte edilir; bu işletim sistemi/browser genel JS kapatma testi değildir.
- T12 ve T13 ekran görüntüleri kaydedildi. T13-desktop-proof.svg orijinal JPEG kanıtını gömülü olarak taşır; taslak render değildir.
- 48 baseline dosyadan yalnız index.html değişti; bunun dışında yalnız yeni CSS eklendi. Index içinde sınıf bölümü ve yeni CSS linki dışında içerik byte olarak aynı. Logo/font/giriş/oyun/katalog/iletişim kaynakları değişmedi.

## Sınırlar ve mevcut hata
Fiziksel telefon, Safari,320/390px ve gerçek reduced-motion browser testi bu adımda yapılmadı; T04 açık. FPS iddiası yok. Yeni hareket olmadığı için T15 hover/press çalışması yapılmadı.
Konsolda extension metadata hataları ve HTTP önizlemede mevcut contact.js crypto.randomUUID hatası görüldü. Bu HTTPS olmayan preview ortamının ayrı kısıtıdır; iletişim kodu değiştirilmedi ve mesaj gönderilmedi. İletişim sistemi bu görevde başarıyla test edildi iddiası yok.
Yeni alanın semantiği AX ağacında görüldü; fiziksel ekran okuyucu testi yapılmadı.

## Kaydetme ve yayın
Değişiklikler task/t11-t13-class-stations dalında; main ve canlı üretim yayını değiştirilmedi. Sonraki T14 yalnız kullanıcı onayından sonra yapılacak. Kaynak yedeği backup/2026-10-23-pre-design dalında korunuyor.
