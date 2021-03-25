<template>
  <div class="main">
    <div class="center">
      <vs-dialog v-model="active" not-close prevent-close width="35vw">
        <vs-row>

          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <h2>Merge Sort</h2>
            <p>Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.
              merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm.</p>
            <vs-button block @click="sort">Sort</vs-button>
          </vs-col>

        </vs-row>
      </vs-dialog>
    </div>

    <div class="algo">
      <div class="column" v-for="col in toSort" :style="'height:' + col + '%'">
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';

export default {
  data: function () {
    return {
      toSort: Array.from({length: 200}, () => Math.floor(Math.random() * 100)),
      active: true,
    }
  },
  methods: {
    sort: async function () {
      this.active = !this.active;
      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      var sorted = this.toSort.slice(),
          n = sorted.length,
          buffer = new Array(n);

      for (var size = 1; size < n; size *= 2) {
        for (var leftStart = 0; leftStart < n; leftStart += 2 * size) {
          var left = leftStart,
              right = Math.min(left + size, n),
              leftLimit = right,
              rightLimit = Math.min(right + size, n),
              i = left;
          while (left < leftLimit && right < rightLimit) {
            if (sorted[left] <= sorted[right]) {
              buffer[i++] = sorted[left++];
            } else {
              buffer[i++] = sorted[right++];
            }
            await sleep(1)
            this.toSort = sorted;
          }
          while (left < leftLimit) {
            buffer[i++] = sorted[left++];
          }
          await sleep(1)
          this.toSort = sorted;
          while (right < rightLimit) {
            buffer[i++] = sorted[right++];
          }
        }
        await sleep(1)
        this.toSort = sorted;
        var temp = sorted,
            sorted = buffer,
            buffer = temp;
      }
      await sleep(1)
      this.toSort = sorted;
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