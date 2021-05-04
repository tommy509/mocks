var models = require("../data");
 


var resolvers = {

    simLastSessionDetails: (args) => {
        console.log("simLastSessionDetails List", models.simLastSessionDetails)        
        console.log(args)
        const simLastSessions = models.simLastSessionDetails.find( simLastSessionDetails =>  simLastSessionDetails.imsi === args.imsi);
        return simLastSessions;
    }

}

module.exports = resolvers;