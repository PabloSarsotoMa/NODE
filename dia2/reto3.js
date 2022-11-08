const { writeFile } = require("fs");
const fs = require("fs/promises");
const { resolve } = require("path");
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
class Obj {
    constructor(){
        this.name;
        this.surname;
        this.age;
    }
}
let obj1 = new Obj();
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
    return fs.writeFile('./objetos.json',JSON.stringify(obj1))
})
.then(()=>{
    return fs.readFile(`objetos.json`,`utf8`)
    })
.then(data=>{
    console.log(JSON.parse(data))
    })
.catch(err=>{
    console.log(err)
    });
async function prueba1(){
    try{
        let nombre = await pregunta(`¿cual es tu nombre?`);
        obj1.name = nombre;
        let apellido = await pregunta(`¿Cual es tu apellido?`);
        obj1.surname = apellido;
        let edad = await pregunta(`¿Cual es tu edad?`);
        obj1.age = edad;
        await fs.writeFile(`objetos.json`,JSON.stringify(obj1));
        const nuevoObjeto = await fs.readFile(`objetos.json`,`utf8`);
        console.log(JSON.parse(nuevoObjeto));
    }
    catch (error){
        console.log(error);
    }
}
prueba1();
