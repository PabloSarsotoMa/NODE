const {Professional} = require('../profesionalClase');
let profesionales = [];
function getprofesional(req,res){
    let name = req.query.id
    let respuesta;
        if (profesionales[name] != null){
            respuesta = profesionales[name];
        }else
            respuesta = {erro:true,codigo:200,mensaje:'El profesional no existe'}
    res.send(respuesta);
}
function getProfesionales(req,res){
    let respuesta;
    for(i=0;i<profesionales.length;i++){
        respuesta += profesionales[i];
    }
    res.send(respuesta);
}
function postProfesional(req,res){
    let newProfesional = { nombre: req.body.name,
        edad: req.body.age,
        peso: req.body.weight,
        altura: req.body.height,
        retirado: req.body.isRetired,
        nacionalidad: req.body.nationality,
        oscars: req.body.oscarsNumber,
        profesion: req.body.profession};
    let respuesta;
    console.log(req.body);
    if(newProfesional !== null){
        profesionales.push(newProfesional);
        respuesta = {error:false,codigo:200,mensaje:'Usuario creado',resultado:newProfesional};
    }else{
        respuesta = {error:true,codigo:200,mensaje:'Usuario ya existe',resultado:null};
    }
    res.send(respuesta);
}
function putProfesional(req,res){
    let respuesta;
    let name = req.query.id
        if(profesionales[name] != null){
            profesionales[name].name = req.body.name;
            profesionales[name].age = req.body.age;
            profesionales[name].weight = req.body.weight;
            profesionales[name].height = req.body.height;
            profesionales[name].isRetired = req.body.isRetired;
            profesionales[name].nationality = req.body.nationality;
            profesionales[name].oscarsNumber = req.body.oscarsNumber;
            profesionales[name].profession = req.body.profession;
            respuesta = {error:false,codigo:200,mensaje:'Usuario actualizado',resultado:profesionales[name]}
    }else{
        respuesta = {error:true,codigo:200,mensaje:'El usuario no existe',resultado:profesionales[name]};
    }
    res.send(respuesta);
    }


function deleteProfesional(req,res){
    let respuesta;
    let name = req.query.id
    if(profesionales[name] != null){
        profesionales[name] = null;
        respuesta = {error:false,codigo:200,mensaje:'Usuario borrado'};
    }else{
        respuesta = {error:true,codigo:200,mensaje:'El usuario no existe',resultado:profesionales[name]};
    }
    res.send(respuesta);
}
module.exports = {getprofesional,putProfesional,postProfesional,deleteProfesional,getProfesionales};