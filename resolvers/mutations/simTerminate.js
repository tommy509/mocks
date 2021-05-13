var models = require("../../data");


var resolvers = {

    simTerminate: ( args ) => {
        var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"; 
        var date = new Date();     

        var simData = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);

        simData.status = ["Terminated"];

        var simChangeStatus =
        {
            id: Array(27).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join(''), 
            simId: args.input.imsi, 
            requestedTime: null,
            changeType: ["Terminated"],
            state: "inProgress",
            completionTime: null,
            creationTime: date.toISOString(),
        };

        return simChangeStatus;
    }

}

module.exports = resolvers;