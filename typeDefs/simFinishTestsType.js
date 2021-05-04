const { GraphQLObjectType, GraphQLString, GraphQLNonNull, } = require('graphql')

const simFinishTestsType = new GraphQLObjectType({
  name: 'simFinishTests',
  description: 'Finish the test stage of a SIM Card',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    simId: { type: GraphQLNonNull(GraphQLString) },
    requestedTime: { type: GraphQLString },
    completionTime: { type: GraphQLNonNull(GraphQLString) },
    creationTime: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
  })
})

module.exports = simFinishTestsType;