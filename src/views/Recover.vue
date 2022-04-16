<template>
  <div>
    <form @submit.prevent="recoverPass">     
      <h2>Reset Password</h2>     
      <input       
        type="email"       
        placeholder="Email address..."       
        v-model="recover.email"     
      />     
      <button type="submit">
        Recover
      </button>   
    </form>

  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  data() { 
    return { 
      recover: {
        email: ''
      }
    }; 
  },

  methods: {
    recoverPass() {
      sendPasswordResetEmail(getAuth(), this.recover.email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("Password reset email sent")
        this.$router.push('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    },
  },
}
</script>

<style lang="scss" scoped>

</style>