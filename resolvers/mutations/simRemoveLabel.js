const models = require("../../data");


var resolvers = {
 

    simRemoveLabel: (args) => {
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.input.imsi);

        function isLabelIn (value) {
            var findedLabel = args.input.label.find(label => label === value);
            if(findedLabel === undefined) {
                return value;
            }
        }

        simDetail.labels = simDetail.labels.filter(isLabelIn);
        return simDetail;
    }
 
}


module.exports = resolvers;
