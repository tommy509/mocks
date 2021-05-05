var models = require("../data");


var resolvers = {
    simChangeStatus: (args) => {
        const simChangeStatus = models.simChangeStatus.find( simChange =>  simChange.id === args.simChangeId);
        return simChangeStatus;
    }

}

module.exports = resolvers;