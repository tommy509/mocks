
var axios = require('axios');
const configuration = require("./config");

configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
      query: `query {
        simChangeStatus(simChangeId: "J4ELAq9ZbsYWGj7sI8oqldyddHo"){
          id
          simId
          requestedTime
          changeType
          state
          completionTime
          creationTime
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
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
 
  })
  .catch(err => console.log(err));