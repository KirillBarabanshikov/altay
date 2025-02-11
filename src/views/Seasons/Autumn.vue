<template>
  <div class="main">
    <div class="video">
      <transition name="fade" mode="out-in">
        <div v-if="month === 1" class="markers one">
          <div
            @click="openGallery('quest')"
            :class="['event_popup left', { out: out }]"
          >
            Фестиваль исторических квестов <br />
            «Квест-фест»
            <span>27 сентября 2025 года</span>
          </div>
        </div>
        <div v-else-if="month === 2" class="markers two">
          <div
            @click="openGallery('forum')"
            :class="['event_popup right', { out: out }]"
          >
            Сибирский форум по оздоровительному <br />
            и медицинскому туризму
            <span>Октябрь 2025 года</span>
          </div>
        </div>
        <div v-else-if="!month" class="markers points">
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
        quest: [
          {
            id: 1,
            path: require("@/assets/events/autumn/quest/1.jpg"),
            content: {
              title: "Фестиваль исторических квестов «Квест-фест»",
              text: "Фестиваль знакомит местных жителей и гостей городов с маршрутами по Барнаулу и Бийску через захватывающие сюжеты игр-путешествий. Формирование команд и прохождение маршрута происходит после электронной регистрации через чат-бот в Telegram.",
              where: "г. Барнаул, г. Бийск",
              when: "27 сентября 2025 года",
              link: "visitaltai.info",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/autumn/quest/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/autumn/quest/3.jpg"),
          },
        ],
        forum: [
          {
            id: 1,
            path: require("@/assets/events/autumn/forum/1.jpg"),
            content: {
              title:
                "Сибирский форум по оздоровительному и медицинскому туризму",
              text: "Форум собирает экспертов в области курортологии и медицинской реабилитации, где происходит обмен последним достижениями и результатами исследований, а также обсуждаются вопросы развития санаторно-курортного комплекса.",
              where: "Алтайский край",
              when: "Октябрь 2025 года",
              link: "expo.visitaltai.info",
            },
          },
          {
            id: 2,
            path: require("@/assets/events/autumn/forum/2.jpg"),
          },
          {
            id: 3,
            path: require("@/assets/events/autumn/forum/3.jpg"),
          },
          {
            id: 4,
            path: require("@/assets/events/autumn/forum/4.jpg"),
          },
          {
            id: 5,
            path: require("@/assets/events/autumn/forum/5.jpg"),
          },
          {
            id: 6,
            path: require("@/assets/events/autumn/forum/6.jpg"),
          },
          {
            id: 7,
            path: require("@/assets/events/autumn/forum/7.jpg"),
          },
          {
            id: 8,
            path: require("@/assets/events/autumn/forum/8.jpg"),
          },
          {
            id: 9,
            path: require("@/assets/events/autumn/forum/9.jpg"),
          },
          {
            id: 10,
            path: require("@/assets/events/autumn/forum/10.jpg"),
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
    top: 460px;
    left: 741px;

    &:before {
      right: -346px;
      top: -49px;
    }

    &:after {
      height: 340px;
      right: -157px;
      bottom: -30px;
      transform: rotate(80deg);
    }
  }
}

.two {
  .event_popup:nth-child(1) {
    right: 23px;
    top: 287px;

    &:before {
      left: 52px;
      bottom: -116px;
    }

    &:after {
      height: 102px;
      left: 104px;
      top: 130px;
      transform: rotate(-153deg);
    }
  }
}

.points {
  .marker:nth-child(1) {
    top: 387px;
    left: 1416px;
  }

  .marker:nth-child(2) {
    top: 502px;
    left: 1491px;
    animation-delay: 0.2s;
  }
}
</style>
