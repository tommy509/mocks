const simFinishTestsType = require('../typeDefs/simFinishTestsType')
const simFinishTestsData = require('../data/simFinishTestsData')
const { GraphQLString, GraphQLFloat, GraphQLNonNull } = require('graphql');

const simFinishTests = {
    type: simFinishTestsType,
    description: 'sim last status change',
    args: {
        imsi: { type: GraphQLNonNull(GraphQLFloat) },
        serviceProfileId: { type: GraphQLString },
        stage: { type: GraphQLString },
    },
    resolve: (parent, args) => simFinishTestsData.find(i => i.id),
};

module.exports = simFinishTests;