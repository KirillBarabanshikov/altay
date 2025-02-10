<template>
  <div class="main">
    <div class="title">Видео об алтайском крае</div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <div class="grid" v-if="!showVideo">
          <div class="item scaleIn" @click="openVideo(0)">
            <img src="@/assets/video_page/banners/1.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(1)">
            <img src="@/assets/video_page/banners/2.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(2)">
            <img src="@/assets/video_page/banners/3.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(3)">
            <img src="@/assets/video_page/banners/4.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(4)">
            <img src="@/assets/video_page/banners/5.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid" v-if="!showVideo">
          <div class="item scaleIn" @click="openVideo(5)">
            <img src="@/assets/video_page/banners/6.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(6)">
            <img src="@/assets/video_page/banners/7.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(7)">
            <img src="@/assets/video_page/banners/8.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(8)">
            <img src="@/assets/video_page/banners/9.png" alt="" />
          </div>
          <div class="item scaleIn" @click="openVideo(9)">
            <img src="@/assets/video_page/banners/10.png" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <transition name="fade">
      <div v-if="showVideo" class="video_player">
        <VideoPlayer :path="video" @close="showVideo = false" />
      </div>
    </transition>
    <Back @back="$router.go(-1)" bottom />
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Back from "@/components/UI/Back.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "Video",
  components: {
    VideoPlayer,
    Back,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showVideo: false,
      video: null,
      modules: [Navigation, Pagination],
      videos: [
        {
          path: require("@/assets/video_page/video/1.mp4"),
        },
        {
          path: require("@/assets/video_page/video/2.mp4"),
        },
        {
          path: require("@/assets/video_page/video/3.mp4"),
        },
        {
          path: require("@/assets/video_page/video/4.mp4"),
        },
        {
          path: require("@/assets/video_page/video/5.mp4"),
        },
        {
          path: require("@/assets/video_page/video/6.mp4"),
        },
        {
          path: require("@/assets/video_page/video/7.mp4"),
        },
        {
          path: require("@/assets/video_page/video/8.mp4"),
        },
        {
          path: require("@/assets/video_page/video/9.mp4"),
        },
        {
          path: require("@/assets/video_page/video/10.mp4"),
        },
      ],
    };
  },
  methods: {
    openVideo(num) {
      this.video = this.videos[num];
      this.showVideo = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("@/assets/img/bg_2.png") center / cover no-repeat;
}

.video_player {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 333;
  background: #234343;
}

.title {
  margin-bottom: 92px;
}

.swiper {
  height: 730px;
  width: 1920px;
}

::v-deep(.swiper-button-next),
::v-deep(.swiper-button-prev) {
  width: 102px;
  height: 149px;
  top: 240px;
}

::v-deep(.swiper-button-next) {
  right: 0;
  background: url("@/assets/img/icons/right.svg");

  &:after {
    content: "";
  }
}

::v-deep(.swiper-button-prev) {
  left: 0;
  background: url("@/assets/img/icons/left.svg");

  &:after {
    content: "";
  }
}

::v-deep(.swiper-pagination-bullet) {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid #fcfcfc;
  background: transparent;
  opacity: 1;
  position: relative;
}

::v-deep(
    .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet
  ) {
  margin: 0 12px;
}

::v-deep(.swiper-pagination-bullet-active) {
  &:before {
    content: "";
    width: 38px;
    height: 38px;
    display: block;
    border-radius: 50%;
    background: #fcfcfc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.item {
  width: 483px;
  height: 272px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
