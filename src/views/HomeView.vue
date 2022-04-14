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
    <div class="action-button">
      <PlusIcon size="45"></PlusIcon>
    </div>
    
    <h1>Explore</h1>
    <WorkThumb v-for='index in 5' :key='index' :title="post.title" :slug="post._id + '/' + index" :img-src="post.img + '?' + index" :desc="post.alt" :cat="post.category" :size="post.columns"/>

    <WorkThumb v-for="setups in published.Items" :key="setups.title" :title="setups.title" :slug="setups.user + '/' + setups.date" :img-src="post.img + '?' + post.id" :desc="post.alt" :cat="post.category" :size="post.columns" :user="setups.user"/>

    <section>
      <h4>😭 That's all folks!</h4>
      <p>Looks like you have been mindlessly scrolling too long, maybe it's time for you to start working at your desk again.</p>
    </section>

  </main>
</template>

<script>
export default {
  data () {
    return {
      post: {
        title: 'Post Title',
        _id: 'test_id',
        img: 'https://source.unsplash.com/random/?gaming-setup',
        category: ['cats', 'pets'],
        columns: 8,
      },

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
        import.meta.env.VITE_API_URL + '/posts'
      )
      .then((response) => {
        this.published = response.data
        console.log(response)
      })
      .catch((error) => {
        console.log('Unable to get published posts from setUpon api: error...😭 ' + error);
      });
  },

  
}
</script>

<style lang="scss" scoped>
section {
  margin: 10vh auto;
  max-width: 600px;
}
</style>