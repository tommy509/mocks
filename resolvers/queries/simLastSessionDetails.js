var models = require("../../data");
 


var resolvers = {

    simLastSessionDetails: (args) => {
        console.log("simLastSessionDetails", models.simSessionDetails)        
        console.log(args)
        const simLastSessions = models.simSessionDetails.find( simLastSessionDetails =>  simLastSessionDetails.imsi === args.imsi);
        return simLastSessions;
    }

}

module.exports = resolvers;