import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
//import { initializeApp } from "firebase/app";
/* import firebase from "firebase";

// External API / service: Google Firebase ---- Only using it for authentication.
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
firebase.initializeApp(firebaseConfig); */



const app = createApp(App);

app.use(router);

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
app.config.globalProperties.$http = axios; // this.$http.get

