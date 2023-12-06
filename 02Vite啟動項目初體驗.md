# 你必須要理解的vite腳手架和vite
vite官網搭建vite項目文檔教程: https://vitejs.dev/

比如我們敲了```yarn create vite```
1. 幫我們全局安裝一個東西: create-vite (vite的腳手架)

2. 直接運行這個create-vite bin目錄下的一個執行配置

create-vite和vite之間的關係是甚麼? 
其實就是 create-vite內置了vite，如同vue-cli內置了webpack

接下來會先學習vite
暫時不會使用 ```yarn create vite my-vue-app --template vue```


以vue-cli做理解:
搭建一個工程項目包含: vite, vue, post-css, less, babel 等等
vue-cli/create-react-app(開發商)給我們提供已經精裝修的模板。

同樣地，create-vite(開發商)也提供一套精裝修模板，已經下載好vite, vue, post-css, less, babel，並且給你最佳實踐的配置。