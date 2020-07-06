<template>
  <div>
    <el-row v-for="i in 10" :key="'y' + i">
      <el-col v-for="j in 10" :key="'x' + j" :span="2.4">
        <grid-square :value="numbers2dArray[i-1][j-1]" :numberOfGridElements="100"></grid-square>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GridSquare from './GridSquare.vue'

export default {
  name: "SortingGrid",

  props: {
    numbers2dArray: Array
  },

  components: {
    GridSquare
  }
}
</script>

<style>
.el-row {
  margin-bottom: 1px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  margin-right: 1px;
}

.el-col:last-child {
  margin-right: 0;
}
</style>