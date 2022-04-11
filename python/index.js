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
          .query({
            TableName: "su-user-setups",
            KeyConditionExpression: "#yr = :yyyy",
            
            ExpressionAttributeNames:{
              "#yr": "user"
            },
            ExpressionAttributeValues: {
              ":yyyy": event.pathParameters.user
            }
            //Key('user').eq(event.pathParameters.user)
          })
          .promise();
        break;
      // Get indevidual post
      case "GET /posts/{user}/{date}":
        body = await dynamo
          /*
          .query({
            TableName: "su-user-setups",
            KeyConditionExpression: "#yr = :yyyy and #posted_date = :urlDate",
            
            ExpressionAttributeNames:{
              "#yr": "user",
              "#posted_date": "date"
            },
            ExpressionAttributeValues: {
              ":yyyy": event.pathParameters.user,
              ":urlDate": parseInt(event.pathParameters.date)
            }
            //Key('user').eq(event.pathParameters.user)
          })*/
          .get({
            TableName: "su-user-setups",
            Key: {
              user: event.pathParameters.user,
              date: parseInt(event.pathParameters.date)
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


      /* * Items: 
      */
      case "DELETE /items/{item}":
        await dynamo
          .delete({
            TableName: "su-items",
            Key: {
              item: event.pathParameters.item
            }
          })
          .promise();
        body = `Deleted item ${event.pathParameters.item}`;
        break;
      // Get item's items
      case "GET /items/{item}":
        body = await dynamo
          .get({
            TableName: "su-items",
            Key: {
              item: event.pathParameters.item
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
              item: requestJSON.item,   // Partition
              date: requestJSON.date,   // Sort
              title: requestJSON.title,
              description: requestJSON.description, 
              likes: requestJSON.likes,
              item_discussions: requestJSON.post_discussions, // array of discussions of the post 
              images: requestJSON.images, // array of {url:string, caption:string, pointers:array} the post 
            }
          })
          .promise();
        body = `Put item ${requestJSON.item}`;
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


