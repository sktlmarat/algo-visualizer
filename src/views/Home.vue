<template>
  <div class="main">
    <div class="center grid">
      <vs-row justify="center">
        <vs-col  xs="12" sm="8" vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <h1 class="main-title">AlgoVisualizer</h1>
          <p>Visualization of popular sorting algorithms made by
            <a target="_blank" href="https://github.com/sktlmarat">@sktlmarat</a>
          </p>
          <router-link to="/bubble" style="text-decoration: none;">
            <vs-button block>Bubble Sort</vs-button>
          </router-link>
          <router-link to="/insertion" style="text-decoration: none;">
            <vs-button block>Insertion Sort</vs-button>
          </router-link>
          <router-link to="/selection" style="text-decoration: none;">
            <vs-button block>Selection Sort</vs-button>
          </router-link>
          <router-link to="/merge" style="text-decoration: none;">
            <vs-button block>Merge Sort</vs-button>
          </router-link>
          <router-link to="/radix" style="text-decoration: none;">
            <vs-button block>Radix Sort</vs-button>
          </router-link>
        </vs-col>
      </vs-row>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.main{
  background-color: rgb(25, 91, 255);
  height: 100vh;
}
.vs-button{
  margin-bottom: 20px;
  height: 50px;
  font-size: 24px;
  text-decoration: none;
}
.vs-col{
  margin-top: 50px;
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 19px 24px -3px rgba(0,0,0,1);
  -moz-box-shadow: 0px 19px 24px -3px rgba(0,0,0,1);
  box-shadow: 0px 19px 24px -3px rgba(0,0,0,1);


}


</style>
