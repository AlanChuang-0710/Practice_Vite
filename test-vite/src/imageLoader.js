// 此檔案用於學習加載靜態圖片資源
import stylePicUrl from "@assets/images/border-collie.jpg"; //透過vite.config 中的 resolve配置進行字符串的操作
import stylePicRaw from "@assets/images/border-collie.jpg?raw";
// 可於導入路徑後方加上 ? 定義導入格式，默認為 ?url 其他還有 ?raw

const img = document.createElement("img");
img.src = stylePicUrl;
document.body.appendChild(img);

console.log(stylePicRaw); // 二進制數據