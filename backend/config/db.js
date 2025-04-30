import mongoose from "mongoose";

const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    }
    catch(error){
        console.log("error occured", error); 

    }
}

export default dbconnect;