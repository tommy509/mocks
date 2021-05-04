var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var   testSchema   = require('./typeDefs');
var models = require('./data')
var simDetailResolvers  = require('./resolvers');
 
 var app = express();
app.use('/graphql', graphqlHTTP({
  schema: testSchema,
  rootValue: simDetailResolvers,
  graphiql: true,
}));
app.listen(5000, () => {
  console.log('Running a GraphQL API server at localhost:5000/graphql');
});