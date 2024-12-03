import express from "express"
import indexRoute from "./routes/indexRoute.js";
import cors from "cors";
import "./db/dbConnect.js";
import "./models/questions.model.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url, new Date().toLocaleTimeString());
    next()
})

app.use(indexRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})