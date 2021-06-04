//const { gql } = require('apollo-server-express');
var { buildSchema } = require('graphql');
//module.exports = gql`
module.exports = buildSchema(`

    

    type Query{
        """
        Get detailed list of SIMs which are owned by customer. The average execution time is from 2s to 4s, 
        but it may depend on how much data stored in the system.This function provides similar functionality
        as GetDeviceDetails and GetTerminalDetails in Jasper.
        """
        simList: [ simDetails ],

        """
        Get complete information on the given SIM. This function provides similar functionality
        as GetDeviceDetails in Jasper.
        """
        simDetails(
            "imsi is used to specified the desired sim, also iccid can be used in CMP"
            imsi: ID!
        ): simDetails,
        simDetailsList(input: simDetailsListInput): simDetailsList,

        
        """
        Retrieve information about the last session of a given SIM. This function provides similar functionality
        as GetSessionDetails in Jasper.
        """
        simLastSessionDetails(imsi: ID!): simSessionDetails,


        """
        Retrieve session history for a given SIM. This function provides similar functionality
        as GetSessionDetails in Jasper.
        """
        simSessionHistory(input: sessionHistoryParametersInput!): simSessionHistory,
        
        """
        Get SIM change operation status for given SIM change identifier. This function provides similar functionality
        as Get Device Details in Jasper.
        """
        simChangeStatus(
            """The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1."""
            simChangeId: String!
        ): simChangeStatus,

        """
        Get SIM change operation status list for given SIM identifier. This function provides similar functionality
        as Get Device Details in Jasper.
        """
        simChangeList(input: simChangeListParametersInput!): simChangeList,

        """
        Return detailed information about one or more sms messages. This function provides similar functionality
        as GetSmsDetails in Jasper wich returns information about only one message sent by a device to the control center or from the control center to a device. Here we can get information about multiple messages at a time. 
        """
        smsList(pageInfo: PagingInput,imsi: ID!,fromDate: String,toDate: String,smsIds: [String]):  SmsListOutput,
        
        """
        Get information about Customer base on logged in user context. This function provides similar functionality
        as GetDeviceDetails in Jasper.
        """
        customerDetails(name: String!): CustomerList,
        serviceProfileList(input: PagingInput): serviceProfileList ,
    }

    type Mutation {
        """
        Change SIM state from Sleep To Live. Allowed move for simFinishSleep operation is from state Sleep to Live.
        This function provides similar functionality as ???? in Jasper.
        """
        simFinishSleep(imsi: ID!, serviceProfileId: String): simFinish,

        """
        Finish the test stage of a SIM Card. Allowed moves for simFinishTests operation is from state Test to Live or Sleep.
        This function provides similar functionality as ???? in Jasper.
        """
        simFinishTests(imsi: ID!, serviceProfileId: String, stage: String): simFinish,

        simActivate(input: simActivateInput): simActivate,
        """
        This function is used to clear labels of a given sim. This function provides similar functionality as EditDeviceDetails in Jasper wich allows us to modify custom fields for a specified device.
        
        """
        simClearLabels(imsi: ID!): simDetails,
        """
        This function is used to remove a caption from a given sim. 
        
        """
        simRemoveCaption(imsi: ID!): simAddLabelDetails,
        """
        This function is used to remove label(s) from a given sim. This function provides similar functionality as EditDeviceDetails in Jasper wich allows us to modify custom fields for a specified device.
        
        """
        simRemoveLabels(input:addLabelInput): simDetails,

        """
        This function is used to add a label to a given sim. This function provides similar functionality as EditDeviceDetails in Jasper wich allows us to modify custom fields for a specified device.
        
        """

        simAddLabels(input:addLabelInput): simDetails,
        """
        This function is used to assign a caption to a given sim. 
        
        """
        simAssignName(input:addCaptionInput): simAddLabelDetails,
        simMoveToInventory(input: simImsiInput): simChangeStatus,
        """
        Set address for given sim where it is expected to be used. This function provides similar functionality
        as ???? in Jasper.
        """
        simInstallationAddress(input:simProfileLocationInput): simInstallationAddress,
        
        smsSend(imsi: ID!, message: String!, messageValidityPeriod: String, messageEncoding: String): SmsSendOutput,

        """
        Apply restrictions to given SIM card. This function provides similar functionality as ???? in Jasper.
        """
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
        """Information about pagination in a connection."""
        pageInfo: PagingInput,
        """The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1."""
        imsi: ID,
        """The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1."""
        iccid: ID,
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
        apnName: String,
        allocationType: String
    }

    type  NetworkSettings{
        apnName: String,
        allocationType: IpAllocationType
    }


    type pageInfo{
        total:Int,
    }
    type simDetailsListEdges{
        node:simSessionDetails,
       
    }

  
 
    type simDetailsList{
        pageInfo: pageInfo,
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

    type simSessionHistory {
        pageInfo: pageInfo,
        edges:[simSessionHistoryEdges]
    }

    type simSessionHistoryEdges {
        node: simSessionDetails,
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
        """Information about pagination in a connection."""
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
        """Sim change identifier"""
        id: String!,
        """Sim identifier"""
        simId: String,
        """Requested time of task execution"""
        requestedTime: String,
        """List of change types"""
        changeType: [String],
        """Current state of changes. "Pending" for scheduled operation, "InProgres" for currently executing operation, "Complete" for executed operation, "Failed" for executed with error operation, and "Cancelled" for canceled scheduled operation."""
        state: String,
        """Time of changes completion"""
        completionTime: String,
        """Time of changes creation"""
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

    """ Represent a sim and its characteristics """
    type simDetails{
        "The SIM IMSI Identifier"
        imsi: ID!,
        "The SIM MSISDN Identifier"
        msisdn: String,
        "The SIM ICCID Identifier"
        iccid: String,
        "Identifier of the device which should use this SIM"
        imei: String,
        "SIM Caption is an identifier that can be added by user (it can be for example Vehicle registration plate for the SIM that installed in the car)"
        caption: String,
        "SIM Labels similar to SIM Caption but contains the list of custom SIM identifiers. 'Labels' field is better to use for hierarchical structures (for example, SIM is located in Krakow so we can add labels ['Poland', 'Lesser Poland','Krakow'] it can help us filter all the SIMs from Krakow or from Lesser Poland Voivodeship, also we can add to this list actual street where the sim is located), compare to SIM caption which may be some unique identifier for the sim (example Vehicle registration plate). Limit for this field is 32766 bytes"
        labels: [String],
        "Customer information, see Customer"
        customer: Customer,
        "Business unit information, see BusinessUnitDetails"
        businessUnit: businessUnit
        "Sim settings information, see SimServicesSettings"
        simSettings: SimServicesSettings,
        "Lifecycle phase SIM is currently in"
        status: [SimState],
        "List of APNs assigned to the SIM with detailed information within" 
        apns: [NetworkSettings],
        "The time of SIM activation"
        activationDate: String, 
        "Quantity of services usage resources, tied up together, see USAGEALLOWANCE"
        usageAllowances: UsageAllowance, 
        "SIM PIN1 code information"
        pin1: String,
        "SIM PIN2 code information"
        pin2: String,
        "SIM PUK1 code information"
        puk1: String,
        "SIM PUK2 code information"
        puk2: String,
        "eSIM profile information"
        eProfile: Eprofile,
        roamingSettings: ROAMINGSETTINGS,
        usageInformation: USAGEINFORMATION,
        installLocation: INSTALATIONLOCATIONADRESS,
        lastSessionDetails: LastSessionDetails,
        simChangesRefs(paging: PagingInput): SimChangesConnection,
        allowances: AllowancesConnection,
        imeiInfo: ImeiInfo
       
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

    type SimServicesSettings{
        dataService: String,
        smsMoService: String,
        smsMtService: String,
    }

    type UsageAllowance{
        name: String,
        service: UsageServiceType,
        bundleType: UbsageAllowanceType,
        volume: BundleSize,
        volumePrice: BigDecimal

    }

    type BundleSize{
        dataBytes: Long,
        dataDuration: Long,
        dataSessions: Long,
        smsCalls: Long,
        voiceCalls: Long,
        voiceDuration: Long
    }

    enum UsageAllowanceType{
        Subscription,
        ResourcePooled,
        ResourceNotShared
    }

    enum SimCellularServiceState{
        Blocked,
        Disabled,
        Enabled
    }

    enum SimState{
        Test,
        Live,
        Sleep,
        Terminated,
        Inactive,
        Archived,
        Inventory,
        TerminationReady,
        TestReady
    }

    enum IpAllocationType{
        Dynamic,
        Static
    }

    enum UsageServiceType{
        DataNational,
        DataRoaming,
        SmsMoDeliveryReceipt,
        SmsMoInternational,
        SmsMoNational,
        SmsMoRoaming,
        VoiceInRoaming,
        VoiceInternational,
        VoiceNational,
        VoiceOutRoaming
    }

`);
