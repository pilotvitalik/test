<template>
  <div id="Navbar">
    <router-link tag='p' to='/'>Это Navbar</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
#Navbar{
  width: 100%;
  height: 50px;
  background: yellow;
}
#Navbar p{
  line-height: 50px;
} 
</style>
