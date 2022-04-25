<template>
  <div>
    <template v-if="published != null">
      <h1>
        <span>
          <img :src="currentUser.photoURL" alt="some profile picture">
        </span>
        <span>
          {{route.user}}
        </span>
      </h1>
      <div id="bio">
        <div class="row">
          <div class="col heading">Last logged in:</div>
          <div class="col">{{currentUser.lastLoggedIn}}</div>
        </div>
        <div class="row">
          <div class="col heading">Created:</div>
          <div class="col">{{currentUser.created}}</div>
        </div>
      </div>

      <h4>Setup Timeline</h4>
      <WorkThumb v-for="setups in (published.Items).slice().reverse()" :key="setups.title" :title="setups.title" :slug="setups.user + '/' + setups.date" :img-src="setups.images[0].url" :desc="setups.description" :user="setups.user"/>
    </template>
  </div>
</template>

<script setup>
import WorkThumb from "@/components/thumbnails/work-thumb.vue";
</script>

<script>
export default {
  props: ["currentUser"],

  data () {
    return {
      route: {
        user: null,
      },

      published: null,
    } 
  },
  created() {
    this.route.user = this.$route.params.user;

    this.$http
    .get(
      `${import.meta.env.VITE_API_URL}/posts/${this.route.user}`
    )
    .then((response) => {
      this.published = response.data
      console.log(response.data)
    })
    .catch((error) => {
      console.log('Unable to get published posts from setUpon api: error...😭 ' + error);
    });

  },
  methods: {
    openCreate() {
      if (this.openedCreateMenu) {
        this.openedCreateMenu = false;
      } else {
        this.openedCreateMenu = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
}
#bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
  .row {
    display: flex;
  }
  .col {
    &.heading {
      min-width: 200px;
      font-weight: bold;
    }
  }
}
h1 {
  img {
    width: 1em;
    border-radius: 100%;
    margin-right: 0.2em;
  }
}
</style>