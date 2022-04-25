<template>
  <div class="about">
    <h1>Setup Items</h1>

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
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  beforeCreate: function() {
    document.body.className = '';
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


</style>
