var models = require("../../data");


var resolvers = {

    simMoveToInventory: ( args ) => {
        var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"; 
        var date = new Date();     

        var simData = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);

        simData.status = ["Inventory"];

        var simChangeStatus =
        {
            id: Array(27).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join(''), 
            simId: args.input.imsi, 
            requestedTime: null,
            changeType: ["Suspended"],
            state: "inProgress",
            completionTime: null,
            creationTime: date.toISOString(),
        };

        return simChangeStatus;
    }

}

module.exports = resolvers;