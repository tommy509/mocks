var models = require("../../data");


var resolvers = {

    simMoveToInventory: ( args ) => {

        const simData = models.simDetail.find(simDetail => simDetail.imsi === args.imsi);
        return { ...simData, status: ["Inventory"] }
    }

}

module.exports = resolvers;