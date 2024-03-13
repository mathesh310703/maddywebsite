<template>
    <div class="text-cyan-100 uppercase"><span class="text-white">{{ text.slice(0, length) }}</span>{{
        randomText }}</div>
</template>

<script setup lang="ts">
import { generateName } from "@nekooftheabyss/lala"

const { text } = defineProps<{ text: string }>()

const length = ref(0)
const updater = ref(0)

const randomText = ref(generateName(text.length - length.value))

onMounted(() => {
    const int = setInterval(() => {
        if (length.value === text.length) {
            clearInterval(int);
            return;
        }
        length.value += 1
    }, 300)

    const int2 = setInterval(() => {
        randomText.value = text.length > length.value ? generateName(text.length - length.value) : ""

        if (length.value === text.length) {
            clearInterval(int2);
            return;
        }
    }, 20)

})

</script>