<template>
  <footer class="p-4 w-full mt-2">
    <div
      class="border-t-[0.5px] border-cyan-300 w-full py-4 relative transition-colors duration-500 ease-in-out mx-auto mt-4">
      <div class="flex items-center justify-center relative z-20 text-xs text-zinc-500">
        © {{ COPYRIGHT_SINCE }} {{ new Date().getFullYear() !== COPYRIGHT_SINCE ? `- ${new Date().getFullYear()}` : ``
        }}
        {{ COPYRIGHT_OWNER }}
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { COPYRIGHT_SINCE } from '~/utils/constants';

</script>
