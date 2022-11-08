function readConsole(callback){
    const fs = require("fs");
    let readLine = require(`readline`);
    let rl = readLine.createInterface(process.stdin, process.stdout);
    let obj1 = {};
    rl.question(`¿cual es tu nombre?`,(nombre)=>{
        obj1.name = nombre;
        rl.question(`¿Cúal es tu apellido?`,(apellido)=>{
            obj1.surname = apellido;
            rl.question(`¿Cúal es tu edad?`,(edad)=>{
                obj1.age = edad;
                rl.close();
                callback (obj1);
            })
        })
    });
}
readConsole(console.log);
module.exports = {readConsole}