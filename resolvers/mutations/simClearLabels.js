const models = require("../../data");


var resolvers = {
 

    simClearLabels: (args) => {
        console.log(args)
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.imsi);
        simDetail.labels= [];
        return simDetail;
    }
 
}


module.exports = resolvers;
