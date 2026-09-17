<script setup lang="ts">
defineProps<{ value: number }>();
</script>

<template>
  <span class="stars">
    {{ "★".repeat(value) }}{{ "☆".repeat(5 - value) }}
  </span>
</template>
