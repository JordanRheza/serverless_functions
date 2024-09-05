//const fetch = require('node-fetch');

export const handler = async () => {
    const data = {
      message: "Hello, World!",
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  };