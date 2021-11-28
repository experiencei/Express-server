const express = require('express')

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

app.post("/friends" , (req , res) => {
   
    if (!req.body.name) {
        res.status(400).json({ error : "Missing friends name"})
    }

    const newFriends = {
        name : req.body.name,
        id : friends.length
    }
    friends.push(newFriends)
    res.json(newFriends)
})


app.get("/friends" , (req , res) => {
    res.status(200).json(friends)
});

app.get("/friends/:friendsId" , (req , res) => {
    const quer = Number(req.params.friendsId);
    const friend = friends[quer];
    console.log(friend);
    if(friend) {
        res.json(friend)
    }
    else {
        res.status(404).json({
            error : 'Friend is not found!'
        })
    }
})
app.listen(PORT ,() => {
    console.log(`app started on port ${PORT}`);
})