var axios = require('axios');
const token = require("./getToken");

function getToken() {
 
  const promise = axios.post(token.url, token.data, {
    headers: token.headers
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

getToken()
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