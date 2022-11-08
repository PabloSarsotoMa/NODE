const fs = require("fs/promises");
const readline = require(`readline`);

// let obj1 = {
//     calle:"alcalá",
//     numero:36
// };
function writeAndRead(path,obj){
fs.writeFile(path,JSON.stringify(obj))
.then(()=>{
    return fs.readFile(path,`utf8`)
    })
.then(data=>{
    console.log(JSON.parse(data))
    })
.catch(err=>{
    console.log(err)
    })
}
// writeAndRead(`gggg.json`,obj1);
async function writeAndRead2(path,obj){
    try{
        await fs.writeFile(path,JSON.stringify(obj));
        const nuevo = await fs.readFile(path,`utf8`);
        console.log(JSON.parse(nuevo));
    }
    catch(error){
        console.log(error);
    }
}
// writeAndRead2(`jjjjj.json`,obj1);
module.exports = {writeAndRead, writeAndRead2};
