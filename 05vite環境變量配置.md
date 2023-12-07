# 環境變量配置

## 前期知識
> 環境變量: 會根據當前代碼環境產生值的變化的變量，就叫做環境變量

代碼環境:

1. 開發環境
2. 測試環境
3. 預發布環境
4. 灰度環境
5. 生產環境

舉個例子:

1. 百度地圖、小程序的 sdk
   APP_KEY: 測試、生產；開發環境都是不一樣的 KEY
2. 生產和開發環境的 api 接口可能也不一致
   BASE_URL: "http://api/dev"
   BASE_URL: "http://api/prod"


## vite中的環境變量處理
1. 調用內置的dotenv第三方庫
dotenv會自動讀取.env文件，解析文件中的環境變量，並將其注入到process對象下(但vite考慮到和其他配置的一些衝突問題，他不會直接注入到process下，需要在vite.config.js進行配置)。

涉及到vite.config.js中的一些配置
- root: 
- envDir: 用來配置當前環境變量的文件地址

.env: 所有環境共用的環境變量
.env.development: 開發環境的環境變量 (vite默認名稱，webpack同理)
.env.production: 生產環境的環境變量 (vite默認名稱，webpack同理)

### 服務器端獲取環境變量
當我們調用loadEnv的時候，vite會做以下事情:
1. 直接找到.env文件不解次，並解析其中的環境變量，並放進一個對象裡
2. 會將傳進來的mode這個變量(npm run dev --mode development)的值進行拼接: ``` .env.development```，並根據我們提供的目錄去找取對應的配置文件，並進行解析，放進一個對象裡
3. 合併步驟1和步驟2中的對象，如果有重複的屬性會被後者覆蓋。
4. 返回步驟3合併後的對象

### 瀏覽器端獲取環境變量
vite將對應的環境變量注入到import.meta.env當中，
vite做了一個攔截，他為了防止隱私的變量被送進import.meta.env當中，如果環境變量不是以VITE開頭的話，就不會傳入到用戶端當中。如果想要更改前綴，可以在vite.config中使用envPrefix配置