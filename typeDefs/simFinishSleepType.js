const { GraphQLObjectType, GraphQLString, GraphQLNonNull, } = require('graphql')

const simFinishSleepType = new GraphQLObjectType({
  name: 'simFinishSleep',
  description: 'Change SIM state from Sleep To Live',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    simId: { type: GraphQLNonNull(GraphQLString) },
    requestedTime: { type: GraphQLString },
    completionTime: { type: GraphQLNonNull(GraphQLString) },
    creationTime: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
  })
})

module.exports = simFinishSleepType;