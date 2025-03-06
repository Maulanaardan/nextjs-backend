import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if(connectionState === 1) {
        console.log("connection succes");
        return;
    }

    if(connectionState === 2) {
        console.log("connecting...on process");
        return
    }

    try{
        mongoose.connect(MONGODB_URI!, {
            dbName : "next-backend",
            bufferCommands : true
        });
        console.log("connected")
    } catch (error:any) {
        console.log("error :", error);
        throw new Error("error :", error)
    }
}

export default connect