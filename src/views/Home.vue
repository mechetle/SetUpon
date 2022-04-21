<script setup>
// /import TheWelcome from "@/components/TheWelcome.vue";
import WorkThumb from "@/components/thumbnails/work-thumb.vue";
import PlusIcon from "vue-material-design-icons/Plus.vue"
import { createVNode } from '@vue/runtime-core';
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- Add button -->
    <div class="create-menu-expand" v-if="openedCreateMenu" v-click-away="openCreate">
      <RouterLink to="/create/setup">
        <div class="action-button">Setup</div>
      </RouterLink>
      <RouterLink to="/">
        <div class="action-button">Item</div> 
      </RouterLink>
    </div>

    <div class="action-button" @click="openCreate" :class="{ opened: openedCreateMenu }">
      <PlusIcon size="45"></PlusIcon>
    </div>

    <!-- <RouterLink to="/create/setup" style="color: inherit;"></RouterLink> -->
    
    <h1>Explore</h1>
    <!-- <WorkThumb v-for='index in 5' :key='index' :title="post.title" :slug="post._id + '/' + index" :img-src="post.img + '?' + index" :desc="post.alt" :cat="post.category" :size="post.columns"/> -->

    <template v-if="published != null">
      <WorkThumb v-for="setups in (published.Items).slice().reverse()" :key="setups.title" :title="setups.title" :slug="setups.user + '/' + setups.date" :img-src="setups.images[0].url" :desc="setups.description" :size="post.columns" :user="setups.user"/>
    </template>

    <section>
      <h4>😭 That's all folks!</h4>
      <p>Looks like you have been mindlessly scrolling too long, maybe it's time for you to start working at your desk again.</p>
    </section>

  </main>
</template>

<script>
export default {
  //props: ["currentUser"], // <-- used only for authentication for dynamodb

  data () {
    return {
      post: {
        title: 'Post Title',
        _id: 'test_id',
        img: 'https://source.unsplash.com/random/?gaming-setup',
        category: ['cats', 'pets'],
        columns: 8,
      },

      openedCreateMenu: false,

      published: null,
    }
  },

  beforeCreate () {
    document.body.className = '';
  },

  created () {
    this.$http
      .get(
        /* TODO: Fix lambda function, 
          * if goes to /posts --> fine
          * if goes to /posts/ --> error
        */
        import.meta.env.VITE_API_URL + '/posts',
        //{ headers: {"Authorization" : `Bearer ${this.currentUser.at}`} }
      )
      .then((response) => {
        this.published = response.data
        console.log(response)
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
section {
  margin: 10vh auto;
  max-width: 600px;
}

.create-menu-expand {
  position: fixed;
  bottom: 0;
  right: 3.75em;
  gap: 0.4em;
  display: inline-flex;
  align-items: center;
  z-index: 999;

  > a {
    color: #000;
    text-decoration: none;

    > div {
      position: relative;
      //margin-top: 0.5em;
    }
  }
}
</style>