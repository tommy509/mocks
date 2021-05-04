const simChangeStatus = require('../data/simChangeStatus')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,

} = require('graphql')

const simChangeStatusType = new GraphQLObjectType({
    name: 'simChangeStatus',
    description: 'This returns sim last status change',
    fields: () => ({
      id: { type: GraphQLNonNull(GraphQLString) },
      simId: { type: GraphQLNonNull(GraphQLString) },
      requestedTime: { type: GraphQLNonNull(GraphQLString) },
      changeType: { type: GraphQLNonNull(GraphQLString) },
      state: { type: GraphQLNonNull(GraphQLString) },
      completionTime: { type: GraphQLNonNull(GraphQLString) },
      creationTime: { type: GraphQLNonNull(GraphQLString) },  
    })
  })

  module.exports = simChangeStatusType;