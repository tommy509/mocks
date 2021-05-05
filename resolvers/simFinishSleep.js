var { simFinishSleep } = require("../data");


var resolvers = {

    simFinishSleep: (args) => {
        console.log("simFinishSleep List", simFinishSleep)
        console.log(args)
        return simFinishSleep.find(i => i.imsi = args.imsi);
    }

}

module.exports = resolvers;