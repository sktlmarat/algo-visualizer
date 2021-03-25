<template>
  <div class="main">
    <div class="center">
      <vs-dialog v-model="active" not-close prevent-close width="35vw">
        <vs-row>

          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <h2>Radix Sort</h2>
            <p>In computer science, radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix.</p>
            <vs-button block @click="sort">Sort</vs-button>
          </vs-col>

        </vs-row>
      </vs-dialog>
    </div>
    <div class="column" v-for="col in toSort" :style="'height:' + col/1000000 + '%'">
    </div>
    <button class="button" @click="sort">Start</button>
  </div>

</template>

<script>
import Vue from 'vue';

export default {
  data: function () {
    return {
      toSort: Array.from({length: 200}, () => Math.floor(Math.random() * 100000000)),
      active: true,
    }
  },
  methods: {
    sort: async function () {
      this.active = !this.active;
      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

      function getDigit(num, i) {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
      }

      function digitCount(num) {
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
      }

      function mostDigits(nums) {
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
          max = Math.max(max, digitCount(nums[i]))
        }
        return max;
      }

      let max = mostDigits(this.toSort);
      for (let i = 0; i < max; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < this.toSort.length; j++) {
          await sleep(1)
          digitBuckets[getDigit(this.toSort[j], i)].push(this.toSort[j]);
        }
        this.toSort = [].concat(...digitBuckets);
        await sleep(1)
      }
    }
  }
}
</script>


<style scoped>
.button {
  display: block;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 22px;
}

.main {
  height: 100vh;
}

.column {
  display: inline-block;
  background: deepskyblue;
  width: 0.5%;
}

.vs-button {
  height: 40px;
  font-size: 19px;
}

.algo {
  height: 100vh;
}

</style>