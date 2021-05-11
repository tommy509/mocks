const models = require("../../data");


var resolvers = {
 

    simAssignCaption: (args) => {
        console.log(args)
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);
        simDetail.name  = args.input.name;
        console.log(args.input.name)
        return simDetail;
    }
 
}


module.exports = resolvers;
