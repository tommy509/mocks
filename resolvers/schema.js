const simLastSessionDetailsType =  require('../typeDefs/simLastSessionDetailsType')
const simLastSessionDetails = require('../data/simLastSessionDetails')
const simLastSessionLocations = require('../data/simLastSessionLocations')
const simChangeStatusType =  require('../typeDefs/simChangeStatusType')
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

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
      simLastSessionDetails: {
        type: simLastSessionDetailsType,
        description: 'sim last session details',
        args: {
          imsi: { type: GraphQLFloat},
        },
        resolve: (parent, args) =>  simLastSessionDetails.find( simLastSessionDetails =>  simLastSessionDetails.imsi === args.imsi)
      },
      simChangeStatus: {
        type: simChangeStatusType,
        description: 'sim last status change',
        args: {
          simChangeId: { type: GraphQLString},
        },
        resolve: (parent, args) =>  simChangeStatus.find( simChangeStatus =>  simChangeStatus.id === args.simChangeId)
      },
    })
  })

const schema = new GraphQLSchema({
    query: RootQueryType,
})

module.exports = schema;