var models = require("../../data");


var resolvers = {
    simChangeList: (args) => {
        const simChangeStatus = models.simChangeStatus.filter(simChange => simChange.imsi === args.input.imsi);
        var simChangeList = [];

        if (args.input.pageInfo.first !== undefined) {
            for (let index = 0; index < args.input.pageInfo.first; index++) {
                simChangeList.push(simChangeStatus[index])
            }
        } else {
            return simChangeStatus;
        }
        
        return simChangeList;
    }

}

module.exports = resolvers;