function postFriends(req , res){
   
    if (!req.body.name) {
        res.status(400).json({ error : "Missing friends name"})
    }

    const newFriends = {
        name : req.body.name,
        id : friends.length
    }
    friends.push(newFriends)
    res.json(newFriends)
}

function getFriends(req , res){
    res.status(200).json(friends)
}

function getFriend(req , res){
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
}

module.exports = {
    postFriends ,
    getFriends ,
    getFriend
}