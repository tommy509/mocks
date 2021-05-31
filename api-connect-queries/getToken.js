var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'grant_type': 'refresh_token',
  'client_id': 'graphiql',
  'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyZjI3MDM5Yy1iMTEzLTQ2MzktOTBkYS0wNDVkOGEyNzgzOTkifQ.eyJleHAiOjE2MjIwNDQ5MTEsImlhdCI6MTYyMjA0MzExMSwianRpIjoiNmRkMWNjYWYtMjM5OC00ZWY5LThhZGUtNTk1ZmU0OWNjNWQwIiwiaXNzIjoiaHR0cHM6Ly9hcGktY2xhcm9jb25uZWN0LnNpbXBsaWZ5LmExLmRpZ2l0YWwvYXV0aC9yZWFsbXMvY2xhcm8tZXh0ZXJuYWwiLCJhdWQiOiJodHRwczovL2FwaS1jbGFyb2Nvbm5lY3Quc2ltcGxpZnkuYTEuZGlnaXRhbC9hdXRoL3JlYWxtcy9jbGFyby1leHRlcm5hbCIsInN1YiI6IjRiN2VjZWE1LTUyOTUtNDgwNi04MjhhLWUwZjk5NDkwMmI0OSIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJncmFwaGlxbCIsIm5vbmNlIjoiODFlYWYxYjctNzIxNS00N2Q5LTg3MGEtMmY2MzI1ZjYxNWVjIiwic2Vzc2lvbl9zdGF0ZSI6IjI3ZDkzMGMzLWI3M2QtNDY4ZS04ZWY1LTAwMWQwNTdmOGMyOSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgaXVuZ29fZGF0YV9jb250ZXh0In0.hDESvXoctWUktBjvmvtIFzlT9UpiJBNQrCEw4t2MFk8'
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


module.exports = {getToken};

