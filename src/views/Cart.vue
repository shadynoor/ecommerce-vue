<script setup>
import { onMounted, ref } from "vue";
import store from "../store/index";

let cart = ref([]);
let sum = ref(0);

onMounted(() => {
  cart.value = store.state.cart || [];
  total();
});

function total() {
  if (cart.value.length > 1) {
    sum.value = cart.value.reduce((acc, curr) => {
      if (acc && curr) {
        if (typeof acc == "number") {
          return acc + curr.price * curr.qty;
        } else {
          return acc.price * acc.qty + curr.price * curr.qty;
        }
      }
    });
  }
  if (cart.value.length == 1) {
    sum.value = cart.value[0].qty * cart.value[0].price;
  }
}

function updateCart() {
  total();
  store.dispatch("updateCart", cart.value);
}

function removeFromCart(id) {
  store.dispatch("removeFromCart", id);
  cart.value = cart.value.filter((e) => {
    return e.id != id;
  });
  total();
  // store.dispatch("updateCart", cart.value);
  // total();
}
</script>

<template>
  <div
    class="flex justify-center items-center flex-col mt-10 px-10 lg:px-0 lg:w-1/3 relative m-auto py-20"
  >
    <h1 class="text-[54px] font-bold">My Cart</h1>
    <div
      class="card-row w-full mt-5 lg:flex justify-center items-center gap-10"
      v-for="(product, index) in cart"
      :key="index"
    >
      <div class="lg:w-1/4">
        <img :src="product.images[0]" alt="" />
      </div>
      <div class="w-full">
        <div class="details flex justify-between items-center">
          <h3 class="text-[#2a2a2a] text-[22px]">{{ product.title }}</h3>
          <h3 class="text-[#2a2a2a] text-[22px]">
            {{ product.qty }} x {{ product.price }}$
          </h3>
        </div>
        <div class="flex justify-between items-center mt-5">
          <div class="flex justify-center items-center text-[1.8rem]">
            <span
              class="hover:bg-[#a1a1a1] border border-[#a1a1a1] h-[2.8rem] w-[2.8rem] flex justify-center items-center cursor-pointer"
              @click="product.qty > 1 ? (product.qty--, updateCart()) : false"
              >-</span
            >
            <span
              class="border border-[#a1a1a1] h-[2.8rem] w-[2.8rem] flex justify-center items-center"
              >{{ product.qty }}</span
            >
            <span
              class="hover:bg-[#a1a1a1] border border-[#a1a1a1] h-[2.8rem] w-[2.8rem] flex justify-center items-center cursor-pointer"
              @click="
                product.qty++;
                updateCart();
              "
              >+</span
            >
          </div>
          <button
            @click="removeFromCart(product.id)"
            class="text-[16px] text-[rgb(79,70,229)]"
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </div>
    <hr />
    <h1
      class="absolute bottom-0 right-0 text-[#2a2a2a] text-[22px]"
      v-if="cart.length > 0"
    >
      Total: {{ sum }}$
    </h1>
  </div>
</template>
