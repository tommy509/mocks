var axios = require('axios');
const https = require('https');
const configuration = require("./config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
        query: `query {
            simList(input: {pageInfo: {limit: 2}}){
              edges{
                node{
                  imsi
                  labels
                  iccid
                }
              }
            }
          }`,
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