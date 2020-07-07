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

    fontSize() {
      let size;
      switch(this.gridSize) {
        case 5:
          size = 50;
          break;

        case 6:
          size = 45;
          break;

        case 7:
          size = 35;
          break;

        case 8:
          size = 32;
          break;

        case 9:
          size = 30;
          break;

        case 10:
          size = 27;
          break;

        case 11:
          size = 25;
          break;

        case 12:
          size = 23;
          break;

        case 13:
          size = 21;
          break;

        case 14:
          size = 19;
          break;

        case 15:
          size = 17;
          break;

        case 16:
          size = 16;
          break;

        default:
          size = 14;
          break;
      }
      return size;
    },

    cssVars() {
      return {
        '--bg-color': this.bgColor,
        '--size': this.size + 'px',
        '--font-size': this.fontSize + 'px'
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
  font-size: var(--font-size);
  font-family: 'Source Code Pro', monospace;
}
</style>