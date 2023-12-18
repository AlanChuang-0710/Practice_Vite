# Vite常用插件之vite-plugin-html

**搭配test-vite 學習**
**前置知識**
webpack --> webpack-html-plugin --> clean-webpack-plugin (clean: true)

Vite及成了Vue團隊的風格，盡量內置功能，減少開發者的心智負擔
例如: css-loader, less-loader都已經內置進去了。


## vite-plugin-html官方文檔
https://github.com/vbenjs/vite-plugin-html/tree/main#readme

主要關注在其inject功能:
包含注入ejs的data
(ejs在服務端會用的比較頻繁，因為服務端會動態修改index.html的內容)

本次手寫練習會使用到vite specific hooks中的transformIndexHtml，用於獲得當前index.html的內容，以利進行轉換。