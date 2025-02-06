import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/lib/connectDB.js";
import router from "./src/routes/shipment.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api",router);

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
    connectDB();
})