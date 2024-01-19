<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, onUpdated } from "vue";
import axiosClient from "../Axios.js";
import CarouselComponent from "../components/CarouselComponent.vue";
import store from "../store/index";

const router = useRouter();
const id = router.currentRoute.value.params.id;
let productInfo = ref();
let mainImg = ref("");
let qty = ref(1);
let category = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("products.json");
  productInfo.value = await response.data.find((e) => {
    mainImg.value = e.images[0];
    return e.id == id;
  });

  category.value = await response.data.filter((e) => {
    if (e.category == productInfo.category) {
      return e;
    }
  });
});

function addToCart() {
  let newObj = { ...productInfo.value, qty: qty.value };
  this.store.dispatch("addToCart", newObj);
}

function setImg(img) {
  mainImg.value = img;
}
</script>

<template>
  <div
    class="flex justify-center items-center flex-col mb-20"
    v-if="productInfo"
  >
    <div class="main-header w-full mb-20 flex justify-center items-center">
      <h1
        class="text-[5.2rem] flex justify-center items-center font-bold text-white"
      >
        {{ productInfo.category }}'s Product
      </h1>
    </div>
    <div class="container">
      <div class="flex justify-center items-start flex-wrap">
        <div class="flex flex-col justify-center items-center lg:w-[40%]">
          <div class="main-img" v-if="mainImg">
            <img :src="mainImg" alt="" class="h-[50rem] w-auto" />
          </div>
          <div class="flex justify-center items-center gap-3">
            <div
              v-for="(img, index) in productInfo.images"
              :key="index"
              @click="setImg(img)"
            >
              <img :src="img" alt="img" class="max-h-[100px] w-auto" />
            </div>
          </div>
        </div>
        <div class="lg:w-[40%] flex flex-col justify-start mt-20 gap-20 px-10">
          <div>
            <div
              class="flex justify-between items-center w-full font-bold text-[#2a2a2a] text-[2.4rem]"
            >
              <h3 class="text-[#2a2a2a]" :title="productInfo.title">
                {{ productInfo.title }}
              </h3>
              <span
                class="bg-white text-[12px] text-black flex justify-center items-center"
                ><img
                  class="w-5 h-auto"
                  src="../assets/images/star.png"
                  alt="img"
                />
                <img
                  class="w-5 h-auto"
                  src="../assets/images/star.png"
                  alt="img"
                />
                <img
                  class="w-5 h-auto"
                  src="../assets/images/star.png"
                  alt="img"
                />
                <img
                  class="w-5 h-auto"
                  src="../assets/images/star.png"
                  alt="img"
                />
                <img
                  class="w-5 h-auto"
                  src="../assets/images/star.png"
                  alt="img"
                />
              </span>
            </div>
            <div
              class="text-[#a1a1a1] text-[18px] font-medium w-full text-left"
            >
              {{ productInfo.price }}$
            </div>
          </div>
          <div class="mt-5">
            <p class="text-[#a1a1a1] text-[16px] font-medium w-full text-left">
              {{ productInfo.description }}
            </p>
          </div>

          <div class="flex justify-between items-center">
            <h3 class="font-bold text-[#a1a1a1] text-[2.2rem]">
              No. of Orders
            </h3>
            <div class="flex justify-center items-center text-[1.8rem]">
              <span
                class="hover:bg-[#a1a1a1] border border-[#a1a1a1] h-[2.8rem] w-[2.8rem] flex justify-center items-center cursor-pointer"
                @click="qty > 1 ? qty-- : false"
                >-</span
              >
              <span
                class="border border-[#a1a1a1] h-[2.8rem] w-[2.8rem] flex justify-center items-center"
                >{{ qty }}</span
              >
              <span
                class="hover:bg-[#a1a1a1] border border-[#a1a1a1] h-[2.8rem] w-[2.8rem] flex justify-center items-center cursor-pointer"
                @click="qty++"
                >+</span
              >
            </div>
          </div>

          <div class="flex justify-between items-center">
            <h3 class="font-bold text-[#a1a1a1] text-[2.2rem]">
              Total: ${{ qty * productInfo.price }}
            </h3>
            <div class="flex justify-center items-center text-[1.8rem]">
              <button
                class="px-10 text-[1.5rem] py-4 text-[#2a2a2a] bg-white hover:bg-[#2a2a2a] hover:text-white transition-all duration-300 border-solid border border-[#2a2a2a]"
                href="#"
                @click="addToCart()"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <CarouselComponent></CarouselComponent>
    </div>
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
</style>
