<template>
  <div class="p-4 w-full">
    <div class="
      w-full
        p-4
        rounded-xl
        mx-auto
        h-full
        block
        bg-opacity-20
        transform
        tracking-wide
        transition
        duration-500
        ease-in-out group
        hover:-translate-y-1 hover:scale-110
      ">
      <a
        :href="link"
        class="md:flex p-4"
      >
        <div class="md:flex-shrink-0">
          <img
            :src="image"
            class="w-full md:h-48 md:w-48 object-cover rounded-full"
            alt="Abyss"
          />
        </div>
        <div class="flex-grow p-2 px-8">
          <p class="text-3xl font-bold pt-3 text-center md:text-left">
            {{ title }}
          </p>
          <div class="py-3">
            {{ description }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
const { image, link, title, description } = defineProps<{ image: string, link: string, title: string, description: string }>()
</script>