var express = require('express');
const axios = require('axios')
const oauth = require('axios-oauth-client');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const fs = require('fs')
 
// Construct a schema, using GraphQL schema language
var schema   = require('./typeDefs');
var models = require('./data')
var resolvers  = require('./resolvers');

var checkCode = require('./')
 
var app = express();
app.use('/graphql', authCodeGrant, graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));



app.get('/checkCode', (req, res) => {
  const { code, state } = req.query;

  //Send to Auth Server to validate and Receive Access token
  const res = await axios.post('http://localhost:3333/access_token', {
    json: true,
    body: {
      client_id: '',
      client_secret: '',
      code,
      state,
    },
  });

  res.redirect()

})

async function authCodeGrant(req, res, next) {

  if(req.body.access_token){

  } else {
    console.log("Redirecionar para AuthServer");
    // 1 - Acquire the Authorization Code by accessing code-grant
    const getAuthorizationCode = oauth.client(axios.create(), {
     url: 'http://localhost:3333/code-grant',
     response_type: 'code',
     client_id: '8b29078c-370b-4e1d-9efd-ab95d2ab7bde',
     redirect_uri: 'http://localhost:5000/checkCode',
     state: 'REQUIRED'
   });
   
   const auth = await getAuthorizationCode();
 
   console.log(auth)
 
   res.redirect_uri('/checkCode', auth);
  }
 
}

app.listen(5000, () => {
  console.log('Running a GraphQL API server at localhost:5000/graphql');
});