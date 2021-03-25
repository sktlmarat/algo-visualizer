<template>
  <div class="main">
    <div class="center">
      <vs-dialog v-model="active" not-close prevent-close width="35vw">
        <vs-row>

          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <h2>Insertion Sort</h2>
            <p>Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</p>
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
      for (let i = 1; i < this.toSort.length; i++) {
        let current = this.toSort[i];
        for (var j = i - 1; j >= 0 && this.toSort[j] > current; j--) {
          await sleep(1)
          Vue.set(this.toSort, j + 1, this.toSort[j]);
        }
        Vue.set(this.toSort, j + 1, current);
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
.algo{
  height: 100vh;
}

</style>