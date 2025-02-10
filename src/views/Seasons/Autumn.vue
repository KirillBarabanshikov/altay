<template>
  <div class="main">
    <div class="video">
      <transition name="fade" mode="out-in">
        <div v-if="month === 1" class="markers one">
          <div
            @click="openGallery('gid')"
            :class="['event_popup left', { out: out }]"
          >
            Слет инструкторов-проводников <br />
            «Золотой гид Алтая»
            <span> 7-10 сентября 2023</span>
          </div>
          <div
            @click="openGallery('enduro')"
            :class="['event_popup right', { out: out }]"
          >
            «Зов тайги» <br />
            Этап чемпионата Сибири классы новички, <br />
            любители, профи Moto hard- enduro гонки
            <span>14-15 сентября 2024</span>
          </div>
          <div
            @click="openGallery('town')"
            :class="['event_popup left', { out: out }]"
          >
            Акция <br />
            «Прошагай город»
            <span>16 сентябрь 2023</span>
          </div>
          <div
            @click="openGallery('tourism')"
            :class="['event_popup right', { out: out }]"
          >
            Фестиваль <br />
            «День туризма»
            <span>28 сентябрь 2024</span>
          </div>
          <div
            @click="openGallery('zoloto')"
            :class="['event_popup left', { out: out }]"
          >
            Всероссийский молодежный театральный фестиваль <br />
            имени Валерия Золотухина
            <span>сентябрь 2023</span>
          </div>
          <div
            @click="openGallery('amfest')"
            :class="['event_popup left', { out: out }]"
          >
            Фестиваль молодежи Алтайского края <br />
            «АМфест»
            <span>сентябрь 2024</span>
          </div>
        </div>
        <div v-else-if="month === 2" class="markers two">
          <div
            @click="openGallery('visit')"
            :class="['event_popup left', { out: out }]"
          >
            Международный туристический форум <br />
            «VISIT ALTAI»
            <span>25 ноября - 1 декабря 2024</span>
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
import GalleryEvents from "@/components/GalleryEvents.vue";

