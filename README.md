
﻿# MAY LAB 網站維護指南

🔗 網站：https://ntumaylab.github.io/maylab-website/  
🔗 Repo：https://github.com/ntumaylab/maylab-website

本專案使用 **Jekyll + GitHub Pages**。日後維護（新增 News、更新 Members 等）可直接在 GitHub 網頁版進行，不需要在本機安裝任何工具。

---

## 1. 專案結構概觀

| 路徑 | 說明 |
| --- | --- |
| `_layouts/` | Jekyll 頁面模板：`default`(通用框架)、`page`(一般單頁)、`home`(首頁)、`post`(新聞內文)。 |
| `_includes/` | 可重複引用區塊：`header.html`、`footer.html`、新聞卡片、head meta 等。 |
| `_data/` | YAML 資料：`team.yml` (Team Members)、`collaborators.yml` (合作夥伴)。 |
| `_posts/` | News 文章，使用 `YYYY-MM-DD-title.md` 命名，會自動顯示在首頁與 `/news/`。 |
| `assets/_sass/` | SCSS 分模組：`_base.scss`、`_home.scss`、`_people.scss` … 最終由 `assets/css/main.scss` 匯入。 |
| `assets/images/` | 所有圖片資源。新增圖片請放在此資料夾，依需要可新增子資料夾。 |
| `people/` | People 區下的靜態頁面：`pi.html`、`team.html`、`collaborators.html`。 |
| 其他單頁 | `about.html`、`research.html`、`publications.html`、`values.html` 等。 |
| `_config.yml` | Jekyll 主設定（Base URL、Plugins、Pagination…）。 |

> ✅ Jekyll 會根據上述資料夾自動建置 `_site/`，不用手動修改 `_site`。

---

## 2. 如何更新內容

### 2.1 News (首頁輪播 + /news 列表)

1. 前往 [`_posts/`](https://github.com/ntumaylab/maylab-website/tree/main/_posts/) → `Add file → Create new file`。
2. 檔名必須是 `YYYY-MM-DD-title.md`（日期不可在未來）。
3. 參考範例：
   ```md
   ---
   layout: post
   title: "Workshop Recap: Tools for Emotional Resilience"
   date: 2025-06-18
   categories: news
   banner: /assets/images/banner-workshop.jpg
   ---
   內文...
   ```
4. 若需要新的圖片，先到 [`assets/images/`](https://github.com/ntumaylab/maylab-website/tree/main/assets/images) → `Upload files` → 上傳後在 front‑matter 中引用，例如 `/assets/images/banner-workshop.jpg`。
5. Commit message 建議描述內容，如 `Add 2025-06-18 workshop news`。

### 2.2 People (PI / Team / Collaborators)

| 區塊 | 檔案 | 編輯方式 |
| --- | --- | --- |
| PI (Principal Investigator) | `people/pi.html` | 直接修改 HTML，包含圖片、學歷列表等。 |
| Team Members | `_data/team.yml` | 以 YAML 格式維護，支援 `name`、`role`、`image`、`bio` 等欄位。 |
| Collaborators | `_data/collaborators.yml` | 每位夥伴有 `name`、`affiliation`。 |

操作流程：
1. 點選檔案 → 右上角 ✏️ → 編輯。
2. 若新增成員圖片，先上傳至 `assets/images/`。
3. Commit message 例：`Update team.yml - add Amy`。

> RWD 會自動處理，不需手動調整 class。

### 2.3 About / Values / Research / Publications 等單頁

這些頁面都是 HTML 檔案。修改方式：
1. 進入對應檔案（如 `about.html`）。
2. 點 ✏️ 編輯 → 直接修改段落、標題或圖片。
3. 研究頁若新增圖片，請放在 `assets/images/research/`。
4. Publications 以 `<li>` 清單方式維護，可加入 `<strong>`、`<em>`、`<a>` 等標籤：
   ```html
   <li>
     Chen, Y.-L. ... <em>Journal of Applied Psychology</em>.
     <a href="https://doi.org/...">https://doi.org/...</a>
   </li>
   ```

### 2.4 其他資源

- `values.html`、`research.html` 等頁面統一透過 `layout: page` 呈現，樣式由 `_sass/_page.scss` 決定。
- 若要調整全站樣式，請修改 `assets/_sass/` 下對應模組，並確認 `assets/css/main.scss` 有匯入。

---

## 3. 常見問題與注意事項

| 狀況 | 解法 |
| --- | --- |
| 更新後網站沒變 | GitHub Pages 通常 1–2 分鐘內更新，稍待再 `Ctrl+Shift+R` 強制重整。 |
| 圖片不顯示 | 路徑要以 `/assets/images/...` 開頭，且檔名區分大小寫。 |
| News 沒出現 | 檔名日期格式錯誤、日期設定在未來、或 front-matter 缺 `categories: news`。 |
| 排版跑掉 | 複製 HTML 時確認標籤有完整開合，建議沿用現有區塊的結構。 |
| 文章突然消失 | Jekyll 預設不顯示未來日期的 post，請把 `date` 改為當天或過去日期。 |

### Commit / PR 建議
- 任何調整請寫清楚 Commit 訊息（例：`Fix header navigation hover`）。
- 若維護者習慣 PR，也可在 GitHub 建立 PR 讓同伴檢閱後再合併。

### 圖片與素材
- 建議依類別建立子資料夾（如 `assets/images/research/`、`assets/images/team/`）。
- 圖片檔名使用英文/數字，避免空白與特殊符號。

---

## 4. 若要進階開發（選擇性）

若未來維護者要在本地開發，你可以：

```bash
bundle install
bundle exec jekyll serve
```

但**一般內容維護**（新增 News / 更新 Team / 調整頁面文字）只需使用 GitHub Web 介面即可，無需本地開發環境。

---

如有新的維護流程或頁面結構變更，記得同步更新本 README，讓下一位維護者能快速上手。祝維護順利！ 🙌

