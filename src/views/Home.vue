<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../Axios";
import Cover from "../components/Cover.vue";
import ProductSlider from "../components/ProductSlider.vue";

let men = ref([]);
let women = ref([]);
let kids = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("products.json");
  men.value = response.data.filter((e) => {
    return e.category == "Men";
  });
  women.value = response.data.filter((e) => {
    return e.category == "Women";
  });
  kids.value = response.data.filter((e) => {
    return e.category == "Kids";
  });
});

let coverData = ref([
  {
    img: "/src/assets/images/baner-right-image-01.jpg",
    title: "Women",
    desc: "Discover Best Clothes For Women",
  },
  {
    img: "/src/assets/images/baner-right-image-02.jpg",
    title: "Men",
    desc: "Discover Best Clothes For Men",
  },
  {
    img: "/src/assets/images/baner-right-image-04.jpg",
    title: "Shoes",
    desc: "Discover Best Selling Shoes",
  },
  {
    img: "/src/assets/images/baner-right-image-03.jpg",
    title: "Kids",
    desc: "Discover Best Clothes For Kids",
  },
]);

let sliders = ref([
  {
    title: "Men's Latest",
    desc: "Details to details is what makes Hexashop different from the other themes.",
    data: men,
  },
  {
    title: "Women's Latest",
    desc: "Details to details is what makes Hexashop different from the other themes.",
    data: women,
  },
  {
    title: "Kids's Latest",
    desc: "Details to details is what makes Hexashop different from the other themes.",
    data: kids,
  },
]);
</script>

<template>
  <div>
    <Cover :coverData="coverData" />
  </div>

  <div class="py-20" v-for="(item, index) in sliders" :key="index">
    <ProductSlider :sliderData="item" />
    <hr class="mt-20" />
  </div>

  <div class="py-20 flex justify-center px-10 lg:px-0">
    <div class="flex justify-center items-center flex-col lg:flex-row mb-10">
      <div
        class="lg:w-1/3 flex flex-col justify-center items-center lg:items-start gap-10 h-full lg:mx-0"
      >
        <div>
          <h1
            class="text-[#2a2a2a] font-bold text-5xl lg:text-[34px] text-center lg:text-left mb-5 lg:mb-12"
          >
            Explore Our Products
          </h1>
          <p class="italic text-[#a1a1a1] text-[14px] lg:w-5/6">
            You are allowed to use this HexaShop HTML CSS template. You can feel
            free to modify or edit this layout. You can convert this template as
            any kind of ecommerce CMS theme as you wish.
          </p>
        </div>
        <div class="flex justify-start items-center lg:w-5/6">
          <img
            src="../assets/images/quote.png"
            alt="img"
            class="w-[8rem] ms-[-2rem]"
          />
          <p class="italic text-[#a1a1a1] text-[14px]">
            You are not allowed to redistribute this template ZIP file on any
            other website.
          </p>
        </div>
        <div class="flex flex-col items-start gap-10">
          <p class="italic text-[#a1a1a1] text-[14px] lg:w-5/6">
            You are allowed to use this HexaShop HTML CSS template. You can feel
            free to modify or edit this layout. You can convert this template as
            any kind of ecommerce CMS theme as you wish.
          </p>
          <p class="italic text-[#a1a1a1] text-[14px] lg:w-5/6">
            You are allowed to use this HexaShop HTML CSS template. You can feel
            free to modify or edit this layout. You can convert this template as
            any kind of ecommerce CMS theme as you wish.
          </p>
          <a
            class="px-10 text-[1.5rem] py-4 text-[#2a2a2a] bg-white hover:bg-[#2a2a2a] hover:text-white transition-all duration-300 border-solid border border-[#2a2a2a]"
            href="#"
            >Discover More</a
          >
        </div>
      </div>
      <div class="lg:w-1/3 mt-16 lg:mt-0">
        <div class="grid grid-cols-2">
          <div class="flex justify-center items-center flex-col gap-3 bg-white">
            <h1 class="text-[#2a2a2a] font-bold text-3xl lg:text-[34px] mb-5">
              Leather Bags
            </h1>
            <p class="italic text-[#a1a1a1] text-xl lg:text-[14px]">
              Latest Collection
            </p>
          </div>
          <div>
            <img
              src="../assets/images/explore-image-01.jpg"
              alt="img"
              class="w-full"
            />
          </div>
          <div class="">
            <img
              src="../assets/images/explore-image-02.jpg"
              alt="img"
              class="w-full"
            />
          </div>
          <div class="flex justify-center items-center flex-col gap-3 bg-white">
            <h1 class="text-[#2a2a2a] font-bold text-3xl lg:text-[34px] mb-5">
              Leather Bags
            </h1>
            <p class="italic text-[#a1a1a1] text-xl lg:text-[14px]">
              Latest Collection
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h3,
p {
  color: #fff;
}
</style>
