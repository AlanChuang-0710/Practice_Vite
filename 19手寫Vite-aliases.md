# 手寫Vite-aliases插件

**搭配test-vite > plugins > ViteAliases學習**

**前置知識**
整個插件就是在Vite的生命週期各個不同階段去做不同的事
比方說Vue, React會有
- created
- mounted

Vite也有相對應的生命週期鉤子 Universal hook 
Vite生命週期相關文檔: https://vitejs.dev/guide/api-plugin.html

The following hooks are called once on server start:
- options
- buildStart

The following hooks are called on each incoming module request:
- resolveId
- load
- transform

通過vite.config.js返回出去的配置對象以及我們在自訂義插件返回的對象，都不是最終的配置對象
Vite會將所有配置對象做一個合併，覆蓋掉重複的屬性，生成最終的對象


