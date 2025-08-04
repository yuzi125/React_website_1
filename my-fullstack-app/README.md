# 🚀 Modern Fullstack Application

一個現代化的全端應用程式，使用 React + Node.js + PostgreSQL 技術棧，具備完整的前後端分離架構。

## 🛠️ 技術棧

### 前端 (Frontend)
- **框架**: React 18 + TypeScript
- **建構工具**: Vite (快速開發建構)
- **狀態管理**: Zustand (輕量級狀態管理)
- **UI 庫**: Material-UI v5
- **路由**: React Router v6
- **HTTP 客戶端**: Axios + React Query
- **表單**: React Hook Form + Yup 驗證
- **通知**: React Hot Toast

### 後端 (Backend)
- **運行時**: Node.js 18+ + TypeScript
- **框架**: Express.js
- **數據庫**: PostgreSQL + Prisma ORM
- **認證**: JWT + bcrypt
- **驗證**: express-validator
- **安全**: Helmet, CORS, Rate limiting
- **日誌**: Winston
- **API 文檔**: 可擴展為 Swagger

### DevOps
- **容器化**: Docker + Docker Compose
- **數據庫**: PostgreSQL 15
- **開發工具**: ESLint + Prettier

## 📦 專案結構

```
my-fullstack-app/
├── 📁 frontend/                 # React 前端應用
│   ├── 📁 src/
│   │   ├── 📁 components/       # 可重用組件
│   │   ├── 📁 pages/           # 頁面組件
│   │   ├── 📁 hooks/           # 自定義 Hooks
│   │   ├── 📁 services/        # API 服務
│   │   ├── 📁 store/           # 狀態管理
│   │   └── 📁 types/           # TypeScript 類型定義
│   ├── package.json
│   └── vite.config.ts
├── 📁 backend/                  # Node.js 後端 API
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # 控制器
│   │   ├── 📁 models/          # 數據模型 (Prisma)
│   │   ├── 📁 routes/          # 路由定義
│   │   ├── 📁 middleware/      # 中間件
│   │   ├── 📁 services/        # 業務邏輯
│   │   └── 📁 config/          # 配置文件
│   ├── 📁 prisma/              # 數據庫 Schema
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml           # Docker 編排
└── package.json                # 根專案配置
```

## 🚀 快速開始

### 前置需求
- Node.js 18+ 
- npm 或 yarn
- Docker & Docker Compose (可選，用於容器化運行)
- PostgreSQL (如果不使用 Docker)

### 1. 複製專案
```bash
git clone <your-repo-url>
cd my-fullstack-app
```

### 2. 安裝依賴
```bash
# 安裝所有依賴 (根目錄、前端、後端)
npm run install:all

# 或分別安裝
npm install
cd frontend && npm install
cd ../backend && npm install
```

### 3. 設置環境變量
```bash
# 複製後端環境變量模板
cd backend
cp env.example .env

# 編輯 .env 文件，配置數據庫連接等
```

環境變量說明：
```env
DATABASE_URL="postgresql://username:password@localhost:5432/my_fullstack_app?schema=public"
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"
PORT=3001
NODE_ENV="development"
FRONTEND_URL="http://localhost:5173"
```

### 4. 設置數據庫

#### 選項 A: 使用 Docker (推薦)
```bash
# 啟動 PostgreSQL 容器
docker-compose up postgres -d

# 等待數據庫啟動後，運行數據庫遷移
cd backend
npm run db:generate
npm run db:push
```

#### 選項 B: 本地 PostgreSQL
```bash
# 確保本地 PostgreSQL 運行中
# 創建數據庫
createdb my_fullstack_app

# 運行 Prisma 遷移
cd backend
npm run db:generate
npm run db:push
```

### 5. 運行應用

#### 開發模式
```bash
# 在根目錄同時啟動前後端 (推薦)
npm run dev

# 或分別運行
npm run dev:frontend  # 前端 (http://localhost:5173)
npm run dev:backend   # 後端 (http://localhost:3001)
```

