<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-0"
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-[20rem]"
    >
      <!-- Replace this with your grid items -->
      <div class="bg-fuchsia-200 rounded-lg border p-4 dark:bg-purple-300">
        <img
          src="../assets/jiji.jpg"
          alt="Placeholder Image"
          class="w-full h-[20rem] rounded-md object-cover"
        />
        <div class="px-1 py-4">
          <div class="font-bold text-xl mb-2">Sample Arts</div>
          <p class="text-gray-700 text-base">
            Contains all my Arts that I created chuchc
          </p>
        </div>
        <div class="px-1 py-4">
          <router-link to="/SampleArts"
            ><a class="text-blue-500 hover:underline"
              >More Samples</a
            ></router-link
          >
        </div>
      </div>
      <div class="bg-fuchsia-200 rounded-lg border p-4 dark:bg-purple-300">
        <img
          src="../assets//liceo.png"
          alt="Placeholder Image"
          class="w-full h-[20rem] rounded-md object-cover"
        />
        <div class="px-1 py-4">
          <div class="font-bold text-xl mb-2">Character Design</div>
          <p class="text-gray-700 text-base">
            This is a simple blog card example using Tailwind CSS. You can
            replace this text with your own blog content.
          </p>
        </div>
        <div class="px-1 py-4">
          <router-link to="/CharacterDesign">
            <a class="text-blue-500 hover:underline">More Samples</a>
          </router-link>
        </div>
      </div>
      <div class="bg-fuchsia-200 rounded-lg border p-4 dark:bg-purple-300">
        <img
          src="https://placehold.co/300x200/d1d4ff/352cb5.png"
          alt="Placeholder Image"
          class="w-full h-[20rem] rounded-md object-cover"
        />
        <div class="px-1 py-4">
          <div class="font-bold text-xl mb-2">Stickers</div>
          <p class="text-gray-700 text-base">
            This is a simple blog card example using Tailwind CSS. You can
            replace this text with your own blog content.
          </p>
        </div>
        <div class="px-1 py-4">
          <router-link to="/Stickers">
            <a href="#" class="text-blue-500 hover:underline">More Samples</a>
          </router-link>
        </div>
      </div>
      <!-- Add more items as needed -->
    </div>
  </div>
</template>

<script></script>
