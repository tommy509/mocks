//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    type Query{
        simList: [ simDetails ],
        simDetails(imsi: ID!): simDetails,
        simDetailsList(input: simDetailsListInput): simDetailsList,
        simLastSessionDetails(imsi: ID!): simSessionDetails,
        simSessionHistory(input: sessionHistoryParametersInput!): [ simSessionDetails ],
        simChangeStatus(simChangeId: String!): simChangeStatus,
        simChangeList(input: simChangeListParametersInput!): simChangeList,
        smsList(pageInfo: PagingInput,imsi: ID!,fromDate: String,toDate: String,smsIds: [String]):  SmsListOutput,
        customerDetails(name: String!): CustomerList,
        serviceProfileList(input: PagingInput): serviceProfileList ,
    }

    type Mutation {
        simFinishSleep(imsi: ID!, serviceProfileId: String): simFinish,
        simFinishTests(imsi: ID!, serviceProfileId: String, stage: String): simFinish,
        simActivate(input: simActivateInput): simActivate,
        simClearLabels(imsi: ID!): simDetails,
        simRemoveCaption(imsi: ID!): simAddLabelDetails,
        simRemoveLabel(input:addLabelInput): simDetails,
        simAddLabels(input:addLabelInput): simDetails,
        simAssignName(input:addCaptionInput): simAddLabelDetails,
        simMoveToInventory(input: simImsiInput): simChangeStatus,
        simInstallationAddress(input:simProfileLocationInput): simInstallationAddress,
        smsSend(imsi: ID!, message: String!, messageValidityPeriod: String, messageEncoding: String): SmsSendOutput,
        simApplyRestrictions(input: simRestrictionInput!): simChangeStatus,
        simRemoveRestrictions(input: simRestrictionInput!): simChangeStatus,
        simAssignApns(input: simAPNSettings): simChangeStatus,
        simUnAssignApns(input: simAPNSettings): simChangeStatus,
        simConfigureApns(input: simAPNSettings): simChangeStatus,
        simTerminate(input: simImsiInput): simChangeStatus,
        simConfigureExpectedImei(input: simConfigureExpectedImeiInput): simChangeStatus,
        simChangeServiceProfile(input: simChangeServiceProfileInput): simChangeStatus,
    }


    input simRestrictionInput{
        imsi: ID!,
        restrictions: [String!]!,
    }

    input simDetailsListInput{
        imsis:[String]
    },

    type pageInfo{
        total:Int,
    }
    type simDetailsListEdges{
        node:simSessionDetails,
       
    }

  
 
    type simDetailsList{
        pageInfo:pageInfo,
        edges:[simDetailsListEdges]

    }

    type simSessionDetails{
        imsi:ID!
        iccid:String,
        caption:String,
        status:String,
        labels:[String],
        startTime:String!,
        endTime:String,
        updateTime:String,
        location:sessionLocation,
        upLink:Int,
        downLink:Int,
        imei:Float,
        
    
    }


    type businessUnit{
        id:ID,
        name:String
    }
    input simConfigureExpectedImeiInput {
        imsi: ID!,
        imei: String!,
        imeiLock: Boolean!,
    }

    input simChangeServiceProfileInput {
        imsi: ID!,
        serviceProfileId: String!,
    }

    input sessionHistoryParametersInput{
        imsi: ID!, 
        timeFrame: timeFrameInput,
        pageInfo: PagingInput

    }

    input simImsiInput{
        imsi: ID!,
    }

    input timeFrameInput{
        timeFrom: String, 
        timeTo: String, 
    }

    input simChangeListParametersInput{
        pageInfo: PagingInput,
        imsi: ID!
    }

    input addLabelInput{
        imsi: ID!,
        label: [String!]!,
    }
    input addCaptionInput{
        imsi: ID!,
        name: String,
    }

    input instalationLocationAdressInput {
        addressLines: [String!]!,
        postalCode: String!,
        city: String!,
        adminUnits: [String],
        countryIso: String!,
    }

    input simProfileLocationInput {
        imsi: ID!,
        installLocation: instalationLocationAdressInput!,
    }

    input simActivateInput{
        imsi:Float!,
        state:String,
        roamingProfileId:String,
        serviceProfileId:String,
        networkSettings:networkSettings,
    }
    input simAPNSettings{
        imsi:Float!,
        networkSettings:networkSettings
    }
    input networkSettings{
        apnName:String,
        allocationType:String
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

    type simChangeList {
        pageInfo: PageInfo!,
        edges: [ simChangeStatusEdges ],
    }

    type simChangeStatusEdges {
        node: simChangeStatus,
    }


    type serviceProfileList {
        pageInfo: PageInfo!,
        edges: [ serviceProfileEdges ],
    }

    type serviceProfileEdges {
        node:  serviceProfileDetails 
    }

    type serviceProfileDetails {
        id: ID!,
        name: String!,
        simRefs:  SimsConnections ,
    }

    type SimsConnections {
        pageInfo: PageInfo,
        edges: [ simConnectionsEdges ]
    }

    type simConnectionsEdges {
        node: simConnectionDetails
    }

    type simConnectionDetails {
        imsi: ID!,
        iccid: String!,
    }

    type simAddLabelDetails{
        imsi: ID!,
        name:String,
        msisdn: String,
        iccid: String,
        imei: String,
        labels: [String],
        status: String,
        customer: Customer,
        businessUnit: String,
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
        id: String!,
        simId: String,
        requestedTime: String,
        changeType: [String],
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
        labels: [String],
        status: [String],
        customer: Customer,
        serviceProfileId: String,
        businessUnit: businessUnit
    }




    type simInstallationAddress {
        imsi: ID!,
        installLocation: installationLocationAddress!,
    }

    type label{
        name: String
    }

  type installationLocationAddress {
    addressLines: [String!]!,
    postalCode: String!,
    city: String!,
    adminUnits: [String],
    countryIso: String!,
  }

    type Customer{
        id: ID!,
        name: String
    }

    type sessionLocation{
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

    type CustomerList {
        id: ID!,
        name: String!
        address: installationLocationAddress!,
    }
`);
