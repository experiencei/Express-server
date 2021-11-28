const express = require('express')
const messagesControllers = require('./controllers/messages.controller');
const friendsControllers = require('./controllers/.controller');
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
app.get("/messages" ,  messagesControllers.getMessages)

app.post("/messages" ,  messagesControllers.postMessages)

app.listen(PORT ,() => {
    console.log(`app started on port ${PORT}`);
})