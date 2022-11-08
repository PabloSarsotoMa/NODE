const fs = require("fs/promises");
let obj1 = {
    "name":"Pedro",
    "surname":"Jimenez",
    "age":34
}

fs.writeFile('objetos.json',JSON.stringify(obj1))
.then(()=>{
    return fs.readFile(`objetos.json`,`utf8`)
    })
.then(data=>{
    console.log(JSON.parse(data))
    })
.catch(err=>{
    console.log(err)
    })

async function asyncWrite(){
    try{
        await fs.writeFile('objetos.json',JSON.stringify(obj1));
        const newObject = await fs.readFile(`objetos.json`,`utf8`);
        console.log(JSON.parse(newObject));
    }
    catch (error){
        console.log(error);
    }
}
asyncWrite();