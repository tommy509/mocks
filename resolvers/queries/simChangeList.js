var models = require("../../data");


var resolvers = {
    simChangeList: (args) => {
        const simChangeStatus = models.simChangeStatus.filter(simChange => simChange.imsi === args.input.imsi);
        var simChangeList = [];

        var pageInfo = {
            total: models.simChangeStatus.length,
        }

        if (args.input.pageInfo.first) {
            for (let index = 0; index < args.input.pageInfo.first; index++) {
                simChangeList.push(simChangeStatus[index])
            }
        } else {
            return { pageInfo: pageInfo, edges: simChangeStatus };
        }

        pageInfo = {
            total: simChangeList.length,
        }

        return { pageInfo: pageInfo, edges: simChangeList };
    }

}

module.exports = resolvers;