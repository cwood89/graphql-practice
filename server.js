const express = require('express')
const expressGraphQL = require('express-graphql')
const app = express()
const PORT = 5000
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "BruceLee",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Nun-Chucks'
      }
    })
  })
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.listen(PORT, () =>
  console.log(`🌎  Server running on Port: ${PORT}`))