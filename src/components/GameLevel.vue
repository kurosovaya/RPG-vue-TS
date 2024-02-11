<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LevelCell from './LevelCell.vue';

const cellList = ref([])

onMounted(()=> {
    generateField()
})

function generateField() {
    for(let y = 0; y<27; y++) {
        for (let x = 0; x<48; x++){
            cellList.value.push({x: x, y: y})
        }
    } 
}

</script>

<template>
    <div class="main_layer">
        <LevelCell v-for="cell in cellList" :position_x="cell.x" :position_y="cell.y"></LevelCell>
    </div>
</template>

<style scoped>

.main_layer {
    position: absolute;
    left: 0px;
    top: 0px;
    display: grid;
    width: 100%;
    height: 100%;
}
</style>