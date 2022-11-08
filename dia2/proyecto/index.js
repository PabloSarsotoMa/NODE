const {writeAndRead} = require("./writeAndRead.js");
const {writeAndRead2} = require("./writeAndRead.js")
const {readConsole} = require("./readConsole.js");
const {readConsole2} = require("./readConsole.js")
readConsole(function(obj){
    writeAndRead(`misObjetos.json`,obj)
});
// readConsole2(function(obj){
//     writeAndRead2(`myObjects.json`,obj)
// });