//Idea de proyecto: Galería, tipo muro, de estudiantes, en la que se mostrarán algunos datos de los mismos, una imagen, pasatiempos etc.
//Se crea un menu interactivo en el que el estudiante podrá loguearse, buscar a un amigo para ver si está logueado, calcular su promedio, consultar la lista de estudiantes logueados, ver la galería y contavtar a alguno de ellos a partir de la información de la tarjeta de presentación.

// //Función constructora:
class Estudiante{
    constructor(id, nombre, apellido, edad, correo, hobbie, materiaFavorita, insta, imagen){
        this.id = id,
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.correo = correo,
        this.hobbie = hobbie,
        this.materiaFavorita = materiaFavorita
        this.insta = insta,
        this.imagen = imagen
    }
}


// //Instanciación de objetos:
const estudiante1 = new Estudiante("1","Pablo", "Paura", 48, "pp@mail.com", "Tocar el piano", "Matemática", "@pablop", "assets/avatar_1.jpg")
const estudiante2 = new Estudiante("2","Lorena", "Suarez", 41, "losu@mail.com", "Ciclismo", "Lengua", "@lgon", "assets/avatar_4.jpg")
const estudiante3 = new Estudiante("3","Adrián", "Gonzalez", 36, "adrigon@mail.com", "Jugar al fútbol", "Naturales", "@adrigon", "assets/avatar_2.jpg")
const estudiante4 = new Estudiante("4","Lucía", "Mendez", 44, "lumendez@mail.com", "Cocinar", "Música", "@lulimen", "assets/avatar_5.jpg")
const estudiante5 = new Estudiante("5","Marcelo", "Pérez", 29, "marceloperez@mail.com", "Ir al gym", "Química", "@marcepp", "assets/avatar_3.jpg")
const estudiante6 = new Estudiante("6","Mariela", "Gonzalez", 40, "marigonzalez@mail.com", "Fotografía", "Música", "@marigon", "assets/avatar_7.jpg")
const estudiante7 = new Estudiante("7","Cintia", "Basualdo", "38", "cinbasualdo@mail.com", "Viajar", "Geografía", "@cinbas", "assets/avatar_4.jpg")
const estudiante8 = new Estudiante("8","Mariano", "Villanueva", "26", "mvilla@mail.com", "Manejar", "Literatura", "@mvilla", "assets/avatar_1.jpg")


// //Array:

let registro = []
let grupoCompañeros = []

//Lógica para inicializar galería:

if(localStorage.getItem("registro")){
    registro = JSON.parse(localStorage.getItem("registro"))
    console.log(registro)
}else{
    registro.push(estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8)
    localStorage.setItem("registro", JSON.stringify(registro))
    console.log(registro)
}

//Lógica para armar grupo de compañeros:
if(localStorage.getItem("grupo")){
    grupoCompañeros = JSON.parse(localStorage.getItem("grupo"))
}else{
    localStorage.setItem("grupo", [])
    console.log(grupoCompañeros)
}

//Plantilla para crear nuevo estudiante:

let divEstudiantes = document.getElementById("alumnosCards")
divEstudiantes.setAttribute("class", "card")
function mostrarGaleria(){
    registro.forEach((estudiante)=>{
        let nuevoCard = document.createElement("div")
        nuevoCard.innerHTML += `<div class="card" style="width: 18rem;">
                                    <img src="${estudiante.imagen}" class="card-img-top" alt="Avatar">
                                    <div class="card-body">
                                    <h5 class="card-title">${estudiante.nombre} ${estudiante.apellido}</h5>
                                    <p class="card-text">Hola, me llamo ${estudiante.nombre}. Me encanta ${estudiante.hobbie} y también ${estudiante.materiaFavorita}. Contactáme!</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Edad: ${estudiante.edad}</li>
                                    <li class="list-group-item">Hobbie: ${estudiante.hobbie}</li>
                                    </ul>
                                    <div class="card-body">
                                    <button type="button" class="btn btn-light" id"boton${estudiante.id}">Conoceme</button>
                                    </div>
                                </div>`
        divEstudiantes.appendChild(nuevoCard)  
        
        //Botón agregar estudiante a un grupo:
        // let botonAgregar = document.getElementById(`boton${estudiante.id}`)
        // console.log(botonAgregar)

    })  
}


//mostrarGaleria()
//ocultarGaleria()
let mostrarGaleriaBtn = document.getElementById("mostrarGaleria")
mostrarGaleriaBtn.addEventListener("click", mostrarGaleria)
//Funciones:

function guardarEstudiante(){
    let nombreImput = document.getElementById("nombreIngresado")
    let apellidoImput = document.getElementById("apellidoIngresado")
    let edadImput = document.getElementById("edadIngresada")
    let correoImput = document.getElementById("correoIngresado")
    let hobbieImput = document.getElementById("hobbieIngresado")
    let materiaImput = document.getElementById("materiaIngresada")
    let instaImput = document.getElementById("instaIngresado")
    let estudianteCreado = new Estudiante(registro.length+1, nombreImput.value, apellidoImput.value, edadImput.value, correoImput.value, hobbieImput.value, materiaImput.value, instaImput.value, "assets/avatar_1.jpg") 
    console.log(estudianteCreado)
    //Pushear nuevo estudiante:
    registro.push(estudianteCreado)
    //Guardar nuevo estudiante en storage:
    localStorage.setItem("registro", JSON.stringify(registro))
    
}
//Boton guardar estudiante:
const guardarEstudianteBtn = document.getElementById("guardarEstudiante")
guardarEstudianteBtn.addEventListener("click", guardarEstudiante)

//Botón armar grupo:
// const armarGrupoBtn = document.getElementById("grupoCompañeros")
// armarGrupoBtn.addEventListener("click", crearGrupo )



// let galeriaJSON = JSON.stringify(registro)
// localStorage.setItem("arraygaleria", galeriaJSON)
 

//Funcion para iniciar el programa de opciones:
// function iniciar(){
//     let opcion = parseInt(prompt(`¿Qué querés hacer hoy?:
//                         1- Agregarme al registro
//                         2- Ver los perfiles de mis compañeros
//                         3- Buscar un amigo
//                         4- Borrar mi perfil
//                         5- Ver lista de tareas semanales
//                         6- Calcular mi promedio
//                         0- Salir
//                         `))
//     menu(opcion)
// }



//Función para buscar un amigo:
// function buscarAmigo(){
//     let buscarAlumno = prompt("Ingresá el apellido del alumno que buscas")
//     let busqueda = registro.some((estudiante) => estudiante.apellido == buscarAlumno)
//     // console.log(busqueda)
//     if(busqueda == true){
//         console.log("Tu amigo está logueado")
//     }else{
//         console.log("Tu amigo no está logueado¡ Invitalo!")
//     }
// }

// function buscarAmigo(){
//     const aplellidoIngresado = document.getElementById("apellidoBuscado")
//     const buscarEstudianteBtn = document.getElementById("buscarEstudiante")
    
// }

//Función menu:
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por pasar por la galería, volvé pronto!`)
        break
        case 1:
            guardarEstudiante()
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

// let salir 
// while(salir!= true){
//     iniciar()
// }