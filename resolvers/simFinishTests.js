var { simFinishTests } = require("../data");


var resolvers = {

    simFinishTests: ({ imsi, serviceProfileId, stage = "Live" }) => {
        console.log("simFinishTests List: ", simFinishTests);
        console.log("imsi", imsi, "serviceProfileId", serviceProfileId, "stage", stage);

        const simData = simFinishTests.find(({ imsi }) => imsi === imsi);
        return { ...simData, changeType: [...simData.changeType, stage + 'Started'] }
    }

}

module.exports = resolvers;