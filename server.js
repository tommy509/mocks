var express = require('express');
const urlModule = require('url');
const axios = require('axios')
var { graphqlHTTP } = require('express-graphql');
var opn = require('opn');


// Construct a schema, using GraphQL schema language
var schema = require('./typeDefs');
var resolvers = require('./resolvers');

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

// Code Grant Flow

app.post('/loginCodeGrant', (req, res) => {
  const url = new urlModule.URL('http://localhost:3333/code-grant');
  const redirectUrl = new urlModule.URL('http://localhost:5000/checkCode');

  url.searchParams.append('response_type', 'code');
  url.searchParams.append('client_id', '5a6268b6-635e-44e9-bf4b-55bc8b6bb2fa');
  url.searchParams.append('redirect_uri', redirectUrl);
  url.searchParams.append('state', 'REQUIRED');

  res.redirect(307, url);
})


app.post('/checkCode', (req, res) => {
  const url = new urlModule.URL('http://localhost:3333/access-token');
  const redirectUrl = new urlModule.URL('http://localhost:5000/getToken');

  url.searchParams.append('grant_type', 'authorization_code');
  url.searchParams.append('code', req.query.code);
  url.searchParams.append('client_id', '5a6268b6-635e-44e9-bf4b-55bc8b6bb2fa');
  url.searchParams.append('client_secret', '27fd83d7-9663-493b-8806-1e93ee16c484');
  url.searchParams.append('redirect_uri', redirectUrl);

  res.redirect(307, url);
})

// Implicit Grant Flow

app.post('/loginImplicitGrant', (req, res) => {
  const url = new urlModule.URL('http://localhost:3333/implicit-grant');
  const redirectUrl = new urlModule.URL('http://localhost:5000/checkToken');

  url.searchParams.append('response_type', 'token');
  url.searchParams.append('client_id', '5a6268b6-635e-44e9-bf4b-55bc8b6bb2fa');
  url.searchParams.append('redirect_uri', redirectUrl);
  url.searchParams.append('state', 'REQUIRED');

  res.redirect(307, url);
})


app.post('/checkToken', (req, res) => {
  const config = {
    headers: { Authorization: `Bearer ${req.query.access_token}` }
  };

  const bodyParameters = {
    key: "value"
  };

  axios.post(
    'http://localhost:3333/check-token',
    bodyParameters,
    config
  ).then(opn('http://localhost:5000/graphql')).catch(console.log);
});

app.post('/getToken', (req, res) => {
  if (req.query.access_token) {
    opn('http://localhost:5000/graphql');
  }
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});
