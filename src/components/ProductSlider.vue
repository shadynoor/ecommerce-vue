<script setup>
import CarouselComponent from "../components/CarouselComponent.vue";

const props = defineProps(["sliderData"]);
</script>

<template>
  <div>
    <div class="flex flex-col justify-center items-center mb-10">
      <h1 class="text-[#2a2a2a] font-bold text-6xl mb-5 md:text-[34px]">
        {{ sliderData.title }}
      </h1>
      <p class="italic text-[#a1a1a1] text-lg md:text-[14px]">
        {{ sliderData.desc }}
      </p>
    </div>
    <CarouselComponent :products="sliderData.data" />
  </div>
</template>
