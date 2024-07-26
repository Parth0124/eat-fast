import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//configs
const app = express()
const port = 4000

//middlewares
app.use(express.json())
app.use(cors())

//db connectionclea
connectDb();

//api endpoint
app.use('/api/food', foodRouter)

app.get("/", (req,res) => {
    res.send("API Working!!");
})

app.listen(4000, () => {
    console.log(`Server started on http://localhost:${port}`)
})
