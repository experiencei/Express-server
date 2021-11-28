const express = require('express')
const friendRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/message.router')
const app = express()
const path = require('path')

const PORT = 3000;

app.set("view engine", "hbs");
app.set("views" , path.join(__dirname,"views"))
app.use((req, res, next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`${req.url} ${req.baseUrl} ${req.method} ${delta}ms`);
})

// convert all req to json format

app.use("/site" , express.static("public"))
app.use(express.json()) 

 
app.get("/" , (req, res) => {
    res.render("index" , {
        title : "Clever Man!" ,
        caption : "Let\'s go skiing"
    })
})

app.use("/friends", friendRouter)
app.use("/messages", messagesRouter)
app.listen(PORT ,() => {
    console.log(`app started on port ${PORT}`);
})