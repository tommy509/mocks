const models = require("../data");


var resolvers = {
 

    simActivate: (args) => {
        console.log(args)
        const simActivation = models.simActivate.find(simActivation => simActivation.imsi === args.input.imsi);
        simActivation.changeType=["Activated"];
        return simActivation;
    }
 
}


module.exports = resolvers;
