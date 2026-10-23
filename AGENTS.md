# Ufkora çalışma rehberi

- Önce `docs/PROJECT-MAP.md` içindeki tabloyu kullan; yalnız ilgili özellik dosyalarını oku.
- Ana sayfa geçişi: `features/entrance/`. Önizleme / sekmeler: `features/home/`. Sınıf listesi: `features/workshop/`. Ortak kil nesneleri: `features/shared/`.
- Değişiklikleri talep edilen alanla sınırla; dosyaları sırf biçimlendirmek için yeniden yazma.
- Mobil geçişte tam ekran animasyonlu clip-path, blur veya SVG filtresi ekleme; transform ve opacity yolunu koru.
- Statik projede yeni bağımlılık veya derleme sistemi yalnız açık bir ihtiyaç varsa eklenir.
- Anlamlı kontroller: değişen JS için `node --check`, etkilenen ekranın önizlemesi, sınıf ve oyun bağlantıları. Gerçek cihazda ölçmeden FPS / kesin hız artışı iddiası verme.
- `preview-public/` ve `.openai/` yerel önizleme dosyalarıdır; bu GitHub/Vercel projesinde commit etme.

- Oyunlarda öğrenci ekranı kısa ve amaca yönelik olmalı: tek ana yönerge, kısa durum geri bildirimi. Tekrarları kısalt; öğretmen/kazanım/teknik açıklamalarını yardım veya öğretmen alanına taşı. Sınıf dışı içerik olduğundan emin olmadan matematiksel içeriği silme; ortak 4–8. sınıf keşiflerini yanlış sınıf diye kaldırma. Ayrıntılı ölçütler: `docs/design/T28-entry-content-audit.md`.
