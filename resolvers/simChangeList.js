var models = require("../data");


var resolvers = {
    simChangeList: (args) => {
        const simChangeStatus = models.simChangeStatus.filter( simChange =>  simChange.imsi === args.imsi);
        console.log(simChangeStatus)
        var simChangeList = [];
        for (let index = 0; index < args.first; index++) {
            simChangeList.push(simChangeStatus[index])
        }
        return simChangeList;
    }

}

module.exports = resolvers;