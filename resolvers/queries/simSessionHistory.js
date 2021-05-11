const handleFunctions = require('../../handleFunctions')

var models = require("../../data");


var resolvers = {

    simSessionHistory: (args) => {
        // var timeFrom = handleFunctions.handleDateTime(args.timeFrom);
        // var timeTo   = handleFunctions.handleDateTime(args.timeTo); 
        var simSessionsHistory = [];
        var simSessions = [];

        if (!args.timeFrom && !args.timeTo) {

            simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.imsi);

        } else if (args.timeFrom && !args.timeTo) {

            simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.imsi &&
                new Date(simSessionDetails.startTime) >= new Date(args.timeFrom));

        } else if (!args.timeFrom && args.timeTo) {

            simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.imsi &&
                new Date(simSessionDetails.startTime) <= new Date(args.timeTo));

        } else if (args.timeFrom && args.timeTo) {

            simSessions = models.simSessionDetails.filter(simSessionDetails => simSessionDetails.imsi === args.imsi &&
                new Date(simSessionDetails.startTime) <= new Date(args.timeTo) &&
                new Date(simSessionDetails.startTime) >= new Date(args.timeFrom));

        }

        if (args.first) {
            for (let index = 0; index < args.first; index++) {
                simSessionsHistory.push(simSessions[index])
            }
        } else {
            return simSessions;
        }

        return simSessionsHistory;
    }

}

module.exports = resolvers;