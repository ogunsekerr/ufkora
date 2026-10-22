# UFKORA · taşınabilir tasarım araçları

Bu klasör kurulum tarifidir. Depoyu klonlamak araçları otomatik çalıştırmaz. Siteye runtime, React veya derleme sistemi eklemez. İlk adım `check` yalnız mevcut programları kontrol eder. Diğer adımlar npm üzerinden üçüncü taraf kurucuları indirip çalıştırır; kurucular skill/MCP dosyalarına yazabilir.

## İlk bilgisayar

Git, güncel Node LTS (en az 20), npm ve Python 3 gerekir. Eksikse kendin kur; betik sistem programı yüklemez. UFKORA klasörünü Codex'te yerel proje olarak aç.

Proje kökünde sırasıyla çalıştır:

```bash
bash tools/design-ai/setup.sh check
bash tools/design-ai/setup.sh ui
bash tools/design-ai/setup.sh 21st
bash tools/design-ai/setup.sh login
bash tools/design-ai/setup.sh motion
```

UI UX Pro Max `.agents/skills` kullanan universal seçeneğiyle kurulur. 21st kurucusunda varsa proje kapsamını ve Codex'i seç; seçenekler farklıysa dur ve çıktıyı paylaş. Motion kurucusunda **Project → Codex → ücretsiz motion sunucusu** seç. MCP otomatik bağlanmazsa kurucunun verdiği güncel yönergeyi Codex MCP ayarlarında uygula. Motion+ kurma.

21st login tarayıcıda oturum açar; her bilgisayarda ayrı yapılır. Parola/token/API anahtarını sohbete veya depoya koyma. CLI + skill yolu kullanıldığı için ayrıca 21st MCP kurmak zorunlu değildir; aynı işi yapan iki bağlantıyı gereksiz kurma.

## Sürümler

23 Ekim 2026 kontrolünde npm registry'den alınan sürümler betikte sabitlenmiştir: UI UX Pro Max CLI 2.15.0, 21st CLI 1.18.0, Motion AI 14.2.0. npm erişimi bazı sorgularda gecikti. Aynı sürümler farklı bilgisayarlarda kullanılır; dolaylı bağımlılıklar ayrıca kilitlenmediğinden bit düzeyinde aynı kurulum garantisi yoktur. Güncelleme öncesi değişiklikleri incele.

## Diğer bilgisayar

Bu dalı/merge sonrasında main'i klonla, klasörü yerel Codex projesi olarak aç. Önce check çalıştır. Skill dosyaları GitHub'a alınmışsa onları tekrar kurmak gerekmez; bilgisayara özel CLI oturumu/MCP bağlantısını tamamla. Alınmamışsa yukarıdaki kurulum adımlarını tekrarla.

Kurulumdan sonra `git status --short` ve `git diff` ile oluşan dosyaları incele. Yalnız anahtarsız `.agents/skills` içeriklerini, gerekiyorsa lisansları ve ortak yönergeleri bilinçli olarak paylaş. `git add .` kullanma. `.codex/config.toml` ve diğer yerel MCP/oturum ayarlarını paylaşma. Kurucuların AGENTS.md'ye eklediği metni marka kurallarıyla karşılaştır.

Bu PR sağlayıcıların SKILL.md dosyalarını henüz içermiyor; onları gerçek bilgisayardaki kurucular üretir. Kurulumların başarılı olması hesaplı erişimin de doğrulandığı anlamına gelmez.

## Doğrulama

Codex'i/projeyi yeniden aç. Skill listesinde UI UX Pro Max, 21st ve Motion becerilerini kontrol et. Codex'ten siteyi değiştirmeden UI UX Pro Max ile bir okunabilirlik değerlendirmesi, 21st ile yalnız bir katalog araması, Motion ile bir güncel belge araması iste. Her birinin hangi skill/CLI/MCP yoluyla çalıştığını ve varsa hatayı raporlamasını iste. Arama başarısızsa kurulum tamamlandı deme.

## Ortak görev örneği

> Önce AGENTS.md'yi oku. UI UX Pro Max ile sınıf seçiminin UX sorunlarını değerlendir. 21st ile en fazla üç kaynak bağlantısı bul; kod alma, add veya generate çalıştırma. Motion ile mevcut CSS/JS yapısına uygun mobil ve reduced-motion davranışı öner. Önce birleşik karar raporunu sun; uygulama için ayrı onay bekle. Bir araç erişilemiyorsa açıkça belirt.

Ücretsiz limit dolarsa dur. AI generate, Motion+, auto top-up veya ücretli kredi kullanma. Bu kurallar ajan talimatıdır; sağlayıcı tarafında harcama engeli garantisi değildir. Hesaplarda otomatik bakiye yüklemeyi kapalı tut.

## Kaynaklar

- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- https://21st.dev/mcp
- https://motion.dev/docs/ai-kit-install
- https://learn.chatgpt.com/docs/build-skills

Yerel Codex kurulumu ChatGPT Work oturumuna otomatik aktarılmaz.
