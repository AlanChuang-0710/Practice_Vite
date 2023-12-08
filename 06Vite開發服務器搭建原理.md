# 原理篇 vite是怎麼讓瀏覽器可以識別.vue文件的

## npm 相關語法
指令: npm create vite@latest
實際執行: npm exec create-vite@latest

npm與npx語法上的差異，在於帶入參數的方式
npm create vite@latest my-vue-app -- -- template vue
npm exec create-vite@latest my-vue-app -- -- template vue
npx create-vite@latest my-vue-app -- template vue

## vite是如何讓瀏覽器識別.vue文件呢?
藉由create vite建立服務器後，發現瀏覽器network會接收到.vue後綴的檔案，瀏覽器卻能正常讀取，原理為?

