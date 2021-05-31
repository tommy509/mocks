var axios = require('axios');
const configuration = require("./config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
      query: `query {
      simLastSessionDetails(imsi:334020223775530) {
        startTime
        endTime
        updateTime
        location{
          mcc
          mnc
        }
        upLink
        downLink
        imei
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
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }).catch(err => console.log(err));