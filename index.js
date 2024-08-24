import app from "./app.js"
import { config } from "dotenv"
config()
const PORT = process.env.PORT
console.log(PORT)

app.get('/twit', (req, res) => {
    res.send("hello i am bhavesh ")
    res.send('good by')
})
app.listen(PORT, async () => {
    console.log("The localhost start")
})