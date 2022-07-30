// Simulador: 
//Permite al estudiante incorporarse al registro.
//Se le piden datos: Nombre, apellido, edad y materia favorita.
//Se incorpora al nuevo alumno al array "Registro"
//Se muestra en consola la lista de alumnos y un mensaje a partir de un ciclo for que recorre los elementos de los objetos del array. 



//Función constructora:
class Estudiante{
    constructor(nombre, apellido, edad, materiaFavorita){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.materiaFavorita = materiaFavorita
    }
}

//Instanciación de objetos:
const estudiante1 = new Estudiante("Pablo", "Paura", 48, "Matemática")
const estudiante2 = new Estudiante("Lorena", "Suarez", 41, "Lengua")
const estudiante3 = new Estudiante("Adrián", "Rodriguez", 36, "Naturales")
const estudiante4 = new Estudiante("Lucía", "Mendez", 44, "Sociales")
const estudiante5 = new Estudiante("Marcelo", "Pérez", 29, "Química")
const estudiante6 = new Estudiante("Mariela", "Gonzalez", 40, "Música")


//Array:

const registro = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6]
console.log(registro)

//Función para ingresar nuevo estudiante:
function nuevoEstudiante(){
    let nombreIngresado = prompt("Ingresá tu nombre")
    let apellidoIngresado = prompt("Ingresá tu apellido")
    let edadIngresada = prompt("Ingresá tu edad")
    let materiaFavoritaIngresada = prompt("Ingresá tu materia favorita")
    let estudianteCreado = new Estudiante(nombreIngresado, apellidoIngresado, edadIngresada, materiaFavoritaIngresada)
    registro.push(estudianteCreado)
    console.log(estudianteCreado)
}
//Mensaje en consola:
nuevoEstudiante()
for(let elem of registro){
    console.log(`${elem.apellido}, ${elem.nombre} tiene ${elem.edad} años y le gusta mucho ${elem.materiaFavorita}`)
} 