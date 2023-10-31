const mongoose=require("mongoose")
const { EventModel } = require("../models/event")
let SaveEvent=async({title,description,price})=>{
    let date=new Date().toISOString()
    let event=new EventModel({
        title,
        description,
        price,
        date
    })
    try {
        await event.save()
        return event
    } catch (error) {
        console.log(error)
        return {}
    }
}
 
let GetEvents=async()=>{
    try {
        let results=await EventModel.find()
        console.log(results)
        return results
    } catch (error) {
        console.log(error)
        return error
    }
}


module.exports={
    SaveEvent,
    GetEvents
}