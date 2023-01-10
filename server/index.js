import express, { application } from "express";
import cors from "cors"
import productRouter from "./routes/productroute.js"
import categoryRouter from "./routes/categoryroute.js"
const app=express()
app.use(cors());
app.use(express.json())
app.use("/product",productRouter)
app.use("/category", categoryRouter);
app.listen(4000,()=>console.log("listening to 4k..."))