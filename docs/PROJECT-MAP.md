# Ufkora: dosya rehberi

Önce sorunla ilgili modülü aç; tüm projeyi okumak gerekmez. Derleme adımı yok, HTML dosyaları doğrudan bu modülleri yükler.

| Sorun / değişiklik | İlk bakılacak dosyalar |
| --- | --- |
| Fare ile su dalgası / yerel kırılma | `features/pointer/water-ripple.js`, `features/pointer/water-ripple.css` |
| Kapıdan geçiş, kaydırma, mobil performans | `features/entrance/transition.js`, `features/entrance/transition.css` |
| Ana sayfa atölye önizlemesi, sınıf / oyun sekmeleri | `features/home/workshop-preview.js` |
| Ana sayfa görünümü, boyutlar, tipografi | `features/home/home.css`, `index.html` |
| Matematik nesneleri / küçük kart hareketleri | `features/shared/clay-motifs.js`, `features/home/home.css` |
| Sınıf sayfası listesi / filtreler | `features/workshop/catalog.js`, `atolye.html` |
| İçerikler ve kazanım bilgileri | `catalog.js` |
| Ortak menü ve sayfa görünümü | `assets/site.js`, `assets/site.css` |
| İletişim | `assets/contact.js`, `api/` |
| Oyunların kendisi | `oyun-atolyesi/`, `etkinlikler/` |
| Görseller / logo | `assets/activities/`, `assets/*.webp` |

## Geçişi değiştirirken

1. Önce `features/entrance/` içindeki iki dosyayı incele.
2. Dar ekran veya dokunmatik cihazda `entrance-lite` yolu çalışır. Tam ekran maske, hareketli blur ve SVG filtreleri ekleme. Sadece transform / opacity kullan.
3. Masaüstünde altı köşeli açıklık kullanılır. İçerik gerçek HTML olarak kalır; WebGL gerekmez.
4. Kaydırma ölçüleri sadece yeniden boyutlandırmada alınır; her karede düzen ölçümü ekleme. İlerleme değişmediyse yeniden yazma.
5. Hem kaydırma hem “Atölyeyi keşfet” bağlantısını kontrol et. Geri kaydırma, oyun sekmesi ve azaltılmış hareket tercihini koru.
6. Değişen CSS / JS sürümünü HTML bağlantılarında güncelle.

Önizleme çıktıları `preview-public/` içindedir; kaynak veya yayın dosyası olarak commit edilmez.

Fare efekti sadece ince işaretçili, hover destekleyen masaüstünde çalışır. En fazla iki adet 420×420 piksel yerel kırılma alanı (200×200 örnekleme), 1150 ms ömür, boşta çizim yok. Geçiş/kaydırma, dokunmatik ve azaltılmış hareket tercihinde durur.
