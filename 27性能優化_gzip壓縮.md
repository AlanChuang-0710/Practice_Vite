# [性能優化篇] gzip壓縮

**搭配 test-vite > vite.base.config > vite-plugin-compression學習**

**前置知識**
有時候我們的文件資源實在太大了
js ----> 2000kb http傳輸

chunk (塊) 從入口文件到一系列依賴最終打包成的js文件叫做塊
塊最終會映射到js文件，但塊不是js文件

## 將所有靜態資源文件壓縮，已達到減少體積的目的

<原理> 
服務端 --> 壓縮文件
客戶端收到壓縮包 --> 解壓縮

<實現>
前端: 打包時透過vite-plugin-compression將js文件壓縮成gz檔，可以減少文件60%以上的體積。

後端: 將.gz文件發送給用戶時，設置一個響應(content-encoding:  gzip)

用戶瀏覽器: 收到響應結果，發現響應頭有qzip對應字段，會自動解壓得到原本的js文件(瀏覽器承擔一定解壓時間)。

