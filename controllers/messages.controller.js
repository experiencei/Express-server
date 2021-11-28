const path = require('path')


function getMessages(req , res){
    res.sendFile(path.join(__dirname, '..' , "public", "images", "skimountain.jpg"))
    // res.send("<ul><li>Hello APJ kalam</li></ul>")
}

function postMessages(req , res){
    console.log("updating messages...");
}

module.exports = {
    getMessages ,
    postMessages
}