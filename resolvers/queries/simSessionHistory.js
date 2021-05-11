const handleFunctions = require('../../handleFunctions')

var models = require("../../data");
const { simSessionDetails } = require('../../data');


var resolvers = {

    simSessionHistory: (args) => {
        // var timeFrom = handleFunctions.handleDateTime(args.input.timeFrame.timeFrom);
        // var timeTo   = handleFunctions.handleDateTime(args.input.timeFrame.timeTo); 
        var simSessionsHistory = [];
        var simSessions = [];


        if (args.input.timeFrame) {
            if (args.input.timeFrame.timeFrom && !args.input.timeFrame.timeTo) {

                simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.input.imsi &&
                    new Date(simSessionDetails.startTime) >= new Date(args.input.timeFrame.timeFrom));

            } else if (!args.input.timeFrame.timeFrom && args.input.timeFrame.timeTo) {

                simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.input.imsi &&
                    new Date(simSessionDetails.startTime) <= new Date(args.input.timeFrame.timeTo));

            } else if (args.input.timeFrame.timeFrom && args.input.timeFrame.timeTo) {

                simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.input.imsi &&
                    new Date(simSessionDetails.startTime) <= new Date(args.input.timeFrame.timeTo) &&
                    new Date(simSessionDetails.startTime) >= new Date(args.input.timeFrame.timeFrom));

            }
        } else {
            simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.input.imsi);
        }

        if (args.input.pageInfo) {
            if (args.input.pageInfo.first) {
                for (let index = 0; index < args.first; index++) {
                    simSessionsHistory.push(simSessions[index])
                }
            }
        } else {
            return simSessions;
        }
        

        return simSessionsHistory;
    }

}

module.exports = resolvers;