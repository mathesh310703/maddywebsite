<template>
  <div class="p-4">
    <div class="max-w-2xl rounded-xl w-full p-4">
      <div class="flex flex-col items-stretch space-y-4">
        <div class="text-3xl font-semibold">{{ title }}</div>
        <div v-for='(desc, i) in description' :key="`desc${i}`" class="text-base text-zinc-100">
          {{ desc }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { title, description } = defineProps<{ title: string, description: string }>()
</script>