var models = require("../../data");


var resolvers = {
    simChangeList: (args) => {
        const simChangeStatus = models.simChangeStatus.filter(simChange => simChange.imsi === args.imsi);
        var simChangeList = [];

        console.log(simChangeStatus)
        console.log(args.imsi)
        console.log(args.first)

        if (args.first !== undefined) {
            for (let index = 0; index < args.first; index++) {
                simChangeList.push(simChangeStatus[index])
            }
        } else {
            return simChangeStatus;
        }
        return simChangeList;
    }

}

module.exports = resolvers;