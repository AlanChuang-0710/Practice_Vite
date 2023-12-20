# Vite 相關機制總結

## Vite 不同模式下，打包的工具不同

dev: esbuild
production: rollup

## 鉤子
如果一个 Rollup 插件只在构建阶段有意义，则在 build.rollupOptions.plugins 下指定即可。它的工作原理与 Vite 插件的 enforce: 'post' 和 apply: 'build' 相同。
鉤子相關官方文檔: https://cn.vitejs.dev/guide/api-plugin.html
https://juejin.cn/post/7182221497811861560

## 插件運行順序
默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。如果插件在服务或构建期间按需使用，请使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用。

为了与某些 Rollup 插件兼容，可能需要强制修改插件的执行顺序，或者只在构建时使用。这应该是 Vite 插件的实现细节。可以使用 enforce 修饰符来强制插件的位置。


1. 别名处理 Alias
2. 用户插件设置 enforce: 'pre'
3. vite 核心插件
4. 用户插件未设置 enforce
5. vite 构建插件
6. 用户插件设置 enforce: 'post'
7. vite 构建后置插件(minify, manifest, reporting)
