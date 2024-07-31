import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"

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
app.use("/images", express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)

app.get("/", (req,res) => {
    res.send("API Working!!");
})

app.listen(4000, () => {
    console.log(`Server started on http://localhost:${port}`)
})
