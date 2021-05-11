const models = require("../../data");


var resolvers = {
 

    simRemoveLabel: (args) => {
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.imsi);

        function isLabelIn (value) {
            var findedLabel = args.label.find(label => label === value);
            if(findedLabel === undefined) {
                return value;
            }
        }

        simDetail.labels = simDetail.labels.filter(isLabelIn);
        return simDetail;
    }
 
}


module.exports = resolvers;
