# 食味清单

一个美食收藏清单的小项目，基于 Vue 3。

## 技术栈

- Vue 3（Composition API + `<script setup>`）
- TypeScript
- Vite
- Pinia（收藏状态 + localStorage 持久化）
- Vue Router

## 功能

- 首页美食列表，支持关键词搜索和地区筛选
- 美食详情页，通过 /dish/:id 路由参数渲染
- 收藏 / 取消收藏，状态用 Pinia 管理并持久化到 localStorage
- 我的收藏页

## 运行

```bash
npm install
npm run dev
npm run build
```
