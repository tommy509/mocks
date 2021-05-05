var { simFinishTestsData } = require("../data");


var resolvers = {

    simFinishTests: (args) => {
        console.log("simFinishTests List", simFinishTests)
        console.log(args)
        return simFinishTestsData.find(i => i.imsi = args.imsi);
    }

}

module.exports = resolvers;