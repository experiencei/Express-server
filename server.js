const express = require('express')
const friendRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/message.router')
const app = express()

const PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`${req.url} ${req.method} ${delta}ms`);
})

// convert all req to json format

app.use(express.json()) 

app.use("/friends", friendRouter)
app.use("/messages", messagesRouter)
app.listen(PORT ,() => {
    console.log(`app started on port ${PORT}`);
})