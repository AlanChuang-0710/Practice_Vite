# Vite配置文件中css配置流程(preprocessorOptions篇)

主要用來配置css預處理的一些全局參數

假設沒有使用構件工具，我們又想去編譯less文件的話

```
yarn add less  #安裝lessc的編譯器
```



## sourceMap

文件之間的索引:
假設程式碼被壓縮或著編譯過了，這個時候程序出錯，他並不會產生正確的錯誤位置信息。
如果設置了sourcemap，他就會有一個索引文件

