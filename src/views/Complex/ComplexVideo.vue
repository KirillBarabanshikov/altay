<template>
  <div class="main">
    <video ref="video" :src="video.path" autoplay no-controls></video>
    <Back @back="$router.go(-1)" bottom/>
    <div @click="pushDashboard" class="btn">
      <img src="@/assets/complex/btn.png" alt="">
    </div>
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";

export default {
  name: "ComplexVideo",
  components: {Back},
  data() {
    return {
      video: {
        path: require('@/assets/complex/complex.mp4'),
      }
    }
  },
  methods: {
    pushDashboard() {
      this.$router.push({name: 'complex_dashboard'})
    }
  },
  mounted() {
    const video = this.$refs.video;
    video.addEventListener('ended', this.pushDashboard)
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0;
  margin: 0;
}

.video {
  position: relative;
  width: 100%;
  height: 100%;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.btn {
  position: absolute;
  right: 32px;
  bottom: 32px;
  border-radius: 46px;
  overflow: hidden;
  width: 483px;
  height: 272px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
