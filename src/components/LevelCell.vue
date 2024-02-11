<script setup lang="ts">
export interface Props {
    position_x: number,
    position_y: number
}
const props = withDefaults(defineProps<Props>(), {
    position_x: 0,
    position_y: 0
})
</script>

<template>
    <div class="level_cell" :style="{left: position_x*32+'px', top: position_y*32+'px'}">
        <img src="../assets/pxArt3.png">
    </div>
</template>

<style>
.level_cell {
    position: absolute;
    width: 32px;
    height: 32px;
}

img {
    width: 100%;
    height: 100%;
}
</style>