<script setup lang="ts">
import { computed } from "vue";
import { dishes } from "../data/dishes";
import { useFavoritesStore } from "../stores/favorites";
import DishCard from "../components/DishCard.vue";

const store = useFavoritesStore();

const favorites = computed(() =>
  dishes.filter((d) => store.isFavorite(d.id)),
);
</script>

<template>
  <h2 class="page-title">我的收藏</h2>

  <p v-if="favorites.length === 0" class="empty">
    还没有收藏任何美食，去首页看看吧～
  </p>

  <section class="grid">
    <DishCard v-for="d in favorites" :key="d.id" :dish="d" />
  </section>
</template>
