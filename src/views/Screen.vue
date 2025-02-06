<template>
  <div class="main" @click="$router.push({name: 'home'})">
    <div class="video">
      <video autoplay muted no-controls loop src="@/assets/video/screen.mp4"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "Screen"
}
</script>

<style lang="scss" scoped>
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
</style>
