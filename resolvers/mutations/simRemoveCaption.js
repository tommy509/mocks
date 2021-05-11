const models = require("../../data");


var resolvers = {
 

    simRemoveCaption: (args) => {
        console.log(args)
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.imsi);
        simDetail.name= "";
        return simDetail;
    }
 
}


module.exports = resolvers;
