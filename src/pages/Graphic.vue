<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-0"
  >
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <h2
        class="mb-10 font-bold text-6xl text-fuchsia-200 flex justify-center italic font-dancing"
      >
        Graphical Design
      </h2>
      <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div
          v-for="item in paginatedItems"
          :key="item.id"
          class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
        >
          <a
            href=""
            class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </a>
          <div class="h-auto overflow-hidden">
            <div class="h-[20rem] overflow-hidden relative">
              <img :src="item.src" :alt="item.altText" />
            </div>
          </div>
          <div class="bg-white py-6 px-3">
            <h3 class="text-xs mb-2 font-medium">
              {{ item.title }}
            </h3>
            <div class="flex justify-between items-center">
              <p class="text-xs text-gray-400">{{ item.description }}</p>
              <div class="relative z-40 flex items-center gap-2"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="mx-2 px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
          :class="{ 'bg-gray-100': pageNumber === currentPage }"
          @click="currentPage = pageNumber"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import pubmats from "../assets/pubmats.png";
import bridge from "../assets/bridge.png";
import blast from "../assets/blast.png";
import drag from "../assets/drag.png";
import dragkwen from "../assets/dragkwen.png";
import final from "../assets/final.png";
import main from "../assets/main.png";
import quiz from "../assets/quiz.png";

export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8,
      items: [
        {
          id: 1,
          src: pubmats,
          altText: "pub",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 2,
          src: bridge,
          altText: "bridge",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 3,
          src: blast,
          altText: "blast",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 4,
          src: drag,
          altText: "drag",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 5,
          src: dragkwen,
          altText: "drag queen",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 6,
          src: final,
          altText: "final",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 7,
          src: main,
          altText: "main",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 8,
          src: quiz,
          altText: "quiz bowl",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },
  },
  methods: {
    getImageUrl(imagePath) {
      return imagePath;
    },
  },
};
</script>
