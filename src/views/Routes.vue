<template>
  <div class="main">
    <div class="title">Брендовые маршруты алтайского края</div>
    <div v-if="!show" class="grid scaleIn">
      <div @click="openGallery('history')" class="item">
        <img src="@/assets/routes/banners/history.png" alt="" />
      </div>
      <div @click="openGallery('gastro')" class="item">
        <img src="@/assets/routes/banners/gastro.png" alt="" />
      </div>
      <div @click="openGallery('roads')" class="item">
        <img src="@/assets/routes/banners/roads.png" alt="" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="show" class="season-gallery">
        <GalleryWithPhoto @close="show = false" :data="data" />
      </div>
    </transition>
    <Back @back="$router.go(-1)" bottom />
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";
import GalleryWithPhoto from "@/components/GalleryWithPhoto.vue";

export default {
  name: "Routes",
  components: { GalleryWithPhoto, Back },
  data() {
    return {
      show: false,
      data: {},
      allData: {
        roads: {
          img: require("@/assets/routes/roads/roads.png"),
          bigImg: require("@/assets/routes/roads/roadsBig.jpeg"),
        },
        gastro: {
          img: require("@/assets/routes/gastro/gastro.png"),
          bigImg: require("@/assets/routes/gastro/gastroBig.jpeg"),
        },
        history: {
          img: require("@/assets/routes/history/history.png"),
          bigImg: require("@/assets/routes/history/historyBig.jpeg"),
        },
      },
    };
  },
  methods: {
    openGallery(name) {
      this.data = this.allData[name];
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("@/assets/img/bg_2.png") center / cover no-repeat;
}

.title {
  margin: 0 0 72px;
}

.grid {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.item {
  width: 420px;
  height: 793px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
