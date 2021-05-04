//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    type Query{
        simChangeStatus(simChangeId: String!): simChangeStatus
    }

    type simChangeStatus{
      id: String!,
      simId: String,
      requestedTime: String,
      changeType: String,
      state: String,
      completionTime: String,
      creationTime: String, 
    }

`);