var models = require("../data");


var resolvers = {

    simFinishTests: (args) => {
        console.log("simFinishTests List", models.simFinishTests)        
        console.log(args)
        const simFinishTests = simFinishTestsData.find(i => i.imsi = args.imsi);
        return simFinishTests;
    }

}

module.exports = resolvers;