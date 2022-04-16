<template>
  <div>
    <form @submit.prevent="login">     
      <h2>Login</h2>     
      <input       
        type="email"       
        placeholder="Email address..."       
        v-model="login_field.email"     
      />     
      <input       
        type="password"       
        placeholder="password..."       
        v-model="login_field.password"     
      />  
      <button type="submit">
        Login
      </button>   
    </form>
    <RouterLink to="/recover">Reset password</RouterLink>   

    <form @submit.prevent="register">
      <h2>Register</h2>
      <input
      type="text" 
      onkeypress="return /[0-9a-zA-Z_.]/i.test(event.key)"
      placeholder="username..."
      v-model="register_field.username"
      />
      <input
      type="email"
      placeholder="Email address..."
      v-model="register_field.email"
      />
      <input
      type="password"
      placeholder="password..."
      v-model="register_field.password"
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
      login_field: {
        email: null, 
        password: null, 
      },
      register_field: {
        email: null, 
        password: null, 
        username: null, 
      },
    }; 
  },

  methods: {
    login() {
      signInWithEmailAndPassword(getAuth(), this.login_field.email, this.login_field.password)
      .then(() => {
        alert('Successfully logged in');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
      });
    },
    register() {
      let userDoesntExist = true
      // check if the username doesn't exist in dynamodb: 

      if (userDoesntExist) {
        createUserWithEmailAndPassword(getAuth(), this.register_field.email, this.register_field.password)
        .then((result) => {
          // TODO: Create user in user table
          
          // Add username and profilepic to the uid in firebase
          updateProfile(getAuth().currentUser, {
            displayName: this.register_field.username, 
            photoURL: `https://avatars.dicebear.com/api/identicon/${this.register_field.username}.svg`
          }).then(() => {
            alert('Successfully registered! Logging in...');
            this.$router.push('/');
          })
        })
        .catch(error => {
          alert(error.message);
        });
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>