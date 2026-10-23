# T66 · İnceleme için kaynak kontrol noktası

Durum: **Kaynak adayı hazır; yayın adayı kabulü açık**.

Yerel son uygulama commit'i: `8b9aa28` (çalışma bankası tam sayı/gruplama regresyonu). Uzak SHA, GitHub aktarımı nedeniyle farklıdır; yayın hiçbir zaman yalnız bu kısa yerel SHA varsayımıyla yapılmaz. İncelenecek uzak dal: `release/t61-t68-validation`; kaynak dosyaları aktarım sonrası tek tek içerik eşleşmesiyle doğrulanır.

Hedef: GitHub `ogunsekerr/ufkora`, Vercel `ufkora`. Vercel projesi keşfedildi, takım scope'undaki proje/deployment ayrıntıları403 verdi. Bu nedenle aday preview URL'si ve production deployment SHA'sı doğrulanamadı. `terminal.local` yerel önizlemesi yayın adayı URL'si değildir. Önceki tarayıcı güvenlik reddi aşılmadı.

Değişiklikler: katalog/sınıf sunumu, üç pilot ve normal Bahçe çit saati; K7 ile 47 akışa oyuna uygun giriş/ayar/süre/reset/erişilebilir kontrol adaptasyonu; gerçek matematik/puan ve eski callback hatalarının düzeltmesi. Laboratuvarlara sahte oyun/puan eklenmedi. Yeni bağımlılık veya ücretli varlık yok.

Kanıt: T61 static link JSON (14 HTML/191 iç referans,0 eksik/fragment); katalog16 kayıt/12 rota; `T61-T68-local-checks.json`64 başarılı local source/VM kontrolü;47 ayrı akış raporu; T64 kaynak maliyeti. Contact testi hiçbir mesaj göndermedi.

Açıklar: gerçek ekran matrisi, native zoom, fiziksel touch/Safari, OS reduced-motion, runtime long-task/INP/LCP/FPS profili, harici CDN/ağ ve production iletişim teslimi. Toplama'nın resmî kazanım kodu kaynakta yok. Bu açıklar geçirilmiş test gibi sunulmaz. T65, T66'nın final preview/aday kilidi ve T68 hâlâ bekler.

Geri dönüş: GitHub `backup/2026-10-23-pre-design` ve main, ikisi de `006dc2b35bf07cd2fd316a3c779e68acd6b71f1b`; aynen korundu. Bu Git kaynak referansıdır, doğrulanmamış Vercel deployment kimliği yerine kullanılamaz.

Kullanıcının T61–T68/K7 yetkisi T67'de kayıtlı. İzin eksikliğiyle teknik doğrulama/erişim engeli birbirine karıştırılmaz; erişim ve kabul koşulları sağlanınca aynı yetkili kapsam sürdürülebilir.

GitHub aktarımı doğrulanan uygulama commit'i: `3ba6d58b51e8a001775e12466c14aec91225c09b`. Bu kod kontrol noktası yayınlanmış deployment değildir. İnceleme dalına sonraki rapor commit'leri eklenebilir; uygulama kaynak referansı bu SHA ile sabittir.
