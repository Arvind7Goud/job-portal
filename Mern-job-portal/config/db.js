import mongoose from "mongoose";
import colors from "colors";
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server Running ${mongoose.connection.host}`.bgMagenta.white);
        
    }catch(e){
        console.log(`MongoDB Erorr ${e}`.bgRed.white);
        
    }
};

export default connectDB;