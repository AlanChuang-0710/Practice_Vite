import { l as e } from "./vendor-aQH_v6pZ.js";
(function() {
  const e2 = document.createElement("link").relList;
  if (!(e2 && e2.supports && e2.supports("modulepreload"))) {
    for (const e3 of document.querySelectorAll('link[rel="modulepreload"]'))
      r2(e3);
    new MutationObserver((e3) => {
      for (const t2 of e3)
        if ("childList" === t2.type)
          for (const e4 of t2.addedNodes)
            "LINK" === e4.tagName && "modulepreload" === e4.rel && r2(e4);
    }).observe(document, { childList: true, subtree: true });
  }
  function r2(e3) {
    if (e3.ep)
      return;
    e3.ep = true;
    const r3 = function(e4) {
      const r4 = {};
      return e4.integrity && (r4.integrity = e4.integrity), e4.referrerPolicy && (r4.referrerPolicy = e4.referrerPolicy), "use-credentials" === e4.crossOrigin ? r4.credentials = "include" : "anonymous" === e4.crossOrigin ? r4.credentials = "omit" : r4.credentials = "same-origin", r4;
    }(e3);
    fetch(e3.href, r3);
  }
})();
const r = {}, t = document.createElement("img");
t.src = "/2YEe42Rn.border-collie.jpg", document.body.appendChild(t), // console.log(stylePicRaw); // 二進制數據
// es6新語法動態加載
function(e2, t2, o) {
  let n = Promise.resolve();
  if (t2 && t2.length > 0) {
    const e3 = document.getElementsByTagName("link");
    n = Promise.all(t2.map((t3) => {
      if (
        // @ts-expect-error assetsURL is declared before preload.toString()
        (t3 = function(e4) {
          return "/" + e4;
        }(t3)) in r
      )
        return;
      r[t3] = true;
      const n2 = t3.endsWith(".css"), i = n2 ? '[rel="stylesheet"]' : "";
      if (!!o)
        for (let r2 = e3.length - 1; r2 >= 0; r2--) {
          const o2 = e3[r2];
          if (o2.href === t3 && (!n2 || "stylesheet" === o2.rel))
            return;
        }
      else if (document.querySelector(`link[href="${t3}"]${i}`))
        return;
      const s = document.createElement("link");
      return s.rel = n2 ? "stylesheet" : "modulepreload", n2 || (s.as = "script", s.crossOrigin = ""), s.href = t3, document.head.appendChild(s), n2 ? new Promise((e4, r2) => {
        s.addEventListener("load", e4), s.addEventListener("error", () => r2(new Error(`Unable to preload CSS for ${t3}`)));
      }) : void 0;
    }));
  }
  return n.then(() => e2()).catch((e3) => {
    const r2 = new Event("vite:preloadError", { cancelable: true });
    if (r2.payload = e3, window.dispatchEvent(r2), !r2.defaultPrevented)
      throw e3;
  });
}(() => import("./svgLoader-sNwsKPLW.js"), true ? __vite__mapDeps([]) : void 0).then((e2) => {
  console.log(e2);
}), /*! 測試註解是否會被輸出 */
// console.log(name);
/* 單純 */
e.forEach([1, 2, 3, 4, 5], (e2) => {
}), // Vite會將導入的json文件轉化為物件
// 也支持按需加載，以利tree shaking搖樹優化: 打包工具會自動幫忙移除沒有用到的方法與變量。
// 如果用的不是Vite，json文件的導入會作為一個json字符串形式存在。
// console.log("jsonFile ", jsonFile);
// console.log("jsonFile ", name);
fetch("/api/users", { method: "post" }).then((e2) => e2.json()).then((e2) => {
  console.log(e2);
}).catch((e2) => {
  console.log(e2);
});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}