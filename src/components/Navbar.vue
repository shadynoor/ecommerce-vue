<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../Axios";
import store from "../store/index";

let categories = ref([]);
let showMenu = ref(false);

onMounted(async () => {
  const response = await axiosClient.get("categories.json");
  categories.value = response.data;
});

function swap() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <header
    class="h-32 shadow-md bg-white flex justify-evenly items-center px-5 relative"
  >
    <div class="brand">
      <router-link :to="{ name: 'home' }">
        <img src="../assets/images/logo.png" alt="img"
      /></router-link>
    </div>
    <ul class="hidden justify-center items-center gap-5 h-full lg:flex">
      <li
        class="text-[1.5rem] font-semibold transition-all duration-300 hover:text-[#aaa] text-[#2a2a2a] px-[1.5rem]"
      >
        <router-link :to="{ name: 'home' }" exact-active-class="active"
          >Home</router-link
        >
      </li>
      <li
        class="h-full flex justify-center items-center px-[1.5rem] text-[1.5rem] font-semibold transition-all duration-300 hover:text-[#aaa] text-[#2a2a2a]"
        v-for="(nav, index) in categories.categories"
        :key="index"
      >
        <router-link :to="{ name: nav }" exact-active-class="active">{{
          nav
        }}</router-link>
      </li>
    </ul>

    <div class="user flex items-center justify-end w-full lg:w-auto lg:block">
      <span
        class="text-[1.5rem] font-semibold transition-all duration-300 hover:text-[#aaa] text-[#2a2a2a] px-[1.5rem]"
      >
        <router-link :to="{ name: 'cart' }" exact-active-class="active"
          >Cart({{ store.state.cartLength }})</router-link
        >
      </span>

      <span @click="swap()" class="lg:hidden">
        <svg
          class="text-gray-800 w-[20px] h-[20px] ms-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </span>
      <!-- <span>profile</span> -->
    </div>

    <div
      class="responsive absolute left-0 bg-white w-full h-[25vh] z-10 py-5 lg:hidden"
      :class="[showMenu ? 'top-32' : 'top-[-40vh]']"
    >
      <ul class="flex justify-center items-center gap-5 h-full flex-col">
        <li
          class="text-[1.5rem] font-semibold transition-all duration-300 hover:text-[#aaa] text-[#2a2a2a] px-[1.5rem]"
        >
          <router-link :to="{ name: 'home' }" exact-active-class="active"
            >Home</router-link
          >
        </li>
        <li
          class="h-full flex justify-center items-center px-[1.5rem] text-[1.5rem] font-semibold transition-all duration-300 hover:text-[#aaa] text-[#2a2a2a]"
          v-for="(nav, index) in categories.categories"
          :key="index"
        >
          <router-link :to="{ name: nav }" exact-active-class="active">{{
            nav
          }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
