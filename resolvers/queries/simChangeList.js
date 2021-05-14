var models = require("../../data");


var resolvers = {
    simChangeList: (args) => {
        const simChangeStatus = models.simChangeStatus.filter(simChange => simChange.imsi === args.input.imsi);
        var simChangeList = [];
        var simChangeEdge = {};

        var pageInfo = {
            total: models.simChangeStatus.length,
        }

        if (args.input.pageInfo && args.input.pageInfo.first) {
            for (let index = 0; index < args.input.pageInfo.first; index++) {
                simChangeEdge = {
                    node: simChangeStatus[index]
                };
                simChangeList.push(simChangeEdge);
            }

            pageInfo = {
                total: simChangeList.length,
            }

            return { pageInfo: pageInfo, edges: simChangeList };

        } else {
            for (let index = 0; index < simChangeStatus.length; index++) {
                simChangeEdge = {
                    node: simChangeStatus[index]
                }
                simChangeList.push(simChangeEdge);
            }

            pageInfo = {
                total: simChangeList.length,
            }

            return { pageInfo: pageInfo, edges: simChangeList };
        }
    }
}

module.exports = resolvers;