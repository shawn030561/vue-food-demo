<script setup lang="ts">
import type { Dish } from "../types";

defineProps<{ dish: Dish }>();
</script>

<template>
  <router-link :to="`/dish/${dish.id}`" class="card">
    <div class="emoji">{{ dish.emoji }}</div>
    <h3>{{ dish.name }}</h3>
    <p class="region">{{ dish.region }}</p>
    <div class="tags">
      <span v-for="t in dish.tags" :key="t" class="tag">{{ t }}</span>
    </div>
  </router-link>
</template>
