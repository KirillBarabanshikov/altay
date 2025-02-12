<template>
  <div class="main">
    <div class="video">
      <transition name="fade" mode="out-in">
        <div v-if="month === 1" class="markers one">
          <div
            @click="openGallery('visit')"
            :class="['event_popup left', { out: out }]"
          >
            Международный туристический форум <br />
            «VISIT ALTAI»
            <span>11-13 апреля 2023</span>
          </div>
        </div>
        <div v-else-if="month === 2" class="markers two">
          <div
            @click="openGallery('berloga')"
            :class="['event_popup left', { out: out }]"
          >
            Чемпионат Сибири по трофи-рейдам <br />
            на внедорожниках BERLOGA TROPHY
            <span>6-10 мая 2023</span>
          </div>
          <div
            @click="openGallery('night')"
            :class="['event_popup right', { out: out }]"
          >
            Ежегодная всероссийская акция <br />
            «Ночь музеев»
            <span>17 мая 2025 года</span>
          </div>
          <div
            @click="openGallery('moralnik')"
            :class="['event_popup right', { out: out }]"
          >
            Фестиваль <br />
            «Цветение маральника»
            <span>1 мая 2025 года</span>
          </div>
        </div>
        <div v-else-if="month === 3" class="markers three">
          <div
            @click="openGallery('maslenitsa')"
            :class="['event_popup left', { out: out }]"
          >
            Фестиваль «Сибирская масленица»
            <span>1 марта 2025 года</span>
          </div>
          <div
            @click="openGallery('marafon')"
            :class="['event_popup right', { out: out }]"
          >
            XV Тягунский лыжный марафон
            <span>29 марта 2025 года</span>
          </div>
        </div>
        <div v-else-if="!month" class="markers points">
          <div class="marker"></div>
          <div class="marker"></div>
          <div class="marker"></div>
          <div class="marker"></div>
          <div class="marker"></div>
          <div class="marker"></div>
        </div>
      </transition>
    </div>
    <div class="footer">
      <Nav
        :events-list="eventsList"
        @back="back"
        @changeMonth="changeMonth"
        two
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
import { mapMutations } from "vuex";
import Nav from "@/components/SeasonsNav/Nav.vue";
import Gallery from "@/components/Gallery.vue";
import GalleryEvents from "@/components/GalleryEvents.vue";

