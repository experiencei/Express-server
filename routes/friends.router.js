const express = require('express')

const friendRouter = express.Router()
friendRouter.post("/" ,friendsControllers.postFriends);


friendRouter.get("/" , friendsControllers.getFriends);

friendRouter.get("/:friendsId" , friendsControllers.getFriend);
