var axios = require('axios');
const configuration = require("../config");
configuration.getToken()
  .then(token => {
    //QUERY OR MUTATION
    let data = JSON.stringify({
      query: `
      mutation { 
        simInstallationAddress(input: {iccid: "8952020521297327822", 
                                                installLocation: {
                              addressLines: ["445 Mount Eden Road"],
                              postalCode: "5022",
                              city: "Auckland",
                              adminUnits: [
                                "Mount Eden"
                              ],
                              countryIso: US
                            }}){
        
        imsi
        installLocation{
          addressLines
          postalCode
          city
          adminUnits
          countryIso
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