const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,

} = require('graphql')

const simLastSessionLocationType = new GraphQLObjectType({
    name: 'location',
    description: 'This represents sim last session location',
    fields: () => ({
      imsi: { type: GraphQLNonNull(GraphQLInt) },
      mcc: { type: GraphQLNonNull(GraphQLInt) },
      mnc: { type: GraphQLNonNull(GraphQLInt) },
      lac: { type: GraphQLNonNull(GraphQLInt) },
      cell: { type: GraphQLNonNull(GraphQLInt) }
    })
  })

  
  module.exports = simLastSessionLocationType;