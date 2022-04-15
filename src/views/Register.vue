<template>
  <div>
    <form @submit.prevent="register">
      <h2>Register</h2>
      <input
      type="text" 
      onkeypress="return /[0-9a-zA-Z_.]/i.test(event.key)"
      placeholder="username..."
      v-model="username"
      />
      <input
      type="email"
      placeholder="Email address..."
      v-model="email"
      />
      <input
      type="password"
      placeholder="password..."
      v-model="password"
      />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
  data() { 
    return { 
      email: '', 
      password: '', 
      username: '', 
    }; 
  },

  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
      .then((result) => {
        updateProfile(getAuth().currentUser, {
          displayName: this.username, 
          photoURL: `https://avatars.dicebear.com/api/identicon/${this.username}.svg`
        }).then(() => {
          alert('Successfully registered! Logging in...');
          this.$router.push('/');
        })
      })
      .catch(error => {
        alert(error.message);
      });
    },
  },
}
</script>

<style lang="scss" scoped>

</style>