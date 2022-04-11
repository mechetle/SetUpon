import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

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