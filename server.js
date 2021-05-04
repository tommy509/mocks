var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const fs = require('fs')
 
// Construct a schema, using GraphQL schema language
var schema   = require('./typeDefs');
var models = require('./data')
var resolvers  = require('./resolvers');
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(5000, () => {
  console.log('Running a GraphQL API server at localhost:5000/graphql');
});