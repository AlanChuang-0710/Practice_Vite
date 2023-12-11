# Vite配置文件中css配置流程(postcss篇)

**搭配test-vite中的vite.base.config學習**
直接在css.postcss中進行配置，該屬性值接配置的就是postcss的配置

- postcss-preset-env: 支持css變量和一些未來css語法
例如: user-select、clamp都會被降級或著前綴補全(--webkit-, --moz-)