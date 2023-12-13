module.exports = (aliasConf, JSContent) => {
    const entries = Object.entries(aliasConf);
    // console.log("entries", "\n", entries);
    // console.log("JSContent", "\n", JSContent);
    let lastContent = JSContent;
    entries.forEach((entry) => {
        const [alia, path] = entry;
        // alias別名最終做的事情就是字符串的替換
        // 會做path的相對路徑的處理
        const srcIndex = path.indexOf("\\src"); // Window路徑會是反斜線，但瀏覽器讀取url是斜線，需特別注意
        let realPath = path.slice(srcIndex);
        realPath = realPath.replaceAll("\\", '/');
        lastContent = JSContent.replaceAll(alia, realPath);
    });
    return lastContent;
};