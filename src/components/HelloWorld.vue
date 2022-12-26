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
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}
.content-list {
  width: 33%;
}
.content-list > img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
