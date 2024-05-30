import mongoose from "mongoose";

export const connectDB=async()=>{

    await mongoose.connect('mongodb+srv://nimsaradz:spmsSL8Haqw1UC1o@cluster0.t7xboic.mongodb.net/food-del').then(()=>console.log("DB CONNECTED"));
}