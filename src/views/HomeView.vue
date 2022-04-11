<script setup>
// /import TheWelcome from "@/components/TheWelcome.vue";
import WorkThumb from "@/components/thumbnails/work-thumb.vue";
import PlusIcon from "vue-material-design-icons/Plus.vue"
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <WorkThumb v-for="post in published" :key="post.title" :title="post.title" :slug="post._id" :img-src="post.img + '?' + post.id" :desc="post.alt" :cat="post.category" :size="post.columns"/> -->
    <!-- Add button -->
    <div class="add-button">
      <PlusIcon size="45"></PlusIcon>
    </div>
    
    <h1>Explore</h1>
    <WorkThumb v-for='index in 5' :key='index' :title="post.title" :slug="post._id + '_' + index" :img-src="post.img + '?' + index" :desc="post.alt" :cat="post.category" :size="post.columns"/>

    <h2>With aws</h2>
    


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
      }
    }
  },

  beforeCreate: function() {
    document.body.className = '';
  }
}
</script>

<style lang="scss" scoped>
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