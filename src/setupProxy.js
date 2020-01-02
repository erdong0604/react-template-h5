const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy("/api", {
        target: "http://sandbox.api.jiafuyun.com",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        },
    }));
};