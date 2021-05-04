const models = require("../data");


var resolvers = {
//    Query: {
       // simList: (parent, args, {models}) => simDetails,
    simList: () => { console.log("Executing simdetails"); return models.simDetail; },

    simDetails: (imsi) => {
        const simDetail = models.simDetails.filter(simDetail => simDetail.imsi === imsi);
        return simDetail;
    },

//    }
}


module.exports = resolvers;
