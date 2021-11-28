const express = require('express')

const friendsControllers = require('../controllers/friends.controller');


const friendRouter = express.Router()
friendRouter.post("/" ,friendsControllers.postFriends);


friendRouter.get("/" , friendsControllers.getFriends);

friendRouter.get("/:friendsId" , friendsControllers.getFriend);

module.exports = friendRouter