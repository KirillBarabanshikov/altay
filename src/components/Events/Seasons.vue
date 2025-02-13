<template>
  <div class="events">
    <Back @back="$emit('back')" />
    <transition-group name="slide-top">
      <div
        v-for="event in events"
        :key="event.id"
        @click="routerPush(event)"
        class="event"
        v-html="event.title"
      ></div>
    </transition-group>
    <transition name="fade">
      <div v-if="show" class="season-gallery">
        <Gallery @close="show = false" :list="list" />
      </div>
    </transition>
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Seasons",
  components: { Gallery, Back },
  data() {
    return {
      events: [],
      pushEventInterval: null,
      show: false,
      list: [
        {
          id: 0,
          path: require("@/assets/events/results/0.jpg"),
        },
        {
          id: 1,
          path: require("@/assets/events/results/1.jpg"),
        },
        {
          id: 2,
          path: require("@/assets/events/results/2.jpg"),
        },
        {
          id: 3,
          path: require("@/assets/events/results/3.jpg"),
        },
        {
          id: 4,
          path: require("@/assets/events/results/4.jpg"),
        },
        {
          id: 5,
          path: require("@/assets/events/results/5.jpg"),
        },
        {
          id: 6,
          path: require("@/assets/events/results/6.jpg"),
        },
        {
          id: 7,
          path: require("@/assets/events/results/7.jpg"),
        },
        {
          id: 8,
          path: require("@/assets/events/results/8.jpg"),
        },
        {
          id: 9,
          path: require("@/assets/events/results/9.jpg"),
        },
        {
          id: 10,
          path: require("@/assets/events/results/10.jpg"),
        },
        {
          id: 11,
          path: require("@/assets/events/results/11.jpg"),
        },
        {
          id: 12,
          path: require("@/assets/events/results/12.jpg"),
        },
        {
          id: 13,
          path: require("@/assets/events/results/13.jpg"),
        },
        {
          id: 14,
          path: require("@/assets/events/results/14.jpg"),
        },
        {
          id: 15,
          path: require("@/assets/events/results/15.jpg"),
        },
        {
          id: 16,
          path: require("@/assets/events/results/16.jpg"),
        },
        {
          id: 17,
          path: require("@/assets/events/results/17.jpg"),
        },
        {
          id: 18,
          path: require("@/assets/events/results/18.jpg"),
        },
        {
          id: 19,
          path: require("@/assets/events/results/19.jpg"),
        },
        {
          id: 20,
          path: require("@/assets/events/results/20.jpg"),
        },
        {
          id: 21,
          path: require("@/assets/events/results/21.jpg"),
        },
        {
          id: 22,
          path: require("@/assets/events/results/22.jpg"),
        },
        {
          id: 23,
          path: require("@/assets/events/results/23.jpg"),
        },
        {
          id: 24,
          path: require("@/assets/events/results/24.jpg"),
        },
        {
          id: 25,
          path: require("@/assets/events/results/25.jpg"),
        },
        {
          id: 26,
          path: require("@/assets/events/results/26.jpg"),
        },
        {
          id: 27,
          path: require("@/assets/events/results/27.jpg"),
        },
        {
          id: 28,
          path: require("@/assets/events/results/28.jpg"),
        },
        {
          id: 29,
          path: require("@/assets/events/results/29.jpg"),
        },
        {
          id: 30,
          path: require("@/assets/events/results/30.jpg"),
        },
        {
          id: 31,
          path: require("@/assets/events/results/31.jpg"),
        },
        {
          id: 32,
          path: require("@/assets/events/results/32.jpg"),
        },
        {
          id: 33,
          path: require("@/assets/events/results/33.jpg"),
        },
        {
          id: 34,
          path: require("@/assets/events/results/34.jpg"),
        },
        {
          id: 35,
          path: require("@/assets/events/results/35.jpg"),
        },
        {
          id: 36,
          path: require("@/assets/events/results/36.jpg"),
        },
        {
          id: 37,
          path: require("@/assets/events/results/37.jpg"),
        },
        {
          id: 38,
          path: require("@/assets/events/results/38.jpg"),
        },
        {
          id: 39,
          path: require("@/assets/events/results/39.jpg"),
        },
      ],
    };
  },
  methods: {
    routerPush(event) {
      if (event.path) {
        this.$emit("routerPush", event.path);
      } else {
        this.show = true;
      }
    },
    pushList() {
      const events = [
        {
          id: 1,
          title: "Зима",
          path: "winter",
        },
        {
          id: 2,
          title: "Весна",
          path: "spring",
        },
        {
          id: 3,
          title: "Лето",
          path: "summer",
        },
        {
          id: 4,
          title: "Осень",
          path: "autumn",
        },
        {
          id: 5,
          title: "Событийный <br> календарь",
        },
      ];
      let num = 0;
      this.pushEventInterval = setInterval(() => {
        this.events.push(events[num]);
        num++;
        if (num === events.length) {
          clearInterval(this.pushEventInterval);
        }
      }, 300);
    },
  },
  created() {
    this.pushList();
  },
  beforeUnmount() {
    clearInterval(this.pushEventInterval);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";

.events {
  padding: 0 170px;
  display: flex;
  gap: 60px;
  position: relative;
  height: 194px;
}

.event {
  width: 268px;
  height: 194px;
  display: flex;
  padding: 30px 0;
  justify-content: center;
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 500;
  background: url("@/assets/img/icons/btn.png") center / cover no-repeat;
  line-height: 120%;
}
</style>
