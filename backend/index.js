import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbconnect from "./config/db.js";
import userRouter from "./routes/user.route.js"


dotenv.config({
    path:'./.env'
})

dbconnect();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));



app.use("/api/v1/user",userRouter); 

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})

