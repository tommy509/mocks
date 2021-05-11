const models = require("../../data");


var resolvers = {
 

    simAddLabels: (args) => {
        console.log(args)
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);
        simDetail.labels.push(args.input.label);
        console.log(args.input.labels)
        return simDetail;
    }
 
}


module.exports = resolvers;
