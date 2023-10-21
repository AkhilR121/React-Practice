"use strict";
exports.__esModule = true;
var plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
var vite_1 = require("vite");
// https://vitejs.dev/config/
exports["default"] = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_swc_1["default"])()],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                rewrite: function (path) { return path.replace(/^\/api/, ""); }
            }
        }
    }
});
