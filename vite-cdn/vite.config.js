import viteCDNPlugin from "vite-plugin-cdn-import";
import { defineConfig } from "vite";


export default defineConfig({
    plugins: [
        viteCDNPlugin({
            modules: [{
                name: "lodash",
                var: "_",
                path: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
            }]
        })
    ]
});