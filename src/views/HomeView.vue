<script setup lang="ts">
import { ref, computed } from "vue";
import { dishes } from "../data/dishes";
import DishCard from "../components/DishCard.vue";

const keyword = ref("");
const region = ref("全部");

const regions = computed(() => [
  "全部",
  ...new Set(dishes.map((d) => d.region)),
]);

const filtered = computed(() =>
  dishes.filter((d) => {
    const matchRegion = region.value === "全部" || d.region === region.value;
    const matchKeyword = `${d.name}${d.desc}${d.tags.join("")}`.includes(
      keyword.value.trim(),
    );
    return matchRegion && matchKeyword;
  }),
);
</script>

<template>
  <section class="hero">
    <h1>食味<span>清单</span></h1>
  </section>

  <section class="filters">
    <input v-model="keyword" type="text" placeholder="搜索菜名 / 关键词..." />
    <select v-model="region">
      <option v-for="r in regions" :key="r" :value="r">{{ r }}</option>
    </select>
  </section>

  <section class="grid">
    <DishCard v-for="d in filtered" :key="d.id" :dish="d" />
  </section>

  <p v-if="filtered.length === 0" class="empty">没有找到匹配的美食</p>
</template>
