<template>

  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
  >
    <swiper-slide
      v-for="slide in list"
      :key="slide.id"
    >
      <div v-if="slide.content" class="content">
        <div class="img">
          <img :src="slide.path" :class="[{cover: cover || slide.cover}]" alt="">
        </div>
        <div class="text">
          <div class="text__header">
            <span>
              <img src="@/assets/events/marker.svg" alt="">
              {{ slide.content.where }}
            </span>
            <span>
              <img src="@/assets/events/calendar.svg" alt="">
              {{ slide.content.when }}
            </span>
          </div>
          <div class="text__title">
            {{ slide.content.title }}
          </div>
          <div class="text__text" v-html="slide.content.text">
          </div>
          <div class="text__link">
            Больше информации:
            <span v-html='slide.content.link ' />
          </div>
        </div>
      </div>
      <div v-else class="img">
        <img :src="slide.path" :class="[{cover: cover || slide.cover}]" alt="">
      </div>
    </swiper-slide>
    <div class="close" @click="$emit('close')"></div>
  </swiper>

</template>

<script>
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';


export default {
  name: "GalleryEvents",
  props: {
    list: {
      type: Array,
      required: true,
    },
    cover: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    }

  }
}
</script>

<style lang="scss" scoped>
.close {
  width: 60px;
  height: 60px;
  background: url('@/assets/img/icons/close.svg') center / cover no-repeat;
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 22;
}

.template {
  position: relative;
}

.swiper {
  height: 100%;
  width: 1920px;
}

::v-deep(.swiper-button-next),
::v-deep(.swiper-button-prev) {
  width: 102px;
  height: 149px;
}

::v-deep(.swiper-button-next) {
  right: 0;
  background: url('@/assets/img/icons/right.svg');

  &:after {
    content: '';

  }
}

::v-deep(.swiper-button-prev) {
  left: 0;
  background: url('@/assets/img/icons/left.svg');

  &:after {
    content: '';
  }
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 110px;

  .img {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    &.cover {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }

  }
}

.swiper-slide {

  .content {
    color: #000000;
    display: flex;
    position: relative;
    height: 100%;
    border-radius: 0 25px 25px 0;
    overflow: hidden;
  }

  .content .img {
    flex: 0 0 830px;
    border-radius: 25px 0 0 25px;
    &:before {
      display: none;
    }
  }

  .content .img img,
  .content .img img.cover {
    position: static;
  }
}


.text {
  padding: 80px 32px;
  background: #fff;

  &__header {
    font-size: 20px;
    color: #606060;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 24px;

    span {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    margin: 0 0 34px;
  }

  &__text {
    font-size: 26px;
    line-height: 30px;
    margin: 0 0 32px;
  }

  &__link {
    border: 1px solid #3AAACD;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: #606060;
    max-width: 820px;
    gap: 32px;

    span {
      text-decoration-line: underline;
      color: #3AAACD;
      font-weight: 700;
    }
  }
}

</style>
