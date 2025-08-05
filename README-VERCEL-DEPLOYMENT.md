# Vercel部署指南

## 📋 迁移完成清单

✅ **依赖更新**
- 移除: `@remix-run/cloudflare`, `@remix-run/cloudflare-pages`, `wrangler`, `miniflare`
- 添加: `@remix-run/node`, `@remix-run/serve`, `vercel`

✅ **配置文件更新**
- `vite.config.js`: 移除Cloudflare特定插件
- `vercel.json`: 新增Vercel部署配置
- 所有路由文件: 更新imports到`@remix-run/node`

✅ **文件清理**
- 删除: `wrangler.toml`, `functions/[[path]].js`
- 修复: Contact路由导出错误

## 🚀 部署步骤

### 1. 连接到Vercel
```bash
# 安装Vercel CLI (如果还没有)
npm i -g vercel

# 登录Vercel
vercel login

# 在项目目录中初始化
vercel
```

### 2. 配置环境变量
在Vercel仪表板中设置以下环境变量：
```
SESSION_SECRET=your-session-secret-here
EMAIL=your-email@example.com
```

### 3. 部署
```bash
# 生产部署
npm run deploy

# 或者使用Vercel CLI
vercel --prod
```

## ⚙️ 配置说明

### vercel.json配置
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "remix",
  "outputDirectory": "build/client",
  "functions": {
    "app/routes/**/*.{js,ts,jsx,tsx}": {
      "maxDuration": 30
    }
  },
  "rewrites": [
    {
      "source": "/((?!assets/).*)",
      "destination": "/index.js"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(?:glb|hdr|glsl|mp4|jpg|png|gif|webp|pdf))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🔧 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览生产构建
npm start
```

## 📝 注意事项

1. **3D资源优化**: 项目包含大型Three.js资源，已配置Vercel缓存头
2. **DRACO压缩**: postinstall脚本会自动配置DRACO解码器
3. **MDX支持**: 博客文章将继续正常工作
4. **主题切换**: 会话存储已适配Vercel环境

## 🎯 性能优化

- ✅ 资源缓存策略已配置
- ✅ 函数超时设置为30秒
- ✅ 静态资源CDN分发
- ✅ Gzip压缩支持

## 🆘 故障排除

### 构建错误
如果遇到构建错误，检查：
1. Node.js版本 >= 19.9.0
2. 确保所有依赖已正确安装
3. 环境变量是否正确设置

### 3D模型不显示
检查：
1. DRACO文件是否在public/draco/目录中
2. 网络连接是否允许加载.glb文件

### 联系表单问题
确保在Vercel环境变量中设置了正确的邮箱配置。

---

🎉 **恭喜！** 你的portfolio现在已经完全迁移到Vercel，享受更快的部署和更好的开发体验吧！