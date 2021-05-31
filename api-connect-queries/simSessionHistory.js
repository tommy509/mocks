var axios = require('axios');
const configuration = require("./config");
configuration.getToken()
    .then(token => {
        //QUERY OR MUTATION
        let data = JSON.stringify({
            query: `query{
        simSessionHistory(input: {iccid: "8952020020694315563", paging: {limit: 2}}){
          edges{
            node{
              sessionStartTime
              sessionEndTime
              updateTime
              location{
                mcc
                mnc
                area
                ecid
              }
              upLink
              downLink
              imei
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
                'Origin': configuration.endpoint,
                'Referer':configuration.endpoint,
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
      
            })
            .catch(function (error) {
                console.log(error);
            });
    }).catch(err => console.log(err));