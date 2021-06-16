var axios = require('axios');
const https = require('https');
const configuration = require("../config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    var data = JSON.stringify({
        query: `mutation {
            simFinishTests(input: {
                    imsi: 334020226183074
                    serviceProfileId: "aMIDBCgwpmcTyuo4RjlbKKnPRn8"
            }){
                id
                simId
                state
                requestedTime
                completionTime
                changeType
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