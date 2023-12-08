# 在Vite中處理css

Vite天生支持css文件的直接處理

1. vite在main.js當中讀取到引用了css文件
2. 直接使用fs模塊讀取css文件內容
3. 創建一個style標籤，將css文件內容直接copy
4. 將style標籤插入到index.html的head當中
5. 將css文件中的內容直接替換為js腳本(方便熱更新或著css模塊化)，同時設置content-type為js，讓瀏覽器以js形式讀取css後綴的文件。

1. 假設讀取到的是XXX.module.css會採取css模塊化
2. 將所有類名進行一定規則的替換(將footer替換成footer_i22st_1)
3. 同時創建一個映射對象 { footer:"footer_i22st_1" }
4. 替換後的內容塞進style標籤，然後放入head當中
5. 將XXX.module.css內容轉換為js腳本
6. 將映射對象在js腳本中進行默認導出