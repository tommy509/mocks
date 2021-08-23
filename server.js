var express = require('express');
const urlModule = require('url');
const axios = require('axios')
const oauth = require('axios-oauth-client');
var { graphqlHTTP } = require('express-graphql');

// Construct a schema, using GraphQL schema language
var schema = require('./typeDefs');
var resolvers = require('./resolvers');

var app = express();

app.get('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.post('/login', (req, res) => {
  const url = new urlModule.URL('http://localhost:3333/code-grant');
  url.searchParams.append('response_type', 'code');
  url.searchParams.append('client_id', '8b29078c-370b-4e1d-9efd-ab95d2ab7bde');
  url.searchParams.append('redirect_uri', 'http://localhost:5000/checkCode');
  url.searchParams.append('state', 'REQUIRED');

  res.redirect(307, url);
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});