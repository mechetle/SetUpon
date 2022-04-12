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
    <div class="add-button">
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
.add-button {
  transition-delay: 0.25s;
  position: fixed;
  z-index: 999;
  bottom: 2em;
  right: 2em;
  background: $accent;
  padding: 0.5em;
  border-radius: 0.85em;
  box-shadow: 0px 11.2px 11.2px hsl(0deg 0% 0% / 0.33);
  transition-timing-function: cubic-bezier(0.95, 0.16, 0.15, 0.95);

  &:hover {
    transition-delay: 0s;
    box-shadow: 0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    > span {
      transform: scale(0.6);
    }
    cursor: pointer;
  }
  &:active {
    transition-duration: 0.15s;
    transform: scale(0.8);
    > span {
      transition-duration: 0.15s;
      transform: scale(1.2);
    }
  }

  > span {
    display: flex;
  }
}
</style>