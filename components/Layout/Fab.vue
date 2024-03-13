<template>
    <div :class="`fixed bottom-0 inset-x-0 mx-auto z-40`">
        <div class="relative mx-auto w-full flex flex-col items-center gap-8 justify-start font-rye uppercase font-black">
            <button :class="`
                  inline-flex
                  items-center z-50 rounded-t-full
                  justify-center w-16 h-16 bg-cyan-300 lg:bg-royal-yellow
                  p-2                 text-white focus:outline-none
      `" @click="toggle">
                <span :class="`sr-only`">Open menu</span>
                <svg :class="`block h-8 w-8 text-white stroke-2 stroke-black`"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 24">
                    <g>
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 04 06 L 24 24` : `M 04 06 L 20 06`
                                " />
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 04 06 L 24 24` : `M 04 14 L 28 14`
                                " />
                        <path :class="`transition-all duration-400 transform ease-in-out`" stroke-linecap="round"
                            stroke-linejoin="round" :d="navState ? `M 24 06 L 04 24` : `M 04 22 L 12 22`
                                " />
                    </g>
                </svg>
            </button>
            <a v-for="(route, i) in ALL_MENU" :key="route.name" :href="route.href"
                class="absolute block transition duration-500 ease-in-out transform z-40 group bg-transparent p-2"
                :style="{
                    transform: `translate(0, ${navState ? -5 * (i + 1) : 0
                        }rem)`,
                }">
                <span class="sr-only">{{ route.name }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    :class="`fill-none stroke-2 transition duration-500 ease-in-out stroke-white hover:stroke-royal-orange dark:hover:stroke-royal-yellow`">
                    <path :d="route.icon" />
                </svg>
                <div :class="`absolute overflow-hidden inset-y-0 w-[8rem] left-24 ${navState ? `max-w-[70rem]` : `max-w-0`
                    } flex justify-end transition-all overflow-hidden duration-500 ease-in-out text-left`" :style="{
        transform: `translate(-2rem)`,
    }">
                    <MiscTag2 type="info" class="w-full">
                        <div class="font-bold uppercase w-full">
                            {{ route.name }}
                        </div>
                    </MiscTag2>
                </div>
            </a>
        </div>
        <div :class="`fixed w-full inset-0 ${navState ? `visible` : `invisible`
            } bg-black/60 z-30`" @click="() => (navState = false)" />
    </div>
</template>

<script setup lang="ts">
const navState = ref(false);

const toggle = () => (navState.value = !navState.value);
</script>