<template>
  <div class="h-full w-full">
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "bg-white dark:bg-black",
      },
    };
  },
};
</script>