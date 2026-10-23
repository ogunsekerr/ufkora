# UFKORA geri dönüş noktası

23 Ekim 2026, tasarım uygulaması öncesi. Kaynak ve production commit eşleşmesi doğrulandı.

Commit: `006dc2b35bf07cd2fd316a3c779e68acd6b71f1b`
Yedek dal: `backup/2026-10-23-pre-design`

Yedek dal üzerinde geliştirme yapılmaz. Geri dönüş gerektiğinde bu commit'ten yeni bir restore dalı oluşturulur; kaynak karşılaştırılır, preview kontrol edilir ve kullanıcı talimatı sonrasında main'e PR ile geri alınır. Main'e force-push veya hard reset gerekmez. Vercel'de yayındaki deployment'ı geri almak ile Git kaynaklarını geri almak ayrı işlemlerdir; ikisi de ayrıca doğrulanır.

ZIP'in source klasörü Git'te kayıtlı 48 kaynak dosyasının tamamıdır. source-sha256.json her dosyanın SHA-256 değerini içerir. ZIP içeriği açılıp hash'lerle doğrulanmıştır. local-comparison.json erişilen çalışma dosyalarının bu commit ile aynı olduğunu gösterir.

Bu paket Vercel/Resend gizli anahtarlarını, DNS ayarlarını, dış servis verilerini veya yayın geçmişinin tamamını içermez. Yeni tasarım görevleri bu ayarlara dokunmayacaktır. Sabit deployment URL'sinin sağlayıcıda sonsuza kadar saklanacağı garanti değildir; kalıcı kaynak referansı commit ve yedek daldır.
