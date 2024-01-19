<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, onUpdated } from "vue";
import axiosClient from "../Axios.js";
import GridProducts from "../components/GridProducts.vue";

const router = useRouter();
let title = router.currentRoute.value.name;
const data = ref([]);
let numberOfPages = 0;
let current = 1;
let newArr = {};
let currentData = ref([]);

onMounted(async () => {
  getData();
});

async function getData() {
  const response = await axiosClient.get("products.json");
  data.value = await response.data;
  numberOfPages = data.value.length / 5;
  Object.assign(newArr, {
    page1: data.value.slice(0, 5),
    page2: data.value.slice(5, 10),
    page3: data.value.slice(10, 15),
  });
  currentData.value = newArr.page1;
}

function changePage(page) {
  current = page;
  currentData.value = newArr["page" + page];
}
</script>

<template>
  <GridProducts :title="title" :data="currentData" />

  <div class="pagination flex justify-center items-center gap-5 p-64">
    <span
      class="text-[#2a2a2a] text-[1.4rem] w-0 h-0 p-8 border border-[#2a2a2a] flex justify-center items-center cursor-pointer hover:bg-[#2a2a2a] hover:text-white"
      v-for="(page, index) in numberOfPages"
      :key="index"
      :class="{ active: current == page }"
      @click="changePage(page)"
    >
      {{ page }}</span
    >
  </div>
</template>

<style scoped>
.main-header {
  background-image: url("../assets/images/products-page-heading.jpg");
  height: 50rem;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.active {
  background-color: #2a2a2a !important;
  color: white !important;
}
</style>
