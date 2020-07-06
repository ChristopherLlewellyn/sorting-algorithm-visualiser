<template>
  <div class="grid-content">{{ value }}</div>
</template>

<script>
export default {
  name: "GridSquare",
  props: {
    value: Number
  },
}
</script>

<style>
.grid-content {
    border: 1px solid;
    height: 36px;
    width: 36px;
}
</style>