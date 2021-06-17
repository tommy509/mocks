var { simResetList } = require("../../data");

var resolvers = {

    simReset: ({ input: { imsi } }) => {
        console.log("simReset List: ", simResetList);
        console.log("imsi: ", imsi);
        return simResetList.find(({ imsi }) => imsi === imsi);
    }

}

module.exports = resolvers;