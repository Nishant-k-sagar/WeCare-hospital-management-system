import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN-HOSPITAL-MANAGEMENT-SYSTEM"
    }).then(() => {
        console.log("successfully connected");
    }).catch((err) => {
        console.log(`some error occurred: ${err}`);
    });
}
