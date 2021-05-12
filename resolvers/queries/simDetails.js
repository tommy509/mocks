//const { customerList } = require("../../data");
const models = require("../../data");


var resolvers = {
//    Query: {
       // simList: (parent, args, {models}) => simDetails,
    simList: () => { console.log("Executing simdetails"); return models.simDetail; },

    simDetails: (args) => {
        console.log(args)
        const simDetail = models.simDetail.find(simDetail => simDetail.imsi === args.imsi);
        const customer = models.customerList.find(customerList => customerList.id === simDetail.customer);
        console.log(customer)
        simDetail.customer=customer;
        return simDetail;
    },

//    }
}


module.exports = resolvers;
