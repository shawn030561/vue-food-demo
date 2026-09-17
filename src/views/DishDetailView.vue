<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { dishes } from "../data/dishes";
import { useFavoritesStore } from "../stores/favorites";
import RatingStars from "../components/RatingStars.vue";

const route = useRoute();
const store = useFavoritesStore();

const dish = computed(() =>
  dishes.find((d) => d.id === String(route.params.id)),
);

function toggle(): void {
  if (dish.value) store.toggle(dish.value.id);
}
</script>

<template>
  <div v-if="dish">
    <button class="back" @click="$router.back()">← 返回</button>

    <div class="detail">
      <div class="emoji">{{ dish.emoji }}</div>
      <h2>{{ dish.name }}</h2>
      <p class="region">
        {{ dish.region }} · <RatingStars :value="dish.rating" />
      </p>
      <p class="desc">{{ dish.desc }}</p>
      <div class="tags">
        <span v-for="t in dish.tags" :key="t" class="tag">{{ t }}</span>
      </div>
      <button
        class="fav"
        :class="{ active: store.isFavorite(dish.id) }"
        @click="toggle"
      >
        {{ store.isFavorite(dish.id) ? "★ 已收藏" : "☆ 收藏" }}
      </button>
    </div>
  </div>

  <p v-else class="empty">未找到该美食</p>
</template>
