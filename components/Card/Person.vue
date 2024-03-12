<template>
  <div class="p-4">
    <div class="max-w-md rounded-xl w-full p-4">
      <div class="flex flex-col items-stretch space-y-8">
        <div class="shrink-0 flex justify-center">
          <img src="/maddy.webp" class="w-full lg:max-w-2xl" />
        </div>
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="text-3xl font-semibold">{{ name }}</div>
          <div class="text-2xl text-cyan-300">{{ title }}</div>
          <div class="text-lg text-zinc-100">{{ description }}</div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { name, title, description } = defineProps<{ name: string, title: string, description: string }>()
</script>