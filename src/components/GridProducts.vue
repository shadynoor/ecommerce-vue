<script setup>
import store from "../store/index";

const props = defineProps(["title", "data", "pages", "current"]);

function addToCart(product) {
  let newObj = { ...product, qty: 1 };
  store.dispatch("addToCart", newObj);
}
</script>

<template>
  <div class="flex justify-center items-center flex-col mb-20">
    <div class="main-header w-full mb-20 flex justify-center items-center">
      <h1
        class="text-[2.8rem] lg:text-[5.2rem] flex justify-center items-center font-bold text-white"
      >
        {{ title }}'s Product
      </h1>
    </div>
  </div>

  <div class="flex justify-center items-center flex-col">
    <div class="w-4/6">
      <div class="flex flex-col justify-center items-center mb-10">
        <h1 class="text-[#2a2a2a] font-bold text-4xl mb-5 md:text-[34px]">
          Latest {{ title }}'s Product
        </h1>
        <p class="italic text-[#a1a1a1] text-lg md:text-[14px]">
          Check out all of our products.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div
          v-for="(product, index) in data"
          :key="index"
          class="flex items-center justify-center flex-col"
        >
          <div
            class="carousel__item flex items-center justify-center flex-col relative w-[35rem]"
            v-if="product"
          >
            <img
              v-if="product.images[0]"
              class="caro-img h-[35rem] w-auto"
              :src="product.images[0]"
              alt="img"
            />
            <div
              class="bg-gray-100 z-10 w-full flex justify-center items-center flex-col mt-5"
            >
              <div
                class="flex justify-between items-center w-5/6 font-bold text-[#2a2a2a] text-2xl lg:text-[2.4rem]"
              >
                <h3 class="text-[#2a2a2a]" :title="product.title">
                  {{ product.title.slice(0, 15) }}
                  <span v-if="product.title.length > 15">...</span>
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
                class="text-[#a1a1a1] text-xl lg:text-[18px] font-medium w-5/6 text-left mt-2 lg:mt-5"
              >
                {{ product.price }}$
              </div>
            </div>

            <div
              class="bottom-card absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500"
            >
              <div class="flex justify-center items-center gap-3">
                <router-link
                  :to="{
                    name: 'ProductDetails',
                    params: { category: product.category, id: product.id },
                  }"
                >
                  <span
                    class="bg-white text-[12px] w-20 h-20 text-black flex justify-center items-center cursor-pointer hover:invert"
                    ><img
                      class="w-6 h-auto"
                      src="../assets/images/eye.png"
                      alt="img"
                  /></span>
                </router-link>
                <span
                  class="bg-white text-[12px] w-20 h-20 text-black flex justify-center items-center cursor-pointer hover:invert"
                  ><img
                    class="w-6 h-auto"
                    src="../assets/images/star.png"
                    alt="img"
                /></span>
                <span
                  @click="addToCart(product)"
                  class="bg-white text-[12px] w-20 h-20 text-black flex justify-center items-center cursor-pointer hover:invert"
                  ><img
                    class="w-6 h-auto"
                    src="../assets/images/cart.png"
                    alt="img"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.active {
  background-color: #2a2a2a !important;
  color: white !important;
}
</style>
