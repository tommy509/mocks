//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    type Query{
        simList: [ simDetails ],
        simDetails(imsi: ID!): simDetails,
        simLastSessionDetails(imsi: Float!): simLastSessionDetails,
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
        customer: Customer,
        businessUnit: String
    }


    type simLastSessionDetails{
        imsi:Float
        startTime:String,
        endTime:String,
        updateTime:String,
        location:lastSessionLocation,
        upLink:Int
        downLink:Int
        imei:Float
    
    }

    type label{
        name: String
    }

    type Customer{
        id: ID!,
        name: String
    }

    type lastSessionLocation{
    id: ID!
    mcc: Int,
    mnc: Int,
    lac: Int,
    cell: Int
    }

    type Mutation {}
`);