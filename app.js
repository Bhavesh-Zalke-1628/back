import express from "express";

const app = express();

app.get('/', (req, res, next) => {
    res.send("hello world")
})

app.get('/hello', (req, res, next) => {
    res.send("hello")
})

export default app;
