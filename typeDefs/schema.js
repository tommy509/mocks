//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    type Query{
        simList: [ simDetails ],
        simDetails(imsi: ID!): simDetails,
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


    type simDetails{
        imsi: ID!,
        msisdn: String,
        iccid: String,
        imei: String,
        labels: [label],
        status: String,
        customer: Persona,
        businessUnit: String
    }

    type label{
        name: String
    }

    type Persona{
        id: ID!,
        name: String
    }
`);