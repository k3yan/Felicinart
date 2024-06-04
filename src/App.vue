<script setup>
import navbar from "./components/navbar.vue";
import foooter from "./components/footer.vue";
</script>

<template>
  <!-- Screen -->
  <div class="relative h-screen bg-purple-100 overflow-hidden">
    <!-- Blurred Background -->
    <div class="absolute inset-0 bg-center bg-cover filter blur-sm">
      <img src="./assets/me.jpg" class="h-screen w-screen absolute" />
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full w-full overflow-y-scroll">
      <div class="w-full flex justify-center">
        <navbar />
      </div>
      <!-- Router View -->
      <div class="w-full mt-10">
        <router-view />
      </div>
      <div class="">
        <foooter />
      </div>
    </div>
  </div>
</template>
