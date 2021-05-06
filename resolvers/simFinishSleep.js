var { simFinishSleep } = require("../data");


var resolvers = {

    simFinishSleep: ({ imsi, serviceProfileId }) => {
        console.log("simFinishSleep List: ", simFinishSleep);
        console.log("imsi", imsi, serviceProfileId, "serviceProfileId");

        const simData = simFinishSleep.find(({ imsi }) => imsi === imsi);
        return { ...simData, changeType: ['LiveStarted'] }
    }

}

module.exports = resolvers;