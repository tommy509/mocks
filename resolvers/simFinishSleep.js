var models = require("../data");


var resolvers = {

    simFinishSleep: (args) => {
        console.log("simFinishSleep List", models.simFinishSleep)        
        console.log(args)
        const simFinishSleep = simFinishSleep.find(i => i.imsi = args.imsi);
        return simFinishSleep;
    }

}

module.exports = resolvers;