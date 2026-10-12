# İlaç Kontrol: Sprint Planı (taslak)

Yaşlılar için Android ve iOS mobil uygulaması. Uygulama üç iş yapacak:

1. Kutudaki karekodu okutup ilacın orijinal olup olmadığını kontrol etmek
2. Eczaneden verilen ilacı e-Nabız reçetesiyle karşılaştırmak
3. Prospektüsü (kullanma talimatını) sesli okumak

## Teknoloji önerisi: React Native + Expo (TypeScript)

Flutter yerine Expo'yu öneriyorum, çünkü ihtiyacımız olan parçaların hepsi hazır:
- `expo-camera`: Türkiye'deki ilaç kutularındaki GS1 DataMatrix karekodu okur.
- `expo-speech`: Türkçe (tr-TR) sesli okuma yapar.
- EAS Build ile tek kod tabanından hem Android hem iOS derlenir, Expo Go ile telefonda anında denenir.

Flutter da bu işleri yapabilir. Tercih sizin; plan iki seçenekte de aynı kalır.

## Teknik notlar ve riskler

- **Karekodun içeriği:** GS1 DataMatrix içinde GTIN (01), seri no (21), son kullanma tarihi (17) ve parti no (10) bulunur. Son kullanma tarihi ve parti internetsiz okunabilir.
- **Orijinallik:** Asıl doğrulama İTS (İlaç Takip Sistemi) üzerinden yapılır. Vatandaşın kullanabileceği resmi bir sorgulama servisi olup olmadığı Sprint 0'da netleşecek. Servis yoksa uygulama, kullanıcıyı resmi İTS Mobil uygulamasına yönlendirir.
- **İlaç adı ve prospektüs:** TİTCK, ruhsatlı ilaç listesini (barkodlarla birlikte) ve kullanma talimatlarını yayımlıyor. GTIN'den ilaç adına ve kullanma talimatına bu verilerle ulaşılır.
- **e-Nabız (en büyük risk):** Dışarıdaki uygulamaların bağlanabileceği açık bir arayüz (API) bulamadım. Geçici çözüm olarak kullanıcı reçetesini kendisi ekler (fotoğraf/OCR, PDF ya da elle yazarak).
- **KVKK:** Sağlık verisi özel nitelikli kişisel veridir. Reçete bilgisi sadece telefonda saklanmalı, sunucuya gönderilmemelidir.

## Milestone'lar ve sprintler (2 haftalık sprintler)

### M0: Araştırma ve kurulum (Sprint 0, 1 hafta)
- [ ] İTS'de vatandaşa açık bir sorgulama olup olmadığını araştır
- [ ] e-Nabız'a resmi erişim yolunu araştır (Sağlık Bakanlığı ile iletişim, entegrasyon başvurusu)
- [ ] TİTCK ilaç listesi ve kullanma talimatı kaynaklarını belirle
- [ ] Expo + TypeScript projesini kur, ESLint/Prettier ve GitHub Actions CI ekle
- [ ] Gerçek ilaç kutularından örnek karekod fotoğrafları topla

### M1: Karekod okuma ve ilaç bilgisi (Sprint 1)
- [ ] Kamera ile DataMatrix okuma ekranı
- [ ] GS1 ayrıştırıcı (GTIN, seri, son kullanma tarihi, parti) ve birim testleri
- [ ] GTIN'den ilaç adını bulmak için TİTCK listesinden yerel veritabanı
- [ ] Sonuç ekranı: ilacın adı, son kullanma tarihi, "tarihi geçmiş" uyarısı
- [ ] Orijinallik kontrolü (İTS servisi ya da İTS Mobil'e yönlendirme)

### M2: Sesli prospektüs (Sprint 2)
- [ ] Kullanma talimatını getirip bölümlere ayırma (ne için kullanılır, nasıl kullanılır, yan etkiler)
- [ ] Türkçe sesli okuma, durdur/devam et, okuma hızı ayarı
- [ ] Bölümler arasında büyük butonlarla gezinme
- [ ] İnternetsiz kullanım için önbellek

### M3: Reçete eşleştirme (Sprint 3)
- [ ] Reçete ekleme: elle yazma, fotoğraf ve OCR
- [ ] Okutulan kutuyu reçetedeki ilaçla karşılaştırma (etken madde ve doz)
- [ ] Açık uyarılar: "Bu ilaç reçetenizde yok" ve "Doz farklı"
- [ ] Reçeteyi sadece telefonda, şifreli saklama
- [ ] (Resmi erişim çıkarsa) e-Nabız entegrasyonu

### M4: Yaşlı dostu tasarım ve test (Sprint 4)
- [ ] Büyük yazı, yüksek kontrast, az ve büyük buton
- [ ] Sesli yönlendirme ("Kutuyu kameraya tutun")
- [ ] TalkBack/VoiceOver uyumu
- [ ] 5 yaşlı kullanıcıyla deneme ve bulgulara göre düzeltmeler

### M5: Yayın (Sprint 5)
- [ ] KVKK aydınlatma metni ve gizlilik politikası
- [ ] Mağaza görselleri ve açıklamaları
- [ ] EAS ile Google Play ve App Store'a gönderim
