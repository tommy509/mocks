//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    type Query{
        simList: [ simDetails ],
        simDetails(imsi: Int!): simDetails,
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