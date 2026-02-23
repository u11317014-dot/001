# 🔨 打地鼠遊戲 - Whack-a-Mole Game

一個有趣的互動式打地鼠遊戲，用JavaScript、HTML和CSS製作。

## 🎮 遊戲玩法

- **目標**: 在30秒內點擊盡可能多的地鼠
- **計分**: 每成功點擊一隻地鼠得1分
- **難度**: 地鼠會隨機出現，時間越來越緊湊

## 📁 文件結構

```
001/
├── index.html      # 遊戲主頁面
├── style.css       # 樣式表
├── game.js         # 遊戲邏輯
└── README.md       # 說明文檔
```

## 🚀 使用方式

### 在線試玩
訪問: [https://u11317014-dot.github.io/001/](https://u11317014-dot.github.io/001/)

### 本地運行
1. 克隆或下載此倉庫
2. 在瀏覽器中打開 `index.html`
3. 點擊「開始遊戲」按鈕開始

## 🎯 遊戲特色

✨ **美觀設計**
- 漸層背景色
- 光滑動畫效果
- 響應式設計（支持手機）

🎮 **流暢的遊戲體驗**
- 實時分數更新
- 倒計時計時器
- 地鼠隨機出現

⚡ **簡單易懂**
- 直觀的用戶界面
- 清晰的遊戲說明
- 快速開始遊戲

## 📊 遊戲配置

在 `game.js` 中可以自定義以下參數：

```javascript
const GAME_DURATION = 30;           // 遊戲時間（秒）
const MOLE_DISPLAY_TIME = 800;      // 地鼠顯示時間（毫秒）
const MOLE_MIN_WAIT_TIME = 300;     // 最小等待時間
const MOLE_MAX_WAIT_TIME = 1000;    // 最大等待時間
```

## 🎨 自定義

### 改變遊戲時間
編輯 `game.js`:
```javascript
const GAME_DURATION = 60; // 改為60秒
```

### 改變地鼠出現速度
編輯 `game.js`:
```javascript
const MOLE_DISPLAY_TIME = 600;      // 地鼠出現更快消失
```

### 改變背景色
編輯 `style.css`:
```css
body {
    background: linear-gradient(135deg, #你的顏色1 0%, #你的顏色2 100%);
}
```

## 💻 技術棧

- **HTML5** - 頁面結構
- **CSS3** - 動畫和樣式
- **Vanilla JavaScript** - 遊戲邏輯

## 🌟 功能特點

- ✅ 隨機地鼠生成
- ✅ 實時計分系統
- ✅ 倒計時功能
- ✅ 遊戲結束提示
- ✅ 重置遊戲選項
- ✅ 移動設備適配

## 📱 瀏覽器兼容性

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- 移動瀏覽器 ✅

## 🎉 享受遊戲！

祝你玩得開心！看看你能得到多少分！🐭🔨

---

**作者**: u11317014-dot  
**創建日期**: 2026-02-23  
**許可**: MIT License