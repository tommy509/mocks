var axios = require('axios');
const configuration = require("../config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
      query: `
      mutation{
        sendSms(input:{
          fromMsisdn:525554006415,
          toImsi:334020226183077,
          message:"prueba",
          messageEncoding:PlainText
        }){
          id
          messageContent{
            message,
            messageEncoding
          }
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