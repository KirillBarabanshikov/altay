<template>
  <div class="main">
    <div class="title">
      А – это где история
      <br />
      и современность
    </div>
    <div v-if="!show" class="grid">
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
    <Back @click="$router.go(-1)" bottom />
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "History",
  components: { Gallery, Back },
  data() {
    return {
      buttons: [
        {
          id: 1,
          name: "barnaul",
          src: require("@/assets/history/banners/barnaul.png"),
        },
        {
          id: 2,
          name: "belo",
          src: require("@/assets/history/banners/belo.png"),
        },
        {
          id: 3,
          name: "biisk",
          src: require("@/assets/history/banners/biisk.png"),
        },
      ],
      allPhotos: {
        barnaul: [
          {
            id: 1,
            path: require("@/assets/history/barnaul/1.jpg"),
          },
          {
            id: 2,
            path: require("@/assets/history/barnaul/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/history/barnaul/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/history/barnaul/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/history/barnaul/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/history/barnaul/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/history/barnaul/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/history/barnaul/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/history/barnaul/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/history/barnaul/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/history/barnaul/11.jpg"),
          },
          {
            id: 12,
            path: require("@/assets/history/barnaul/12.jpg"),
          },
          {
            id: 13,
            path: require("@/assets/history/barnaul/13.jpg"),
          },
          {
            id: 14,
            path: require("@/assets/history/barnaul/14.jpg"),
          },
          {
            id: 15,
            path: require("@/assets/history/barnaul/15.jpg"),
          },
        ],
        belo: [
          {
            id: 1,
            path: require("@/assets/history/belo/1.jpg"),
          },
          {
            id: 2,
            path: require("@/assets/history/belo/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/history/belo/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/history/belo/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/history/belo/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/history/belo/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/history/belo/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/history/belo/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/history/belo/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/history/belo/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/history/belo/11.jpg"),
          },
        ],
        biisk: [
          {
            id: 1,
            path: require("@/assets/history/biisk/1.jpg"),
          },
          {
            id: 2,
            path: require("@/assets/history/biisk/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/history/biisk/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/history/biisk/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/history/biisk/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/history/biisk/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/history/biisk/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/history/biisk/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/history/biisk/9.jpg"),
          },
        ],
      },
      list: [],
      show: false,
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
.title {
  margin: 0 0 65px;
}

.grid {
  display: flex;
  gap: 42px;
  align-items: center;
  justify-content: center;
}

.item {
  width: 556px;
  height: 556px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
