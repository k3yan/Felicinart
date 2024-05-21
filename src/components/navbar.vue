<template>
  <div>
    <div class="mt-4">
      <!--Navbar-->
      <nav
        class="bg-fuchsia-300 shadow-md dark:bg-purple-400 rounded-lg flex justify-center sticky top-0"
      >
        <div
          class="container flex items-center justify-center p-5 mx-auto text-gray-600 capitalize dark:text-gray-100"
        >
          <!--Routing-->
          <router-link to="/">
            <button
              class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-purple-100 mx-1.5 sm:mx-6"
            >
              Home
            </button>
          </router-link>
          <router-link to="/Arts">
            <button
              class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-purple-100 mx-1.5 sm:mx-6"
            >
              Arts
            </button>
          </router-link>
          <router-link to="/Graphic">
            <button
              class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-purple-100 mx-1.5 sm:mx-6"
            >
              Graphic Designs
            </button>
          </router-link>
          <router-link to="/Pricing">
            <button
              href="#"
              class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-purple-100 mx-1.5 sm:mx-6"
            >
              Pricing
            </button>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script></script>
