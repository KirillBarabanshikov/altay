<template>
  <div class='events'>
    <transition-group name='slide-top'>
      <div
          @click='changeEvents'
          class='event'
          key='event'
      >
        События
      </div>
      <div
          v-for='event in events'
          :key='event.id'
          @click='routerPush(event.path)'
          class='event'
          v-html='event.title'
      >

      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [],
      pushEventInterval: null
    }
  },
  methods: {
    routerPush(path) {
      this.$router.push({name: path})
    },
    changeEvents() {
      this.$emit('changeEvents')
    },
    pushList() {
      const events = [
        {
          id: 1,
          title: 'АЛТАЙ. <br> ПО СЛЕДАМ <br> Н.К. РЕРИХА',
          path: 'tract'
        },
        {
          id: 2,
          title: 'Видео',
          path: 'video'
        },
        {
          id: 3,
          title: 'Общая<br>Информация',
          path: 'information'
        },
        {
          id: 4,
          title: 'Лучшее в<br>алтайском крае',
          path: 'best'
        },
        {
          id: 5,
          title: 'Маршруты',
          path: 'routes'
        },
        {
          id: 6,
          title: 'Санаторно-<br>курортный<br>комплекс',
          path: 'complex'
        },
        {
          id: 7,
          title: 'А - ЭТО ГДЕ ВКУСНО!',
          path: 'vkusno'
        },
        {
          id: 8,
          title: 'А - ЭТО ГДЕ ИСТОРИЯ и современность',
          path: 'history'
        }

      ]
      let num = 0
      this.pushEventInterval = setInterval(() => {
        this.events.push(events[num])
        num++
        if (num === events.length) {
          clearInterval(this.pushEventInterval)
        }
      }, 300)
    }
  },
  created() {
    this.pushList()
  },
  beforeUnmount() {
    clearInterval(this.pushEventInterval)
  }
}

</script>

<style lang='scss' scoped>
@import "@/assets/scss/fonts.scss";

.events {
  padding: 0 50px;
  display: flex;
  gap: 19px;
}

.event {
  width: 185px;
  height: 133px;
  display: flex;
  padding: 20px 10px;
  justify-content: center;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 500;
  background: url('@/assets/img/icons/btn.png') center / cover no-repeat;

  &:nth-child(7) {
    padding: 10px 0;
  }

  &:last-child, &:nth-child(2) {
    padding: 5px 10px;
    font-size: 20px;
  }
}
</style>
