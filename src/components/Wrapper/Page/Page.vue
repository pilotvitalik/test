<template>
  <div id="page">
    <router-view></router-view>
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
#page{
  width: 100%;
  height: 400px;
  background: lightblue;
}
</style>
