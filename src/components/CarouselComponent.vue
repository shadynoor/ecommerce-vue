<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import store from "../store";

const props = defineProps(["products"]);

const vuex = store;

let items = 3;

if (window.innerWidth < 1024) {
  items = 2;
}

if (window.innerWidth < 768) {
  items = 1;
}

function addToCart(product) {
  // console.log(store.state.cart);
  console.log(vuex.actions);
  // store.state.cart.push(product);
  // store.methods.addToCart();
  // localStorage.setItem("myCart", JSON.stringify(store.state.cart));
}
</script>

<template>
  <!-- <pre>{{ products }}</pre> -->
  <div class="flex justify-center w-full">
    <div class="w-4/6" v-if="products">
      <Carousel :items-to-show="items" :wrap-around="true">
        <Slide v-for="(product, index) in products" :key="product">
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
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<style>
.carousel__next,
.carousel__prev {
  border: 1px solid #000;
  width: 3rem;
  height: 3rem;
  opacity: 0.5;
  transition: 0.3s;
}

.carousel__next:hover,
.carousel__prev:hover {
  opacity: 1;
  color: #000;
}

.carousel__prev {
  left: -4rem;
}
.carousel__next {
  right: -4rem;
}

.carousel__item:hover .bottom-card {
  bottom: 10rem !important;
}
</style>
