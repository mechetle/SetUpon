<template>
  <div class="about">
    <h1>Trending</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  beforeCreate: function() {
    document.body.className = '';
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
