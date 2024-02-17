<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LevelCell from './LevelCell.vue';
import Rectangle from "pixi.js"
import { Application } from "vue3-pixi";
import textureUrl from "@/assets/pxArt3.png";

// const hitArea = new Rectangle(0, 0, 64, 64);

function onClick() {
  console.log('sprite clicked!');
}

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
  <!-- <Application :width="640" :height="480">
    <container>
      <sprite :texture="textureUrl" :hit-area="hitArea" @click="onClick" />
    </container>
  </Application> -->
  <div></div>
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