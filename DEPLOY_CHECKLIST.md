# 部署检查清单 - GLB 文件加载验证

## ✅ 本地验证步骤

### 1. 构建项目
```bash
npm run build
```

### 2. 检查构建输出
```bash
# 确认 GLB 文件在正确位置
ls -lh build/client/assets/*.glb

# 应该看到：
# - build/client/assets/iphone-11.glb (27KB)
# - build/client/assets/macbook-pro.glb (56KB)
# - build/client/assets/quest3.glb (8.2MB)
```

### 3. 本地测试生产构建
```bash
# 安装 serve (如果还没有)
npm install -g serve

# 启动生产服务器
cd build/client && serve -p 3000

# 或者使用 Remix 的 serve
npm run start
```

### 4. 在浏览器中测试
打开 `http://localhost:3000`，检查：
- 打开浏览器开发者工具 (F12)
- 切换到 Network 标签
- 刷新页面
- 搜索 `.glb` 文件
- 确认看到：
  - ✅ `/assets/iphone-11.glb` - Status 200
  - ✅ `/assets/macbook-pro.glb` - Status 200
  - ✅ `/assets/quest3.glb` - Status 200

## 🚀 部署到 Vercel

### 配置文件说明

#### `vite.config.js` 关键配置
```javascript
{
  publicDir: 'public',           // 指定 public 目录
  assetsInclude: ["**/*.glb"],   // 将 GLB 作为资源处理
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // 保持 GLB 文件名不变
          if (assetInfo.name.endsWith('.glb')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
}
```

#### `vercel.json` 关键配置
```json
{
  "outputDirectory": "build/client",
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ]
}
```

### 部署命令
```bash
# 部署到 Vercel
npm run deploy

# 或
vercel --prod
```

## 🔍 部署后验证

### 1. 检查部署日志
在 Vercel 仪表板中查看：
- ✅ 构建成功
- ✅ 没有错误或警告
- ✅ 输出目录正确 (build/client)

### 2. 测试 GLB 文件访问
打开生产环境 URL，例如 `https://your-domain.vercel.app`

在浏览器中直接访问：
```
https://your-domain.vercel.app/assets/iphone-11.glb
https://your-domain.vercel.app/assets/macbook-pro.glb
https://your-domain.vercel.app/assets/quest3.glb
```

所有文件都应该：
- ✅ 返回 200 状态码
- ✅ 开始下载 GLB 文件
- ✅ 文件大小正确

### 3. 检查网页加载
- 打开首页
- 打开浏览器开发者工具
- 切换到 Network 标签
- 滚动到项目展示部分
- 确认 GLB 文件正在加载

## 📝 文件路径说明

### 源文件位置
```
public/assets/
├── iphone-11.glb
├── macbook-pro.glb
└── quest3.glb
```

### 构建后位置
```
build/client/assets/
├── iphone-11.glb
├── macbook-pro.glb
└── quest3.glb
```

### 代码中的引用
```javascript
// device-models.js
const iphone11 = '/assets/iphone-11.glb';
const macbookPro = '/assets/macbook-pro.glb';
const quest3Model = '/assets/quest3.glb';
```

### 运行时 URL
```
生产环境: https://your-domain.com/assets/iphone-11.glb
开发环境: http://localhost:3003/assets/iphone-11.glb
```

## 🐛 常见问题排查

### 问题 1: 404 Not Found
**原因**: 文件未被复制到构建输出
**解决**:
```bash
# 清理并重新构建
rm -rf build node_modules/.vite
npm run build
```

### 问题 2: 文件路径错误
**检查**:
- ✅ 源文件在 `public/assets/*.glb`
- ✅ 代码中使用 `/assets/*.glb` (以 / 开头)
- ✅ vite.config.js 中 `publicDir: 'public'`

### 问题 3: Vercel 部署后找不到文件
**检查**:
- ✅ vercel.json 的 outputDirectory 是 `build/client`
- ✅ routes 配置正确处理 `/assets/` 路径
- ✅ 文件大小没有超过 Vercel 限制

### 问题 4: GLB 文件太大
**解决**:
- Quest3 模型 (8.2MB) 可能需要优化
- 考虑使用 Draco 压缩
- 或分离到 CDN

## ✨ 成功标志

当看到以下所有条件时，说明配置成功：
- ✅ 本地构建包含 GLB 文件
- ✅ 本地测试可以加载模型
- ✅ 部署成功无错误
- ✅ 生产环境可以直接访问 GLB 文件 URL
- ✅ 网页中 3D 模型正常显示
- ✅ 浏览器 Network 标签显示 GLB 文件加载成功 (200)

---

**最后更新**: 2025-10-21
**配置版本**: Remix 2.7.1 + Vite 5.4.10

