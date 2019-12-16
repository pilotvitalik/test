<template>
  <div id="Wrapper">
    <Navbar/>
    <Filt/>
    <Page/>
  </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Filt from './Filt/Filt.vue';
import Page from './Page/Page.vue'

export default {
  components:{
    Navbar,
    Filt,
    Page,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>