import mongoose from "mongoose";


const connectDB = async () => {
 await mongoose.connect(process.env.MONGO_URI);
console.log("mongoDB is connected");
};


export default connectDB;