var { simFinishSleep } = require("../../data");
const { simChangeType } = require('../enums/')

var resolvers = {

    simFinishSleep: ({ input: { imsi, iccid, serviceProfileId } }) => {
        console.log("simFinishSleep List: ", simFinishSleep);
        console.log("imsi:", imsi, "iccid: ", iccid, "serviceProfileId: ", serviceProfileId);

        const simData = simFinishSleep.find(({ imsi }) => imsi === imsi);
        return { ...simData, changeType: [simChangeType.LIVESTARTED] }
    }

}

module.exports = resolvers;