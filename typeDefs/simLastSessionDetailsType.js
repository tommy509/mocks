const simLastSessionDetails = require('../data/simLastSessionDetails')
const simLastSessionLocations = require('../data/simLastSessionLocations')
const simLastSessionLocationType = require('./simLastSessionLocationType')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,

} = require('graphql')

const simLastSessionDetailsType = new GraphQLObjectType({
    name: 'simLastSessionDetails',
    description: 'This returns sim last session details',
    fields: () => ({
      imsi: { type: GraphQLNonNull(GraphQLFloat) },
      startTime: { type: GraphQLNonNull(GraphQLString) },
      endTime: { type: GraphQLNonNull(GraphQLString) },
      updateTime: { type: GraphQLNonNull(GraphQLString) },
      upLink: { type: GraphQLNonNull(GraphQLInt) },
      downLink: { type: GraphQLNonNull(GraphQLInt) },
      imei: { type: GraphQLNonNull(GraphQLFloat) },
      location: {
        type: simLastSessionLocationType,
        resolve: (simLastSessionDetails) => {
          return simLastSessionLocations.find(simLastSessionLocation => simLastSessionLocation.imsi === simLastSessionDetails.imsi)
        }
      }
     
      
    })
  })

  module.exports = simLastSessionDetailsType;