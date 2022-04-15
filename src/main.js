import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import VueClickAway from "vue3-click-away";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYpZUlS0ubDr30pt33KU_qsiTDJBFj4Ts",
  authDomain: "setupon-96ebb.firebaseapp.com",
  projectId: "setupon-96ebb",
  storageBucket: "setupon-96ebb.appspot.com",
  messagingSenderId: "580646498621",
  appId: "1:580646498621:web:892c45979524793d981554"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App);
const authInstance = getAuth();

app.use(router);
app.use(VueClickAway);

app.mount("#app");

/* I decided to make a rest api with the dynamodb table then use it conjuction with axios / fetch because it seems more convient that way
var AWS = require('aws-sdk');
dyn = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

dyn.listTables(function (err, data)
{
   console.log('listTables',err,data);
}); 
*/

//axios.defaults.headers.common['secret-sauce'] = process.env.VUE_APP_SECRET_SAUCE
app.config.globalProperties.$http = axios;            // this.$http


