const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const eventSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
},{
    versionKey:false
})
let EventModel=mongoose.model('Event',eventSchema)
module.exports={
    EventModel
}