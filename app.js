const bodyParser = require("body-parser")
const express=require("express")
const {graphqlHTTP}=require("express-graphql")
const { buildSchema }=require("graphql");
const { connection } = require("./db");
const { SaveEvent, GetEvents } = require("./resolver/event.resolver");

const app=express();

const events=[];

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello App is working fine")
})
app.use("/graphql",graphqlHTTP({
    schema: buildSchema(`
    type Event{
        _id:ID!
        title:String!
        description:String!
        price:Float!
        date:String!
    }

    input EventInput{
        title:String!
        description:String!
        price:Float!
    }

    type RootQuery{
        events:[Event!]!
    }
    type RootMutation{
        createEvent(eventInput:EventInput):Event!
    }

    schema{
        query:RootQuery
        mutation:RootMutation
    }
    
    `),
    rootValue:{
        events:async()=>{    
         let results=await GetEvents();
         console.log(results)
         return results
        },
        createEvent:async(args)=>{
            try {
                let result=await SaveEvent(args.eventInput)
                console.log(result)
                return result
            } catch (error) {
                console.log(error)
                return error
            }
        }
    },
    graphiql:true
})
)


app.listen(5000,async()=>{
    console.log("App is working")
    try {
        await connection
        console.log("App is connected")
    } catch (error) {
        console.log(error)
        console.log("There is some error going on in the db")
        
    }
})