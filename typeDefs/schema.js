//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    type Query{
        simList: [ simDetails ],
        simDetails(imsi: ID!): simDetails,
        simLastSessionDetails(imsi: Float!): simLastSessionDetails,
        simChangeStatus(simChangeId: String!): simChangeStatus,
        simChangeList(imsi: ID!, first: Int): [ simChangeStatus ],
        smsList(pageInfo: PagingInput,imsi: ID!,fromDate: String,toDate: String,smsIds: [String]):  SmsListOutput,
    }

    type Mutation {
        simFinishSleep(imsi: ID!, serviceProfileId: String): simFinish,
        simFinishTests(imsi: ID!, serviceProfileId: String, stage: String): simFinish,
        simActivate(input: simActivateInput): simActivate,
        simClearLabels(imsi: ID!): simDetails,
        simRemoveLabel(imsi: ID!, label: [String!]!): simDetails,
        simAddLabels(input:addLabelInput): simAddLabelDetails,
        simMoveToInventory(imsi: ID!): simDetails,
        simInstallationAddress(imsi: ID!, addressLines: [String!]!, postalCode: String!, city: String!, adminUnits: String, countryIso: String!,): simInstallationAddress,
        smsSend(imsi: ID!, message: String!, messageValidityPeriod: String, messageEncoding: String): SmsSendOutput,
    }

    input addLabelInput{
        imsi: ID!,
        labels: [String],
    }

    type simAddLabelDetails{
        imsi: ID!,
        msisdn: String,
        iccid: String,
        imei: String,
        labels: [String],
        status: String,
        customer: Customer,
        businessUnit: String
    }

    input simActivateInput{
        imsi:Float!,
        state:String,
        roamingProfileId:String,
        serviceProfileId:String,
        networkSettings:networkSettings,
    }
    input networkSettings{
        apnName:String,
        allocationType:String
    }

    type simFinish {
        imsi: Float,
        id: String,
        simId: String,
        requestedTime: String,
        completionTime: String,
        creationTime: String,
        changeType: [String],
        state: String
    }

    type simChangeStatus{
        imsi: ID!,
        id: String!,
        simId: String,
        requestedTime: String,
        changeType: String,
        state: String,
        completionTime: String,
        creationTime: String, 
    }

    type simActivate{
        id: String!,
        simId: String,
        requestedTime: String,
        changeType: [String],
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
        status: [String],
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

    type simInstallationAddress {
        imsi: ID!,
        addressLines: [String!]!,
        postalCode: String!,
        city: String!,
        adminUnits: String,
        countryIso: String!,
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

    type SmsSendOutput{
        id: ID!,
        message: String!,
        recipientSim: String,
        messageEncoding: String,
    }

    input PagingInput{
        before: String,
        after: String,
        first: Int,
        last: Int,
        offset: Int,
        limit: Int,
    }

    input SmsListInput {
        pageInfo: PagingInput,
        imsi: ID!,
        fromDate: String,
        toDate: String,
        smsIds: [String],
    },
    

    type PageInfo {
        total: Float!,
        totalRelation: String!,
        size: Int!,
        hasNextPage: Boolean!,
        hasPreviousPage: Boolean!,
        startCursor: String,
        startPosition: Float,
        endCursor: String,
        endPosition: Float,
    }
    
    type SmsesEdge {
        node: SmsDetails!,
        cursor: String!,
        cursorPosition: Float!,
    }
    
    type SmsDetails {
        id: String,
        messageText: String,
        sentTo: String,
        sentFrom: String,
        msgType: String,
        dateSent: String,
        dataReceived: String,
    }

    type SmsListOutput {
        pageInfo: PageInfo!,
        edges: [SmsesEdge!]!,
    }
`);
