<template>
  <div class="main">
    <div class="center">
      <vs-dialog v-model="active" not-close prevent-close width="35vw">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <h2>Selection Sort</h2>
            <p>In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. </p>
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
      for (let i = 0; i < this.toSort.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < this.toSort.length; j++) {
          if (this.toSort[lowest] > this.toSort[j]) lowest = j;
          await sleep(1);
        }
        if (i !== lowest) {
          let newVal = this.toSort[i];
          Vue.set(this.toSort, i, this.toSort[lowest]);
          Vue.set(this.toSort, lowest, newVal);
        }
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