const simFinishSleepType = require('../typeDefs/simFinishSleepType')
const simFinishSleepData = require('../data/simFinishSleepData')
const { GraphQLString, GraphQLFloat, GraphQLNonNull } = require('graphql');

const simFinishSleep = {
    type: simFinishSleepType,
    description: 'sim last status change',
    args: {
        imsi: { type: GraphQLNonNull(GraphQLFloat) },
        serviceProfileId: { type: GraphQLString },
    },
    resolve: (parent, args) => simFinishSleepData.find(i => i.id),
};

module.exports = simFinishSleep;