<template>
  <div :class="['events', {two: two, one: one}]">
    <Back @back="$emit('back')"/>
    <transition-group name="slide-top">
      <div
        v-for="event in events"
        :key="event.id"
        @click="changeMonth(event.id)"
        :class="['event', {disabled: month && month !== event.id, active: event.id === month}]"
        v-html="event.title"
      >

      </div>
    </transition-group>
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";

export default {
  name: "Nav",
  components: {Back},
  props: {
    eventsList: {
      type: Array,
      required: true,
    },
    two: {
      type: Boolean,
      default: false,
    },
    one: {
      type: Boolean,
      default: false,
    },

  },
  data() {
    return {
      events: [],
      pushEventInterval: null,
      month: null,
    }
  },
  methods: {
    changeMonth(id) {
      this.$emit('changeMonth', id)
      this.month = id;
    },
    pushList() {


      let num = 0;
      this.pushEventInterval = setInterval(() => {
        this.events.push(this.eventsList[num])
        num++
        if (num === this.eventsList.length) {
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

<style lang="scss" scoped>
.events {
  padding: 0 440px;
  display: flex;
  gap: 85px;
  position: relative;
  height: 210px;

  &.two {
    padding: 0 628px;
  }

  &.one {
    padding: 0 815px;
  }
}

.event {
  width: 290px;
  height: 210px;
  display: flex;
  padding: 50px 0;
  justify-content: center;
  font-size: 36px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 500;
  background: url('@/assets/img/icons/btn.png') center / cover no-repeat;
  transition: transform 0.5s ease;

  &.disabled {
    transform: translateY(50px);
  }

  &.active {
    pointer-events: none;
  }
}
</style>
