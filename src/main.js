import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';

const app = createApp(App);

app.use(router);

app.mount("#app");

// I decided to make a rest api with the dynamodb table then use it conjuction with axios / fetch because it seems more convient that way
/* var AWS = require('aws-sdk');
dyn = new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });

dyn.listTables(function (err, data)
{
   console.log('listTables',err,data);
}); */

//axios.defaults.headers.common['secret-sauce'] = process.env.VUE_APP_SECRET_SAUCE

app.config.globalProperties.$http = axios; // this.$http.get