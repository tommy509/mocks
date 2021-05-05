const models = require("../data");


var resolvers = {
 

    simAddLabels: (args) => {
        console.log(args)
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);
        simDetail.labels = args.input.labels;
        console.log(args.input.labels)
        return simDetail;
    }
 
}


module.exports = resolvers;
