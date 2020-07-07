<template>
  <div>
    <sorting-grid :numbers2dArray="gridValues" :sorted="sorted" />
    <div id="controls">
      <el-row class="mt" type="flex" justify="center">
        <el-select v-model="selectedAlgorithm" placeholder="Select Algorithm">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-select>
        <el-button-group class="ml">
          <el-button type="info" icon="el-icon-refresh" :disabled="sorting ? true : false" @click="newDataset()">Reset</el-button>
          <el-button type="primary" :loading="sorting ? true : false" :disabled="selectedAlgorithm == null ? true : false" @click="sort()">{{ sorting ? 'Sorting' : 'Sort' }}</el-button>
        </el-button-group>
      </el-row>
      <el-row>
        <el-slider
        v-model="gridSize"
        :min="5"
        :max="20"
        :step="1"
        show-stops>
      </el-slider>
      </el-row>
    </div>
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
    gridSize: 10,
    gridValues: null,
    selectedAlgorithm: null,
    sorting: false,
    sorted: false,
    options: [{
      value: 'bubble',
      label: 'Bubble Sort'
    }, {
      value: 'insertion',
      label: 'Insertion Sort'
    }, {
      value: 'selection',
      label: 'Selection Sort'
    }, {
      value: 'radix',
      label: 'Radix Sort'
    }, {
      value: 'heap',
      label: 'Heap Sort'
    }, {
      value: 'counting',
      label: 'Counting Sort'
    }]
  }),

  created() {
    this.newDataset();
    this.gridValues = this.convert1dArrayTo2dArray(this.dataset, this.gridSize);
  },

  watch: {
    dataset(newDataset) {
      this.gridValues = this.convert1dArrayTo2dArray(newDataset, this.gridSize);
    },
    gridSize() {
      this.newDataset();
    }
  },

  methods: {
    //* Sort function
    async sort() {
      switch(this.selectedAlgorithm) {
        case 'bubble':
          this.sorting = true;
          await this.bubbleSort();
          break;

        case 'insertion':
          this.sorting = true;
          await this.insertionSort();
          break;

        case 'selection':
          this.sorting = true;
          await this.selectionSort();
          break;

        case 'radix':
          this.sorting = true;
          await this.radixSort();
          break;

        case 'heap':
          this.sorting = true;
          await this.heapSort();
          break;

        case 'counting':
          this.sorting = true;
          await this.handleCountingSort();
          break;

        default:
          break;
      }
      this.sorting = false;
      this.sorted = true;
    },

    //* Data preparation methods
    // Generate new dataset
    newDataset() {
      this.dataset = this.randomArray(this.gridSize * this.gridSize, 0, 100);
      this.sorted = false;
    },

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
    //! Bubble Sort
    async bubbleSort() {
      let swap;
      do {
        swap = false;
        for (let i = 1; i < this.dataset.length; ++i) {
          await this.update(1);
          if (this.dataset[i - 1] > this.dataset[i]) {
            [this.dataset[i], this.dataset[i - 1]] = [this.dataset[i - 1], this.dataset[i]];
            swap = true;
          }
        }
      } while (swap)
    },

    //! Insertion Sort
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

    //! Selection Sort
    async selectionSort() {
      for(var i = 0; i < this.dataset.length; i++){
        //set min to the current iteration of i
        var min = i;
        for(var j = i+1; j < this.dataset.length; j++){
          if(this.dataset[j] < this.dataset[min]){
          min = j;
          }
        }
        var temp = this.dataset[i];
        this.dataset[i] = this.dataset[min];
        this.dataset[min] = temp;
        await this.update(200);
      }
    },

    //! Radix Sort
    async radixSort() {
      let maxLength = this.largestNum(this.dataset);

      for (let i = 0; i < maxLength; i++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < this.dataset.length; j++) {
          let num = this.getNum(this.dataset[j], i);
          if (num !== undefined) {
            buckets[num].push(this.dataset[j]);
          }
        }
        await this.update(2000);
        this.dataset = buckets.flat();
      }
    },

    largestNum(arr) {
      let largest = "0";

      arr.forEach(num => {
        const strNum = String(num);
        if (strNum.length > largest.length) largest = strNum;
      });

      return largest.length;
    },

    getNum(num, index) {
      const strNum = String(num);
      let end = strNum.length - 1;
      const foundNum = strNum[end - index];

      if (foundNum === undefined) return 0;
      else return foundNum;
    },

    //! Heap Sort
    async heapSort() {
      // Build our max heap.
      this.buildMaxHeap(this.dataset);

      // Find last element.
      let lastElement = this.dataset.length - 1;

      // Continue heap sorting until we have
      // just one element left in the array.
      while(lastElement > 0) {
        await this.swap(this.dataset, 0, lastElement);
        this.heapify(this.dataset, 0, lastElement);
        lastElement -= 1
      }
    },

    buildMaxHeap(array) {
      var i;
      i = array.length / 2 - 1;
      i = Math.floor(i);

      // Build a max heap out of
      // all array elements passed in.
      while (i >= 0) {
        this.heapify(array, i, array.length);
        i -= 1;
      }
    },

    heapify(heap, i, max) {
      let index, leftChild, rightChild;
      
      while(i < max) {
        index = i;

        leftChild = 2*i + 1;
        rightChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
          index = leftChild;
        }

        if (rightChild < max && heap[rightChild] > heap[index]) {
          index = rightChild;
        }
          
        if (index == i) {
          return;
        }

        this.swap(heap,i, index);
        
        i = index;
      }
    },

    async swap(array, firstItemIndex, lastItemIndex) {
      let tmp = array[firstItemIndex];
      
      // Swap first and last items in the array.
      array[firstItemIndex] = array[lastItemIndex];
      array[lastItemIndex] = tmp;
      await this.update(150);
    },

    //! Counting Sort
    async handleCountingSort() {
      await this.countingSort(this.dataset, 0, 100);
    },

    async countingSort(arr, min, max) {
      let i = min,
          j = 0,
          len = arr.length,
          count = [];
      for (i; i <= max; i++) {
          count[i] = 0;
      }
      for (i = 0; i < len; i++) {
          count[arr[i]] += 1;
      }
      for (i = min; i <= max; i++) {
          while (count[i] > 0) {
              arr[j] = i;
              j++;
              count[i]--;
              await this.update(100);
          }
      }
      return arr;
    },

    //* Misc
    async update(ms) {
      this.gridValues = this.convert1dArrayTo2dArray(this.dataset, this.gridSize);
      await this.sleep(ms);
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
  }
}
</script>

<style>
.ml {
  margin-left: 16px;
}

.mr {
  margin-right: 16px;
}

.mb {
  margin-bottom: 16px;
}

.mt {
  margin-top: 16px;
}
</style>