var axios = require('axios');
const https = require('https');
require('dotenv').config();
var qs = require('qs');
var auth_url= process.env.AUTH_URL;
var endpoint= process.env.API_URL;

var data = qs.stringify({
  'grant_type': process.env.GRANT_TYPE,
  'client_id': process.env.CLIENT_ID,
  'client_secret': process.env.CLIENT_SECRET
});

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}




// At instance level
const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});






function getToken() {
  const promise =instance.post(auth_url, data, {
    headers: headers
  });
  const dataPromise = promise
  .then((res) => {
return res.data.access_token;
  })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err);
  });
  return dataPromise
}

 

module.exports = {getToken,endpoint};

