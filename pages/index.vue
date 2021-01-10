<template>
  <div class="relative mx-auto">
    <Nav class="dark:border-b-2 dark:border-gray-200" />
    <div class="max-w-5xl mx-auto px-4">
      <div>
        <div class="flex flex-col">
          <h1
            class="text-5xl text-gray-900 dark:text-gray-50 font-black mb-3 mt-20"
            aria-label="Lazy PDF product"
          >
            Lazy PDF
          </h1>
          <div class="flex flex-col md:flex-row items-center justify-between">
            <h2 class="text-2xl text-gray-900 dark:text-gray-50">
              Effortless and interfaceless PDF creation.
            </h2>
          </div>
          <div>
            <img
              :src="`${hero}`"
              class="mt-10 rounded-2xl"
              alt="image of Lazy PDF app in use"
            />
          </div>
        </div>
      </div>
      <div class="py-4">
        <div>
          <div class="space-y-4 mt-8 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Simple and invisible
            </h3>
            <p class="text-gray-700 dark:text-gray-400">
              Effortlessly create a PDF from a set of selected images through an
              interfaceless system with only the Finder selection UI.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-center md:justify-start">
            <a :href="`${download.url}`">
              <button
                class="flex justify-center items-center text-center font-medium w-full md:w-min rounded-lg px-6 py-3 transition duration-500 ease focus:outline-none focus:ring-2 focus:ring-white bg-purple-900 hover:bg-purple-700 text-purple-100"
              >
                <download-icon
                  size="1x"
                  class="inline-block mr-4 text-purple-100"
                />
                {{ download.text }}
              </button>
            </a>
          </div>
          <Divider />
          <div class="space-y-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Grab and go
            </h3>
            <p class="text-gray-700 dark:text-gray-400">
              Lazy PDF is deliberately designed to be simple and have a low
              overhead, to make it easier to grab a set of design files and
              throw them together into a PDF.
            </p>
            <img
              class="rounded-2xl"
              src="https://res.cloudinary.com/kejk/image/upload/v1585993877/Picking_selection_ckdioy.png"
            />
          </div>
          <Divider />
          <div class="space-y-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-50">
              On your terms
            </h3>
            <p class="text-gray-700 dark:text-gray-400">
              Your logical file order is always respected, so number your files
              if you want to order in sequence, otherwise, move them around
              afterwards in any PDF viewer.
            </p>
            <img
              class="rounded-2xl"
              src="https://res.cloudinary.com/kejk/image/upload/v1587570775/Frame_10_zub1ud.png"
            />
          </div>
          <Divider />
          <div class="space-y-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Lossless
            </h3>
            <p class="text-gray-700 dark:text-gray-400">
              Respecting your image sizes, Lazy PDF doesn't try to compress
              everything to printable sizes, ideal for sharing work with
              teammates and management.
            </p>
            <img
              class="rounded-2xl"
              src="https://res.cloudinary.com/kejk/image/upload/v1585993878/Rendered_PDF_zpdrza.png"
            />
          </div>
          <Divider />
          <div class="space-y-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Better than native
            </h3>
            <p class="text-gray-700 dark:text-gray-400">
              macOS' native 1-click PDF creation (left) pushes all files into a
              printable page collection, Lazy PDF (right) leaves your images
              alone. Perfect for long design files such as mobile layouts, or
              ultrawide files when visualising a 21:9 video concept.
            </p>
            <img
              class="rounded-2xl"
              src="https://res.cloudinary.com/kejk/image/upload/v1586353512/Apple_versus_Lazy_mhp5ey.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DownloadIcon } from "vue-feather-icons";

export default {
  name: "App",
  components: {
    DownloadIcon,
  },
  data() {
    return {
      download: {
        url:
          "https://res.cloudinary.com/kejk/raw/upload/v1587568180/Lazy%20PDF%20-%20V1.1.zip",
        text: "Download",
      },
      hero:
        "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",
    };
  },
};
</script>
