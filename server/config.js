require('dotenv').config();

console.log('API ' + process.env.INSTAGRAM_CLIENT_ID);


export const instagram_api = {
  client_id: process.env.INSTAGRAM_CLIENT_ID,
  client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
  api_url: process.env.INSTAGRAM_API_URL,
  redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
  oauth_url: process.env.INSTAGRAM_OAUTH_URI,
};
