const models = require("../data");


var resolvers = {
 

    simActivate: (args) => {
        console.log(args)
        const simActivation = models.simActivate.find(simDetail => simActivate.imsi === args.imsi);
        return simActivation;
    }
 
}


module.exports = resolvers;
