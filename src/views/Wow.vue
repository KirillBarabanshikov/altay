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
  name: "Wow",
  data() {
    return {
      list: [
        {
          id: 16,
          path: require("@/assets/wow/16.png"),
        },
        {
          id: 1,
          path: require("@/assets/wow/1.png"),
        },
        {
          id: 2,
          path: require("@/assets/wow/2.png"),
        },
        {
          id: 3,
          path: require("@/assets/wow/3.png"),
        },
        {
          id: 4,
          path: require("@/assets/wow/4.png"),
        },
        {
          id: 5,
          path: require("@/assets/wow/5.png"),
        },
        {
          id: 6,
          path: require("@/assets/wow/6.png"),
        },
        {
          id: 7,
          path: require("@/assets/wow/7.png"),
        },
        {
          id: 8,
          path: require("@/assets/wow/8.png"),
        },
        {
          id: 9,
          path: require("@/assets/wow/9.png"),
        },
        {
          id: 10,
          path: require("@/assets/wow/10.png"),
        },
        {
          id: 11,
          path: require("@/assets/wow/11.png"),
        },
        {
          id: 12,
          path: require("@/assets/wow/12.png"),
        },
        {
          id: 13,
          path: require("@/assets/wow/13.png"),
        },
        {
          id: 14,
          path: require("@/assets/wow/14.png"),
        },
        {
          id: 15,
          path: require("@/assets/wow/15.png"),
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
