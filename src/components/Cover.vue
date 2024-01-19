<script setup>
const props = defineProps(["coverData"]);
</script>

<template>
  <div
    class="cover flex justify-center items-start mt-10 gap-2 px-5 flex-col lg:flex-row"
  >
    <div
      class="main-cover flex justify-center items-center lg:w-1/2 flex-1 relative"
    >
      <img
        class="w-full"
        src="../assets/images/left-banner-image.jpg"
        alt="img"
      />

      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-start ps-5 lg:ps-28 justify-center flex-col"
      >
        <h2 class="text-white text-5xl lg:text-[52px] font-bold mb-2 lg:mb-10">
          We Are Hexashop
        </h2>
        <p class="text-2xl lg:text-[18px] italic mb-5">Your All In One Shop</p>

        <a
          href="#"
          class="px-5 lg:px-10 text-base lg:text-[1.5rem] py-2 lg:py-4 bg-transparent border-solid text-white border border-white transition-all duration-300 hover:text-gray-600 hover:bg-white"
          >Purchase Now!</a
        >
      </div>
    </div>
    <div
      class="small-covers mt-2 lg:mt-0 lg:ps-2 w-full lg:w-1/2 grid grid-cols-2 gap-4"
      v-if="coverData"
    >
      <div
        class="small-item h-full relative"
        v-for="(item, index) in coverData"
        :key="index"
      >
        <img class="w-full relative z-1" :src="item.img" :alt="item.title" />

        <div
          class="category absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col"
        >
          <h3 class="mb-5 text-2xl lg:text-[2.5rem]">{{ item.title }}</h3>
          <p class="text-base lg:text-[18px] italic">
            {{ item.desc }}
          </p>
        </div>

        <div
          class="hovered-item bg-[#2a2a2af7] hover:opacity-100 hover:z-10 flex justify-center items-center flex-col transition-all duration-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] absolute opacity-0 z-0"
        >
          <h3 class="mb-3 text-2xl lg:text-[2.5rem]">{{ item.title }}</h3>
          <p class="text-base lg:text-[18px] mb-5">
            {{ item.desc }}
          </p>
          <router-link
            :to="{ name: item.title }"
            class="px-5 lg:px-10 text-base lg:text-[1.5rem] py-2 lg:py-4 text-white hover:bg-white hover:text-black transition-all duration-300 border-solid border border-white"
            >Discover More</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
