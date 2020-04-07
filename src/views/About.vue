<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1 
          class="display-2 font-weight-black mb-3 mt-10" 
          aria-label="Lazy PDF product"
        >
          Lazy PDF
        </h1>
        <h2
          class="display font-weight-medium mb-3 mt-3" style="line-height: 1.4rem"
          aria-label="Karl's posts"
        >
          Effortless and interfaceless PDF creation.
        </h2>
        <v-img
          :src="`${hero}`"
          class="mt-10 img"
          alt="image of Lazy PDF app in use"
        />
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12" sm="6">
        <a 
          href="https://www.producthunt.com/posts/lazy-pdf?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lazy-pdf" 
          target="_blank"
          class="my-2 mx-1 v-btn v-btn--contained"
        >
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=191366&theme=light" 
            alt="Lazy PDF - Effortless and interfaceless PDF creation | Product Hunt Embed" 
            style="width: 250px; height: 54px;" 
            width="250px" 
            height="54px" 
          >
        </a>
      </v-col>
      <v-spacer />
      <v-col 
        cols="12" sm="6" 
        class="text-right">
        <v-btn
          class="my-2 mx-1"
          width="250px"
          height="55px"
          color="#fff"
          style="border-radius: 10px;"
          light
          href="https://res.cloudinary.com/kejk/raw/upload/v1585911201/Lazy_PDF.zip"
        >
          <v-text class="font-weight-bold title">
            Download
            <v-icon class="ml-4">
              mdi-download
            </v-icon>
          </v-text>
        </v-btn> 
      </v-col>
      <v-col cols="12">
        <h3 class="mb-3 display-1 font-weight-black">
          Simple and invisible
        </h3>
        <p
          class="body-1"
        >
        Effortlessly create a PDF from a set of selected images through an interfaceless system with only the Finder selection UI.
        </p>
        <h3 class="mb-3 display-1 font-weight-black">
          Grab and go
        </h3>
        <p
          class="body-1"
        >
        Lazy PDF is deliberately designed to be simple and have a low overhead, to make it easier to grab a set of design files and throw them together into a PDF. 
        </p>
        <h3 class="mb-3 display-1 font-weight-black">
          On your terms
        </h3>
        <p
          class="body-1"
        >
        Your logical file order is always respected, so number your files if you want to order in sequence, otherwise, move them around afterwards in any PDF viewer. 
        </p>
        <h3 class="mb-3 display-1 font-weight-black">
          Compressless
        </h3>
        <p
          class="body-1"
        >
        Respecting your image sizes, Lazy PDF doesn't try to compress everything to printable sizes, ideal for sharing work with teammates and management.
        </p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col v-for="image in images" :key="`${image.id}`" cols="12">
        <v-img :src="`${image.img}`" class="img" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import lazyPDF from "./../data/lazyPDF.json";

export default {
  name: "LazyPDF",
  data() {
    return {
      images: lazyPDF,
      hero: "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",
      url: "https://res.cloudinary.com/kejk/raw/upload/v1585911201/Lazy_PDF.zip"
    };
  }
};
</script>
