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
npx tsc --noEmit # tip kontrolü
```
