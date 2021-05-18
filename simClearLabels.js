var axios = require('axios');
var data = JSON.stringify({
  query: `mutation {
  simClearLabels(imsi:250010000007478) {
    imsi
    labels
  }
}`,
  variables: {}
});

var config = {
  method: 'post',
  url: 'http://18.234.52.193:8000/graphql',
  headers: { 
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
