import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
//import { setupCache } from 'axios-cache-adapter'
import { setupCache } from 'axios-cache-interceptor';
import VueClickAway from "vue3-click-away";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { plugin, defaultConfig } from '@formkit/vue';
// import S3UploaderPlugin from "./s3-uploader-plugin";

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
// app.use(plugin, {
//   uploadUrl: 'https://6etx7kng79.execute-api.us-east-2.amazonaws.com/signature',
//   plugins: [
//       S3UploaderPlugin
//   ]
// });

app.mount("#app");

/* I decided to make a rest api with the dynamodb table then use it conjuction with axios / fetch because it seems more convient that way
var AWS = require('aws-sdk');
dyn = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

dyn.listTables(function (err, data)
{
   console.log('listTables',err,data);
}); 
*/

const api = setupCache(axios);


/* const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const api = axios.create({
  adapter: cache.adapter
}) */

//axios.defaults.headers.common['secret-sauce'] = process.env.VUE_APP_SECRET_SAUCE
app.config.globalProperties.$http = api;            // this.$http


