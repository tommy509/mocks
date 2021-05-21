
var axios = require('axios');
const token = require("./getToken");



token.getToken()
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
      url: 'https://api-claroconnect.simplify.a1.digital/graphql',
      headers: { 
        'Origin': 'https://api-claroconnect.simplify.a1.digital', 
        'Referer': 'https://api-claroconnect.simplify.a1.digital/graphiql', 
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