import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import authRoutes from "./routes/Authroutes.js"
import contactsRoutes from "./routes/ContactRoutes.js"
import setupSocket from "./socket.js"
import messagesRoutes from "./routes/Messages_route.js"
import channelRoutes from "./routes/ChannelRoute.js"

dotenv.config();

const app= express();
const port= process.env.PORT|| 8080;
const databaseURL= process.env.DATABASE_URL;

app.use(cors({
    origin:["https://chat-app-kappa-sandy.vercel.app"],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true
}))

app.use("/uploads/profiles", express.static("uploads/profiles"))
app.use("/uploads/files", express.static("uploads/files"))

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/channel", channelRoutes)

const server= app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})

setupSocket(server)

mongoose.connect(databaseURL).then(()=>console.log(`DB connection successfull.`));

