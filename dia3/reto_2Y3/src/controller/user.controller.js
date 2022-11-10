const {Professional} = require('../profesionalClase');
let profesional1 = null;
function getprofesional(req,res){
    let respuesta;
    if (profesional1 != null){
        respuesta = profesional1;
    }else
        respuesta = {erro:true,codigo:200,mensaje:'El profesional no existe'}
    res.send(respuesta);
}
function postProfesional(req,res){
    let respuesta;
    console.log(req.body);
    if(profesional1 === null){
        profesional1 = { nombre: req.body.name,
                            edad: req.body.age,
                            peso: req.body.weight,
                            altura: req.body.height,
                            retirado: req.body.isRetired,
                            nacionalidad: req.body.nationality,
                            oscars: req.body.oscarsNumber,
                            profesion: req.body.profession};
        respuesta = {error:false,codigo:200,mensaje:'Usuario creado',resultado:profesional1};
    }else{
        respuesta = {error:true,codigo:200,mensaje:'Usuario ya existe',resultado:null};
    }
    res.send(respuesta);
}
function putProfesional(req,res){
    let respuesta;
    if(profesional1 != null){
        profesional1.name = req.body.name;
        profesional1.age = req.body.age;
        profesional1.weight = req.body.weight;
        profesional1.height = req.body.height;
        profesional1.isRetired = req.body.isRetired;
        profesional1.nationality = req.body.nationality;
        profesional1.oscarsNumber = req.body.oscarsNumber;
        profesional1.profession = req.body.profession;
        respuesta = {error:false,codigo:200,mensaje:'Usuario actualizado',resultado:profesional1}
    }else{
        respuesta = {error:true,codigo:200,mensaje:'El usuario no existe',resultado:profesional1};
    }
    res.send(respuesta);
}
function deleteProfesional(req,res){
    let respuesta;
    if(profesional1 != null){
        profesional1 = null;
        respuesta = {error:false,codigo:200,mensaje:'Usuario borrado',resultado:profesional1};
    }else{
        respuesta = {error:true,codigo:200,mensaje:'El usuario no existe',resultado:profesional1};
    }
    res.send(respuesta);
}
module.exports = {getprofesional,putProfesional,postProfesional,deleteProfesional};