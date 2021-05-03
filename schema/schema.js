const simLastSessionDetailsType =  require('../typeDefs/simLastSessionDetailsType')
const simLastSessionDetails = require('../data/simLastSessionDetails')
const simLastSessionLocations = require('../data/simLastSessionLocations')

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
    
    })
  })

const schema = new GraphQLSchema({
    query: RootQueryType,
})

module.exports = schema;