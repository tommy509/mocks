//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    type Query{
        simList: [ simDetails ],
        simDetails(imsi: ID!): simDetails,
        simLastSessionDetails(imsi: Float!): simLastSessionDetails,
        simChangeStatus(simChangeId: String!): simChangeStatus
        simFinishSleep(imsi: ID!, serviceProfileId: String): simFinishSleep,
        simFinishTests(imsi: ID!, serviceProfileId: String, state: String): simFinishTests
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

    type Persona{
        id: ID!,
        name: String
    }

    type lastSessionLocation{
        mcc: Int,
        mnc: Int,
        lac: Int,
        cell: Int
    }

    type simFinishSleep{
        id: String,
        simId: String,
        requestedTime: String,
        completionTime: String,
        creationTime: String,
        state: String
    }

    type simFinishTests{
        id: String,
        simId: String,
        requestedTime: String,
        completionTime: String,
        creationTime: String,
        state: String
    }
`);