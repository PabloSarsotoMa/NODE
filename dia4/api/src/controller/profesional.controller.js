const {Professional} = require('../claseProfesional');
let profesionales = [];
function getprofesional(req,res){
    let name = req.query.id
    let respuesta;
        if (profesionales[name] != null){
            respuesta = {error:false,codigo:200,mensaje:"este es el personaje",resultado:profesionales[name]}
        }else
            respuesta = {error:true,codigo:200,mensaje:'El profesional no existe',resultado:null}
    res.send(respuesta);
}
function getProfesionales(req,res){
    let respuesta;
    if(profesionales != null){
        respuesta = {error:false,codigo:200,mensaje:"este es el personaje",resultado:profesionales}
    }else{
        respuesta = {error:true,codigo:200,mensaje:'hola',resultado:null}
    }
    res.send(respuesta);
}
function postProfesional(req,res){
    let newProfesional = new Professional(
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession); 
    let respuesta;
    console.log(req.body);
    if(newProfesional !== null){
        profesionales.push(newProfesional);
        respuesta = {error:false,codigo:200,mensaje:'Usuario creado',resultado:profesionales};
    }else{
        respuesta = {error:true,codigo:200,mensaje:'Usuario ya existe',resultado:null};
    }
    res.send(respuesta);
}
function putProfesional(req,res){
    let respuesta;
    let name = req.query.id
    let newProfesional = new Professional(
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.height,
        req.body.isRetired,
        req.body.nationality,
        req.body.oscarsNumber,
        req.body.profession);
        if(profesionales[name] != null){
            profesionales[name] = newProfesional;
            respuesta = {error:false,codigo:200,mensaje:'Usuario actualizado',resultado:profesionales[name]}
    }else{
        respuesta = {error:true,codigo:200,mensaje:'El usuario no existe'};
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