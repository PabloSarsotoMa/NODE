const fs = require("fs");
let readLine = require(`readline`);
let rl = readLine.createInterface(process.stdin, process.stdout);
class Obj {
    constructor(){
        this.name;
        this.surname;
        this.age;
    }
}
let obj1 = new Obj();
setTimeout(function(){
        rl.question(`¿cual es tu nombre?`,(nombre)=>{
            obj1.name = nombre;
            rl.question(`¿Cúal es tu apellido?`,(apellido)=>{
                obj1.surname = apellido;
                rl.question(`¿Cúal es tu edad?`,(edad)=>{
                    obj1.age = edad;
                    rl.close();
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
                })
            })
        });
},1000);
console.log(obj1);
// console.log(obj1)