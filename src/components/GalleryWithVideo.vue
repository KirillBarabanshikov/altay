<template>
  <div class="template">
    <div class="img">
      <img :src="data.img" alt="">
    </div>
    <div class="video">
      <video :src="data.video" autoplay muted no-controls></video>
    </div>
    <div class="close" @click="$emit('close')"></div>
  </div>
</template>

<script>


export default {
  name: "GalleryWithVideo",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.close {
  width: 60px;
  height: 60px;
  background: url('@/assets/img/icons/back.svg') center / cover no-repeat;
  position: fixed;
  bottom: 24px;
  left: 600px;
  z-index: 22;
}

.template {
  position: relative;
  display: flex;
}

.img {
  flex: 0 0 540px;
  height: 1080px;
  overflow: auto;
  position: relative;
  z-index: 3;

  &::-webkit-scrollbar {
    display: none;
  }
}

.video {
  position: relative;

  video {
    position: relative;
    left: -540px;
  }
}
</style>
