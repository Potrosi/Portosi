# AI Agents Intensive — Pitch Landing

Лендинг **Genesis Academy × KSE · AI Agents Intensive** для пітчу/захисту тестового завдання на позицію **Educational Project Specialist** у Genesis Academy / Genesis Education.

Побудований на дизайн-системі Genesis Academy. React + Babel-standalone, без build-кроку.

---

## Структура

```
deploy/
├── index.html              ← головна сторінка (HTML)
├── styles.css              ← стилі лендингу (CSS)
├── colors_and_type.css     ← токени дизайн-системи (CSS-перемінні)
├── data.js                 ← весь контент програми (JS-об'єкт)
├── Icons.jsx               ← outline-іконки
├── Top.jsx                 ← pitch-band, nav, hero, partner-band
├── Middle.jsx              ← facts, аудиторія, структура, лекції, кейси, outcomes
├── Pitch.jsx               ← Action Plan, Матриця ризиків, метрики, FAQ, footer
├── App.jsx                 ← збірка всіх секцій
├── assets/
│   ├── genesis-academy-logo.png
│   └── genesis-academy-mark.png
├── vercel.json             ← конфіг Vercel
├── .nojekyll               ← вимикає Jekyll для GitHub Pages
└── README.md
```

Файли імпортуються через звичайні `<script>` і `<link>` теги — жодного bundle-кроку. Можна відкрити локально через будь-який static-сервер.

---

## Локальний preview

```bash
cd deploy
python3 -m http.server 8000
# → http://localhost:8000
```

Або `npx serve .` / `npx http-server`.

> ⚠️ Просто двічі клікнути по `index.html` не спрацює: Babel-standalone і динамічні `<script type="text/babel" src>` потребують HTTP-протоколу (через `file://` браузер блокує fetch скриптів).

---

## Деплой на Vercel

### Варіант A — CLI

```bash
cd deploy
npx vercel              # перший раз попросить залогінитись
npx vercel --prod       # production URL
```

### Варіант B — Drag & Drop

1. [vercel.com/new](https://vercel.com/new)
2. **Import Project** → вибрати папку `deploy/`
3. Default settings → **Deploy**
4. URL: `https://<project>.vercel.app`

### Варіант C — через GitHub

1. Запушити вміст `deploy/` у GitHub-репо
2. [vercel.com](https://vercel.com) → **New Project** → імпорт репо
3. Якщо `deploy/` як subfolder — задати **Root Directory**: `deploy`
4. **Deploy**

---

## Деплой на GitHub Pages

### Окремий репозиторій

```bash
cd deploy
git init -b main
git add .
git commit -m "AI Agents Intensive pitch landing"
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

Далі в репо: **Settings** → **Pages** → **Source**: `Deploy from a branch` → **Branch**: `main` / `/ (root)` → **Save**.

URL: `https://<user>.github.io/<repo>/` (з'явиться за 1-2 хв).

### У subfolder існуючого репо

1. Скопіюй вміст `deploy/` у `docs/` свого репо
2. **Settings** → **Pages** → **Branch**: `main` / `/docs` → **Save**

`.nojekyll` уже в комплекті — Jekyll не процеситиме файли (важливо для `_underscored` файлів і JSX).

---

## Production checklist

1. **Notion-посилання.** У `App.jsx` замінити toast-плейсхолдер на справжні URL:
   ```js
   const onNotionPlan = () => window.open('https://notion.so/...', '_blank');
   const onNotionRisks = () => window.open('https://notion.so/...', '_blank');
   ```
2. **Precompile JSX** (опційно, для performance). Babel-standalone у production дає warning. Для прискорення:
   ```bash
   npm i -D @babel/cli @babel/preset-react
   npx babel App.jsx Top.jsx Middle.jsx Pitch.jsx Icons.jsx --presets=@babel/preset-react -d dist/
   ```
   Тоді в `index.html` замінити `type="text/babel"` на чисті `<script src="dist/App.js"></script>` (без Babel CDN).
3. **OG-зображення.** Додати власне `assets/og-image.png` (1200×630) і прописати в `<head>`:
   ```html
   <meta property="og:image" content="assets/og-image.png">
   ```
4. **Custom domain** (Vercel або GitHub Pages) — інструкції в документації відповідного хосту.

---

## Тех-стек

- HTML5 + CSS3 (custom properties)
- React 18.3.1 (UMD CDN, pinned + integrity)
- Babel Standalone 7.29.0 (in-browser JSX)
- Manrope (Google Fonts)
- Власні SVG-іконки (outline, в стилі Akar/Lucide)
- Жодних build-кроків
