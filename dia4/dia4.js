class Professional{
    constructor(nombre, edad, peso, altura, retirado, nacionalidad, numero_oscars, profesion){
        this.age = edad;
        this.name = nombre;
        this.weight = peso;
        this.height = altura;
        this.isRetired = retirado;
        this.nationality = nacionalidad;
        this.oscarsNumber = numero_oscars;
        this.profession = profesion;
    }
    printAll(){
        console.log(this);
    }
}
module.exports = {Professional};
function crear_personaje(){
        name = document.getElementById("nombre").value;
        age = document.getElementById("edad").value;
        weight = document.getElementById("peso").value;
        height = document.getElementById("altura").value;
        oscars = document.getElementById("oscars").value;
        nationality = document.getElementById("nacionalidad").value;
        retired = document.getElementById("retirado").value;
        profession = document.getElementById("profesion").value;
        let url = "http://localhost:3000/profesional";
        let param = {
            headers: {"Content-type": "application/json; charset= UTF-8"},
            body: JSON.stringify({name: name,age: age,weight: weight,height: height,oscarsNumber: oscars,nationality: nationality,isRetired: retired,profession: profession}),
            method: "POST"
        }
        fetch(url,param)
        .then (function(data){
            return data.json();
        })
        .then(function(data){
            console.log(data);
            let q = document.getElementById("profesionales")
            q.innerHTML = `
            <div class="card bg-danger" style="width: 18rem;">
            <img src="./galeria/RPC-JP_Logo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.resultado[data.resultado.length-1].name}</h5>
                <p class="card-text">Edad: ${data.resultado[data.resultado.length-1].age}</p>
                <p class="card-text">Peso: ${data.resultado[data.resultado.length-1].weight}</p>
                <p class="card-text">Altura: ${data.resultado[data.resultado.length-1].height}</p>
                <p class="card-text">Retirado: ${data.resultado[data.resultado.length-1].isRetired}</p>
                <p class="card-text">Nacionalidad: ${data.resultado[data.resultado.length-1].nationality}</p>
                <p class="card-text">Oscars: ${data.resultado[data.resultado.length-1].oscarsNumber}</p>
                <p class="card-text">Profesión: ${data.resultado[data.resultado.length-1].profession}</p>
                <a href="#" class="btn btn-dark">Añadir a película</a>
            </div>
        </div>`})
        .catch(function(error){
            console.log(error)
        })
    
}
function mostrar_personaje(){
    let id = document.getElementById("id").value;
    if(id!=""){
        let url = `http://localhost:3000/profesional?id=${id}`;
        let param = {
        headers: {"Content-type": "application/json; charset=UTF-8"},
        method: "GET"}
        fetch(url,param)
        .then(function(data){
            return data.json();
        })
        .then(function(data){
            console.log(data)
            document.getElementById("profesionales").innerHTML = `
            <div class="card bg-danger" style="width: 18rem;">
            <img src="./galeria/RPC-JP_Logo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.resultado.name}</h5>
                <p class="card-text">Edad: ${data.resultado.age}</p>
                <p class="card-text">Peso: ${data.resultado.weight}</p>
                <p class="card-text">Altura: ${data.resultado.height}</p>
                <p class="card-text">Retirado: ${data.resultado.isRetired}</p>
                <p class="card-text">Nacionalidad: ${data.resultado.nationality}</p>
                <p class="card-text">Oscars: ${data.resultado.oscarsNumber}</p>
                <p class="card-text">Profesión: ${data.resultado.profession}</p>
                <a href="#" class="btn btn-dark">Añadir a película</a>
            </div>
            </div>`})
        .catch(function(error){
        console.log(error);
        })}else{
            let url = `http://localhost:3000/profesionales`;
            let param = {
                headers: {"Content-type": "application/json; charset=UTF-8"},
                method: "GET"}
            fetch(url,param)
            .then(function(data){
                return data.json();
            })
            .then(function(data){
                console.log(data)
                for(i=0;i<data.resultado.length;i++){
                document.getElementById("profesionales").innerHTML += `
                <div class="card bg-danger" style="width: 18rem;">
                <img src="./galeria/RPC-JP_Logo.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.resultado[i].name}</h5>
                    <p class="card-text">Edad: ${data.resultado[i].age}</p>
                    <p class="card-text">Peso: ${data.resultado[i].weight}</p>
                    <p class="card-text">Altura: ${data.resultado[i].height}</p>
                    <p class="card-text">Retirado: ${data.resultado[i].isRetired}</p>
                    <p class="card-text">Nacionalidad: ${data.resultado[i].nationality}</p>
                    <p class="card-text">Oscars: ${data.resultado[i].oscarsNumber}</p>
                    <p class="card-text">Profesión: ${data.resultado[i].profession}</p>
                    <a href="#" class="btn btn-dark">Añadir a película</a>
                </div>
                </div>`}})
            .catch(function(error){
            console.log(error);
            })
        }
}
function modificar_personaje(){
    let id = document.getElementById("id").value;
    let url = `http://localhost:3000/profesional?id=${id}`;
    name = document.getElementById("nombre").value;
    age = document.getElementById("edad").value;
    weight = document.getElementById("peso").value;
    height = document.getElementById("altura").value;
    oscars = document.getElementById("oscars").value;
    nationality = document.getElementById("nacionalidad").value;
    retired = document.getElementById("retirado").value;
    profession = document.getElementById("profesion").value;
    let param = {
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({name: name,age: age,weight: weight,height: height,oscarsNumber: oscars,nationality: nationality,isRetired: retired,profession: profession}),
        method: "PUT"
    }
    fetch(url,param)
        .then (function(data){
            return data.json();
        })
        .then(function(data){
            console.log(data);
            let q = document.getElementById("profesionales")
            q.innerHTML = `
            <div class="card bg-danger" style="width: 18rem;">
            <img src="./galeria/RPC-JP_Logo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.resultado.name}</h5>
                <p class="card-text">Edad: ${data.resultado.age}</p>
                <p class="card-text">Peso: ${data.resultado.weight}</p>
                <p class="card-text">Altura: ${data.resultado.height}</p>
                <p class="card-text">Retirado: ${data.resultado.isRetired}</p>
                <p class="card-text">Nacionalidad: ${data.resultado.nationality}</p>
                <p class="card-text">Oscars: ${data.resultado.oscarsNumber}</p>
                <p class="card-text">Profesión: ${data.resultado.profession}</p>
                <a href="#" class="btn btn-dark">Añadir a película</a>
            </div>
        </div>`})
        .catch(function(error){
            console.log(error)
        })
}
function eliminar_personaje(){
    let id = document.getElementById("id").value;
    let url = `http://localhost:3000/profesional?id=${id}`;
    let param = {
        headers: {"Content-type": "application/json; charset=UTF-8"},
        method: "DELETE"
    }
    fetch(url,param)
        .then (function(data){
            return data.json();
        })
        .then(function(data){
            console.log(data)})
}