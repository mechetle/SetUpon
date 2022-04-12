<template>
  <div>
    <div class="post-main">
      <header class="post">
        <h1>{{route.user}}</h1>
        <h2>date: {{route.date}}</h2>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      route: {
        user: null,
        date: null,
      },

      post: null,
    }
  },

  created() {
    this.route.user = this.$route.params.user;
    this.route.date = this.$route.params.date;

    this.$http
      .get(
        /* TODO: Fix lambda function, 
          * if goes to /posts --> fine
          * if goes to /posts/ --> error
        */
        `${import.meta.env.VITE_API_URL}/posts/${this.user}/${this.date}`
      )
      .then((response) => {
        this.post = response.data
        console.log(response)
      })
      .catch((error) => {
        console.log('Unable to get published projects from setUpon api: error...😭 ' + error);
      });
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