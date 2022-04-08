<script setup>
// /import TheWelcome from "@/components/TheWelcome.vue";
import WorkThumb from "@/components/thumbnails/work-thumb.vue";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <WorkThumb v-for="post in published" :key="post.title" :title="post.title" :slug="post._id" :img-src="post.img + '?' + post.id" :desc="post.alt" :cat="post.category" :size="post.columns"/> -->
    <h1>Home</h1>
    <WorkThumb :title="post.title" :slug="post._id" :img-src="post.img" :desc="post.alt" :cat="post.category" :size="post.columns"/>
  </main>
</template>

<script>
export default {
  data () {
    return {
      post: {
        title: 'Title',
        _id: 'test_id',
        img: 'https://source.unsplash.com/random/?gaming-setup',
        category: ['cats', 'pets'],
        columns: 8,
      }
    }
  },

  beforeCreate: function() {
    document.body.className = 'home';
  }
}
</script>
