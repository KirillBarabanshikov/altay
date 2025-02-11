<template>
  <div class="main">
    <div v-if="!show && !showVideo">
      <div class="grid-half">
        <div @click="openVideo('mountains')" class="item scaleIn">
          <img src="@/assets/best/banners/mountains.png" alt="" />
        </div>
        <div @click="openVideo('photo')" class="item scaleIn">
          <img src="@/assets/best/banners/photo.png" alt="" />
        </div>
        <div @click="openGallery('barnaul')" class="item scaleIn">
          <img src="@/assets/best/banners/barnaul.jpeg" alt="" />
        </div>
      </div>
      <div class="grid">
        <div @click="openGallery('belokurikha')" class="item scaleIn">
          <img src="@/assets/best/banners/belokurikha.jpeg" alt="" />
        </div>
        <div @click="openGallery('souvenirs')" class="item scaleIn">
          <img src="@/assets/best/banners/souvenirs.jpeg" alt="" />
        </div>
        <div @click="openGallery('active')" class="item scaleIn">
          <img src="@/assets/best/banners/0.jpeg" alt="" />
        </div>
        <div @click="openGallery('eco')" class="item scaleIn">
          <img src="@/assets/best/banners/1.jpeg" alt="" />
        </div>
        <div @click="openGallery('ozero')" class="item scaleIn">
          <img src="@/assets/best/ozero/0.jpeg" alt="" />
        </div>
        <div @click="openGallery('derev')" class="item scaleIn">
          <img src="@/assets/best/derev/0.jpeg" alt="" />
        </div>
        <div @click="openGallery('bisk')" class="item scaleIn">
          <img src="@/assets/best/bisk/1.jpg" alt="" />
        </div>
        <div @click="openGallery('katuni')" class="item scaleIn">
          <img src="@/assets/best/katuni/1.jpg" alt="" />
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="show" class="season-gallery">
        <Gallery @close="show = false" :list="list" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showVideo" class="season-gallery">
        <GalleryWithVideo @close="showVideo = false" :data="data" />
      </div>
    </transition>
    <Back @back="$router.go(-1)" bottom />
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";
import Gallery from "@/components/Gallery.vue";
import GalleryWithVideo from "@/components/GalleryWithVideo.vue";

