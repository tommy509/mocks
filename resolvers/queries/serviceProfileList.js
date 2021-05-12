var models = require("../../data");


var resolvers = {

    serviceProfileList: (args) => {

        var pageInfo = {
            total: models.serviceProfileList.length,
        }
        
        var edges = []
        var edge = {}

        for (let index = 0; index < models.serviceProfileList.length; index++) {
            edge = {
               node:  models.serviceProfileList[index]
            };
            edges.push(edge);
        }

        return {pageInfo, edges: edges};
    }
}

module.exports = resolvers;