#### 生產模式 (Docker)
```bash
# 建構並啟動所有服務
docker-compose up --build

# 後台運行
docker-compose up -d --build
```

## 🔧 開發指南

### 數據庫操作
```bash
# 生成 Prisma 客戶端
npm run db:generate

# 推送 schema 變更到數據庫
npm run db:push

# 創建並運行遷移
npm run db:migrate

# 打開 Prisma Studio (數據庫管理界面)
npm run db:studio

# 重置數據庫
npx prisma migrate reset
```

### API 端點

| 方法 | 端點 | 描述 | 認證 |
|------|------|------|------|
| GET | `/api` | API 信息 | ❌ |
| GET | `/health` | 健康檢查 | ❌ |
| POST | `/api/auth/register` | 用戶註冊 | ❌ |
| POST | `/api/auth/login` | 用戶登入 | ❌ |
| GET | `/api/auth/profile` | 獲取個人資料 | ✅ |
| PUT | `/api/auth/profile` | 更新個人資料 | ✅ |
| GET | `/api/posts` | 獲取文章列表 | ❌ |
| POST | `/api/posts` | 創建文章 | ✅ |
| GET | `/api/posts/:id` | 獲取文章詳情 | ❌ |
| PUT | `/api/posts/:id` | 更新文章 | ✅ |
| DELETE | `/api/posts/:id` | 刪除文章 | ✅ |

### 代碼質量
```bash
# 前端
cd frontend
npm run lint        # 檢查代碼風格
npm run lint:fix    # 自動修復
npm run type-check  # TypeScript 類型檢查

# 後端
cd backend
npm run lint        # ESLint 檢查
npm run lint:fix    # 自動修復
npm test           # 運行測試
```

## 🔐 認證系統

應用使用 JWT (JSON Web Token) 進行用戶認證：

1. **註冊/登入**: 用戶提供信息，後端驗證後返回 JWT
2. **授權**: 前端在 HTTP 請求頭中包含 JWT
3. **保護路由**: 需要認證的 API 端點驗證 JWT

## 📊 數據模型

### User (用戶)
- id, email, username, password
- firstName, lastName, avatar, bio
- role (USER, ADMIN, MODERATOR)
- 關聯: posts, comments, likes

### Post (文章)
- id, title, content, slug
- published, featuredImg, tags
- 關聯: author (User), comments, likes

### Comment (評論)
- id, content
- 關聯: post (Post), user (User)

### Like (點讚)
- id
- 關聯: post (Post), user (User)

## 🚢 部署

### Docker 部署 (推薦)
```bash
# 建構並啟動
docker-compose up --build -d

# 查看日誌
docker-compose logs -f

# 停止服務
docker-compose down
```

### 手動部署
1. 前端建構: `cd frontend && npm run build`
2. 後端建構: `cd backend && npm run build`
3. 配置環境變量
4. 運行數據庫遷移
5. 啟動服務

## 🎯 功能特性

✅ **已實現**
- 用戶註冊/登入系統
- JWT 認證機制
- PostgreSQL 數據庫集成
- 響應式 Material-UI 界面
- TypeScript 全棧支援
- Docker 容器化
- API 安全防護 (CORS, Helmet, Rate Limiting)

🚧 **開發中**
- 文章 CRUD 功能
- 評論系統
- 文件上傳
- 管理員面板
- 電子郵件驗證
- 密碼重置

## 🤝 貢獻

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 許可證

本專案採用 MIT 許可證 - 查看 [LICENSE](LICENSE) 文件了解詳情。

## 🆘 故障排除

### 常見問題

**Q: 數據庫連接失敗**
A: 檢查環境變量中的 `DATABASE_URL` 是否正確，確保 PostgreSQL 服務正在運行。

**Q: 前端無法連接後端**
A: 檢查 Vite 配置中的代理設置，確保後端運行在正確的端口 (3001)。

**Q: Docker 容器啟動失敗**
A: 檢查 Docker 和 Docker Compose 版本，確保端口沒有被其他服務占用。

## 📞 聯繫方式

如有問題或建議，請開啟 GitHub Issue 或聯繫開發團隊。 