export default {
  name: "Best",
  components: { GalleryWithVideo, Gallery, Back },
  data() {
    return {
      showVideo: false,
      show: false,
      list: [],
      allPhotos: {
        katuni: [
          {
            id: 1,
            path: require("@/assets/best/katuni/1.jpg"),
          },
          {
            id: 2,
            path: require("@/assets/best/katuni/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/best/katuni/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/best/katuni/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/best/katuni/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/best/katuni/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/best/katuni/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/best/katuni/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/best/katuni/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/best/katuni/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/best/katuni/11.jpg"),
          },
          {
            id: 12,
            path: require("@/assets/best/katuni/12.jpg"),
          },
          {
            id: 13,
            path: require("@/assets/best/katuni/13.jpg"),
          },
          {
            id: 14,
            path: require("@/assets/best/katuni/14.jpg"),
          },
          {
            id: 15,
            path: require("@/assets/best/katuni/15.jpg"),
          },
          {
            id: 16,
            path: require("@/assets/best/katuni/16.jpg"),
          },
          {
            id: 17,
            path: require("@/assets/best/katuni/17.jpg"),
          },
          {
            id: 18,
            path: require("@/assets/best/katuni/18.jpg"),
          },
          {
            id: 19,
            path: require("@/assets/best/katuni/19.jpg"),
          },
          {
            id: 20,
            path: require("@/assets/best/katuni/20.jpg"),
          },
          {
            id: 21,
            path: require("@/assets/best/katuni/21.jpg"),
          },
          {
            id: 22,
            path: require("@/assets/best/katuni/22.jpg"),
          },
          {
            id: 23,
            path: require("@/assets/best/katuni/23.jpg"),
          },
          {
            id: 24,
            path: require("@/assets/best/katuni/24.jpg"),
          },
        ],
        bisk: [
          {
            id: 1,
            path: require("@/assets/best/bisk/1.jpg"),
          },
          {
            id: 2,
            path: require("@/assets/best/bisk/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/best/bisk/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/best/bisk/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/best/bisk/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/best/bisk/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/best/bisk/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/best/bisk/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/best/bisk/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/best/bisk/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/best/bisk/11.jpg"),
          },
          {
            id: 12,
            path: require("@/assets/best/bisk/12.jpg"),
          },
          {
            id: 13,
            path: require("@/assets/best/bisk/13.jpg"),
          },
          {
            id: 14,
            path: require("@/assets/best/bisk/14.jpg"),
          },
          {
            id: 15,
            path: require("@/assets/best/bisk/15.jpg"),
          },
          {
            id: 16,
            path: require("@/assets/best/bisk/16.jpg"),
          },
          {
            id: 17,
            path: require("@/assets/best/bisk/17.jpg"),
          },
          {
            id: 18,
            path: require("@/assets/best/bisk/18.jpg"),
          },
          {
            id: 19,
            path: require("@/assets/best/bisk/19.jpg"),
          },
          {
            id: 20,
            path: require("@/assets/best/bisk/20.jpg"),
          },
          {
            id: 21,
            path: require("@/assets/best/bisk/21.jpg"),
          },
          {
            id: 22,
            path: require("@/assets/best/bisk/22.jpg"),
          },
          {
            id: 23,
            path: require("@/assets/best/bisk/23.jpg"),
          },
          {
            id: 24,
            path: require("@/assets/best/bisk/24.jpg"),
          },
        ],
        active: [
          {
            id: 0,
            path: require("@/assets/best/active/0.jpeg"),
          },
          {
            id: 1,
            path: require("@/assets/best/active/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/best/active/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/best/active/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/best/active/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/best/active/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/best/active/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/best/active/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/best/active/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/best/active/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/best/active/10.jpeg"),
          },
        ],
        eco: [
          {
            id: 1,
            path: require("@/assets/best/eco/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/best/eco/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/best/eco/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/best/eco/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/best/eco/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/best/eco/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/best/eco/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/best/eco/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/best/eco/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/best/eco/10.jpeg"),
          },
          {
            id: 11,
            path: require("@/assets/best/eco/11.jpeg"),
          },
        ],
        barnaul: [
          {
            id: 1,
            path: require("@/assets/best/barnaul/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/best/barnaul/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/best/barnaul/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/best/barnaul/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/best/barnaul/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/best/barnaul/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/best/barnaul/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/best/barnaul/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/best/barnaul/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/best/barnaul/10.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/best/barnaul/11.jpeg"),
          },
        ],
        belokurikha: [
          {
            id: 1,
            path: require("@/assets/best/belokurikha/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/best/belokurikha/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/best/belokurikha/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/best/belokurikha/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/best/belokurikha/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/best/belokurikha/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/best/belokurikha/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/best/belokurikha/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/best/belokurikha/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/best/belokurikha/10.jpeg"),
          },
          {
            id: 11,
            path: require("@/assets/best/belokurikha/11.jpeg"),
          },
          {
            id: 12,
            path: require("@/assets/best/belokurikha/12.jpeg"),
          },
          {
            id: 13,
            path: require("@/assets/best/belokurikha/13.jpeg"),
          },
        ],
        souvenirs: [
          {
            id: 1,
            path: require("@/assets/best/souvenirs/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/best/souvenirs/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/best/souvenirs/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/best/souvenirs/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/best/souvenirs/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/best/souvenirs/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/best/souvenirs/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/best/souvenirs/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/best/souvenirs/9.jpeg"),
          },
        ],
        ozero: [
          {
            id: 0,
            path: require("@/assets/best/ozero/0.jpeg"),
          },
          {
            id: 1,
            path: require("@/assets/best/ozero/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/best/ozero/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/best/ozero/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/best/ozero/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/best/ozero/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/best/ozero/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/best/ozero/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/best/ozero/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/best/ozero/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/best/ozero/10.jpeg"),
          },
          {
            id: 11,
            path: require("@/assets/best/ozero/11.jpeg"),
          },
          {
            id: 12,
            path: require("@/assets/best/ozero/12.jpeg"),
          },
          {
            id: 13,
            path: require("@/assets/best/ozero/13.jpeg"),
          },
          {
            id: 14,
            path: require("@/assets/best/ozero/14.jpeg"),
          },
          {
            id: 15,
            path: require("@/assets/best/ozero/15.jpeg"),
          },
          {
            id: 16,
            path: require("@/assets/best/ozero/16.jpeg"),
          },
          {
            id: 17,
            path: require("@/assets/best/ozero/17.jpeg"),
          },
          {
            id: 18,
            path: require("@/assets/best/ozero/18.jpeg"),
          },
          {
            id: 19,
            path: require("@/assets/best/ozero/19.jpeg"),
          },
          {
            id: 20,
            path: require("@/assets/best/ozero/20.jpeg"),
          },
          {
            id: 21,
            path: require("@/assets/best/ozero/21.jpeg"),
          },
          {
            id: 22,
            path: require("@/assets/best/ozero/22.jpeg"),
          },
          {
            id: 23,
            path: require("@/assets/best/ozero/23.jpeg"),
          },
        ],
        derev: [
          {
            id: 0,
            path: require("@/assets/best/derev/0.jpeg"),
          },
          {
            id: 1,
            path: require("@/assets/best/derev/1.jpeg"),
          },
          {
            id: 2,
            path: require("@/assets/best/derev/2.jpeg"),
          },
          {
            id: 3,
            path: require("@/assets/best/derev/3.jpeg"),
          },
          {
            id: 4,
            path: require("@/assets/best/derev/4.jpeg"),
          },
          {
            id: 5,
            path: require("@/assets/best/derev/5.jpeg"),
          },
          {
            id: 6,
            path: require("@/assets/best/derev/6.jpeg"),
          },
          {
            id: 7,
            path: require("@/assets/best/derev/7.jpeg"),
          },
          {
            id: 8,
            path: require("@/assets/best/derev/8.jpeg"),
          },
          {
            id: 9,
            path: require("@/assets/best/derev/9.jpeg"),
          },
          {
            id: 10,
            path: require("@/assets/best/derev/10.jpeg"),
          },
          {
            id: 11,
            path: require("@/assets/best/derev/11.jpeg"),
          },
          {
            id: 12,
            path: require("@/assets/best/derev/12.jpeg"),
          },
          {
            id: 13,
            path: require("@/assets/best/derev/13.jpeg"),
          },
          {
            id: 14,
            path: require("@/assets/best/derev/14.jpeg"),
          },
          {
            id: 15,
            path: require("@/assets/best/derev/15.jpeg"),
          },
          {
            id: 16,
            path: require("@/assets/best/derev/16.jpeg"),
          },
          {
            id: 17,
            path: require("@/assets/best/derev/17.jpeg"),
          },
          {
            id: 18,
            path: require("@/assets/best/derev/18.jpeg"),
          },
          {
            id: 19,
            path: require("@/assets/best/derev/19.jpeg"),
          },
          {
            id: 20,
            path: require("@/assets/best/derev/20.jpeg"),
          },
          {
            id: 21,
            path: require("@/assets/best/derev/21.jpeg"),
          },
          {
            id: 22,
            path: require("@/assets/best/derev/22.jpeg"),
          },
          {
            id: 23,
            path: require("@/assets/best/derev/23.jpeg"),
          },
        ],
      },
      data: {},
      allData: {
        mountains: {
          img: require("@/assets/best/mountains/mountains-gallery.png"),
          video: require("@/assets/best/mountains/mountains.mp4"),
        },
        photo: {
          img: require("@/assets/best/photo/photo-gallery.png"),
          video: require("@/assets/best/photo/photo.mp4"),
        },
      },
    };
  },
  methods: {
    openGallery(name) {
      this.list = this.allPhotos[name];
      this.show = true;
    },
    openVideo(name) {
      this.data = this.allData[name];
      this.showVideo = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 80px 0 0;
  background: url("@/assets/img/bg_2.png") center / cover no-repeat;
}

.grid-half {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 0 auto 19px auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 283px);
  justify-content: center;
  gap: 19px;
}

.item {
  width: 283px;
  height: 283px;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
