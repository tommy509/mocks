
var axios = require('axios');
const configuration = require("./config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
      query: `query{
        simChangeList(input: {paging: {limit: 2}, iccid: "8952020020694315563"}){
          edges{
            node{
               id
                simId
                requestedTime
                changeType
                state
                completionTime
                creationTime
            }
          }
        }
      }`,
      variables: {}
    });
    
    //ACCESS TO API-CLAROCONNECT
    let config = {
      method: 'post',
      url: configuration.endpoint,
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