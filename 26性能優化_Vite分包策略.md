# 分包策略

**搭配 test-vite > vite-base-config 學習**

若將所有代碼壓縮到同一檔並生成檔hash，每次業務代碼變動都會導致新hash，使用戶端瀏覽器不使用緩存而必須重新獲取檔案。然而，一些不經常變化的代碼，如引入的 lodash或者非常穩定的業務代碼，也因hash的變化而重新獲取，導致性能浪費。

**分包就是把一些不會常規更新的文件，進行單獨打包處理** 

透過配置build > rollupOptions > output > manualChunks

配置文件: https://cn.vitejs.dev/guide/build.html#chunking-strategy