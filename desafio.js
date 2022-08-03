//Idea de proyecto: Galería, tipo muro, de estudiantes, en la que se mostrarán algunos datos de los mismos, una imagen, pasatiempos etc.
//Se crea un menu interactivo en el que el estudiante podrá loguearse, buscar a un amigo para ver si está logueado, calcular su promedio, consultar la lista de estudiantes logueados, ver la galería y contavtar a alguno de ellos a partir de la información de la tarjeta de presentación.

// //Función constructora:
class Estudiante{
    constructor(nombre, apellido, edad, materiaFavorita){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.materiaFavorita = materiaFavorita
    }
    }


// //Instanciación de objetos:
const estudiante1 = new Estudiante("Pablo", "Paura", 48, "Matemática")
const estudiante2 = new Estudiante("Lorena", "Suarez", 41, "Lengua")
const estudiante3 = new Estudiante("Adrián", "Gonzalez", 36, "Naturales")
const estudiante4 = new Estudiante("Lucía", "Mendez", 44, "Música")
const estudiante5 = new Estudiante("Marcelo", "Pérez", 29, "Química")
const estudiante6 = new Estudiante("Mariela", "Gonzalez", 40, "Música")

// //Control de la función:
// // console.log(estudiante1)
// // estudiante1.mostrarDatoAlumno() 

// //Array:

const registro = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6]
// console.log(registro)

// //Función para ingresar nuevo estudiante:
function nuevoEstudiante(){
    let nombreIngresado = prompt("Ingresá tu nombre")
    let apellidoIngresado = prompt("Ingresá tu apellido")
    let edadIngresada = prompt("Ingresá tu edad")
    let materiaFavoritaIngresada = prompt("Ingresá tu materia favorita")
    let estudianteCreado = new Estudiante(nombreIngresado, apellidoIngresado, edadIngresada, materiaFavoritaIngresada)
    registro.push(estudianteCreado)
    console.log(estudianteCreado)
}

//Funciones:

// //Función para ingresar nuevo estudiante:
function nuevoEstudiante(){
    let nombreIngresado = prompt("Ingresá tu nombre")
    let apellidoIngresado = prompt("Ingresá tu apellido")
    let edadIngresada = prompt("Ingresá tu edad")
    let materiaFavoritaIngresada = prompt("Ingresá tu materia favorita")
    let estudianteCreado = new Estudiante(nombreIngresado, apellidoIngresado, edadIngresada, materiaFavoritaIngresada)
    registro.push(estudianteCreado)
    console.log(estudianteCreado)
}

//Funcion para iniciar el programa de opciones:
function iniciar(){
    let opcion = parseInt(prompt(`¿Qué querés hacer hoy?:
                        1- Agregarme al registro
                        2- Ver los perfiles de mis compañeros
                        3- Buscar un amigo
                        4- Borrar mi perfil
                        5- Ver lista de tareas semanales
                        6- Calcular mi promedio
                        0- Salir
                        `))
    menu(opcion)
}

//Función para buscar un amigo:
function buscarAmigo(){
    let buscarAlumno = prompt("Ingresá el apellido del alumno que buscas")
    let busqueda = registro.some((estudiante) => estudiante.apellido == buscarAlumno)
    // console.log(busqueda)
    if(busqueda == true){
        console.log("Tu amigo está logueado")
    }else{
        console.log("Tu amigo no está logueado¡ Invitalo!")
    }
}

//Función menu:
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por pasar por la galería, volvé pronto!`)
        break
        case 1:
            nuevoEstudiante()
            for(let elem of registro){
                console.log(`${elem.apellido}, ${elem.nombre} tiene ${elem.edad} años y le gusta mucho ${elem.materiaFavorita}`)
            } 
            alert(`Verás tus datos en consola`)

        break
        case 2:
            alert(`La lista completa de compañeros logueados la verás por consola`)
            const listadoAlumnos = registro.map(estudiante => estudiante.nombre + " " + estudiante.apellido)
            console.log(listadoAlumnos)


        break
        case 3:
            buscarAmigo()
            alert(`En consola verás si tu amigo es parte de nuestra galería`)

        break
        case 4:


        break
        case 5:


        break
        case 6:
            let notas;
            let promedio;
            let acumulador = 0;
            let nnotas = parseInt(prompt(`Ingresá la cantidad de notas que querés promediar`))
            for(i=0; i < nnotas; i++){
                let notas = parseInt(prompt(`Ingresá la nota ` + i))
                acumulador = acumulador + notas;        
            }
            
            promedio = acumulador / nnotas;
            console.log(`Tu promedio es ${promedio}`)
            alert(`Podés consultar tu promedio en la consola`)
            



        break
        default:
            alert(`Ingresá una opción válida, del 0 al 6`)


    }
}

let salir 
while(salir!= true){
    iniciar()
}