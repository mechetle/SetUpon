//https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html
const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    switch (event.routeKey) {
      // * User posts:
      case "DELETE /posts/{user}":
        await dynamo
          .delete({
            TableName: "su-user-setups",
            Key: {
              user: event.pathParameters.user
            }
          })
          .promise();
        body = `Deleted item ${event.pathParameters.user}`;
        break;
      // Get user's posts
      case "GET /posts/{user}":
        body = await dynamo
          .get({
            TableName: "su-user-setups",
            Key: {
              user: event.pathParameters.user
            }
          })
          .promise();
        break;
      // Get indevidual post
      case "GET /posts/{user}/{date}":
        body = await dynamo
          .get({
            TableName: "su-user-setups",
            Key: {
              user: event.pathParameters.user,
              date: event.pathParameters.date
            }
          })
          .promise();
        break;
      case "GET /posts":
        body = await dynamo.scan({ TableName: "su-user-setups" }).promise();
        break;
      case "PUT /posts":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html
            TableName: "su-user-setups",
            Item: {
              user: requestJSON.user,   // Partition
              date: requestJSON.date,   // Sort
              title: requestJSON.title,
              description: requestJSON.description, 
              likes: requestJSON.likes,
              post_discussions: requestJSON.post_discussions, // array of discussions of the post 
              images: requestJSON.images, // array of {url:string, caption:string, pointers:array} the post 
            }
          })
          .promise();
        body = `Put item ${requestJSON.user}`;
        break;


      // * Items:
      case "DELETE /items/{user}":
        await dynamo
          .delete({
            TableName: "su-items",
            Key: {
              user: event.pathParameters.user
            }
          })
          .promise();
        body = `Deleted item ${event.pathParameters.user}`;
        break;
      // Get user's items
      case "GET /items/{user}":
        body = await dynamo
          .get({
            TableName: "su-items",
            Key: {
              user: event.pathParameters.user
            }
          })
          .promise();
        break;
      // Get indevidual item
      case "GET /items/{user}/{date}":
        body = await dynamo
          .get({
            TableName: "su-items",
            Key: {
              user: event.pathParameters.user,
              date: event.pathParameters.date
            }
          })
          .promise();
        break;
      case "GET /items":
        body = await dynamo.scan({ TableName: "su-items" }).promise();
        break;
      case "PUT /items":
        requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html
            TableName: "su-items",
            Item: {
              user: requestJSON.user,   // Partition
              date: requestJSON.date,   // Sort
              title: requestJSON.title,
              description: requestJSON.description, 
              likes: requestJSON.likes,
              item_discussions: requestJSON.post_discussions, // array of discussions of the post 
              images: requestJSON.images, // array of {url:string, caption:string, pointers:array} the post 
            }
          })
          .promise();
        body = `Put item ${requestJSON.user}`;
        break;
      
      // Users:


      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};


