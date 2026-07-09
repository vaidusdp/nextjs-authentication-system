import mongoose from "mongoose";
import path from "path";


export default async function dbConfig(){
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        connection.on('error', (error) => {
            console.log("MongoDB connection error:", error);
        })
    } catch (error) {
        console.log("Something Went Wrong:", error);
    }
}