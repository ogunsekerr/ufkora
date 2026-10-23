# T32 · Bahçe Mimarı başlat sözleşmesi

- URL: `difficulty=easy|medium|hard`, `duration=0|60|120|180`, `level=1..8`.
- Eksik/geçersiz/tekrarlı parametre güvenli varsayılana döner: easy, 0 (Süresiz), görev 1. Sayısal değerlerde tam dize eşleşmesi gerekir.
- Direkt URL yalnız girişte seçimleri hazırlar; otomatik başlatmaz. Görev seçimi de girişe geri getirir; sayaç yalnız Başlat ile çalışır. Sonraki görev düğmesi açık bir başlatma eylemidir.
- Kolay: kenar ve çevre ölçüleri, başlangıç yönlendirmesi. Orta: kenarlar görünür, çevre ilk kontrol sonrasında. Zor: kenarlar/çevre ilk kontrol sonrasında; başlangıç yönlendirmesi yok. İpucu her düzeyde isteğe bağlı, matematiksel görev ve kazanımlar aynı. Bu bir destek zorluğudur; yeni sınıf dışı soru eklenmez.
- Zaman görev başına; build/paint/question sırasında işler. Çit animasyonu, öğretmen diyaloğu, menü onayı ve arka sekmede durur. Tek zaman kaynağı performance.now; render dt veya setInterval sayımı kullanılmaz.
- Süre sonunda görev kilitlenir; kazanılmış yıldızlar silinmez. Tekrar aynı görev/ayar ve tam süreyle başlar; girişe dönüş ayarları korur. Yeni görev tam süre alır. Görev tamamlandığında saat durur.
- Yeniden başlat çizimi, boyamayı, seçimi ve hareket sürükleme durumunu temizler. Aynı görevi tekrar bitirmek yıldız toplamını şişirmez.
- Uzun kazanım/teknik bilgiler yardım ve Öğretmen'de. Öğrenci ekranında kısa şart ve birimler kalır.

T33 yalnız Bahçe Mimarı'na bağlanır; diğer iki pilot T34/T35 kapsamındadır. Main/yayın yok.
