<script setup lang="ts">
import { ref } from 'vue'
import list from '../../doc/res.json'

defineProps<{ msg: string }>()

const count = ref(list)
</script>

<template>
  <div class="content">
    <div v-for="i of count" class="content-list">
      <!-- <p>{{ i.title }}</p> -->
      <img :src='i.url' alt="">
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.content {
  column-count: 3;
    column-gap: 10px;
  max-width: 1200px;
  margin: auto;
}
@media screen and (max-width: 800px) {
  .content {
    column-count: 2;
    column-gap: 10px;
  }
}
.content-list {
  min-width: calc(100%/3 - 20px);
}
.content-list > img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}
</style>
