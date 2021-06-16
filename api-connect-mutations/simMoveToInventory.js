var axios = require('axios');
const https = require('https');
const configuration = require("../config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    var data = JSON.stringify({
        query: `mutation {
            simMoveToInventory(
              input: {
          imsi:334020226183076
              }
            ) {
              id
              creationTime
              state
            }
          }
          
          `,
        variables: {}
      });
    //ACCESS TO API-CLAROCONNECT
    
// At request level
const agent = new https.Agent({  
  rejectUnauthorized: false
});
    let config = {
      method: 'post',
      url:configuration.endpoint,
      httpsAgent: agent ,
      headers: { 
        'Authorization':'Bearer '+token, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }).catch(err => console.log(err));