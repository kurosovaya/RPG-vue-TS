<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import * as PIXI from 'pixi.js';

onMounted(() => {
  const app = new PIXI.Application({
		background: '#1099bb',
		resizeTo: window,
	});

  document.body.appendChild(app.view);
})

</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
