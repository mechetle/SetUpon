<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
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