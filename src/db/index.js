import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB=async ()=>{

    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB host :${connectionInstance.connection.host}`)
        //Checkout connectionInstance
    }catch(error){
        console.log(`\n MongoDB connection Failed  : ${error}`)
        process.exit(1)

    }
}

export default connectDB