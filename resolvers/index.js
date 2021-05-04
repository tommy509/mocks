const simDetailResolvers = require('./simDetails');
const simChangeStatusResolvers = require('./simChangeStatus');

module.exports  = {
        
        simDetails: simDetailResolvers.simDetails,
        simList: simDetailResolvers.simList,
        simChangeStatus: simChangeStatusResolvers.simChangeStatus,
}
