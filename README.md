# İlaç Kontrol

Yaşlılar için Android ve iOS mobil uygulaması:

- İlaç kutusundaki karekodu okutup ilacın orijinal olup olmadığını ve son kullanma tarihini gösterir.
- Eczaneden verilen ilacı reçeteyle karşılaştırır.
- Prospektüsü (kullanma talimatını) Türkçe sesli okur.

Plan ve sprintler: [docs/sprint-plani.md](docs/sprint-plani.md) · [Milestone'lar](https://github.com/Yemresalcan/ilac-kontrol/milestones)

## Geliştirme

React Native + Expo (TypeScript).

```bash
npm install
npx expo start   # Expo Go ile telefonda açmak için QR kodu okutun
npm run lint      # ESLint + Prettier
npm run typecheck # tip kontrolü
```

Klasörler:

- `src/app/`: ekranlar (Expo Router, her dosya bir ekran)
- `src/components/`: ortak bileşenler
- `src/lib/`: iş mantığı (karekod ayrıştırma, eşleştirme vb.)
- `src/data/`: uygulamayla gelen veriler (ilaç listesi vb.)
