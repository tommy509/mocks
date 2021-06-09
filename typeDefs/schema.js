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
        simList(input: SimListParametersInput):SimDetailsConnection,

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
        simLastSessionDetails(imsi: ID, iccid:ID): LastSessionDetails,


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
            """The Float scalar type represents non-fractional signed whole numeric values. Float can represent values between -(2^63) and 2^63 - 1."""
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
        smsList(input:SmsListParametersInput):  SMSesConnection!,
        
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
        This function provides similar functionality as EditDeviceDetails in Jasper.
        """
        simFinishSleep(input:SimModifyStateInput): SimChangeDetails,

        """
        Finish the test stage of a SIM Card. Allowed moves for simFinishTests operation is from state Test to Live or Sleep.
        This function provides similar functionality as EditDeviceDetails in Jasper.
        """
        simFinishTests(input: SimFinishTestsInput!): SimChangeDetails,

        """
        Activate given SIM card using provided settings. equivalente a su funcion en Jasper editdevicedetails 
        """
        
        simActivate(input: simActivateInput): simActivate,
        """
        This function is used to clear labels of a given sim. This function provides similar functionality as EditDeviceDetails in Jasper wich allows us to modify custom fields for a specified device.
        
        """
        simClearLabels(imsi: ID, iccid:ID): SimLabelsChanges,
        """
        This function is used to remove a caption from a given sim. 
        
        """
        simRemoveCaption(imsi: ID,iccid:ID): SimCaption,
        """
        This function is used to remove label(s) from a given sim. This function provides similar functionality as EditDeviceDetails in Jasper wich allows us to modify custom fields for a specified device.
        
        """
        simRemoveLabels(input:SimLabelsInput!): SimLabelsChanges,

        """
        This function is used to add a label to a given sim. This function provides similar functionality as EditDeviceDetails in Jasper wich allows us to modify custom fields for a specified device.
        
        """

        simAddLabels(input:SimLabelsInput!): SimLabelsChanges,
        """
        This function is used to assign a caption to a given sim. 
        
        """
        simAssignCaption(input:SimAssignCaptionInput!):SimCaption,
        simMoveToInventory(input: simImsiInput): simChangeStatus,
        """
        Set address for given sim where it is expected to be used. This function provides similar functionality
        as EditCustomerDetails in Jasper.
        """
        simInstallationAddress(input:simProfileLocationInput): simInstallationAddress,
        
        smsSend(imsi: ID!, message: String!, messageValidityPeriod: String, messageEncoding: String): SmsSendOutput,

        """
        Apply restrictions to given SIM card. This function provides similar functionality as EditDeviceDetails/(RunawayDevices) in Jasper.
        """
        simApplyRestrictions(input: simRestrictionInput!): simChangeStatus,

        """
        Remove restrictions from given SIM card.
        """ 
        simRemoveRestrictions(input: simRestrictionInput!): SimChangeDetails,

        """
        Specify APNs (Access Point Names) which should be included to the defined set for the SIM.
        """
        simAssignApns(input: simAPNSettings): simChangeStatus,
        """
        Specify APNs (Access Point Names) which should be no longer used by the SIM.
        """
        simUnAssignApns(input: simAPNSettings): simChangeStatus,
        """
        Configure APNs (Access Point Names) used by the SIM.
        """
        simConfigureApns(input: simAPNSettings): simChangeStatus,
        simTerminate(input: simImsiInput): simChangeStatus,

        """
        Specify device that SIM is expected to be used by.
        """
        simConfigureExpectedImei(input: simConfigureExpectedImeiInput): SimChangeDetails,
        """
        Specify Service Profile (SIM services configuration) for SIM.
        """
        simChangeServiceProfile(input: simChangeServiceProfileInput): simChangeStatus,
    }

    """
    Specify the imsi and the restrictions to attach it.
    """
    input simRestrictionInput{
        "The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1."
        imsi: ID!,
        "Restrictions to be processed for the given SIM"
        restrictions: [SimRestriction!]!,
    }

    input simDetailsListInput{
        imsis:[String]
    },

    input simChangeServiceProfileInput {
        """SIM IMSI Identifier"""
        imsi: ID!,
        """Identifier of SIM services configuration"""
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
        """The Float scalar type represents non-fractional signed whole numeric values. Float can represent values between -(2^63) and 2^63 - 1."""
        imsi: ID,
        """The Float scalar type represents non-fractional signed whole numeric values. Float can represent values between -(2^63) and 2^63 - 1."""
        iccid: ID,
    }

    input addLabelInput{
        imsi: ID!,
        label: [String!]!,
    }
    
    input SimLabelsInput{
        """SIM IMSI Identifier"""
        imsi: ID,
        """SIM ICCID Identifier"""
        iccid:ID,
        """The label/labels that you want to modify."""
        label: [String!]!,
    }


    input SimAssignCaptionInput{
        """SIM IMSI Identifier"""
        imsi: ID,
        """SIM Iccid Identifier"""
        iccid:ID,
        """The caption to be assigned to SIM for more efficient management."""
        caption: String!,
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
        """SIM IMSI Identifier"""
        imsi:Float!,
        """List of parameters describing network settings, see NetworkSettingsInput"""
        networkSettings:networkSettings
    }
    input networkSettings{
        """Access Point Name assigned to the SIM"""
        apnName:String,
        """IP allocation strategy, see IpAllocationType"""
        allocationType:String
    }

    input SimListParametersInput{
        "Paging parameters, see PagingInput"
        pageInfo: PagingInput,     

        "Identifier specifying service profile for which sim list should be fetched, CMP type ServiceProfileId"
        serviceProfileId: String,
        
        "Specify statuses for which sim list should be filtered"
        simStatus: [SimState!],
        
        "Specify label for which sim list should be filtered"
        label: String,
        
        "Specify last time of modification and filter sims modified since that time, CMP type OffsetDateTime"
        since: String,
        
        "Specify list of IMSIs for which sim list should be filtered"
        imsis: [String!],
        
        "Specify list of ICCIDs for which sim list should be filtered"
        iccids: [String!]
        
    }

    input SimModifyStateInput{
        "The Long scalar typerepresents non-fractional signed wholenumeric values. Long can represent valuesbetween -(2^63) and 2^63 - 1."
        imsi: IMSI!,
        "SIM ICCID Identifier"
        iccid: ICCID,
        "Parameter specifyingservice profile which is assigned to SIM"
        serviceProfileId: String
    }

    input SimFinishTestsInput{
        "The Long scalar typerepresents non-fractional signed wholenumeric values. Long can represent values between -(2^63) and 2^63 - 1."
        imsi: IMSI!,
        "SIM ICCID Identifier"
        iccid: ICCID
        "The String scalar typerepresents textual data, represented asUTF-8 character sequences. The Stringtype is most often used by GraphQL torepresent free-form human-readable text."
        serviceProfileId: String,
        "Parameter specifyinglifecycle phase SIM should be in after testsfinished. Possible lifecycle phases are:Live, Sleep"
        stage: TestsCompletedSimState
    }


    type SimDetailsConnection{
        "Shows information general about pagination"
        pageInfo: PageInfo!
        "Array of SimDetailsEdge, which include node, and its position in the paging "
        edges: [SimsDetailsEdge!]!
    }

    type SimsDetailsEdge{
        "Single instance of SimsDetails"
        node: simDetails!
        
        "Cursor string used for pagination"
        cursor: String!
        
        "Record position, CMP type Long"
        cursorPosition: Float!
        
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
        "Information about pagination in a connection."
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

    """
    Information about the sim.
    """
    input simConfigureExpectedImeiInput {
        imsi: ID!,
        iccid: String,
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

    input SmsListParametersInput {
        """Paging parameters, see PagingInput"""
        pageInfo: PagingInput,
        """Identifier specifying sim for which sms list should be fetched"""
        smNotificationsIds: [String],
        """Specify from which time to search SMSes for"""
        fromDate: String,
        """Specify until which time to search SMSes for"""
        toDate: String,
        """Specify on which SIM sms was sent"""
        imsi: String       
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


    type SimCaption{
        """SIM IMSI Identifier"""
        imsi: ID!,
        """The caption to be assigned to SIM for more efficient management."""
        caption:String,
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

    type simChangeStatus{
        """Sim change identifier"""
        id: String!,
        """Sim identifier"""
        simId: String!,
        """Requested time of task execution"""
        requestedTime: String,
        """List of change types"""
        changeType: [SimChangeType!]!,
        """Current state of changes. "Pending" for scheduled operation, "InProgres" for currently executing operation, "Complete" for executed operation, "Failed" for executed with error operation, and "Cancelled" for canceled scheduled operation."""
        state: SimChangeState!,
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

      type SimLabelsChanges{
        "The SIM IMSI Identifier"
        imsi: ID!,   
        "Actual SIM Labels"
        labels: [String],
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
        "SIM Roaming information for services, see RoamingSettings"
        roamingSettings: RoamingSettings,
        "SIM usage information for services"
        usageInformation: UsageInformation,
        "Address of sim where it is expected to be used"
        installLocation: InstallationLocationAdress,
        "SIM last session details, see LastSessionDetails"
        lastSessionDetails: LastSessionDetails,
        "Historical data about sim operations"
        simChangesRefs(paging: PagingInput): SimChangesConnection,
        "Data related with usage charactiristics"
        allowances: AllowancesConnection,
        "Data about sim"
        imeiInfo: ImeiInfo
       
    }

    type AllowancesConnection{
        pageInfo: PageInfo!
        edges: [AllowancesEdge!]!
    }

    type AllowancesEdge{
        "Single instance of Allowances"
        node: AllowanceDetails!
        "Cursor string used for pagination"
        cursor: String!
        "Record position, CMP type Long"
        cursorPosition: Float!
        
    }

    type AllowanceDetails{
        id: String!
        serviceUsageType: ServiceType!
        level: UsageAllowanceLevel!
        "CMP type LocalDate"
        validTo: String
        subscriptionRef: AllowanceSubscription
        lifecycleStage: ProductLifecycleStage!
        periodicityType: PeriodicityType!
        "CMP type BigDecimal"
        price: Float!
        activeSimsCount: Int
        "CMP type LocalDate"
        lastConsumptionDate: String 
        consumptionState: AllowanceConsumptionState!
    }

    type AllowanceConsumptionState{
        "CMP type Long"
        currentSize: Float!,
        "CMP type Long"
        currentUsedSize: Float!,
        "CMP type BigDecimal"
        remainingCurrentSize: Float!,
        "CMP type BigDecimal"
        usedCurrentSizePercentage: Float!,
        "CMP type Long"
        nextRechargeSize: Float,
        "CMP type BigDecimal"
        nextRechargePrice: Float,
        limitsUsage: [AllowanceLimitsUsage!]!
    }

    type  AllowanceLimitsUsage{
        countryZones: [Int!]!,
        "CMP type BigDecimal"
        limitSizePercentage: Float!,
        "CMP type BigDecimal"
        limitSize: Float!,
        "CMP type BigDecimal"
        usedSize: Float!,
        "CMP type BigDecimal"
        usedSizePercentage: Float!
    }

    type AllowanceSubscription{
        id: String!
        "Valid ISOCurrency"
        currency: String!
        productSpecificationRef: AllowanceProductSpecification
        name: String!
    }

    type AllowanceProductSpecification{
        id: String!
        iconName: String
    }

    type ImeiInfo{
        baseImei: String!,
        imei: String!,
        imeisv: String,
        checkDigit: Int,
        softwareVersionDigit: String,
        expectedDigit: Int!,
        isValid: Boolean!,
        typeApprovalCode: String!,
        serialNumber: String!
    }

    type SimChangesConnection{
        pageInfo: PageInfo!
        edges: [SimChangesEdge!]!
    }

    type SimChangesEdge{
        "Single instance of SimChanges"
        node: SimChangeDetails!
        "Cursor string used for pagination"
        cursor: String!
       "Record position" 
        cursorPosition: Float!
        
    }

    """
    Complete information about a sim change.
    """ 
    type SimChangeDetails{
        "Sim change identifier"
        id: String!
        "Sim identifier"
        simId: String!
        "Requested time of task execution"
        requestedTime: String
        "List of change types"
        changeType: [SimChangeType!]!
        "Current state of changes"
        state: SimChangeState!
        "Time of changes completion"
        completionTime: String
        "Time of changes creation"
        creationTime: String
        
    }

    type LastSessionDetails{
        "Last session start date"
        startTime: String,
        "Last session end date"
        endTime: String,
        "Last session update time during active state"
        updateTime: String,
        "Last session location"
        location: sessionLocation!,
        "Data size sent during last session"
        upLink: Float,
        "Data size received during last session"
        downLink: Float,
        "IPV4 address assigned to this device during last session"
        ipAddressV4: String,
        "IPV6 address prefix assigned to this device during last session"
        ipAddressV6Prefix: String,
        "IMEI identifier of the device that established connection"
        imei: String,
        imeiInfo: ImeiInfo
    }

    type InstallationLocationAdress{
        "address lines"
        addressLines: [String!]!,
        "Postal code"
        postalCode: String!,
        "City"
        city: String!,
        "State"
        adminUnits: [String!],
        "Country Code, CMP type ISOCountry"
        countryIso: String!
    }

    type UsageInformation{
        "Information about data transfers quantity, see Data"
        data: Data
    }

    type Data{
        "Data size sent"
        upLink: Float,
        "Data size received"
        downLink: Float
    }

    type Eprofile{
        "CMP type EID"
        eid: String,
        "CMP type SmSrId"
        smSrId: String,
        state: ESimState!,
        roles: [ESimRole!]!
    }

    type RoamingSettings{
        "Data roaming status"
        dataRoaming: SimCellularServiceState,
       "SMS MO roaming status"
        smsMoRoaming: SimCellularServiceState,
       "Voice roaming status"
        voiceRoaming: SimCellularServiceState
    }

    type simInstallationAddress {
        "The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1 "
        imsi: ID!,
        installLocation: installationLocationAddress!,
    }

    type label{
        name: String
    }

  type installationLocationAddress {
    "Address lines"
    addressLines: [String!]!,
    "Postal code"
    postalCode: String!,
    "City"
    city: String!,
    "State"
    adminUnits: [String],
    "Country Code"
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
        """Total number of available results according to given query criteria"""
        total(trackTotalHits: Boolean):Float,
        """Indicated whether number of total hits are precise or estimated"""
        totalRelation: String!,
        """Number of records in given page"""
        size: Int!,
        """When paginating forwards, are there more items?"""
        hasNextPage: Boolean!,
        """When paginating backwards, are there more items?"""
        hasPreviousPage: Boolean!,
        """When paginating backwards, the cursor to continue."""
        startCursor: String,
        """Numerical position of the first record returned"""
        startPosition: Float,
        """When paginating forwards, the cursor to continue."""
        endCursor: String,
        """Numerical position of the first record returned"""
        endPosition: Float,
    }
    
    type SmsesEdge {
        """Single instance of SMSes"""
        node: SmsListInfo!,
        """Cursor string used for pagination"""
        cursor: String!,
        """Record Position"""
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


    type SmsListInfo {
        """Identifier specifying which sms should be fetched"""
        id: String,
        """Identifier specifying the beginning of the time frame for sms search inside it"""
        targetAddress: String,
        """Identifier specifying the end of the time frame for sms search inside it"""
        sourceAddress: String,
        """Time when message was submitted for sending"""
        submittedDate: String,
        """Time the message was sent"""
        sentDate: String,
        """Time when message was delivered to target"""
        deliveredDate: String,
        """Content of SMS"""
        content:SmsContent
    }

    type SmsContent{
        """Format of message"""
        format:String,
        """Content of SMS"""
        content:String
    }


    type SMSesConnection {
        pageInfo: PageInfo!,
        edges: [SmsesEdge!]!,
    }

    type SmsListOutput {
        pageInfo: PageInfo!,
        edges: [SmsesEdge!]!,
    }

    type CustomerList {
        "Sim change identifier"
        id: ID!,
        "Sim identifier"
        name: String!
        "Requested time of task execution"
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
        bundleType: UsageAllowanceType,
        volume: BundleSize,
        "CMP type BigDecimal"
        volumePrice: Float

    }

    type BundleSize{
        dataBytes: Float,
        dataDuration: Float,
        dataSessions: Float,
        smsCalls: Float,
        voiceCalls: Float,
        voiceDuration: Float
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

    enum ESimState{
        Available,
        Assigned,
        Enabled,
        Disabled
    }

    enum ESimRole{
        Provisioning,
        Operational,
        Fallback,
        Emergency
    }

    enum SimChangeType{
        Pending
        InProgress
        Completed
        Failed
        Cancelled
        Activated
        ApnChanged
        CustomerUnitChanged
        DataBlocked
        DataUnblocked
        EnableSimProfileChanged
        ImeiLinked
        ImeiLocked
        ImeiUnlinked
        ImeiUnlocked
        LiveStarted
        SleepStarted
        NetworkTechnologyChanged
        PutToSleep
        SmsIntBlocked
        SmsIntUnblocked
    }

    enum ServiceType{
        ActiveSims,
        PlatformApiAccess,
        PlatformAccess,
        GeolocationAccess,
        GenericProduct,
        PrivateApn,
        PlatformReporting,
        DataUsage,
        VoiceUsage,
        SmsUsage,
        SimActivated,
        SimTerminated,
        SimInitialized,
        SimEarlyTerminated,
        PrivateApnActivated,
        PlatformApiAccessActivated,
        PlatformReportingActivated,
        PlatformAccessActivated,
        GeolocationAccessActivated,
        GenericProductActivated,
        SaleTransactionCompleted,
        SimOrdered
    }

    enum UsageAllowanceLevel{
        Subscription
        ResourcePooled
        ResourceNotShared
    }

    enum ProductLifecycleStage{
        TestReady,
        Test,
        Inventory,
        Live,
        Sleep
    }

    enum PeriodicityType{
        OneTime
        Recurring
    }

    enum SimChangeState{
        Pending,
        InProgress,
        Completed,
        Failed,
        Cancelled
    }

    """
    Enumeration values for SimRestriction
    """
    enum SimRestriction{
        "Suspend when lost sim or device"
        LostSim,
        "Suspend in case when SIM is not working properly - customer wants to prevent generating unexpected costs so decides to block SIM"
        Malfunction
    }

    """
    Enumeration values forTestsCompletedSimState
    """
    enum TestsCompletedSimState{
        Live,
        Sleep
    }

    """
    Integrated Circuit Card Identifier - globally-unique number (electronic serial number) identifying SIM card.
    """
    scalar ICCID

    """
    International Mobile Subscriber Identity - a number that uniquely identifies every user of a cellular network.
    """
    scalar IMSI
`);
