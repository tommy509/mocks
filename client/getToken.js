var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'grant_type': 'refresh_token',
  'client_id': 'graphiql',
  'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyZjI3MDM5Yy1iMTEzLTQ2MzktOTBkYS0wNDVkOGEyNzgzOTkifQ.eyJleHAiOjE2MjE0NDM0NTMsImlhdCI6MTYyMTQ0MTY1MywianRpIjoiNjQ1Y2MzYmItMDg1NS00NzRhLWE3MTktOGQzYTdhZjg4MDE4IiwiaXNzIjoiaHR0cHM6Ly9hcGktY2xhcm9jb25uZWN0LnNpbXBsaWZ5LmExLmRpZ2l0YWwvYXV0aC9yZWFsbXMvY2xhcm8tZXh0ZXJuYWwiLCJhdWQiOiJodHRwczovL2FwaS1jbGFyb2Nvbm5lY3Quc2ltcGxpZnkuYTEuZGlnaXRhbC9hdXRoL3JlYWxtcy9jbGFyby1leHRlcm5hbCIsInN1YiI6IjkwNDQ4ODQzLWRlNjgtNDYxNy1iZGEwLTJjOTM1YThmNmY0MCIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJncmFwaGlxbCIsIm5vbmNlIjoiYTZmMTg3MTgtMWRkZC00ODU2LTgwNjUtNzhjZTQyNTlhMWRiIiwic2Vzc2lvbl9zdGF0ZSI6Ijc5NDA1NWM4LWQ4NWMtNGFiMC1iMzhkLTMzZDViZjEyOGE0YiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgaXVuZ29fZGF0YV9jb250ZXh0In0.vQ1LqX-NcU6F0vE-gGeLMjvOA1_NXbDGxbZ6JPVSZgE' 
});
var config = {
  method: 'post',
  url: 'https://api-claroconnect.simplify.a1.digital//auth/realms/iot-connect/protocol/openid-connect/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
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
