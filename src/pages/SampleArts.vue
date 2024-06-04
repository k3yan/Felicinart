<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 top-0"
  >
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <h2
        class="mb-10 font-bold text-6xl text-fuchsia-200 flex justify-center italic font-dancing"
      >
        Art Samples
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
import jiji from "../assets/jiji.jpg";
import keyan from "../assets/keyan.jpg";
import fourth from "../assets/4th.png";
import akb from "../assets/akb.jpeg";
import beast from "../assets/beast.jpeg";
import cat from "../assets/cat.jpeg";
import eyes from "../assets/eyes.jpeg";
import fish from "../assets/fish.jpg";
import inoh from "../assets/inoh.jpeg";
import makima from "../assets/makima.png";
import NACHT from "../assets/NACHT .png";
import paduro from "../assets/paduro.png";
import purple from "../assets/purple.jpg";
import RIKA from "../assets/RIKA.png";
import wednesday from "../assets/wednesday.png";
import yinandyang from "../assets/yin and yang.jpg";

export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8,
      items: [
        {
          id: 1,
          src: jiji,
          altText: "jiji",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 2,
          src: keyan,
          altText: "keyan",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 3,
          src: fourth,
          altText: "4th",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 4,
          src: akb,
          altText: "akb",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 5,
          src: beast,
          altText: "beast",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 6,
          src: cat,
          altText: "cat",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 7,
          src: eyes,
          altText: "eyes",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 8,
          src: fish,
          altText: "fish",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 9,
          src: inoh,
          altText: "inoh",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 10,
          src: makima,
          altText: "makima",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 11,
          src: NACHT,
          altText: "nacht",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 12,
          src: paduro,
          altText: "paduro",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 13,
          src: purple,
          altText: "purple",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 14,
          src: RIKA,
          altText: "rika",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 15,
          src: wednesday,
          altText: "wednesday",
          title:
            "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
          description: "Lorem, ipsum dolor sit amet",
        },
        {
          id: 16,
          src: yinandyang,
          altText: "yin&yang",
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
