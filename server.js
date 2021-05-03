const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat,
    GraphQLNonNull,
 
  } = require('graphql')
  const app = express()
  


  const simLastSessionDetails = [
    { imsi:250010000004479, startTime : '2019-08-30T11:06:38.333', endTime : '2019-08-31T11:07:07.123', updateTime : '2019-08-31T11:07:07.123',  upLink:5, downLink:7, imei:10141280412804717770 },
    { imsi:880010000002266, startTime : '2019-09-30T11:06:38.333', endTime : '2019-10-31T11:07:07.123', updateTime : '2019-08-31T11:07:07.123',  upLink:8, downLink:5, imei:10151870412504716770 }
  ]

  const simLastSessionLocations = [
    { imsi:250010000004479, mcc:260, mnc:3, lac:57720, cell:45673},
    { imsi:880010000002266, mcc:555, mnc:1, lac:98530, cell:78568}
  ]

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
    query: RootQueryType 
  })
  
  app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
  }))
  app.listen(5000, () => console.log('Server Running...'))