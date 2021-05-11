var models = require("../../data");


var resolvers = {

    simApplyRestrictions: (args) => {
        var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";

        const simData = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);  
        var date = new Date();     

        var simChangeStatus =
        {
            id: Array(27).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join(''), 
            simId: args.input.imsi, 
            requestedTime: null,
            changeType: ["RestrictionsApplied"],
            state: "inProgress",
            completionTime: null,
            creationTime: date.toISOString(),
        }


        return simChangeStatus;
        //return { ...simData, status: ["Inactive"] }
    }

}

module.exports = resolvers;