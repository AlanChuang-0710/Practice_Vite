# 手寫 Vite-aliases 插件

**搭配 test-vite > plugins > ViteAliases 學習**

**前置知識**
整個插件就是在 Vite 的生命週期各個不同階段去做不同的事
比方說 Vue, React 會有

- created
- mounted

Vite 也有相對應的生命週期鉤子 Universal hook
Vite 生命週期相關文檔: https://vitejs.dev/guide/api-plugin.html

The following hooks are called once on server start:

- options
- buildStart

The following hooks are called on each incoming module request:

- resolveId
- load
- transform

本次練習會使用到 vite specific hooks 中的 config，用於獲得當前 config 的內容，以利進行轉換。

通過 vite.config.js 返回出去的配置對象以及我們在自訂義插件返回的對象，都不是最終的配置對象
Vite 會將所有配置對象做一個合併，覆蓋掉重複的屬性，生成最終的對象。
