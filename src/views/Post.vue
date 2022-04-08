<template>
  <div>
      <h1>{{slugURL}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
        slugURL: null,
    }
  },

  created() {
    this.slugURL = this.$route.params.slugURL;
  },

  beforeCreate: function() {
    document.body.className = 'post';
  }
}
</script>

<style lang="scss" scoped>

</style>