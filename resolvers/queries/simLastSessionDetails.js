var models = require("../../data");
 


var resolvers = {

    simLastSessionDetails: (args) => {
        console.log("simLastSessionDetails", models.simSessionDetails)        
        console.log(args)
        const simLastSessions = models.simSessionDetails.find( simLastSessionDetails =>  simLastSessionDetails.imsi === args.imsi);
        return simLastSessions;
    },

    simDetailsList: (args) => {
             
        console.log(args)
        let imsis = args.input.imsis;
        console.log(imsis);
        let response = [];
        response.pageInfo = [];
        response.edges = [];
       
        for(var i = 0; i < imsis.length; i++){
            response.pageInfo.total = i;
            currentNode=[];
            currentNode.node = [];
            simDetail =  models.simSessionDetails.find( simLastSessionDetails =>  simLastSessionDetails.imsi === imsis[i]);
            currentNode.node = simDetail;
            response.edges.push(currentNode);
        }
 
   
        return response;
     //   const simLastSessions = models.simSessionDetails.find( simLastSessionDetails =>  simLastSessionDetails.imsi === args.imsi);
     //   return simLastSessions;
    },


}

module.exports = resolvers;