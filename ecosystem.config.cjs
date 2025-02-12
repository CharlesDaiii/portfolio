module.exports = {
  apps: [{
    name: "portfolio-ssr",
    script: "build/server/index.js", // 根据你的入口调整
    cwd: "/Users/kk_server/portfolio",
    instances: "max",
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production",
      PORT: 3003, // 与之前排查的端口一致
      PUBLIC_PATH: "/build/client" // 静态资源路径
    },
    error_file: "/Users/kk_server/.pm2/logs/portfolio-ssr-error.log",
    out_file: "/Users/kk_server/.pm2/logs/portfolio-ssr-out.log"
  }]
};
