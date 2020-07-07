<template>
  <div id="sorting-grid">
    <el-row v-for="i in 10" :key="'y' + i" type="flex" justify="center">
      <el-col v-for="j in 10" :key="'x' + j" :span="2.4">
        <grid-square :value="numbers2dArray[i-1][j-1]" :numberOfGridElements="100"></grid-square>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <div class="sorted-notifier">
        <el-row type="flex" justify="center">
          <img :src="sorted ? require('@/assets/happy.gif') : require('@/assets/sad.gif')" alt="sad face" height="60px" width="60px"/>
        </el-row>
        <span class="text" :style="{ color: sorted ? 'lightgreen' : 'lightcoral' }">
          {{ sorted ? 'Sorted' : 'Unsorted'}}
          <font-awesome-icon :icon="sorted ? ['fas', 'check'] : ['fas', 'times']"></font-awesome-icon>
        </span>
      </div>
    </el-row>
  </div>
</template>

<script>
import GridSquare from './GridSquare.vue'

export default {
  name: "SortingGrid",

  props: {
    numbers2dArray: Array,
    sorted: Boolean
  },

  components: {
    GridSquare
  }
}
</script>

<style>
.sorted-notifier {
  margin-top: 20px;
}

.sorted-notifier .text {
  font-size: 20px;
  font-family: 'Source Code Pro', monospace;
}

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