var axios = require('axios');
const configuration = require("../config");
const https = require('https');
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
      query: `query{
        serviceProfileList(input:{limit: 2}){
          edges{
            node{
              id
              name
              simRefs(paging:{limit: 5}) {
                edges {
                  node{
                    imsi
                    iccid
                  }
                }
              }
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
 
  })
  .catch(err => console.log(err));