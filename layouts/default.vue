<template>
  <div class="
      flex flex-col min-h-screen font-montserrat text-lg tracking-wide text-white bg-gray-950">
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-4 mt-5">
      <slot />
    </main>
    <LayoutFab />
    <LayoutFooter />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
</style>
