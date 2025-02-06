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
      <img :src="slide.path" :class="[{cover: cover || slide.cover}]" alt="">
    </swiper-slide>
    <div v-if="!close" class="close" @click="$emit('close')"></div>
  </swiper>

</template>

<script>
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';


export default {
  name: "Gallery",
  props: {
    list: {
      type: Array,
      required: true,
    },
    cover: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    },
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

  img {
    max-width: 100%;
    max-height: 100%;

    &.cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
