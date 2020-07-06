<template>
  <div
  class="grid-content" 
  :style="{ background: percentageToHsl(value/numberOfGridElements, hue0, hue1) }"
  >
  {{ value }}
  </div>
</template>

<script>
export default {
  name: "GridSquare",

  props: {
    value: Number,
    numberOfGridElements: Number
  },

  data: () => ({
    hue0: 0,
    hue1: 120
  }),

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
  height: 36px;
  width: 36px;
  text-align: center;
  vertical-align: middle;
  line-height: 36px;
}
</style>