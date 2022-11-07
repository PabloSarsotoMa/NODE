const fs = require("fs");
let obj1 = {
    "name":"Pedro",
    "surname":"Jimenez",
    "age":34
}
let stringObj = JSON.stringify(obj1);
fs.writeFile('./objetos.json',stringObj,`utf8`,(err)=>{
    if(err){
        console.log(err);
    }else{
        fs.readFile(`./objetos.json`,`utf8`,(err,stringObj)=>{
            if(err){
                console.log(err);
            }else{
                let obj1_1 = JSON.parse(stringObj);
                console.log(obj1_1);
            }
        })
    }
});
console.log(obj1);