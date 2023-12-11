// postcssPresetEnv 預設環境裡包含許多的插件
// 語法降級--> postcss-low-level
// 編譯插件--> postcss-compiler
// ...
const postcssPresetEnv = require("postcss-preset-env");

// postcssPresetEnv預設就是一次性地將必要插件都裝上去
module.exports = {
    plugins: [
        postcssPresetEnv({
            /* pluginOptions */
            features: {
                'nesting-rules': {
                    noIsPseudoSelector: false,
                },
            },
        })
    ]
};