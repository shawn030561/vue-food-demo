import { defineStore } from "pinia";
import { ref, computed } from "vue";

const STORAGE_KEY = "vue-food-favorites";

function read(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as string[];
  } catch {
    // ignore
  }
  return [];
}

export const useFavoritesStore = defineStore("favorites", () => {
  const ids = ref<string[]>(read());

  const count = computed(() => ids.value.length);

  function isFavorite(id: string): boolean {
    return ids.value.includes(id);
  }

  function toggle(id: string): void {
    const next = isFavorite(id)
      ? ids.value.filter((x) => x !== id)
      : [...ids.value, id];
    ids.value = next;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return { ids, count, isFavorite, toggle };
});
