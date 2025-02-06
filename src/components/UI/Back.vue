<template>
  <div
    @click="$emit('back')"
    :class="['back', {black: black, bottom: bottom}]"
  >
    <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="45" r="43" stroke-width="4"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M55.0731 23.1252C56.4791 24.4531 56.5184 26.6445 55.1609 28.0198L37.8036 45.6049L55.0715 61.8929C56.4784 63.2199 56.5191 65.4112 55.1625 66.7874C53.8059 68.1636 51.5657 68.2034 50.1588 66.8764L31.3615 49.1458C29.391 47.2872 29.335 44.2175 31.2363 42.2912L50.0694 23.211C51.4269 21.8357 53.6671 21.7973 55.0731 23.1252Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    black: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },

  },
  name: "Back"
}
</script>

<style lang="scss" scoped>
.back {
  width: 90px;
  height: 90px;
  position: absolute;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);
  z-index: 100;
  svg {
    fill: transparent;
    stroke: white;
    pointer-events: none;

    path {
      fill: white;
    }
  }

  &.black {
    svg {
      stroke: black;

      path {
        fill: black;
      }
    }
  }
  &.bottom {
    top: auto;
    bottom: 32px;
    transform: translateY(0);
  }
}
</style>
