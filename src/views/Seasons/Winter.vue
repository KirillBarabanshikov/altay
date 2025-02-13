<template>
  <div class="main">
    <div class="video">
      <transition name="fade" mode="out-in">
        <div v-if="month === 1" class="markers one">
          <div
            @click="openGallery('zimovka')"
            :class="['event_popup left', { out: out }]"
          >
            Фестиваль <br />
            «Алтайская зимовка»
            <span>13 декабря 2025 года</span>
          </div>
        </div>
        <div v-else-if="month === 2" class="markers two">
          <div
            @click="openGallery('maslenica')"
            :class="['event_popup right', { out: out }]"
          >
            Фестиваль <br />
            «Сибирская масленица»
            <span>25 февраля 2023</span>
          </div>
        </div>
        <div v-else-if="!month" class="markers points">
          <!--          <div class="marker winter"></div>-->
          <div class="marker winter"></div>
        </div>
      </transition>
    </div>
    <div class="footer">
      <Nav
        :events-list="eventsList"
        @back="back"
        @changeMonth="changeMonth"
        one
      />
    </div>
    <transition name="fade">
      <div v-if="show" class="season-gallery">
        <GalleryEvents @close="show = false" :list="list" cover />
      </div>
    </transition>
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";
import { mapMutations } from "vuex";
import Gallery from "@/components/Gallery.vue";
import Nav from "@/components/SeasonsNav/Nav.vue";
import GalleryEvents from "@/components/GalleryEvents.vue";

