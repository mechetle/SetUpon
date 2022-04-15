<template>
  <div>
    <form @submit.prevent="login">     
      <h2>Login</h2>     
      <input       
        type="email"       
        placeholder="Email address..."       
        v-model="login.email"     
      />     
      <input       
        type="password"       
        placeholder="password..."       
        v-model="login.password"     
      />     
      <button type="submit">
        Login
      </button>   
    </form>

    <form @submit.prevent="register">
      <h2>Register</h2>
      <input
      type="text" 
      onkeypress="return /[0-9a-zA-Z_.]/i.test(event.key)"
      placeholder="username..."
      v-model="register.username"
      />
      <input
      type="email"
      placeholder="Email address..."
      v-model="register.email"
      />
      <input
      type="password"
      placeholder="password..."
      v-model="register.password"
      />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() { 
    return { 
      login: {
        email: '', 
        password: '', 
        username: '', 
      },
      register: {
        email: '', 
        password: '', 
        username: '', 
      },
      recover: {
        email: ''
      }
    }; 
  },

  methods: {
    recover() {
      sendPasswordResetEmail(getAuth(), this.recover.email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    },
    login() {
      signInWithEmailAndPassword(getAuth(), this.login.email, this.login.password)
      .then(() => {
        alert('Successfully logged in');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
      });
    },
    register() {
      createUserWithEmailAndPassword(getAuth(), this.register.email, this.register.password)
      .then((result) => {
        updateProfile(getAuth().currentUser, {
          displayName: this.register.username, 
          photoURL: `https://avatars.dicebear.com/api/identicon/${this.register.username}.svg`
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