export default {
  name: "Autumn",
  components: { GalleryEvents, Nav },
  data() {
    return {
      out: false,
      show: false,
      month: null,
      eventsList: [
        {
          id: 1,
          title: "Сентябрь",
        },
        {
          id: 2,
          title: "Ноябрь",
        },
      ],
      allPhotos: {
        // visit: [
        //   {
        //     id: 10,
        //     path: require('@/assets/events/spring/visit/3.jpg'),
        //     content: {
        //       title: 'Международный туристический форум VISIT ALTAI',
        //       text: 'Дискуссионная площадка для обмена опытом и встреч профессионалов. В деловой программе форума участвуют ведущие эксперты туристской отрасли. Тематические секции, семинары и мастер-классы дают возможность предпринимателям из туриндустрии познакомиться с  лучшими практиками коллег.',
        //       where: 'г. Барнаул',
        //       when: '25 ноября - 1 декабря 2024',
        //       link: 'expo.visitaltai.info'
        //     }
        //   },
        //   {
        //     id: 2,
        //     path: require('@/assets/events/spring/visit/10.jpg')
        //   },
        //   {
        //     id: 1,
        //     path: require('@/assets/events/spring/visit/1.jpg')
        //   }, {
        //     id: 3,
        //     path: require('@/assets/events/spring/visit/2.jpg')
        //   }, {
        //     id: 4,
        //     path: require('@/assets/events/spring/visit/4.jpg')
        //   }, {
        //     id: 5,
        //     path: require('@/assets/events/spring/visit/5.jpg')
        //   }, {
        //     id: 6,
        //     path: require('@/assets/events/spring/visit/6.jpg')
        //   }, {
        //     id: 7,
        //     path: require('@/assets/events/spring/visit/7.jpg')
        //   }, {
        //     id: 8,
        //     path: require('@/assets/events/spring/visit/8.jpg')
        //   }, {
        //     id: 9,
        //     path: require('@/assets/events/spring/visit/9.jpg')
        //   }, {
        //     id: 10,
        //     path: require('@/assets/events/spring/visit/10.jpg')
        //   },
        //   {
        //     id: 11,
        //     path: require('@/assets/events/spring/visit/11.jpg')
        //   },
        //   {
        //     id: 12,
        //     path: require('@/assets/events/spring/visit/12.jpg')
        //   }
        //
        // ],
        // gid: [
        //   {
        //     id: 1,
        //     path: require('@/assets/events/autumn/gid/1.jpg'),
        //     content: {
        //       title: 'Слет инструкторов-проводников «Золотой гид Алтая»',
        //       text: 'Более 100 участников демонстрируют навыки пешеходного, водного и горного туризма, техники скалолазания и легкого слалома на каяке, конного и велотуризма. В программе соревнований – командные гонки и демонстрация навыков поисково-спасательных работ, конкурс профессиональной компетенции, экскурсоведения и краеведения.',
        //       where: 'левобережье р. Катунь (район оз. Ая – р.Устюба – Бирюзовая Катунь), турбаза «Сердце Алтая»',
        //       when: '7-10 сентября 2023 г.',
        //       link: 'vk.com/greatealtai'
        //     }
        //   }, {
        //     id: 2,
        //     path: require('@/assets/events/autumn/gid/2.jpg')
        //   }, {
        //     id: 3,
        //     path: require('@/assets/events/autumn/gid/3.jpg')
        //   }, {
        //     id: 4,
        //     path: require('@/assets/events/autumn/gid/4.jpg')
        //   }, {
        //     id: 5,
        //     path: require('@/assets/events/autumn/gid/5.jpg')
        //   }, {
        //     id: 6,
        //     path: require('@/assets/events/autumn/gid/6.jpg')
        //   }, {
        //     id: 7,
        //     path: require('@/assets/events/autumn/gid/7.jpg')
        //   }
        // ],
        // town: [
        //   {
        //     id: 1,
        //     path: require('@/assets/events/autumn/town/1.jpg'),
        //     content: {
        //       title: 'Акция «Прошагай город»',
        //       text: 'Участники квеста начнут распутывать интригующие сюжеты из прошлого краевой столицы, отправившись по знаковым местам Барнаула. Отыскивая кличи квеста и продвигаясь по своему маршруту в сопровождении главного персонажа сюжета, участники игры наносят на электронные карты интересные туристические объекты с описаниями, комментариями и фотографиями',
        //       where: 'г. Барнаул',
        //       when: '16 сентябрь 2023 г.',
        //       link: 'visitaltai.info'
        //     }
        //   }, {
        //     id: 2,
        //     path: require('@/assets/events/autumn/town/2.jpg')
        //   }, {
        //     id: 3,
        //     path: require('@/assets/events/autumn/town/3.jpg')
        //   }, {
        //     id: 4,
        //     path: require('@/assets/events/autumn/town/4.jpg')
        //   }, {
        //     id: 5,
        //     path: require('@/assets/events/autumn/town/5.jpg')
        //   }
        // ],
        tourism: [
          {
            id: 1,
            path: require("@/assets/events/autumn/tourism/1.jpg"),
            content: {
              title: "Фестиваль «День туризма»",
              text: "Фестиваль раскрывает разные стороны туристического бренда региона: «Настоящая природа» и «Настоящая история», «Настоящее здоровье» и «Настоящие приключения», «Настоящие события», «Настоящие ремесла» и «Настоящие люди». Локации праздника вдохновят новыми идеями для путешествий по региону и познакомят с организаторами отдыха в Алтайском крае. Семейный формат фестиваля сделает его интересным разным поколениям туристов. Украшением мероприятия станет фестиваль бардовской песни.",
              where: "ОЭЗ ТРТ «Бирюзовая Катунь», Алтайский район",
              when: "28 сентябрь 2024 г.",
              link: "visitaltai.info",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/autumn/tourism/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/autumn/tourism/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/events/autumn/tourism/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/events/autumn/tourism/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/events/autumn/tourism/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/events/autumn/tourism/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/events/autumn/tourism/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/events/autumn/tourism/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/events/autumn/tourism/10.jpg"),
          },
          {
            id: 11,
            path: require("@/assets/events/autumn/tourism/11.jpg"),
          },
          {
            id: 12,
            path: require("@/assets/events/autumn/tourism/12.jpg"),
          },
          {
            id: 13,
            path: require("@/assets/events/autumn/tourism/13.jpg"),
          },
          {
            id: 14,
            path: require("@/assets/events/autumn/tourism/14.jpg"),
          },
          {
            id: 15,
            path: require("@/assets/events/autumn/tourism/15.jpg"),
          },
          {
            id: 16,
            path: require("@/assets/events/autumn/tourism/16.jpg"),
          },
          {
            id: 17,
            path: require("@/assets/events/autumn/tourism/17.jpg"),
          },
          {
            id: 18,
            path: require("@/assets/events/autumn/tourism/18.jpg"),
          },
          {
            id: 19,
            path: require("@/assets/events/autumn/tourism/19.jpg"),
          },
          {
            id: 20,
            path: require("@/assets/events/autumn/tourism/20.jpg"),
          },
        ],
        enduro: [
          {
            id: 1,
            path: require("@/assets/events/autumn/enduro/1.jpg"),
            content: {
              title:
                "«Зов тайги» Этап чемпионата Сибири классы новички, любители, профи Moto hard- enduro гонки",
              text: "Осенняя гонка по таежному бездорожью в алтайской части Салаира имеет два статуса: Первенство Алтайского края по мотоциклетному спорту в дисциплине hard- enduro и финал Чемпионата Сибири «Зов тайги»",
              where: "ГЛК BERLOGA, ст.Тягун, Заринский район",
              when: "14-15 сентября 2024 г.",
              link: "vk.com/public206969995, www.berloga.ski",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/autumn/enduro/2.jpg"),
          },
        ],
        // zoloto: [
        //   {
        //     id: 1,
        //     path: require('@/assets/events/autumn/zoloto/1.jpg'),
        //     content: {
        //       title: 'Всероссийский молодежный театральный фестиваль имени Валерия Золотухина ',
        //       text: 'Для людей театра из разных регионов страны – это профессиональный форум. Для любителей театрального искусства – праздничная акция. За неделю зритель увидит дюжину спектаклей, поставленных в последние два года, преимущественно молодежной тематики.',
        //       where: ' г.Барнаул',
        //       when: 'сентябрь 2023 г.',
        //       link: 'vk.com/zolotuhinfest'
        //     }
        //   }, {
        //     id: 2,
        //     path: require('@/assets/events/autumn/zoloto/2.jpg')
        //   }
        // ],
        amfest: [
          {
            id: 1,
            path: require("@/assets/events/autumn/amfest/1.jpg"),
            content: {
              title: "Фестиваль молодежи Алтайского края «АМфест»",
              text: "Фестиваль соединяет самые популярные молодежные движения. Каждая площадка – это концентрация хобби и увлечений молодого поколения края. Лекции, знакомства, туризм, спорт, IT-технологии, работа и труд – все это гармонично сосуществуют на одной территории.",
              where: "г. Барнаул",
              when: "сентябрь 2024",
              link: "vk.com/amfest2023, altaimolodoi.ru",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/autumn/amfest/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/autumn/amfest/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/events/autumn/amfest/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/events/autumn/amfest/5.jpg"),
          },
        ],
      },
      list: [],
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
  background: url("@/assets/img/seasons/autumn.png") center / cover no-repeat;
}

.one {
  .event_popup:nth-child(1) {
    display: none;
    bottom: 35px;
    right: 60px;

    &:before {
      top: -79px;
      left: 121px;
    }

    &:after {
      height: 102px;
      left: 178px;
      bottom: 105px;
      transform: rotate(-45deg);
    }
  }

  .event_popup:nth-child(2) {
    top: -50px;
    right: 50px;
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

  .event_popup:nth-child(3) {
    top: 20px;
    right: 700px;
    animation-delay: 0.4s;
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

  .event_popup:nth-child(4) {
    bottom: 295px;
    right: 150px;
    animation-delay: 0.3s;

    &:before {
      bottom: -79px;
      left: 190px;
    }

    &:after {
      height: 102px;
      left: 178px;
      bottom: -74px;
      transform: rotate(-45deg);
    }
  }

  .event_popup:nth-child(5) {
    display: none;
    top: 506px;
    left: 584px;
    animation-delay: 0.6s;

    &:before {
      right: -156px;
      top: -20px;
    }

    &:after {
      height: 170px;
      right: -48px;
      bottom: 18px;
      transform: rotate(65deg);
    }
  }

  .event_popup:nth-child(6) {
    top: 252px;
    right: 811px;
    animation-delay: 0.4s;

    &:before {
      right: -122px;
      bottom: 59px;
    }

    &:after {
      height: 100px;
      right: -39px;
      bottom: 28px;
      transform: rotate(-89deg);
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
    bottom: 208px;
    right: 304px;
    animation-delay: 0.2s;
  }

  .marker:nth-child(3) {
    top: 133px;
    right: 432px;
    animation-delay: 0.4s;
  }

  .marker:nth-child(4) {
    bottom: 247px;
    right: 266px;
    animation-delay: 0.6s;
    display: none;
  }

  .marker:nth-child(5) {
    top: 450px;
    right: 620px;
    animation-delay: 0.3s;
    display: none;
  }

  .marker:nth-child(6) {
    top: 265px;
    right: 671px;
  }
}

.two {
  .event_popup:nth-child(1) {
    top: 20px;
    right: 700px;
    animation-delay: 0.2s;

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
</style>
