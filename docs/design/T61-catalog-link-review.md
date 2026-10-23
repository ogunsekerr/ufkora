# T61 · Katalog ve dahili bağlantı doğrulaması

23 Ekim 2026. Statik HTML öznitelikleri için scripts/release-link-audit.py: son taramada 14 HTML, 191 dahili referans; eksik dosya ve çözümlenmeyen fragment yok. Ekip dosyaları entegre edildikten sonra son tarama tekrar çalıştırıldı. Dinamik rotalar ayrıca üretim katalog/renderer testleriyle kontrol edilir.

Katalog testi: 16 kayıt, 12 ayrı açılış rotası; sınıf başına 2/9/2/2/1. Geçerli sınıf/tür, dosya ve görsel varlığı, sınıf+URL benzersizliği, codes/outcomes birebir eşleşmesi, kesif.html oyun=isik/kargo/cember parametresi ve üç pilot preview alanları kontrol edildi. Bu alanlar resmî müfredat onayı değildir. Toplama'nın resmî kazanım kodu kaynak katalogda yok; eklenmedi.

Renderer testi 4/6/7/8: içerik sayısı, renk, href, konu/tür/arama/boş/reset, kartlara dönüş ve tek paketi kapatınca yalnız ilgili sınıfın geri dönüşü geçti. Giriş parametreleri oyunların üretim sözleşme testlerinde geçersiz/yinelenen değer ve no-autostart açısından incelenir.

HTTP/harici CDN, browser/ağ yanıtı ve tüm oyunların matematik kabulü bu statik taramanın kapsamı değildir. Local contact testi provider'a gitmeden validation kollarını doğrular; hiçbir e-posta gönderilmez.
