<template>
  <div
  class="grid-content" 
  :style="cssVars"
  >
  {{ value }}
  </div>
</template>

<script>
export default {
  name: "GridSquare",

  props: {
    value: Number,
    gridSize: Number
  },

  data: () => ({
    hue0: 0,
    hue1: 120
  }),

  computed: {
    bgColor() {
      return this.percentageToHsl(this.value/100, this.hue0, this.hue1);
    },

    size() {
      return 500 / this.gridSize; // 500 because our target grid size is 500 x 500 pixels
    },

    cssVars() {
      return {
        '--bg-color': this.bgColor,
        '--size': this.size + 'px'
      }
    }
  },

  methods: {
    // Creates an HSL colour hue
    percentageToHsl(percentage, hue0, hue1) {
      var hue = (percentage * (hue1 - hue0)) + hue0;
      return 'hsl(' + hue + ', 100%, 50%)';
    }
  }
}
</script>

<style>
.grid-content {
  background: var(--bg-color);
  height: var(--size);
  width: var(--size);
  line-height: var(--size);
  text-align: center;
  vertical-align: middle;
}
</style>