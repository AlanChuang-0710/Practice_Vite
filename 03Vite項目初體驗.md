# vite 啟動項目初體驗

開箱即用(out of box): 不需要做任何額外的派置就可以使用vite幫你處理構建工具

在默認情況下，我們的esmodule去導入資源時，要麼是絕對路徑，要麼是相對路徑。

Q: 既然我們的最佳實踐就是node_modules，那為何es官方在我們導入非絕對路徑和非相對路徑的資源時，不默認幫我們搜尋node_modules呢?

A: 假設瀏覽器會主動幫我們自動透過網路請求導入node_modules相關模塊進來，會發生把所有包都導入的狀況，這是極度消耗性能的問題。故瀏覽器不會自動加載非絕對路徑和非相對路徑的資源。 你可能會疑惑在服務器端不也會面臨這個問題嗎? 這個問題在服務器端是有辦法被規避的。

## Vite是如何處理node_modules呢? 
### 問題一: 路徑問題 import _ from "lodash"
在處理過程中如果看到了有非絕對路徑或著相對路徑的引用，他會嘗試開啟路徑補全。

```js
// Vite 轉化前
import _ from "lodash"

// Vite 轉化後
import __vite__cjsImport0_lodash from "/node_modules/.vite/deps/lodash.js?v=7c34ca7a";
```

找尋依賴的過程是自當前目錄依次向上查找的過程，直到搜索到根目錄或著搜索到對應依賴為止。 /user/node_modules/lodash

npm run dev --->開發環境(每次預構建所重新構建的相對路徑都是正確的)
npm run build --->生產環境，vite會全權交給一個叫做rollup的庫去完成生產環境的打包(rollup 跟webpack相同，兼容許多語法)

### 問題二: 有些包使用commonjs規範導出 nodules.export
有些包如: axios, react都是以commonjs語法導出

**依賴預構建**: 首先vite會找到對應的依賴，然後調用esbuild(對js語法進行處理的一個庫)，將其他規範的代碼轉換成esmodule規範，然後放到當前目錄下的node_modules/.vite/deps。同時，對esmodule規範的各個模塊進行統一集成

他解決了3個問題:
1. 不同的第三方包會有不同的導出格式(這個是vite無法約束人家的事情)
2. 對路徑的處理上可以直接使用.vite/deps，方便路徑重寫
3. 網路多包傳輸的性能問題 (也是原生esmodule規範不敢支持node_modules的原因之一)，有了依賴預構建以後，無論依賴包中有多少額外的export和import，vite會盡可能的將他們進行集成，最後只生成一個或幾個模塊。
