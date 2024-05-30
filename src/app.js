import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";// server se user browser ki cookie set and read kr skte h

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:"16kb"})) //acept json
app.use(express.urlencoded({extended:true, limit:"16kb"})) // extended mean nested object used// encode url %20 etc
app.use(express.static("public")) //public asset store feild pdf in my server
app.use(cookieParser())

export {app}