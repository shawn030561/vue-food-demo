# 食味清单 · Vue 3 Demo

一个使用 **Vue 3** 构建的美食收藏清单 Demo，用于演示 Vue 生态的核心能力。

## 技术栈

| 层面 | 技术 |
|------|------|
| 框架 | **Vue 3**（Composition API + `<script setup>`）+ TypeScript |
| 构建 | Vite 5 |
| 状态管理 | **Pinia**（setup store + localStorage 持久化） |
| 路由 | **Vue Router v4**（真实路由 + 路由参数） |

## 功能

- 🍜 首页美食列表：关键词搜索 + 地区筛选（`computed` 响应式过滤）
- 📄 美食详情页：路由参数 `/dish/:id` 渲染
- ⭐ 收藏 / 取消收藏：Pinia 全局状态共享，localStorage 持久化
- 📂 我的收藏页：展示已收藏美食

## 快速开始

```bash
npm install
npm run dev      # 浏览器打开 http://localhost:5174
npm run build    # vue-tsc 类型检查 + vite 生产构建
```

## 目录结构

```
src/
├── main.ts              # createApp + Pinia + Router
├── App.vue              # 导航 + router-view
├── style.css            # 全局样式
├── types.ts             # Dish 接口
├── data/dishes.ts       # 类型化美食数据
├── router/index.ts      # 路由表
├── stores/favorites.ts  # Pinia 收藏 store
├── components/          # DishCard / RatingStars
└── views/               # Home / DishDetail / Favorites
```

仅供学习交流使用。
