# Postcss的前世今生

**注意: postcss 並不等於 less,sass**
Postcss生成的定位是處理語法降級、嵌套、變量、函數、補全，他的功能是可以涵蓋sass, less，但後續sass, less佔比越重，postcss不再維護postcss-sass,postcss-less相關插件(因為less,sass更新，postcss也必須更新)，故乾脆放棄維護，讓用戶先將css代碼交與sass, less處理，再將處理後的代碼交予postcss進行降級。業內逐漸演變出sass, less是**預處理器**，postcss為**後處理器**的說法。

我們寫的css代碼 --> css preprocessor (less, sass loader) 將語法編譯(嵌套、變量、函數)成原生css--> css postprocessor 對高級語法降級 + 前綴補全 --> 瀏覽器客戶端



## 預處理器並不能夠解決部分瀏覽器的兼容性問題:
1. 對未來css語法降級，以利兼容各種瀏覽器
   例如: css新語法 
        :root{
            --margin-bg-color: red
        }

        element{
            background-color: var(--margin-bg-color)
        }

2. 進行前綴補全，以利低版本瀏覽器運行: --webkit


## postcss 配置
1. 安裝postcss-cli (以利在cmd中書寫指令) 與 postcss (實際轉換的工具)
postcss-cli指令可以參考: https://github.com/postcss/postcss-cli
範例: npx postcss index.css -o result.css 利用postcss對index.css進行轉化 並將結果輸出到result.css
2. 建立postcss.config.js