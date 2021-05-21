var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'grant_type': 'refresh_token',
  'client_id': 'graphiql',
  'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyZjI3MDM5Yy1iMTEzLTQ2MzktOTBkYS0wNDVkOGEyNzgzOTkifQ.eyJleHAiOjE2MjE2MTE3NDIsImlhdCI6MTYyMTYwOTk0MiwianRpIjoiOGMyYWE5NWMtZDM4ZS00NTFlLWE3NDctZjQwMjUwYWYxMzAzIiwiaXNzIjoiaHR0cHM6Ly9hcGktY2xhcm9jb25uZWN0LnNpbXBsaWZ5LmExLmRpZ2l0YWwvYXV0aC9yZWFsbXMvY2xhcm8tZXh0ZXJuYWwiLCJhdWQiOiJodHRwczovL2FwaS1jbGFyb2Nvbm5lY3Quc2ltcGxpZnkuYTEuZGlnaXRhbC9hdXRoL3JlYWxtcy9jbGFyby1leHRlcm5hbCIsInN1YiI6IjkwNDQ4ODQzLWRlNjgtNDYxNy1iZGEwLTJjOTM1YThmNmY0MCIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJncmFwaGlxbCIsIm5vbmNlIjoiZDJjZTA1OGUtZDg0YS00YjE5LTgyZWEtZDBjNGYyNmI5NGRkIiwic2Vzc2lvbl9zdGF0ZSI6IjY1Mzc3N2FjLTA1ZWUtNDUzMi1hMTVhLTY4ZDc1ZTRjZWMxMSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgaXVuZ29fZGF0YV9jb250ZXh0In0.M5F0pqTmy0KKmy4BAsbpCrm1UgnVlnZRuG0Q3oDb9Zg'
});

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}
var url= 'https://api-claroconnect.simplify.a1.digital//auth/realms/iot-connect/protocol/openid-connect/token';

function getToken() {
 
  const promise = axios.post(url, data, {
    headers: headers
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


module.exports = { data, headers, url, getToken};

