const fs = require("fs/promises");
const readline = require(`readline`);
function pregunta(pregunta){
    const question = new Promise((resolve,reject)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta)=>{
            resolve(respuesta);
            rl.close();
        });     
    });
    return question;
}

function readConsole(callback){
    let obj1 = {}
pregunta(`¿cual es tu nombre?`)
.then((nombre)=>{
    obj1.name = nombre;
    return pregunta(`¿Cual es tu apellido?`)
})
.then((apellido)=>{
    obj1.surname = apellido;
    return pregunta(`¿Cual es tu edad?`)
})
.then((edad)=>{
    obj1.age = edad;
    callback(obj1)
})
.catch(error=>{
    console.log(error);
})
}
// readConsole(console.log);
async function readConsole2(callback){
    let obj1 = {}
    try{
        let nombre = await pregunta(`¿cual es tu nombre?`);
        obj1.name = nombre;
        let apellido = await pregunta(`¿Cual es tu apellido?`);
        obj1.surname = apellido;
        let edad = await pregunta(`¿Cual es tu edad?`);
        obj1.age = edad;
        await fs.writeFile(`objetos.json`,JSON.stringify(obj1));
        const nuevoObjeto = await fs.readFile(`objetos.json`,`utf8`);
        callback(JSON.parse(nuevoObjeto));
    }
    catch(error){
        callback(error);
    }
}
// readConsole2(console.log)
module.exports = {readConsole, readConsole2};
