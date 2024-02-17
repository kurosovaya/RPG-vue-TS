<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const x = ref(0)
const y = ref(0)

const userClickArrowUp = ({ code }: {code: string}) => {
    if (code === 'ArrowDown') {
        y.value += 32
    }
    if (code === 'ArrowUp') {
        y.value -= 32
    }
    if (code === 'ArrowLeft') {
        x.value -= 32
    }
    if (code === 'ArrowRight') {
        x.value += 32
    }
};

onMounted(() => {
    document.addEventListener('keydown', userClickArrowUp, true);
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', userClickArrowUp, true);
})

</script>

<template>
    <div :style="{left: x+'px', top: y+'px'}">
        <img src="@/assets/cover-256.png">
    </div>
</template>

<style scoped>

div {
    position: absolute;    
    width: 32px;
    height: 32px;
    transition: all .1s;
    z-index: 1;
}

img {
    width: 100%;
    height: 100%;
}
</style>