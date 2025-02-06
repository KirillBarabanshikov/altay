<template>
  <div class="events">
    <Back @back="$emit('back')"/>
    <transition-group name="slide-top">
      <div
        v-for="event in events"
        :key="event.id"
        @click="routerPush(event)"
        class="event"
        v-html="event.title"
      >

      </div>
    </transition-group>
    <transition name="fade">
      <div v-if="show" class="season-gallery">
        <Gallery @close="show = false" :list="list"/>
      </div>
    </transition>
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Seasons",
  components: {Gallery, Back},
  data() {
    return {
      events: [],
      pushEventInterval: null,
      show: false,
      list: [
        {
          id: 44,
          path: require('@/assets/events/results/44.jpeg')
        },
        {
          id: 1,
          path: require('@/assets/events/results/1.jpeg')
        },
        {
          id: 2,
          path: require('@/assets/events/results/2.jpeg')
        },
        {
          id: 3,
          path: require('@/assets/events/results/3.jpeg')
        },
        {
          id: 4,
          path: require('@/assets/events/results/4.jpeg')
        },
        {
          id: 5,
          path: require('@/assets/events/results/5.jpeg')
        },
        {
          id: 6,
          path: require('@/assets/events/results/6.jpeg')
        },
        {
          id: 7,
          path: require('@/assets/events/results/7.jpeg')
        },
        {
          id: 8,
          path: require('@/assets/events/results/8.jpeg')
        },
        {
          id: 9,
          path: require('@/assets/events/results/9.jpeg')
        },
        {
          id: 10,
          path: require('@/assets/events/results/10.jpeg')
        },
        {
          id: 11,
          path: require('@/assets/events/results/11.jpeg')
        },
        {
          id: 12,
          path: require('@/assets/events/results/12.jpeg')
        },
        {
          id: 13,
          path: require('@/assets/events/results/13.jpeg')
        },
        {
          id: 14,
          path: require('@/assets/events/results/14.jpeg')
        },
        {
          id: 15,
          path: require('@/assets/events/results/15.jpeg')
        },
        {
          id: 16,
          path: require('@/assets/events/results/16.jpeg')
        },
        {
          id: 17,
          path: require('@/assets/events/results/17.jpeg')
        },
        {
          id: 18,
          path: require('@/assets/events/results/18.jpeg')
        },
        {
          id: 19,
          path: require('@/assets/events/results/19.jpeg')
        },
        {
          id: 20,
          path: require('@/assets/events/results/20.jpeg')
        },
        {
          id: 21,
          path: require('@/assets/events/results/21.jpeg')
        },
        {
          id: 22,
          path: require('@/assets/events/results/22.jpeg')
        },
        {
          id: 23,
          path: require('@/assets/events/results/23.jpeg')
        },
        {
          id: 24,
          path: require('@/assets/events/results/24.jpeg')
        },
        {
          id: 25,
          path: require('@/assets/events/results/25.jpeg')
        },
        {
          id: 26,
          path: require('@/assets/events/results/26.jpeg')
        },
        {
          id: 27,
          path: require('@/assets/events/results/27.jpeg')
        },
        {
          id: 28,
          path: require('@/assets/events/results/28.jpeg')
        },
        {
          id: 29,
          path: require('@/assets/events/results/29.jpeg')
        },
        {
          id: 30,
          path: require('@/assets/events/results/30.jpeg')
        },
        {
          id: 31,
          path: require('@/assets/events/results/31.jpeg')
        },
        {
          id: 32,
          path: require('@/assets/events/results/32.jpeg')
        },
        {
          id: 33,
          path: require('@/assets/events/results/33.jpeg')
        },
        {
          id: 34,
          path: require('@/assets/events/results/34.jpeg')
        },
        {
          id: 35,
          path: require('@/assets/events/results/35.jpeg')
        },
        {
          id: 36,
          path: require('@/assets/events/results/36.jpeg')
        },
        {
          id: 37,
          path: require('@/assets/events/results/37.jpeg')
        },
        {
          id: 38,
          path: require('@/assets/events/results/38.jpeg')
        },
        {
          id: 39,
          path: require('@/assets/events/results/39.jpeg')
        },
        {
          id: 40,
          path: require('@/assets/events/results/40.jpeg')
        },
        {
          id: 41,
          path: require('@/assets/events/results/41.jpeg')
        },
        {
          id: 42,
          path: require('@/assets/events/results/42.jpeg')
        },
        {
          id: 43,
          path: require('@/assets/events/results/43.jpeg')
        },


      ]
    }
  },
  methods: {
    routerPush(event) {
      if (event.path) {
        this.$emit('routerPush', event.path)
      } else {
        this.show = true
      }

    }
    ,
    pushList() {
      const events = [
        {
          id: 1,
          title: 'Зима',
          path: 'winter'
        },
        {
          id: 2,
          title: 'Весна',
          path: 'spring'
        },
        {
          id: 3,
          title: 'Лето',
          path: 'summer'
        },
        {
          id: 4,
          title: 'Осень',
          path: 'autumn'
        },
        {
          id: 5,
          title: 'Событийный <br> календарь',
        },
      ];
      let num = 0;
      this.pushEventInterval = setInterval(() => {
        this.events.push(events[num])
        num++
        if (num === events.length) {
          clearInterval(this.pushEventInterval)
        }
      }, 300)
    }
  }
  ,
  created() {
    this.pushList()
  }
  ,
  beforeUnmount() {
    clearInterval(this.pushEventInterval)
  }
}

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
  background: url('@/assets/img/icons/btn.png') center / cover no-repeat;
  line-height: 120%;
}
</style>
