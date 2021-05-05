const simDetailResolvers = require('./simDetails');
const simChangeStatusResolvers = require('./simChangeStatus');
const simLastSessionDetailsResolvers = require('./simLastSessionDetails');
const simFinishSleepResolvers = require('./simFinishSleep');
const simFinishTestsResolvers = require('./simFinishTests');
const simActivateResolvers = require('./simActivate');
const simClearLabelsResolvers = require('./simClearLabels');
const simAddLabelsResolvers = require('./simAddLabels');
module.exports = {

        simDetails: simDetailResolvers.simDetails,
        simList: simDetailResolvers.simList,
        simChangeStatus: simChangeStatusResolvers.simChangeStatus,
        simLastSessionDetails: simLastSessionDetailsResolvers.simLastSessionDetails,
        simFinishSleep: simFinishSleepResolvers.simFinishSleep,
        simFinishTests: simFinishTestsResolvers.simFinishTests,
        simActivate: simActivateResolvers.simActivate,
        simClearLabels: simClearLabelsResolvers.simClearLabels,
        simAddLabels: simAddLabelsResolvers.simAddLabels,

}
