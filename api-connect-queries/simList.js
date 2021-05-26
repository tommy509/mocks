var axios = require('axios');
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
    let config = {
      method: 'post',
      url:configuration.endpoint,
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