<template>
  <div v-if="numbers != null && numbers != undefined">
    <el-row v-for="i in 10" :key="'y' + i">
      <el-col v-for="j in 10" :key="'x' + j" :span="2.4">
        <grid-square :value="numbers[i-1][j-1]"></grid-square>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GridSquare from './GridSquare.vue'

export default {
  name: "SortingGrid",

  components: {
    GridSquare
  },

  created() {
    this.numbers = this.randomTable(10, 10);
  },

  data: () => ({
    numbers: null,
  }),

  methods: {
    randomTable(rows, cols) {
      return Array.from(
        {length: rows}, 
        () => Array.from({length: cols}, () => Math.floor(Math.random() * 100))
      )
    }
  }
}
</script>
