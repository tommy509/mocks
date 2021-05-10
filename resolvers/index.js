const simDetailResolvers = require('./simDetails');
const simChangeStatusResolvers = require('./simChangeStatus');
const simLastSessionDetailsResolvers = require('./simLastSessionDetails');
const simFinishSleepResolvers = require('./simFinishSleep');
const simFinishTestsResolvers = require('./simFinishTests');
const simActivateResolvers = require('./simActivate');
const simClearLabelsResolvers = require('./simClearLabels');
const simRemoveLabelResolvers = require('./simRemoveLabel');
const simAddLabelsResolvers = require('./simAddLabels');
const simChangeListResolvers = require('./simChangeList');
const simMoveToInventoryResolvers = require('./simMoveToInventory');
const simInstallationAddressResolvers = require("./simInstallationAddress")
const smsSendResolvers = require("./smsSend")

module.exports = {

        simDetails: simDetailResolvers.simDetails,
        simList: simDetailResolvers.simList,
        simChangeStatus: simChangeStatusResolvers.simChangeStatus,
        simChangeList: simChangeListResolvers.simChangeList,
        simLastSessionDetails: simLastSessionDetailsResolvers.simLastSessionDetails,
        simFinishSleep: simFinishSleepResolvers.simFinishSleep,
        simFinishTests: simFinishTestsResolvers.simFinishTests,
        simActivate: simActivateResolvers.simActivate,
        simClearLabels: simClearLabelsResolvers.simClearLabels,
        simRemoveLabel: simRemoveLabelResolvers.simRemoveLabel,
        simAddLabels: simAddLabelsResolvers.simAddLabels,
        simMoveToInventory: simMoveToInventoryResolvers.simMoveToInventory,
        simInstallationAddress: simInstallationAddressResolvers.simInstallationAddress,
        smsSend: smsSendResolvers.smsSend,
}
