var models = require("../../data");


var resolvers = {

    simConfigureExpectedImei: ( args ) => {
        var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"; 
        var date = new Date();     
        var changetype = [];

        var simData = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);

        simData.imei = args.input.imei;
        simData.status = ["Terminated"];

        if(args.input.imeiLock) {
            changetype = ["ImeiLinked", "ImeiLocked"]
        } else {{
            changetype = ["ImeiLinked", "ImeiUnlocked"]
        }}


        var simChangeStatus =
        {
            id: Array(27).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join(''), 
            simId: args.input.imsi, 
            requestedTime: null,
            changeType: changetype,
            state: "inProgress",
            completionTime: null,
            creationTime: date.toISOString(),
        };

        return simChangeStatus;
    }

}

module.exports = resolvers;