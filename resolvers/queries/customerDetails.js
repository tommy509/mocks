const models = require("../../data");


var resolvers = {

    customerDetails: (args) => {

        const customerDetail = models.customerList.find(custDetail => custDetail.name === args.name);
        return customerDetail;

    },

//    }
}


module.exports = resolvers;
