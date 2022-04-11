<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />

    <footer>
      <p class="footer-note">
        Website by <a href="https://mechetle.com">Mechetle</a>.<br>
        Steven B-M Nguyen<br>
        © <span class="year">2022</span> Mechetle
      </p>
    </footer>
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

<style lang="scss" scoped>
footer {
  margin: 5vw 0;
}
</style>