<template>
  <v-app>
    <v-app-bar app color="#2C1E33">
      <v-img
        src="./assets/Lazy-PDF-icon.png"
        max-height="40"
        max-width="40"
        contain
      />
      <v-spacer />
      <v-btn
        v-for="link in links"
        :key="`${link.label}--page-link`"
        class="my-2 mx-1"
        text
        rounded
        :to="link.url"
      >
        <v-text class="font-weight-medium">
          {{ link.label }}
        </v-text>
      </v-btn>
      <v-btn
        class="my-2 mx-1"
        text
        rounded
        :href="`${url}`"
      >
        <v-text class="font-weight-medium">Download</v-text>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-responsive width="900px">
        <router-view />
      </v-responsive>
    </v-content>
    <v-footer app color="#2C1E33">
      <v-col cols="12">
        <strong>
          Made with
          <v-icon>mdi-vuejs</v-icon>&nbsp;in London.
        </strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "About",
          url: "/"
        }
      ],
      url: "https://res.cloudinary.com/kejk/raw/upload/v1587568180/Lazy%20PDF%20-%20V1.1.zip" 
    };
  }
};
</script>