const simDetailResolvers = require('./simDetails');
const simChangeStatusResolvers = require('./simChangeStatus');
const simLastSessionDetailsResolvers = require('./simLastSessionDetails');
const simFinishSleepResolvers = require('./simFinishSleep');
const simFinishTestsResolvers = require('./simFinishTests');

module.exports = {

        simDetails: simDetailResolvers.simDetails,
        simList: simDetailResolvers.simList,
        simChangeStatus: simChangeStatusResolvers.simChangeStatus,
        simLastSessionDetails: simLastSessionDetailsResolvers.simLastSessionDetails,
        simFinishSleep: simFinishSleepResolvers.simFinishSleep,
        simFinishTests: simFinishTestsResolvers.simFinishTests,

}
