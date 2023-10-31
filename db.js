const mongoose=require("mongoose")
let connection=mongoose.connect("mongodb+srv://akshayverma4299:graphqlpass@clustergraphql.89q2nsj.mongodb.net/Graphql")
module.export={
    connection
}