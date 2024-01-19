<template>
  <div class="bg-gray-100 h-full">
    <navbar />
    <main>
      <router-view />
    </main>
    <!-- <BottomNav /> -->
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
// import BottomNav from "./BottomNav.vue";
</script>
