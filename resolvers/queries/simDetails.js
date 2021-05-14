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
        const businessUnit = models.businessUnits.find(businessUnit => businessUnit.id === simDetail.businessUnit);
        console.log(customer)
        simDetail.customer=customer;
        simDetail.businessUnit= businessUnit;
        return simDetail;
    },

//    }
}


module.exports = resolvers;
