const simDetailResolvers = require('./simDetails');
const simChangeStatusResolvers = require('./simChangeStatus');
const simLastSessionDetailsResolvers = require('./simLastSessionDetails');

module.exports  = {
        
        simDetails: simDetailResolvers.simDetails,
        simList: simDetailResolvers.simList,
        simChangeStatus: simChangeStatusResolvers.simChangeStatus,
        simLastSessionDetails: simLastSessionDetailsResolvers.simLastSessionDetails,
}
