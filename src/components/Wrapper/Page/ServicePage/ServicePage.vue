<template>
  <div id="servicePage">
    <p>Это ServicePage</p>
    <p>page is {{number}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    number() {
      return this.$store.state.number;
    },
  },
  methods: {
    move(id) {
      this.$store.dispatch('move', id)
    }
  },
  created() {
      this.move(this.$route.params.id);
  }
};
</script>

<style>
#servicePage{
  width: 100%;
  height: 100%;
  background: lightgreen;
}
#servicePage p{
  line-height: 50px;
} 
</style>
