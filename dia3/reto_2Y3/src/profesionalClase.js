class Professional{
    constructor(nombre, edad, peso, altura, retirado, nacionalidad, numero_oscars, profesion, foto){
        this.age = edad;
        this.name = nombre;
        this.weight = peso;
        this.height = altura;
        this.isRetired = retirado;
        this.nationality = nacionalidad;
        this.oscarsNumber = numero_oscars;
        this.profession = profesion;
        this.photo = foto;
    }
    printAll(){
        console.log(this);
    }
}
module.exports = {Professional};