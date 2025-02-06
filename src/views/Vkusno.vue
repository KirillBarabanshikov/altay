<template>
  <div class="main">
    <div class="vkusno">А – это где вкусно!</div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      centered-slides

    >
      <swiper-slide
        v-for="slide in list"
        :key="slide.path"
      >
        <div :class="['content',{cls: slide.text}]">
          <div class="img">
            <img :src="slide.path" alt="">
          </div>
          <div v-if="slide.text" class="text" v-html="slide.text"></div>
        </div>
      </swiper-slide>
      <div class="close" @click="$emit('close')"></div>
    </swiper>
    <Back @back="$router.go(-1)" bottom/>
  </div>
</template>

<script>
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import Back from "@/components/UI/Back.vue";


export default {
  name: "Vkusno",
  components: {
    Back,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      list: [
        {
          path: require('@/assets/vkusno/gallery/1.jpg'),
          text: 'Туризм на Алтае надолго запоминается вкусной натуральной едой из экологически чистых районов, изобилием меда и сыра, таёжных трав, ягод и грибов, мяса марала, хариуса, мраморной говядина, кедрового ореха, папоротника, облепихи - знаменитых брендовых продуктов.',
        },
        {
          path: require('@/assets/vkusno/gallery/2.jpg'),
          text: 'Алтайский край занимает лидирующие позиции в сфере производства <span>сыров и масла</span>: каждая седьмая тонна сыра в стране производится в нашем регионе.',
        },
        {
          path: require('@/assets/vkusno/gallery/3.jpg'),
          text: '<span>Алтайский мёд</span> – это бренд, известный в России и за её пределами. Секрет его ценности заключается в природе региона, где поля чередуются с лугами, а горные районы соседствуют с тайгой, где произрастают редкие типы растений-медоносов.',
        },
        {
          path: require('@/assets/vkusno/gallery/4.jpg'),
          text: 'В Алтайском крае во всем многообразии произрастают травы и дикоросы, из которых делают <span>фиточаи и травяные сборы.</span>',

        },
        {
          path: require('@/assets/vkusno/gallery/5.jpg'),
          text: 'В регионе находятся десятки мараловодческих хозяйств, и именно здесь сконцентрировано производство <span>лечебной продукции из пантов</span> – рогов оленей. С древности их использовали в качестве универсального лечебного, омолаживающего и тонизирующего средства. Панты алтайского марала обладают потрясающими лечебными свойствами – равных им по набору микроэлементов и лечебному воздействию нет нигде в мире.',
        },
        {
          path: require('@/assets/vkusno/gallery/6.jpg'),
          text: '<span>Гастрономический туризм</span> – одно из перспективных направлений в Алтайском крае. Региональная команда шеф-поваров вошла в федеральный проект «Гастрономическая карта России» и удивляет гостей края особенностями аутентичной кухни на гастрономических фестивалях.',
        },
        {
          path: require('@/assets/vkusno/gallery/7.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/8.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/9.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/10.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/11.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/12.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/13.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/14.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/15.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/16.jpg'),
        },
        {
          path: require('@/assets/vkusno/gallery/17.jpg'),
        },

      ],
    }

  }
}
</script>

<style lang="scss" scoped>
.main {
  background: url('@/assets/vkusno/bg.svg');
}

.vkusno {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #3AAACD;
  padding: 37px 160px;
  background: #fff;
  border-radius: 119px;
  z-index: 3333;

  &:before {
    content: "";
    display: block;
    width: 645px;
    height: 110px;
    position: absolute;
    border: 4px solid;
    border-radius: 119px;
    top: 7px;
    left: 5px;
  }
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


  .content {
    position: relative;
    top: -60px;

    &.cls {
      top: 0;
      margin: 0 260px;

      .img {
        width: 1398px;
        height: 785px;
        border-radius: 25px;
        overflow: visible;

        &:after {
          content: "";
          position: absolute;
          bottom: -19px;
          left: -10px;
          display: block;
          width: 1398px;
          height: 30px;
          background: #fff;
        }
      }
    }


  }


  .img {
    display: block;
    position: relative;
    z-index: 2;
    border: 10px solid #fff;
    width: 1544px;
    height: 867px;
    border-radius: 25px;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      background: url("@/assets/vkusno/frame.svg") -5px -20px / 102% no-repeat;
      z-index: 2;
    }


    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      overflow: hidden;
      border-radius: 10px 10px 0 0;

    }
  }

  .text {
    width: 1398px;
    height: 205px;
    padding: 18px 46px 10px;
    border-radius: 0 0 23px 23px;
    background: #fff;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: #000000;

    ::v-deep(span) {
      font-weight: 700;
      color: #3AAACD;
    }
  }
}
</style>
