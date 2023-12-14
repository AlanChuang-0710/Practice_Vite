# vite-alias 插件

**搭配 test-vite > vite.base.config 學習**
**Vite 社區插件 github 連結**
https://github.com/subwaytime/vite-aliases

## vite-aliases 功能

vite-aliases 插件: 檢查當前目錄下包括 src 在內的所有文件夾，並幫助我們生成別名。
與 resolve.alias 功能相同，但 resolve 調用的是@rollup/plugin-alias 進行換名處理。

## 使用注意

https://cn.vitejs.dev/guide/troubleshooting

1. 需特別注意最新版的 vite-alias 為 ESM only package，需在 package.json 聲明 type: module，項目中其他包的語法也需要特別聲明 ejs 或是 cjs，否則都會以 ES 語法解析。故建議使用舊版本 vite-aliases 0.9.2 或是乾脆使用 resolve.aliases 就好。
2. 無論 package.json 當中 type 字段為何，.mjs 的文件都將以 EJS 模塊進行處理，.cjs 文件都將以 commonJS 文件處理。
