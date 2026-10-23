# Y41 · Eksik Bahçe

23 Ekim 2026. Kaynak kimliği `B10-G`; gerçek seçim `data-open="9,game"`. Bu akış oyun bankasındaki diğer modlardan ayrı izlenir.

| Adım | Durum / kanıt |
| --- | --- |
| Y41-01 | Kaynak amaç/kazanım/3 tur ve takım puanı incelendi. Modules dizisindeki özgün kod/amaç, questionFor soruları korunur. Resmî müfredat veya öğrenme başarısı doğrulaması iddia edilmez. |
| Y41-02 | Mevcut banka.webp clay görseli 768×512 olarak açılıp incelendi; girişte bu akışın ilk örnek yönergesi ve kazanımı var. Son cihaz netliği/boyut kontrolü açık. |
| Y41-03 | Mod seçimi ortak native giriş açar. Gerçek destek düzeyi: Kolay ön bilgi açık ve 3+ şıklı soruda bir yanlış seçenek eksik; Orta isteğe bağlı ön bilgi; Zor ilk denemede ön bilgisiz. Açıölçer gerektiren görevde araç düğmesi zor düzeyinde de korunur. |
| Y41-04 | Süresiz/60/120/180; tur başına aktif-zaman, yardım/arka plan duraklaması, süre sonu native-handler kilidi ve tekrar üretim adapter testinde geçti. Eski serbest 60 sn sayacı kaldırıldı. |
| Y41-05 | 13 modül × Etkinlik/Hızlı oyun korunur. Mod/akış girişleri ve üç tur üretim koduyla test edildi. Küçük ekran tarayıcı/gerçek cihaz kontrolü açık. |
| Y41-06 | Üretim kaynağı: 26 akış ×3 destek düzeyi ×3 tur (234 tur), cevap eşleşmesi/puan/expiry/reset ve klavye grid testi geçti. Fiziksel touch, ekran okuyucu, OS reduced-motion ve son tarayıcı kabulü yapılmadı; bu madde kapalı değildir. |

Test: `node tests/bank-rollout-contract.cjs`. DOM simülasyonu gerçek cihaz testi değildir. Ayrıntı: [banka ailesi](bank-family-review.md).
