<template>
  <div class="main">
    <div class="center">
      <vs-dialog v-model="active" not-close prevent-close width="35vw">
        <vs-row>

          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <h2>Bubble Sort</h2>
            <p>Simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps
              them if they are in the wrong order.</p>
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
      let sorted;
      for (let i = this.toSort.length; i > 0; i--) {
        sorted = true;
        for (let j = 0; j < i - 1; j++) {
          if (this.toSort[j] > this.toSort[j + 1]) {
            let newVal = this.toSort[j];
            await sleep(1)
            Vue.set(this.toSort, j, this.toSort[j + 1]);
            Vue.set(this.toSort, j + 1, newVal);
            sorted = false;
          }
        }
        if (sorted) break;
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