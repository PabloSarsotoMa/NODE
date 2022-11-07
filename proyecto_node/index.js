const {writeAndRead} = require("./writeAndReadObject.js");
const {readConsole} = require("./readConsole.js");
readConsole(function(obj){
    writeAndRead(`misObjetos.json`,obj)
})
