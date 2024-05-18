<script setup>
import navbar from "./components/navbar.vue";
</script>

<template>
  <!--Screen-->
  <div
    class="h-screen bg-purple-100 over overflow-hidden bg-center"
    style="background-image: url('/src/assets/me.jpg')"
  >
    <div class="w-full flex justify-center">
      <navbar />
    </div>
    <!--Router View-->
    <div class="w-full mt-10">
      <router-view />
    </div>
  </div>
</template>
