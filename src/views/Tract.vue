<template>
  <div class="main">
    <Gallery :list="list" close />
    <Back @back="$router.go(-1)" bottom />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Back from "@/components/UI/Back.vue";

export default {
  name: "Tract",
  data() {
    return {
      list: [
        {
          id: 9,
          path: require("@/assets/tereshkova/9.jpeg"),
        },
        {
          id: 1,
          path: require("@/assets/tereshkova/1.jpeg"),
        },
        {
          id: 2,
          path: require("@/assets/tereshkova/2.jpeg"),
        },
        {
          id: 3,
          path: require("@/assets/tereshkova/3.jpeg"),
        },
        {
          id: 4,
          path: require("@/assets/tereshkova/4.jpeg"),
        },
        {
          id: 5,
          path: require("@/assets/tereshkova/5.jpeg"),
        },
        {
          id: 6,
          path: require("@/assets/tereshkova/6.jpeg"),
        },
        {
          id: 7,
          path: require("@/assets/tereshkova/7.jpeg"),
        },
        {
          id: 8,
          path: require("@/assets/tereshkova/8.jpeg"),
        },
      ],
    };
  },
  methods: {},
  components: { Back, Gallery },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0;
}
</style>
