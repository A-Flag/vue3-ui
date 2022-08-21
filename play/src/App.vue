<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
</script>

<template>
  <div>
    test2
    <z-icon color="red" :size="40">
      lalla
      <AddCircle></AddCircle>
    </z-icon>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
