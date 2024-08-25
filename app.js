import express from "express";

const app = express();

app.get('/', (req, res, next) => {
    res.send("hello world")
})

// get the code of the 5 joke
app.get('/api/joke', (req, res) => {
    const joke = [

        {
            id: 1,
            title: 'joke 1',
            content: "Another joke"
        },
        {
            id: 2,
            title: 'joke 2',
            content: "Another joke"
        },

        {
            id: 3,
            title: 'joke 3',
            content: "Another joke"
        },
        {
            id: 4,
            title: 'joke 4',
            content: "Another joke"
        },
        {
            id: 5,
            title: 'joke 5',
            content: "Another joke"
        },
    ]
    res.send(joke)
})
export default app;
