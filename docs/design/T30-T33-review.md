# T30–T33 · Bahçe Mimarı uygulama kaydı

23 Ekim 2026. Kaynak: task/t29-entry-draft @ 6480c17. İzole dal: task/t30-t33-bahce-entry.

## Sonuç

- T30: açıklamalı native Kolay/Orta/Zor radio, fieldset/legend; seçim native işaret ve dolgu ile anlaşılır. Commit 87a1e7fa.
- T31: Süresiz varsayılan; 60/120/180 saniye, görev başına. Commit dba78978.
- T32: parametre/fallback/direkt URL/tekrar/zaman sözleşmesi docs/design/T32-start-contract.md. Commit c5eb8d02.
- T33: gerçek Bahçe Mimarı bağlantısı. Kolay ölçüleri/adım desteğini gösterir; Orta çevreyi, Zor kenar ve çevre ölçülerini ilk kontrol sonrasında gösterir. İpucu her düzeyde isteğe bağlıdır. Matematiksel görevler ve kazanımlar korunur. Zorluk soru sayısını değil yardım davranışını değiştirir.
- Girişte native seçimler doğrudan çalışan oyuna bağlıdır. task/T29 inceleme dosyası tarihsel, devre dışı taslak olarak korunur.
- Sayaç yalnız Başlat/sonraki görev/tekrar eyleminde başlar; tek monotonic aktif zaman kaynağı. Arka sekme, öğretmen, menü onayı, çit animasyonunda durur. Görev sonunda durur. Süre sonunda yıldızlar korunur ve tekrar/giriş seçenekleri sunulur.
- Görev haritası girişe görev seçerek döner; kendiliğinden sayaç başlatmaz. URL için örnek: oyun-atolyesi/bahce.html?difficulty=hard&duration=120&level=3 . Eksik, geçersiz ve yinelenen değerler easy/0/1 olur.
- Tekrar çizim/çim/cevap/sürüklemeyi sıfırlar; ayarları ve kazanılmış yıldızları korur. Yeni görev tam süreden başlar.
- T29'un clay görseli, onaylı logo ve tipografi kullanılır. Ana sayfa, altıgen evreleri, panel, katalog ve diğer oyunlar değiştirilmedi.
- Tekrarlanan yönergeler/koşul etiketleri kaldırıldı. Öğretmen/indirme/projeksiyon ayrı alanda; kazanımlar erişilebilir. Mobil oyun araçları canvas altına akar; modal focus çevrimi ve native radio klavyesi için semantik yapı eklendi.

## Doğrulama

Geçti:
- Inline JS: node --check. git diff --check.
- node tests/bahce-entry-contract.cjs: bağımlılıksız VM ve küçük DOM taklidiyle üretim scripti çalıştırıldı. Bu gerçek tarayıcı değildir.
- Geçersiz ve yinelenen URL; direkt URL'de otomatik başlamama.
- Üç düzeyde gerçek ölçü desteği; 8 görev × 3 düzeyde uygun çizim, çim, doğru cevap, yıldız ve bitiş.
- 60/120/180 saniye, Süresiz, yeni görev ve tekrarın tam süresi.
- Monotonic zamanın öğretmen/duraklama/arka sekmede korunması; süre sonu kilidi; yıldızların korunması.
- Klavye olayları ile köşe seçimi (VM).

Eksik / sınır:
- Playwright mevcut, çalıştırılabilir Chromium yok. Gerçek tarayıcı açma başarısız. Tarayıcı indirmesi otomatik onay denetimi tarafından yeni bağımlılık kısıtı gerekçesiyle reddedildi; yeniden denenmedi. Yeni bağımlılık/ücret/kredi kullanılmadı.
- Gerçek masaüstü/mobil ekran kanıtı üretilemedi; 320/390/768/1440 taşma, görsel tasarım, native radio ok tuşları, Tab/focus trap, dokunma, yüzde 200 zoom ve Safari doğrulanmadı. T37/T57/T65 bekler. CSS/semantik kaynak incelemesi görsel doğrulama diye sunulmaz.
- Tasarım lint'i sıfır hata vermedi: eski gradient/gölge, yıldız/tam ekran simgeleri ve kaynak font/çizgi uyarıları. Onaylı clay kimliğini topluca değiştirmek kapsam dışı; eski stiller yeniden tasarlanmadı. Eklenen backdrop blur yok; mevcut blur düz görünümle geçersiz kılındı. Inspector tarayıcı olmadığı için çalıştırılmadı; görsel puan verilmedi.
- Gerçek arka sekme ve yerel depolama kalıcılığı tarayıcıda denenmedi; zaman ve yıldız durum geçişleri VM'de doğrulandı. Sekiz görev gerçek pointer/klavyeyle baştan sona oynanmadı.

## Durma noktası

T30–T33 kodu uygulandı ve ilgili otomatik sözleşme kontrolleri geçti; görsel kabul eksikleri yukarıdadır. T34'e geçilmedi. Main'e birleştirme veya canlıya dağıtım yapılmadı. T34 için kullanıcı onayı beklenir.
