const simDetailResolvers = require('./queries/simDetails');
const simChangeStatusResolvers = require('./queries/simChangeStatus');
const simLastSessionDetailsResolvers = require('./queries/simLastSessionDetails');
const simSessionHistoryResolvers = require('./queries/simSessionHistory');
const simFinishSleepResolvers = require('./mutations/simFinishSleep');
const simFinishTestsResolvers = require('./mutations/simFinishTests');
const simActivateResolvers = require('./mutations/simActivate');
const simClearLabelsResolvers = require('./mutations/simClearLabels');
const simRemoveLabelResolvers = require('./mutations/simRemoveLabel');
const simAddLabelsResolvers = require('./mutations/simAddLabels');
const simChangeListResolvers = require('./queries/simChangeList');
const simMoveToInventoryResolvers = require('./mutations/simMoveToInventory');
const simInstallationAddressResolvers = require("./mutations/simInstallationAddress")
const smsSendResolvers = require("./mutations/smsSend")
const smsListResolvers = require("./queries/smsList")
const simAssignCaptionResolvers = require("./mutations/simAssignCaption")
const simRemoveCaptionResolvers = require("./mutations/simRemoveCaption");
const simApplyRestrictionsResolvers = require("./mutations/simApplyRestrictions");
const simRemoveRestrictionsResolvers = require("./mutations/simRemoveRestrictions");
const simTerminateResolvers = require('./mutations/simTerminate');
const customerDetailsResolvers = require('./queries/customerDetails');
const serviceProfileListResolvers = require('./queries/serviceProfileList');
const apnSettingsResolvers = require('./mutations/simAPNSettings');
const simConfigureExpectedImeiResolvers = require('./mutations/simConfigureExpectedImei');
const simChangeServiceProfileResolvers = require('./mutations/simChangeServiceProfile')

module.exports = {

        simDetails: simDetailResolvers.simDetails,
        simList: simDetailResolvers.simList,
        simChangeStatus: simChangeStatusResolvers.simChangeStatus,
        simChangeList: simChangeListResolvers.simChangeList,
        simLastSessionDetails: simLastSessionDetailsResolvers.simLastSessionDetails,
        simSessionHistory: simSessionHistoryResolvers.simSessionHistory,
        simFinishSleep: simFinishSleepResolvers.simFinishSleep,
        simFinishTests: simFinishTestsResolvers.simFinishTests,
        simActivate: simActivateResolvers.simActivate,
        simClearLabels: simClearLabelsResolvers.simClearLabels,
        simRemoveLabel: simRemoveLabelResolvers.simRemoveLabel,
        simAddLabels: simAddLabelsResolvers.simAddLabels,
        simMoveToInventory: simMoveToInventoryResolvers.simMoveToInventory,
        simInstallationAddress: simInstallationAddressResolvers.simInstallationAddress,
        smsSend: smsSendResolvers.smsSend,
        smsList: smsListResolvers.smsList,
        simRemoveCaption: simRemoveCaptionResolvers.simRemoveCaption,
        simAssignName: simAssignCaptionResolvers.simAssignCaption,
        simApplyRestrictions: simApplyRestrictionsResolvers.simApplyRestrictions,
        simRemoveRestrictions: simRemoveRestrictionsResolvers.simRemoveRestrictions,
        customerDetails: customerDetailsResolvers.customerDetails,
        serviceProfileList: serviceProfileListResolvers.serviceProfileList,
        simAssignApns: apnSettingsResolvers.simAssignApns,
        simUnAssignApns: apnSettingsResolvers.simUnAssignApns,
        simConfigureApns:apnSettingsResolvers.simConfigureApns,
        simTerminate: simTerminateResolvers.simTerminate,
        simConfigureExpectedImei: simConfigureExpectedImeiResolvers.simConfigureExpectedImei,
        simChangeServiceProfile: simChangeServiceProfileResolvers.simChangeServiceProfile,
}
