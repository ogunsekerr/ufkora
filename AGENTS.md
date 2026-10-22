# Ufkora çalışma rehberi

- Önce `docs/PROJECT-MAP.md` içindeki tabloyu kullan; yalnız ilgili özellik dosyalarını oku.
- Ana sayfa geçişi: `features/entrance/`. Önizleme / sekmeler: `features/home/`. Sınıf listesi: `features/workshop/`. Ortak kil nesneleri: `features/shared/`.
- Değişiklikleri talep edilen alanla sınırla; dosyaları sırf biçimlendirmek için yeniden yazma.
- Mobil geçişte tam ekran animasyonlu clip-path, blur veya SVG filtresi ekleme; transform ve opacity yolunu koru.
- Statik projede yeni bağımlılık veya derleme sistemi yalnız açık bir ihtiyaç varsa eklenir.
- Anlamlı kontroller: değişen JS için `node --check`, etkilenen ekranın önizlemesi, sınıf ve oyun bağlantıları. Gerçek cihazda ölçmeden FPS / kesin hız artışı iddiası verme.
- `preview-public/` ve `.openai/` yerel önizleme dosyalarıdır; bu GitHub/Vercel projesinde commit etme.

## Tasarım araştırması ve AI araçları

- Taşınabilir kurulum: `tools/design-ai/README.md`. UI UX Pro Max → UX ölçütleri; 21st → kaynak/bileşen keşfi; Motion AI Kit → hareket ve performans planı. Erişilemeyen aracı çalışmış gibi sunma.
- Araştırma isteği uygulama izni değildir. Önce öneri/karar raporu; site değişiklikleri ayrı kullanıcı seçimiyle yapılır.
- Clay kimliği, onaylı çok renkli U logosu, sınıf renkleri ve Bricolage Grotesque / Nunito Sans / Outfit eşlemesi korunur.
- Altıgen giriş ve atölyenin hareket sırasında aşamalı belirmesi korunur. Sınıf/etkinlik/oyun organizasyonu onaysız değiştirilmez.
- Kaldırılmış imleç blur/su dalgası efektini ve gökkuşağı arka planını geri getirme.
- Önce CSS ve mevcut JS. Yalnız hazır bileşen için React'e geçme; aynı işi yapan animasyon motorlarını birlikte ekleme.
- Kullanıcı açıkça onaylamadan ücretli API, premium araç, AI generate, ek kredi veya auto top-up kullanma. Limit dolduğunda dur; limit takibi yoksa bunu açıkça belirt.
- Kimlik bilgilerini ve bilgisayara özel MCP ayarlarını commit etme. Skill kurulumuyla çalışan MCP/hesap yetkisini ayrı doğrula.
