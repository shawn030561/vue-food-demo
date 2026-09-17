import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DishDetailView from "../views/DishDetailView.vue";
import FavoritesView from "../views/FavoritesView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/dish/:id", name: "dish-detail", component: DishDetailView },
    { path: "/favorites", name: "favorites", component: FavoritesView },
  ],
});

export default router;
