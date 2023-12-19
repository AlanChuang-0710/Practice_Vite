# Vite相關機制總結

## 鉤子
https://juejin.cn/post/7182221497811861560

## 運行順序

1. 别名处理Alias
2. 用户插件设置 enforce: 'pre'
3. vite 核心插件
4. 用户插件未设置 enforce
5. vite 构建插件
6. 用户插件设置 enforce: 'post'
7. vite 构建后置插件(minify, manifest, reporting)
