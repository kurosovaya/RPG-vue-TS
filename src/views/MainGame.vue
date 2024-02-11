<script setup lang="ts">
import GameLevel from '@/components/GameLevel.vue';
import PlayerComponent from '@/components/PlayerComponent.vue';

// let canvals = document.getElementById("canvas")
// let ctx = canvals.getContext('2d')

</script>

<template>
    <div>
        <!-- <canvas width="0" height="0" class="canvas" id="canvas">!!!</canvas> -->
        <PlayerComponent></PlayerComponent>
		<GameLevel></GameLevel>
    </div>
</template>

<style scoped>
body, html
{
	width: 100%;
	height: 100%;
	padding: 0px;
	margin: 0px;
	overflow: hidden;
}

.wrapper
{
	width: 100%;
	height: 100%;
}

.canvas
{
	width: 100%;
	height: 100%;
	background: #000;
}
</style>