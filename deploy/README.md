# AI Agents Intensive — Pitch Landing

Self-contained HTML landing page for **Genesis Academy × KSE · AI Agents Intensive** pitch.
Built on Genesis Academy design system. All assets (logos, fonts, scripts) inlined as data URIs — works offline.

Test task · Position: Educational Project Specialist · Genesis Academy / Genesis Education.

---

## Структура

```
deploy/
├── index.html       ← self-contained HTML (1.4MB)
├── vercel.json      ← Vercel config (cleanUrls)
├── .nojekyll        ← disables Jekyll for GitHub Pages
└── README.md
```

---

## Деплой на Vercel (1 хвилина)

### Варіант A — Vercel CLI

```bash
cd deploy
npx vercel
# accept defaults; перший раз попросить залогінитись
# для production-URL:
npx vercel --prod
```

### Варіант B — Drag & Drop

1. Відкрий [vercel.com/new](https://vercel.com/new)
2. Натисни **"Import Project"** → **"Browse"** і вибери папку `deploy/`
3. Default settings → **Deploy**
4. Через ~10 секунд отримаєш URL виду `https://<project>.vercel.app`

### Варіант C — GitHub → Vercel

1. Запуш папку `deploy/` (або весь репо) у GitHub
2. На [vercel.com](https://vercel.com) → **New Project** → імпорт репо
3. Root directory: `deploy` (якщо коміт всього проєкту)
4. Deploy

---

## Деплой на GitHub Pages (2 хвилини)

### Якщо це окремий репозиторій

```bash
cd deploy
git init
git branch -m main
git add .
git commit -m "AI Agents Intensive pitch landing"
git remote add origin https://github.com/<your-user>/<repo-name>.git
git push -u origin main
```

Далі в репо на GitHub:
1. **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `/ (root)` → **Save**
4. Чекай 1-2 хв, потім URL з'явиться там: `https://<user>.github.io/<repo-name>/`

### Якщо в існуючому репо (subfolder)

1. Скопіюй вміст `deploy/` у папку `docs/` свого репо
2. **Settings** → **Pages** → **Branch**: `main` / `/docs` → **Save**
3. URL: `https://<user>.github.io/<repo>/`

`.nojekyll` уже у папці — він вимикає Jekyll-процесинг (інакше Pages може мати дивні артефакти).

---

## Custom domain

**Vercel:** Settings → Domains → Add → введи свій домен → налаштуй DNS (CNAME / A record за інструкцією).

**GitHub Pages:** Settings → Pages → Custom domain → введи домен → дочекайся DNS check.

---

## Перед production

У `landing/App.jsx` замінити `onNotionPlan` / `onNotionRisks` (зараз показують toast-плейсхолдер) на справжні Notion-URL:

```js
const onNotionPlan = () => window.open('https://notion.so/<your-action-plan>', '_blank');
const onNotionRisks = () => window.open('https://notion.so/<your-risk-matrix>', '_blank');
```

Після правок перебудувати bundle і замінити `deploy/index.html`.
