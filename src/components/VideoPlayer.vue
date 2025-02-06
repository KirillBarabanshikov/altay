<template>
  <div class="video">
    <video :src="path.path" autoplay no-controls></video>
    <div class="close" @click="$emit('close')"></div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    path: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
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

.close {
  width: 60px;
  height: 60px;
  background: url('@/assets/img/icons/close.svg') center / cover no-repeat;
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 22;
}

</style>
