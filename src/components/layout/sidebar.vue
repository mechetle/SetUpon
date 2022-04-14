<template>
  <aside class="sidebar">
    <template v-if="type == 'annotation'">
      <img src="" alt="">
      <section class="item-detail">
        <h4>{{title}}</h4>
        <p></p>
        <RouterLink to="/">More information</RouterLink>
        <h5>{{data.user}}'s notes</h5>
        <p>{{data.personal_comments}}</p>
        <h5>Discussion</h5>
        <div class="discussions mini"></div>
      </section>
    </template>    
  </aside>
</template>

<script>
export default {
  name: 'annotation',
  props: {
    type: {
      type: String,
      default: 'annotation'
    },
    title: {
      type: String,
      default: 'Jikens Co Childrens Chair'
    },

    data: {
      type: Object,
      default: {
        user: 'Jikens Jikens',
        personal_comments: "This chair is magnificelty comfortable, i'm 76 years old and it makes me feel like im 6 again, why are you reading this? 😅"
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 21em;
  padding: 2em;
  min-height: 85vh;
  z-index: 999;
  margin: 1.25em;
  background: #fff;
  border-radius: 0.65em;
  transition-timing-function: cubic-bezier(0.95, 0.16, 0.15, 0.95);
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
</style>