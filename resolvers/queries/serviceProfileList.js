var models = require("../../data");


var resolvers = {

    serviceProfileList: (args) => {

        var pageInfo = {
            total: models.serviceProfileList.length,
        }
        
        var edges = [];
        var edge = {};
        var edgesSim = [];
        var edgeSim = {};

        var simsInfo;

        for (let index = 0; index < models.serviceProfileList.length; index++) {
            simsInfo = models.simDetail.filter(sim => sim.serviceProfileId === models.serviceProfileList[index].id);

            for (let i = 0; i < simsInfo.length; i++) {
                edgeSim = {
                    node: {
                        imsi: simsInfo[i].imsi,
                        iccid: simsInfo[i].iccid,
                    }
                };
                edgesSim.push(edgeSim);
            }
            
            edge = {
               node:  {
                   id: models.serviceProfileList[index].id,
                   name: models.serviceProfileList[index].name,
                   simRefs: {
                       edges: edgesSim,
                   } 
               }
            };
            edges.push(edge);
        }

        return {pageInfo, edges: edges};
    }
}

module.exports = resolvers;