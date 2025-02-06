<template>
  <div class="template">
    <div class="img">
      <img :src="data.img" alt="">
    </div>
    <div class="bigImg">
      <img :src="data.bigImg" alt="">
    </div>
    <div class="close" @click="$emit('close')"></div>
  </div>
</template>

<script>


export default {
  name: "GalleryWithPhoto",
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
  background: url('@/assets/img/icons/close-green.svg') center / cover no-repeat;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 22;
}

.template {
  position: relative;
  display: flex;
}

.img {
  flex: 0 0 405px;
  height: 1080px;
  overflow: auto;
  position: relative;
  z-index: 3;

  &::-webkit-scrollbar {
    display: none;
  }
}

.bigImg {
  height: 1080px;
  width: 1515px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
