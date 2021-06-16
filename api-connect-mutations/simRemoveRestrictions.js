var axios = require('axios');
const configuration = require("./config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
      query: `
      mutation {
 
        simRemoveRestrictions(input: {iccid: "8952020521297327822",
                                                          restrictions: [Malfunction, LostSim]}){
          id
          simId
          requestedTime
          completionTime
          creationTime
          changeType
          state
      
        }
      }
      `,
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