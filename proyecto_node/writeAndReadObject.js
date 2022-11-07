function writeAndRead(path, obj){
    const fs = require("fs");
    let stringObj = JSON.stringify(obj);
    fs.writeFile(path,stringObj,`utf8`,(err)=>{
        if(err){
            console.log(err);
        }else{
            fs.readFile(path,`utf8`,(err,stringObj)=>{
                if(err){
                    console.log(err);
                }else{
                    let obj1_1 = JSON.parse(stringObj);
                    console.log(obj1_1);
                }
            })
        }
    });
}
// let objeto = {
//     "calle":"Teruel",
//     "numero":8
// }
// writeAndRead(`./misObjetos.json`,objeto);
module.exports = {writeAndRead}