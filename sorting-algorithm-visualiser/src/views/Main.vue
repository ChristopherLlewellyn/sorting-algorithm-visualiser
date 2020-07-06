<template>
  <div>
    <sorting-grid :numbers2dArray="gridValues"/>
    <el-button @click="bubbleSort()">Bubble Sort</el-button>
    <el-button @click="insertionSort()">Insertion Sort</el-button>
    <el-button @click="selectionSort()">Selection Sort</el-button>
  </div>
</template>

<script>
import SortingGrid from '../components/SortingGrid.vue'

export default {
  components: {
    SortingGrid
  },

  data: () => ({
    dataset: null,
    gridValues: null,
  }),

  created() {
    this.dataset = this.randomArray(100, 0, 100);
    this.gridValues = this.convert1dArrayTo2dArray(this.dataset, 10);
  },

  watch: {
    dataset(newDataset) {
      this.gridValues = this.convert1dArrayTo2dArray(newDataset, 10);
    }
  },

  methods: {
    //* Data preparation methods
    // Create array of random numbers between min and max
    randomArray(length, min, max) {
      return Array.from({length: length}, () => Math.floor(Math.random() * (max - min) + min));
    },

    // 1D to 2D array
    convert1dArrayTo2dArray(array, rowSize) {
      let oldArr = [...array]; // We have to clone the array (not reference)
      let newArr = [];
      while(oldArr.length) newArr.push(oldArr.splice(0,rowSize));
      return newArr;
    },

    //! (Unused) Create a 2D array (grid) with random data
    randomGrid(rows, cols) {
      return Array.from(
        {length: rows}, 
        () => Array.from({length: cols}, () => Math.floor(Math.random() * 100))
      );
    },

    //* Sorting Algorithms
    // Bubble Sort
    async bubbleSort() {
      let swap;
      do {
        swap = false;
        for (let i = 1; i < this.dataset.length; ++i) {
          await this.update(5);
          if (this.dataset[i - 1] > this.dataset[i]) {
            [this.dataset[i], this.dataset[i - 1]] = [this.dataset[i - 1], this.dataset[i]];
            swap = true;
          }
        }
      } while (swap)
    },

    // Insertion Sort
    async insertionSort() {
      let length = this.dataset.length;
      for (let i = 1; i < length; i++) {
        let key = this.dataset[i];
        let j = i - 1;
        while (j >= 0 && this.dataset[j] > key) {
          await this.update(5);
          this.dataset[j + 1] = this.dataset[j];
          j = j - 1;
        }
        this.dataset[j + 1] = key;
      }
    },

    // Selection Sort
    async selectionSort() {
      for(var i = 0; i < this.dataset.length; i++){
        //set min to the current iteration of i
        var min = i;
        for(var j = i+1; j < this.dataset.length; j++){
          if(this.dataset[j] < this.dataset[min]){
          min = j;
          await this.update(50);
          }
        }
        var temp = this.dataset[i];
        this.dataset[i] = this.dataset[min];
        this.dataset[min] = temp;
      }
    },

    //* Misc
    async update(ms) {
      this.gridValues = this.convert1dArrayTo2dArray(this.dataset, 10);
      await this.sleep(ms);
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
  }
}
</script>
