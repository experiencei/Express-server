const express = require('express')
const messagesControllers = require('./controllers/messages.controller');
const friendsControllers = require('./controllers/friends.controller');
const app = express()

const PORT = 3000;


const friends = [
    { id : 1 , name : 'Sir Isacc Newton'},
    { id : 2 , name : 'Sir Albert Eistein'},
    { id : 3 , name : 'Nikola Tesla'}
]

app.use((req, res, next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`${req.url} ${req.method} ${delta}ms`);
})

app.use(express.json())

app.post("/friends" ,friendsControllers.postFriends)


app.get("/friends" , friendsControllers.getFriends);

app.get("/friends/:friendsId" , friendsControllers.getFriend)

app.get("/messages" ,  messagesControllers.getMessages)

app.post("/messages" ,  messagesControllers.postMessages)
app.listen(PORT ,() => {
    console.log(`app started on port ${PORT}`);
})