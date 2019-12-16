<template>
  <div id="mainPage">
    <p>Это MainPage</p>
    <ul>
      <router-link v-for='item in arr' tag='li' :to="{ path: `/service/${item}` }" :key='item' @click.native='service(item)' exact>
        {{item}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    arr() {
      return this.$store.state.arr;
    },
  },
  methods: {
    service(item) {
      this.$store.dispatch('service', item);
    }
  }
};
</script>

<style>
#mainPage{
  width: 100%;
  height: 100%;
  background: pink;
}
#mainPage p{
  line-height: 50px;
} 
ul{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 500px;
  margin: 0 auto;
}
ul li{
  width: 50px;
  height: 50px;
  list-style-type: none;
  background: lightyellow;
}
ul li:hover{
  cursor: pointer;
}
</style>
