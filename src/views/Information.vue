<template>
  <div class="main">
    <div class="title">Общая информация</div>
    <div class="grid">
      <div
        v-for="btn in buttons"
        class="item scaleIn"
        :key="btn.id"
        @click="openGallery(btn.name)"
      >
        <img :src="btn.src" alt="" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="show" class="season-gallery">
        <Gallery @close="show = false" :list="list" />
      </div>
    </transition>
    <Back @back="$router.go(-1)" bottom />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Back from "@/components/UI/Back.vue";

export default {
  name: "Information",
  components: { Back, Gallery },
  data() {
    return {
      show: false,
      buttons: [
        {
          id: 1,
          name: "all",
          src: require("@/assets/information/banners/all.png"),
        },
        {
          id: 2,
          name: "map",
          src: require("@/assets/information/banners/map.png"),
        },
        {
          id: 3,
          name: "road",
          src: require("@/assets/information/banners/road.jpeg"),
        },
      ],
      allPhotos: {
        all: [
          {
            id: 24,
            path: require("@/assets/information/all/24.jpeg"),
          },
          {
            id: 1,
            path: require("@/assets/information/all/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/information/all/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/information/all/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/information/all/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/information/all/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/information/all/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/information/all/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/information/all/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/information/all/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/information/all/10.jpeg"),
          },
          {
            id: 11,
            path: require("@/assets/information/all/11.jpeg"),
          },
          {
            id: 12,
            path: require("@/assets/information/all/12.jpeg"),
          },
          {
            id: 13,
            path: require("@/assets/information/all/13.jpeg"),
          },
          {
            id: 14,
            path: require("@/assets/information/all/14.jpeg"),
          },
          {
            id: 15,
            path: require("@/assets/information/all/15.jpeg"),
          },
          {
            id: 16,
            path: require("@/assets/information/all/16.jpeg"),
          },
          {
            id: 17,
            path: require("@/assets/information/all/17.jpeg"),
          },
          {
            id: 18,
            path: require("@/assets/information/all/18.jpeg"),
          },
          {
            id: 19,
            path: require("@/assets/information/all/19.jpeg"),
          },
          {
            id: 20,
            path: require("@/assets/information/all/20.jpeg"),
          },
          {
            id: 21,
            path: require("@/assets/information/all/21.jpeg"),
          },
          {
            id: 22,
            path: require("@/assets/information/all/22.jpeg"),
          },
          {
            id: 23,
            path: require("@/assets/information/all/23.jpeg"),
          },
        ],
        map: [
          {
            id: 1,
            path: require("@/assets/information/map/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/information/map/2.jpeg"),
          },
        ],
        road: [
          {
            id: 1,
            path: require("@/assets/information/road/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/information/road/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/information/road/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/information/road/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/information/road/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/information/road/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/information/road/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/information/road/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/information/road/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/information/road/10.jpeg"),
          },
          {
            id: 11,
            path: require("@/assets/information/road/11.jpeg"),
          },
          {
            id: 12,
            path: require("@/assets/information/road/12.jpeg"),
          },
          {
            id: 13,
            path: require("@/assets/information/road/13.jpeg"),
          },
          {
            id: 14,
            path: require("@/assets/information/road/14.jpeg"),
          },
          {
            id: 15,
            path: require("@/assets/information/road/15.jpeg"),
          },
          {
            id: 16,
            path: require("@/assets/information/road/16.jpeg"),
          },
          {
            id: 17,
            path: require("@/assets/information/road/17.jpeg"),
          },
          {
            id: 18,
            path: require("@/assets/information/road/18.jpeg"),
          },
          {
            id: 19,
            path: require("@/assets/information/road/19.jpeg"),
          },
          {
            id: 20,
            path: require("@/assets/information/road/20.jpeg"),
          },
          {
            id: 21,
            path: require("@/assets/information/road/21.jpeg"),
          },
          {
            id: 22,
            path: require("@/assets/information/road/22.jpeg"),
          },
          {
            id: 23,
            path: require("@/assets/information/road/23.jpeg"),
          },
          {
            id: 24,
            path: require("@/assets/information/road/24.jpeg"),
          },
          {
            id: 25,
            path: require("@/assets/information/road/25.jpeg"),
          },
          {
            id: 26,
            path: require("@/assets/information/road/26.jpeg"),
          },
          {
            id: 27,
            path: require("@/assets/information/road/27.jpeg"),
          },
          {
            id: 28,
            path: require("@/assets/information/road/28.jpeg"),
          },
          {
            id: 29,
            path: require("@/assets/information/road/29.jpeg"),
          },
          {
            id: 30,
            path: require("@/assets/information/road/30.jpeg"),
          },
          {
            id: 31,
            path: require("@/assets/information/road/31.jpeg"),
          },
          {
            id: 32,
            path: require("@/assets/information/road/32.jpeg"),
          },
          {
            id: 33,
            path: require("@/assets/information/road/33.jpeg"),
          },
          {
            id: 34,
            path: require("@/assets/information/road/34.jpeg"),
          },
          {
            id: 35,
            path: require("@/assets/information/road/35.jpeg"),
          },
          {
            id: 36,
            path: require("@/assets/information/road/36.jpeg"),
          },
          {
            id: 37,
            path: require("@/assets/information/road/37.jpeg"),
          },
          {
            id: 38,
            path: require("@/assets/information/road/38.jpeg"),
          },
          {
            id: 39,
            path: require("@/assets/information/road/39.jpeg"),
          },
          {
            id: 40,
            path: require("@/assets/information/road/40.jpeg"),
          },
          {
            id: 41,
            path: require("@/assets/information/road/41.jpeg"),
          },
          {
            id: 42,
            path: require("@/assets/information/road/42.jpeg"),
          },
          {
            id: 43,
            path: require("@/assets/information/road/43.jpeg"),
          },
          {
            id: 44,
            path: require("@/assets/information/road/44.jpeg"),
          },
          {
            id: 45,
            path: require("@/assets/information/road/45.jpeg"),
          },
          {
            id: 46,
            path: require("@/assets/information/road/46.jpeg"),
          },
          {
            id: 47,
            path: require("@/assets/information/road/47.jpeg"),
          },
          {
            id: 48,
            path: require("@/assets/information/road/48.jpeg"),
          },
          {
            id: 49,
            path: require("@/assets/information/road/49.jpeg"),
          },
          {
            id: 50,
            path: require("@/assets/information/road/50.jpeg"),
          },
          {
            id: 51,
            path: require("@/assets/information/road/51.jpeg"),
          },
          {
            id: 52,
            path: require("@/assets/information/road/52.jpeg"),
          },
          {
            id: 53,
            path: require("@/assets/information/road/53.jpeg"),
          },
          {
            id: 54,
            path: require("@/assets/information/road/54.jpeg"),
          },
          {
            id: 55,
            path: require("@/assets/information/road/55.jpeg"),
          },
          {
            id: 56,
            path: require("@/assets/information/road/56.jpeg"),
          },
          {
            id: 57,
            path: require("@/assets/information/road/57.jpeg"),
          },
          {
            id: 58,
            path: require("@/assets/information/road/58.jpeg"),
          },
          {
            id: 59,
            path: require("@/assets/information/road/59.jpeg"),
          },
          {
            id: 60,
            path: require("@/assets/information/road/60.jpeg"),
          },
          {
            id: 61,
            path: require("@/assets/information/road/61.jpeg"),
          },
          {
            id: 62,
            path: require("@/assets/information/road/62.jpeg"),
          },
          {
            id: 63,
            path: require("@/assets/information/road/63.jpeg"),
          },
          {
            id: 64,
            path: require("@/assets/information/road/64.jpeg"),
          },
          {
            id: 65,
            path: require("@/assets/information/road/65.jpeg"),
          },
          {
            id: 66,
            path: require("@/assets/information/road/66.jpeg"),
          },
          {
            id: 67,
            path: require("@/assets/information/road/67.jpeg"),
          },
          {
            id: 68,
            path: require("@/assets/information/road/68.jpeg"),
          },
          {
            id: 69,
            path: require("@/assets/information/road/69.jpeg"),
          },
          {
            id: 70,
            path: require("@/assets/information/road/70.jpeg"),
          },
          {
            id: 71,
            path: require("@/assets/information/road/71.jpeg"),
          },
          {
            id: 72,
            path: require("@/assets/information/road/72.jpeg"),
          },
          {
            id: 73,
            path: require("@/assets/information/road/73.jpeg"),
          },
          {
            id: 74,
            path: require("@/assets/information/road/74.jpeg"),
          },
          {
            id: 75,
            path: require("@/assets/information/road/75.jpeg"),
          },
          {
            id: 76,
            path: require("@/assets/information/road/76.jpeg"),
          },
          {
            id: 77,
            path: require("@/assets/information/road/77.jpeg"),
          },
          {
            id: 78,
            path: require("@/assets/information/road/78.jpeg"),
          },
          {
            id: 79,
            path: require("@/assets/information/road/79.jpeg"),
          },
          {
            id: 80,
            path: require("@/assets/information/road/80.jpeg"),
          },
          {
            id: 81,
            path: require("@/assets/information/road/81.jpeg"),
          },
          {
            id: 82,
            path: require("@/assets/information/road/82.jpeg"),
          },
          {
            id: 83,
            path: require("@/assets/information/road/83.jpeg"),
          },
          {
            id: 84,
            path: require("@/assets/information/road/84.jpeg"),
          },
          {
            id: 85,
            path: require("@/assets/information/road/85.jpeg"),
          },
          {
            id: 86,
            path: require("@/assets/information/road/86.jpeg"),
          },
          {
            id: 87,
            path: require("@/assets/information/road/87.jpeg"),
          },
          {
            id: 88,
            path: require("@/assets/information/road/88.jpeg"),
          },
        ],
      },
      list: [],
    };
  },
  methods: {
    openGallery(name) {
      this.list = this.allPhotos[name];
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("@/assets/img/bg_2.png") center / cover no-repeat;
}

.grid {
  display: flex;
  gap: 42px;
  justify-content: center;
  margin: 90px 0 0;
}
</style>
