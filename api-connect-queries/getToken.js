var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'grant_type': 'refresh_token',
  'client_id': 'graphiql',
  'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyZjI3MDM5Yy1iMTEzLTQ2MzktOTBkYS0wNDVkOGEyNzgzOTkifQ.eyJleHAiOjE2MjE2MDc3MzcsImlhdCI6MTYyMTYwNTkzNywianRpIjoiNDVjNjNhZDMtMDNlNy00NzQzLThkZjQtZjI0YTkxZTU3MjUzIiwiaXNzIjoiaHR0cHM6Ly9hcGktY2xhcm9jb25uZWN0LnNpbXBsaWZ5LmExLmRpZ2l0YWwvYXV0aC9yZWFsbXMvY2xhcm8tZXh0ZXJuYWwiLCJhdWQiOiJodHRwczovL2FwaS1jbGFyb2Nvbm5lY3Quc2ltcGxpZnkuYTEuZGlnaXRhbC9hdXRoL3JlYWxtcy9jbGFyby1leHRlcm5hbCIsInN1YiI6IjFlNmEyOGU4LTBlYmItNGQ5NC1iODFlLWNhZDNjNTIwMDllZiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJncmFwaGlxbCIsIm5vbmNlIjoiNDZmZWRlZGQtZDBjYi00Yzc2LTkyNWYtOTZlZDMxNzI5NTFkIiwic2Vzc2lvbl9zdGF0ZSI6ImIxYmM0NjQ3LWVjYWUtNGQwZi1hNWQwLTc4NDljOGFiYzc4MyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgaXVuZ29fZGF0YV9jb250ZXh0In0.KetUPLyyhPGfgc5tiZpYjdGYZMvA-qc3VCaIYg-fTzk'
});

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}
var url= 'https://api-claroconnect.simplify.a1.digital//auth/realms/iot-connect/protocol/openid-connect/token';
module.exports = { data, headers, url};

