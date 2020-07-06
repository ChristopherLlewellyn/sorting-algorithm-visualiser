<template>
  <sorting-grid :numbers2dArray="dataset"/>
</template>

<script>
import SortingGrid from '../components/SortingGrid.vue'

export default {
  components: {
    SortingGrid
  },

  data: () => ({
    dataset: null,
  }),

  created() {
    this.dataset = this.randomTable(10, 10);
  },

  methods: {
    randomTable(rows, cols) {
      return Array.from(
        {length: rows}, 
        () => Array.from({length: cols}, () => Math.floor(Math.random() * 100))
      );
    }
  }
}
</script>
