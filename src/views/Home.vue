<template>
  <div class="main">

    <div class="video">
      <video src="@/assets/video/bg.mp4" loop autoplay muted no-controls></video>
    </div>
    <footer class="footer">
      <transition
        name="slide-top"
        appear
        mode="out-in"
      >
        <Events v-if="events === 1" key="1" @changeEvents="setEvents(2)"/>
        <Seasons v-else-if="events === 2" key="2" @back="setEvents(1)" @routerPush="routerPushSeasons"/>
      </transition>
    </footer>
  </div>
</template>

<script>
import Events from "@/components/Events/Events.vue";
import Seasons from "@/components/Events/Seasons.vue";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Home",
  components: {Seasons, Events},
  data() {
    return {}
  },

  methods: {
    routerPushSeasons(path) {
      this.setEvents(null);
      setTimeout(() => {
        this.$router.push({name: path})
      }, 800)

    },
    ...mapMutations(['setEvents'])
  },
  computed: {
    ...mapGetters(['events'])
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

</style>
