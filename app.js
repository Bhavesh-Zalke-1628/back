import express from "express";

const app = express();

app.get('/', (req, res, next) => {
    res.send("hello world")
})

app.get('/hello', (req, res, next) => {
    res.send("hello")
})

app.get("/hi", (req, res) => {
    res.send('hoooo')
})
export default app;