export default {
  name: "Winter",
  components: { GalleryEvents, Nav, Gallery, Back },
  data() {
    return {
      out: false,
      show: false,
      month: null,
      allPhotos: {
        zimovka: [
          {
            id: 1,
            path: require("@/assets/events/winter/zimovka/1.jpg"),
            content: {
              title: "Фестиваль «Алтайская зимовка»",
              text:
                "Первый фестиваль настоящей сибирской зимы. Открывает зимний туристический сезон в Алтайском крае и приурочен к прилету лебедей на незамерзающие озера Алтая.<br/>" +
                "Народные гуляния, зимние виды отдыха, выставка-ярмарка, большая экскурсионная программа.<br/>" +
                "Прекрасная возможность начать зиму тепло, интересно и весело, в компании друзей или семьей.<br/>",
              where: "г. Белокуриха",
              when: "13 декабря 2025 года",
              link: "алтайскаязимовка.рф",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/winter/zimovka/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/winter/zimovka/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/events/winter/zimovka/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/events/winter/zimovka/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/events/winter/zimovka/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/events/winter/zimovka/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/events/winter/zimovka/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/events/winter/zimovka/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/events/winter/zimovka/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/events/winter/zimovka/11.jpg"),
          },
          {
            id: 12,
            path: require("@/assets/events/winter/zimovka/12.jpg"),
          },
          {
            id: 13,
            path: require("@/assets/events/winter/zimovka/13.jpg"),
          },
          {
            id: 14,
            path: require("@/assets/events/winter/zimovka/14.jpg"),
          },
          {
            id: 15,
            path: require("@/assets/events/winter/zimovka/15.jpg"),
          },
          {
            id: 16,
            path: require("@/assets/events/winter/zimovka/16.jpg"),
          },
          {
            id: 17,
            path: require("@/assets/events/winter/zimovka/17.jpg"),
          },
          {
            id: 18,
            path: require("@/assets/events/winter/zimovka/18.jpg"),
          },
          {
            id: 19,
            path: require("@/assets/events/winter/zimovka/19.jpg"),
          },
          {
            id: 20,
            path: require("@/assets/events/winter/zimovka/20.jpg"),
          },
          {
            id: 21,
            path: require("@/assets/events/winter/zimovka/21.jpg"),
          },
          {
            id: 22,
            path: require("@/assets/events/winter/zimovka/22.jpg"),
          },
          {
            id: 23,
            path: require("@/assets/events/winter/zimovka/23.jpg"),
          },
          {
            id: 24,
            path: require("@/assets/events/winter/zimovka/24.jpg"),
          },
        ],
        // maslenica: [
        //   {
        //     id: 1,
        //     path: require("@/assets/events/winter/maslenica/1.jpg"),
        //     content: {
        //       title: "Фестиваль  «Сибирская масленица» ",
        //       text: "Большой народный праздник  ежегодно собирает тысячи туристов. Богатая ярмарка радует гостей горячими угощениями, вкусными напитками и подарками ручной работы. Калейдоскоп спортивных состязаний, конкурсов и масленичных забав: народные масленичные гуляния, творческие конкурсы, ярмарка, конноспортивный праздник, сжигание Масленицы и большой масленичный хоровод вокруг костра, катание на русских тройках.",
        //       where:
        //         "ТРК «Сибирское подворье», с. Новотырышкино, Смоленский район",
        //       when: " 25 февраля 2023 года",
        //       link: "www.siberianmas.ru",
        //     },
        //   },
        //   {
        //     id: 2,
        //     path: require("@/assets/events/winter/maslenica/2.jpg"),
        //   },
        //   {
        //     id: 3,
        //     path: require("@/assets/events/winter/maslenica/3.jpg"),
        //   },
        //   {
        //     id: 4,
        //     path: require("@/assets/events/winter/maslenica/4.jpg"),
        //   },
        //   {
        //     id: 5,
        //     path: require("@/assets/events/winter/maslenica/5.jpg"),
        //   },
        //   {
        //     id: 6,
        //     path: require("@/assets/events/winter/maslenica/6.jpg"),
        //   },
        //   {
        //     id: 7,
        //     path: require("@/assets/events/winter/maslenica/7.jpg"),
        //   },
        //   {
        //     id: 8,
        //     path: require("@/assets/events/winter/maslenica/8.jpg"),
        //   },
        //   {
        //     id: 9,
        //     path: require("@/assets/events/winter/maslenica/9.jpg"),
        //   },
        //   {
        //     id: 10,
        //     path: require("@/assets/events/winter/maslenica/10.jpg"),
        //   },
        //   {
        //     id: 11,
        //     path: require("@/assets/events/winter/maslenica/11.jpg"),
        //   },
        //   {
        //     id: 12,
        //     path: require("@/assets/events/winter/maslenica/12.jpg"),
        //   },
        // ],
      },
      list: [],
      eventsList: [
        {
          id: 1,
          title: "Декабрь",
        },
        // {
        //   id: 2,
        //   title: 'Февраль',
        // },
      ],
    };
  },
  methods: {
    back() {
      this.out = true;
      setTimeout(() => {
        this.backFromSeason();
      }, 400);
    },
    changeMonth(id) {
      if (this.month) {
        this.out = true;
        setTimeout(() => {
          this.out = false;
          this.month = id;
        }, 200);
      } else {
        this.month = id;
      }
    },
    openGallery(name) {
      this.list = this.allPhotos[name];

      this.show = true;
    },
    ...mapMutations(["backFromSeason"]),
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("@/assets/img/seasons/winter.png") center / cover no-repeat;
  position: relative;
}

.event_popup {
  color: #fff;

  span {
    color: #fff;
  }

  &.left {
    background: url("@/assets/events/winter-1.svg") center / cover no-repeat;
  }

  &.right {
    background: url("@/assets/events/winter-2.svg") center / cover no-repeat;
  }
}

.one {
  .event_popup {
    top: 330px;
    right: 300px;

    &:before {
      display: none;
    }
  }
}

.two {
  .event_popup {
    right: 500px;
    top: 300px;

    &:before {
      background: url("@/assets/img/icons/star-winter.svg") center / cover
        no-repeat;
      bottom: -139px;
      right: -30px;
    }

    &:after {
      background: #006248;
      height: 170px;
      right: 51px;
      bottom: -141px;
      transform: rotate(-45deg);
    }
  }
}

.points {
  .marker:first-child {
    top: 490px;
    right: 450px;
  }

  .marker:last-child {
    top: 430px;
    right: 350px;
    animation-delay: 0.3s;
  }
}
</style>
