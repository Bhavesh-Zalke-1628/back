import app from "./app.js"
import { config } from "dotenv"
config()
const PORT = process.env.PORT
console.log(PORT)


app.listen(PORT, async () => {
    console.log("The localhost start")
})