const { simFinishTests } = require("../../data");
const { testsCompletedSimState, simChangeType } = require("../enums");

var resolvers = {

    simFinishTests: ({ input: { imsi, serviceProfileId, stage } }) => {
        console.log("simFinishTests List: ", simFinishTests);
        console.log("imsi: ", imsi, "serviceProfileId: ", serviceProfileId, "stage: ", stage);

        const simData = simFinishTests.find(({ imsi }) => imsi === imsi);
        return { ...simData, changeType: [stage + 'Started'] }
    }

}

module.exports = resolvers;