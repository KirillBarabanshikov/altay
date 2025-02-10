<template>
  <div class="main">
    <div v-if="!show" class="grid">
      <div @click="show = true" class="item scaleIn">
        <img src="@/assets/complex/dashboard/1.png" alt="" />
      </div>
      <div @click="$router.push({ name: 'sanatoriums' })" class="item scaleIn">
        <img src="@/assets/complex/dashboard/2.png" alt="" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="show" class="season-gallery">
        <Gallery @close="show = false" :list="list" />
      </div>
    </transition>
    <Back @back="$router.go(-1)" bottom />
  </div>
</template>

<script>
import Back from "@/components/UI/Back.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "ComplexDashboard",
  components: { Gallery, Back },
  data() {
    return {
      show: false,
      list: [
        {
          id: 1,
          path: require("@/assets/complex/buklet/1.jpeg"),
        },
        {
          id: 2,
          path: require("@/assets/complex/buklet/2.jpeg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("@/assets/img/bg_2.png") center / cover no-repeat;
}

.grid {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin: 300px 0 0;
}

.item {
  width: 751px;
  height: 424px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
