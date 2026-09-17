import { defineStore } from "pinia";
import { ref, computed } from "vue";

const STORAGE_KEY = "vue-food-favorites";

/** 从 localStorage 读取收藏 id 列表（不可用则返回空数组） */
function read(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as string[];
  } catch {
    /* 忽略解析/存储错误 */
  }
  return [];
}

/**
 * 收藏状态（Pinia setup store）
 * 采用 Composition API 写法，与组件内逻辑风格一致。
 */
export const useFavoritesStore = defineStore("favorites", () => {
  const ids = ref<string[]>(read());

  const count = computed(() => ids.value.length);

  function isFavorite(id: string): boolean {
    return ids.value.includes(id);
  }

  function toggle(id: string): void {
    // 不可变更新：返回新数组，而非原地修改
    const next = isFavorite(id)
      ? ids.value.filter((x) => x !== id)
      : [...ids.value, id];
    ids.value = next;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return { ids, count, isFavorite, toggle };
});
