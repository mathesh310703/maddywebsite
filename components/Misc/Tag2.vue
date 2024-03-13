<template>
    <span :class="` text-black
      ${type === 'success'
            ? 'bg-green-200 border-l-2 border-green-800'
            : type === 'info'
                ? 'bg-cyan-200 border-l-2 border-cyan-800'
                : type === 'warning'
                    ? 'bg-yellow-200 border-l-2 border-yellow-800'
                    : type === 'error'
                        ? 'bg-rose-400'
                        : 'bg-black/20 text-gray-200 border-l-2 border-gray-800'
        }
      text-xs
      font-medium
      flex
      items-center
      px-1.5
      py-0.5
      rounded
    `">
        <slot />
    </span>
</template>
<script setup lang="ts">
const { type } = defineProps<{ type: string }>();
</script>