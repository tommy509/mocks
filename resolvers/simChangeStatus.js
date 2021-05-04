var models = require("../data");


var resolvers = {

    simChangeStatus: (args) => {
        console.log("simChangeStatus List", models.simChangeStatus)        
        console.log(args)
        const simChangeStatus = models.simChangeStatus.find( simChange =>  simChange.id === args.simChangeId);
        return simChangeStatus;
    }

}

module.exports = resolvers;