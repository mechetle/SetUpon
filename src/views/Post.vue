<template>
  <div>
    <div class="post-main">
      <header class="post">
        <h1>{{slugURL}}</h1>
      </header>
    </div>
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
  .post-main {
    margin-left: 1em;
  }

  header.post {
    background: #D7CCC8;
    padding-left: 2em;
    height: 80vh;
    display: flex;
    align-items: flex-end;
  }
</style>