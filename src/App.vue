<script setup lang="ts">
import { useFavoritesStore } from "./stores/favorites";

const store = useFavoritesStore();
</script>

<template>
  <header class="navbar">
    <router-link to="/" class="brand">食味清单</router-link>
    <nav>
      <router-link to="/">全部美食</router-link>
      <router-link to="/favorites">我的收藏 ({{ store.count }})</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>
