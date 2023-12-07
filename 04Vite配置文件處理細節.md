# vite配置文件處理細節

1. vite配置文件的語法提示
    1. 如果使用的是webstorm，那你可以得到很好的語法補全
    2. 如果使用的是vscode或其他的編輯器，則需要做特殊處理 (見vite.config.js)

2. 關於環境的處理
過去我們使用webpack的時候，我們要區分配置文件的一個環境
-webpack.dev.config
-webpack.pred.config
-webpack.base.config
-webpackmerge

### 小知識
為甚麼vite.config.js可以書寫esmodule的形式，這是因為vite在讀取vite.config.js時，會先讓解析文件語法，如果是esmodule規範，會進行語法替換。


