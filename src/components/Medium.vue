<script setup lang="ts">
import mediumZoom from 'medium-zoom/dist/pure'
import 'medium-zoom/dist/style.css'
import { onMounted, ref } from 'vue'
import list from '../../doc/res.json'

const LOGO_TITLE = '官码'

defineProps<{ msg: string }>()

const count = ref(list?.filter(l => l.title !== LOGO_TITLE))
onMounted(() => {
  mediumZoom(document.querySelectorAll('.content-list > img'), {
    margin: 24,
    background: 'rgba(0,0,0,.58)',
    respectSrcsetImageSize: true,
  })
})
</script>

<template>
  <div class="content">
    <div v-for="i of count" class="content-list">
      <!-- <p>{{ i.title }}</p> -->
      <img :src='i.url' :alt="i.title" :title="i.title">
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
</style>onMounted, 
