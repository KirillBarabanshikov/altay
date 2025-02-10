<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      time: 0,
    };
  },
  methods: {
    resetTimer() {
      this.time = 0;
    },
    inactivityTime() {
      this.interval = setInterval(() => {
        this.time++;

        if (this.time >= 600) {
          this.resetTimer();
          if (this.$route.name !== "screen") {
            this.$router.push({ name: "screen" });
          }
        }
      }, 1000);
      // сюда можно добавить любой ивент.
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.resetTimer);
    document.addEventListener("keypress", this.resetTimer);
    document.addEventListener("touch", this.resetTimer);
    this.inactivityTime();
  },
  beforeUnmount() {
    clearInterval(this.interval);
    document.removeEventListener("mousemove", this.resetTimer);
    document.removeEventListener("keypress", this.resetTimer);
    document.removeEventListener("touch", this.resetTimer);
  },
};
</script>
<style lang="scss"></style>
