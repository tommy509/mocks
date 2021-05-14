const models = require("../../data");


var resolvers = {
 

    simAddLabels: (args) => {
        console.log(args)
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);
        let labels = args.input.label;
        for(var i = 0; i<labels.length;i++){
            simDetail.labels.push(labels[i]);
        }
       
        console.log(args.input.labels)
        return simDetail;
    }
 
}


module.exports = resolvers;