export default {
  name: "Spring",
  components: { GalleryEvents, Gallery, Nav },
  data() {
    return {
      show: false,
      out: false,
      month: null,
      eventsList: [
        {
          id: 3,
          title: "Март",
        },
        // {
        //   id: 1,
        //   title: "Апрель",
        // },
        {
          id: 2,
          title: "Май",
        },
      ],
      list: [],
      allPhotos: {
        // visit: [
        //   {
        //     id: 10,
        //     path: require("@/assets/events/spring/visit/3.jpg"),
        //     content: {
        //       title: "Международный туристический форум VISIT ALTAI",
        //       text: "Дискуссионная площадка для обмена опытом и встреч профессионалов. В деловой программе форума участвуют ведущие эксперты туристской отрасли. Тематические секции, семинары и мастер-классы дают возможность предпринимателям из туриндустрии познакомиться с  лучшими практиками коллег.",
        //       where: "г. Барнаул",
        //       when: "11-13 апреля 2023 года",
        //       link: "expo.visitaltai.info",
        //     },
        //   },
        //   {
        //     id: 2,
        //     path: require("@/assets/events/spring/visit/10.jpg"),
        //   },
        //   {
        //     id: 1,
        //     path: require("@/assets/events/spring/visit/1.jpg"),
        //   },
        //   {
        //     id: 3,
        //     path: require("@/assets/events/spring/visit/2.jpg"),
        //   },
        //   {
        //     id: 4,
        //     path: require("@/assets/events/spring/visit/4.jpg"),
        //   },
        //   {
        //     id: 5,
        //     path: require("@/assets/events/spring/visit/5.jpg"),
        //   },
        //   {
        //     id: 6,
        //     path: require("@/assets/events/spring/visit/6.jpg"),
        //   },
        //   {
        //     id: 7,
        //     path: require("@/assets/events/spring/visit/7.jpg"),
        //   },
        //   {
        //     id: 8,
        //     path: require("@/assets/events/spring/visit/8.jpg"),
        //   },
        //   {
        //     id: 9,
        //     path: require("@/assets/events/spring/visit/9.jpg"),
        //   },
        // ],
        moralnik: [
          {
            id: 1,
            path: require("@/assets/events/spring/moralnik/1.jpg"),
            content: {
              title: "Фестиваль «Цветение маральника»",
              text: "Открытие летнего туристического сезона в Алтайском крае – яркий взрыв эмоций, пробуждающий вечно спящие горы. Для гостей готовят развлечения на любой возраст. На открытой сцене выступают популярные группы, ремесленники проводят мастер-классы в ярморочных рядах, работают интерактивные площадки.",
              where: "ОЭЗ ТРТ «Бирюзовая Катунь», Алтайский район",
              when: "1 мая 2025 года",
              link: "maralnik.visitaltai.info",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/spring/moralnik/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/spring/moralnik/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/events/spring/moralnik/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/events/spring/moralnik/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/events/spring/moralnik/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/events/spring/moralnik/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/events/spring/moralnik/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/events/spring/moralnik/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/events/spring/moralnik/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/events/spring/moralnik/11.jpg"),
          },
          {
            id: 12,
            path: require("@/assets/events/spring/moralnik/12.jpg"),
          },
          {
            id: 13,
            path: require("@/assets/events/spring/moralnik/13.jpg"),
          },
          {
            id: 14,
            path: require("@/assets/events/spring/moralnik/14.jpg"),
          },
          {
            id: 15,
            path: require("@/assets/events/spring/moralnik/15.jpg"),
          },
          {
            id: 16,
            path: require("@/assets/events/spring/moralnik/16.jpg"),
          },
          {
            id: 17,
            path: require("@/assets/events/spring/moralnik/17.jpg"),
          },
          {
            id: 18,
            path: require("@/assets/events/spring/moralnik/18.jpg"),
          },
          {
            id: 19,
            path: require("@/assets/events/spring/moralnik/19.jpg"),
          },
          {
            id: 20,
            path: require("@/assets/events/spring/moralnik/20.jpg"),
          },
          {
            id: 21,
            path: require("@/assets/events/spring/moralnik/21.jpg"),
          },
          {
            id: 22,
            path: require("@/assets/events/spring/moralnik/22.jpg"),
          },
          {
            id: 22,
            path: require("@/assets/events/spring/moralnik/23.jpg"),
          },
        ],
        // berloga: [
        //   {
        //     id: 1,
        //     path: require("@/assets/events/spring/berloga/1.jpg"),
        //     content: {
        //       title:
        //         "Чемпионат Сибири по трофи-рейдам на внедорожниках BERLOGA TROPHY",
        //       text: "Чтобы покорить Салаирскую тайгу, нужны подготовленная мощная машина, отважные пилот и штурман! Им предстоит проходить на внедорожниках болота и реки, канавы и неожиданные повороты, крутые спуски и очень «залипательные» места. На финише героев ждут горячие шурпа и плов, автомойка с профессиональными мойщиками, призы, подарки и праздничный салют",
        //       where: "ГЛК BERLOGA, ст.Тягун, Заринский район",
        //       when: "6-10 мая 2023 года",
        //       link: "berloga_t, afasbarnaul",
        //     },
        //   },
        //   {
        //     id: 2,
        //     path: require("@/assets/events/spring/berloga/2.jpg"),
        //   },
        //   {
        //     id: 3,
        //     path: require("@/assets/events/spring/berloga/3.jpg"),
        //   },
        // ],
        night: [
          {
            id: 1,
            path: require("@/assets/events/spring/night/1.jpg"),
            content: {
              title: "Ежегодная всероссийская акция «Ночь музеев» ",
              text: "Музеи Алтайского края готовят специальные программы к ежегодной всероссийской акции. Посетители смогут побывать на необычных экскурсиях по выставочным залам, ярмарках и мастер-классах, принять участие в театрализованных программах и викторинах, посетить выставки одного дня, концерты и спектакли",
              where: "Музеи г. Барнаула и Алтайского края",
              when: "17 мая 2025 года",
              link: "museumnight.culture.ru",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/spring/night/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/spring/night/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/events/spring/night/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/events/spring/night/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/events/spring/night/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/events/spring/night/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/events/spring/night/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/events/spring/night/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/events/spring/night/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/events/spring/night/11.jpg"),
          },
          {
            id: 12,
            path: require("@/assets/events/spring/night/12.jpg"),
          },
        ],
        maslenitsa: [
          {
            id: 1,
            path: require("@/assets/events/spring/maslenitsa/1.jpg"),
            content: {
              title: "Фестиваль «Сибирская масленица»",
              text: "Большой народный праздник ежегодно собирает тысячи туристов. Богатая ярмарка радует гостей горячими угощениями, вкусными напитками и подарками ручной работы. Калейдоскоп спортивных состязаний, конкурсов и масленичных забав: народные масленичные гуляния, творческие конкурсы, ярмарка, конноспортивный праздник, сжигание Масленицы и большой масленичный хоровод вокруг костра, катание на русских тройках.",
              where:
                "ТРК «Сибирское подворье», с. Новотырышкино, Смоленский район",
              when: "1 марта 2025 года",
              link: "siberianmas.ru",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/spring/maslenitsa/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/spring/maslenitsa/3.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/events/spring/maslenitsa/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/events/spring/maslenitsa/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/events/spring/maslenitsa/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/events/spring/maslenitsa/9.jpg"),
          },
        ],
        marafon: [
          {
            id: 1,
            path: require("@/assets/events/spring/marafon/1.jpg"),
            content: {
              title: "XV Тягунский лыжный марафон",
              text: "Спортивно-массовое мероприятие проводится в рамках развития туристско-спортивного кластера «Тягун». В нём участвуют спортсмены Сибири, соревнуясь в лыжных забегах на длинные дистанции. Настоящие марафонские дистанции отправятся покорять только самые опытные и выносливые.",
              where: "ГЛК «БЕРЛОГА», ст. Тягун, Заринский район",
              when: "29 марта 2025 года",
              link: "sib-events.ru, berloga.ski",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/spring/marafon/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/spring/marafon/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/events/spring/marafon/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/events/spring/marafon/5.jpg"),
          },
        ],
      },
    };
  },
  methods: {
    openGallery(name) {
      this.list = this.allPhotos[name];
      this.show = true;
    },
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
    ...mapMutations(["backFromSeason"]),
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("@/assets/img/seasons/spring.png") center / cover no-repeat;
}

.one {
  .event_popup:nth-child(1) {
    top: 20px;
    right: 700px;
    animation-delay: 0.2s;
    display: none;

    &:before {
      right: -30px;
      bottom: -136px;
    }

    &:after {
      height: 170px;
      right: 51px;
      bottom: -141px;
      transform: rotate(-45deg);
    }
  }
}

.two {
  .event_popup:nth-child(1) {
    top: -30px;
    right: 50px;
    animation-delay: 0.2s;
    display: none;

    &:before {
      left: -30px;
      bottom: -80px;
    }

    &:after {
      height: 148px;
      left: 50px;
      bottom: -85px;
      transform: rotate(52deg);
    }
  }

  .event_popup:nth-child(2) {
    top: 20px;
    right: 700px;

    &:before {
      right: -30px;
      bottom: -136px;
    }

    &:after {
      height: 170px;
      right: 51px;
      bottom: -141px;
      transform: rotate(-45deg);
    }
  }

  .event_popup:nth-child(3) {
    bottom: 35px;
    right: 60px;

    &:before {
      top: -75px;
      left: 52px;
    }

    &:after {
      height: 102px;
      left: 122px;
      bottom: 105px;
      transform: rotate(-45deg);
    }
  }
}

.three {
  .event_popup:nth-child(1) {
    top: 341px;
    right: 166px;
    animation-delay: 0.2s;

    &:before {
      left: -30px;
      bottom: -80px;
    }

    &:after {
      height: 148px;
      left: 50px;
      bottom: -85px;
      transform: rotate(52deg);
    }
  }

  .event_popup:nth-child(2) {
    top: 3px;
    right: 481px;

    &:before {
      right: -30px;
      bottom: -136px;
    }

    &:after {
      height: 170px;
      right: 51px;
      bottom: -141px;
      transform: rotate(-45deg);
    }
  }
}

.points {
  .marker:nth-child(1) {
    top: 240px;
    right: 640px;
    display: none;
  }

  .marker:nth-child(2) {
    bottom: 220px;
    right: 285px;
    animation-delay: 0.2s;
  }

  .marker:nth-child(3) {
    display: none;
    top: 133px;
    right: 432px;
    animation-delay: 0.4s;
  }

  .marker:nth-child(4) {
    top: 219px;
    right: 674px;
    animation-delay: 0.6s;
  }

  .marker:nth-child(5) {
    top: 190px;
    right: 432px;
    animation-delay: 0.6s;
  }

  .marker:nth-child(6) {
    top: 467px;
    right: 551px;
    animation-delay: 0.8s;
  }
}
</style>
