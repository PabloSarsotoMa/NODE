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