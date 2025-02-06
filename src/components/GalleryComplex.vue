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
      <div v-if="slide.content" v-html="slide.title" class="text__title">

      </div>
      <div v-if="slide.content" class="content">
        <div class="img">
          <img :src="slide.path" :class="[{cover: cover || slide.cover}]" alt="">
        </div>
        <div class="text">
          <div class="text__text" v-if="slide.content.text" v-html="slide.content.text"></div>
          <div v-if="slide.content.contacts" class="text__contacts">
            <span>
              <img src="@/assets/complex/map.svg" alt="">
              <p v-html="slide.content.contacts.address"></p>
            </span>
            <span>
              <img src="@/assets/complex/phone.svg" alt="">
              <p v-html="slide.content.contacts.phone"></p>
            </span>
            <span v-if="slide.content.contacts.site">
              <img src="@/assets/complex/site.svg" alt="">
              <p v-html="slide.content.contacts.site"></p>
            </span>
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
  name: "GalleryComplex",
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
    width: 100%;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url('@/assets/complex/frame.svg') bottom right / 870px no-repeat;
      z-index: 1;
    }
  }

  .content .img {
    flex: 0 0 830px;
    img {
      border-radius: 25px 0 0 25px;
    }

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
  padding: 210px 32px;
  background: #fff;
  flex: 1 0 754px;

  &__title {
    height: 164px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #47932F;
    border-radius: 28px;
    font-weight: 700;
    font-size: 42px;
    line-height: 54px;
    color: #FFFFFF;
    position: absolute;
    width: 750px;
    top: 45px;
    right: 85px;
    z-index: 3;
    padding: 0 32px;
    text-align: center;
  }

  &__text {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 32px;
    color: #5E5E5E;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 40px 0;
    span {
      display: flex;
      align-items: center;
      gap: 42px;
      img {
        width: 86px;
        height: 86px;
      }
      p {
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        color: #0E5C4F;
      }
    }
  }
}

</style>
