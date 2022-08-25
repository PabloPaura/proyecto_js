//Idea de proyecto: Galería, tipo muro, de estudiantes, en la que se mostrarán algunos datos de los mismos, una imagen, pasatiempos etc.
//Desde el botón "conoceme" se accederá a información de contacto sobre el estudiante.
//Con el icono "grupo" en el header, se podrá crear un grupo con una lógica similar a la de agregar productos a un carrito.
//También una sección en la que con un alert puede mostrarse la lista de compañeros y una función para buscar amigos con un toast como respuesta. 

//Código en revisión:
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
//Función menu:
// function menu(opcionSeleccionada){
//     switch(opcionSeleccionada){
//         case 0:
//             salir = true
//             alert(`Gracias por pasar por la galería, volvé pronto!`)
//         break
//         case 1:
//             guardarEstudiante()
//             for(let elem of registro){
//                 console.log(`${elem.apellido}, ${elem.nombre} tiene ${elem.edad} años y le gusta mucho ${elem.materiaFavorita}`)
//             } 
//             alert(`Verás tus datos en consola`)
//         break
//         case 2:
//             alert(`La lista completa de compañeros logueados la verás por consola`)
//             const listadoAlumnos = registro.map(estudiante => estudiante.nombre + " " + estudiante.apellido)
//             console.log(listadoAlumnos)
//         break
//         case 3:
//             buscarAmigo()
//             alert(`En consola verás si tu amigo es parte de nuestra galería`)
//         break
//         case 4:
//         break
//         case 5:
//         break
//         case 6:
//             let notas;
//             let promedio;
//             let acumulador = 0;
//             let nnotas = parseInt(prompt(`Ingresá la cantidad de notas que querés promediar`))
//             for(i=0; i < nnotas; i++){
//                 let notas = parseInt(prompt(`Ingresá la nota ` + i))
//                 acumulador = acumulador + notas;        
//             }           
//             promedio = acumulador / nnotas;
//             console.log(`Tu promedio es ${promedio}`)
//             alert(`Podés consultar tu promedio en la consola`)
//         break
//         default:
//             alert(`Ingresá una opción válida, del 0 al 6`)
//     }
// }
// let salir 
// while(salir!= true){
//     iniciar()
// }

 //Función constructora:
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

 //Instanciación de objetos:
const estudiante1 = new Estudiante("1","Pablo", "Paura", 48, "pp@mail.com", "Tocar el piano", "Matemática", "@pablop", "assets/avatar_1.jpg")
const estudiante2 = new Estudiante("2","Lorena", "Suarez", 41, "losu@mail.com", "Ciclismo", "Lengua", "@lgon", "assets/avatar_4.jpg")
const estudiante3 = new Estudiante("3","Adrián", "Gonzalez", 36, "adrigon@mail.com", "Jugar al fútbol", "Naturales", "@adrigon", "assets/avatar_2.jpg")
const estudiante4 = new Estudiante("4","Lucía", "Mendez", 44, "lumendez@mail.com", "Cocinar", "Música", "@lulimen", "assets/avatar_5.jpg")
const estudiante5 = new Estudiante("5","Marcelo", "Pérez", 29, "marceloperez@mail.com", "Ir al gym", "Química", "@marcepp", "assets/avatar_3.jpg")
const estudiante6 = new Estudiante("6","Mariela", "Gonzalez", 40, "marigonzalez@mail.com", "Fotografía", "Música", "@marigon", "assets/avatar_7.jpg")
const estudiante7 = new Estudiante("7","Cintia", "Basualdo", "38", "cinbasualdo@mail.com", "Viajar", "Geografía", "@cinbas", "assets/avatar_4.jpg")
const estudiante8 = new Estudiante("8","Mariano", "Villanueva", "26", "mvilla@mail.com", "Manejar", "Literatura", "@mvilla", "assets/avatar_1.jpg")

 //Arrays declarados:
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

//Elementos DOM y variables:
//Botón mostrar galería:
let mostrarGaleriaBtn = document.getElementById("mostrarGaleria")
//Boton guardar estudiante:
const guardarEstudianteBtn = document.getElementById("guardarEstudiante")
//ocultar galería:
let divGaleria = document.getElementById("alumnosCards")
let ocultarGaleriaBtn = document.getElementById("ocultarGaleria")
//Ver listado:
let verListaBtn = document.getElementById("mostrarListado")
//Buscar compañero:
let buscarAlumno = document.getElementById("apellidoBuscado")
let buscarAlumnoBtn = document.getElementById("buscarEstudiante")
//Buscar Hobbie:
let buscarHobbieBtn = document.getElementById("buscarHobbie")
let hobbieBuscado = document.getElementById("hobbieBuscado")
let listaHobbiesBtn = document.getElementById("listadoHobbies" )
//Modo grafiti y nerdy:
let grafitiBtn = document.getElementById("btnGrafiti")
let nerdyBtn = document.getElementById("btnNerdy")

//Buscar hobbies afines con nulish:

function coincidirHobbie(){
    let buscarHobbie = registro.find(estudiante => estudiante.hobbie == hobbieBuscado) ?? "no hay alumnos con ese hobbie"
    // console.log(buscarHobbie)
}


//Eventos:
mostrarGaleriaBtn.addEventListener("click", mostrarGaleria)
guardarEstudianteBtn.addEventListener("click", guardarEstudiante)
ocultarGaleriaBtn.addEventListener("click", ocultarGaleria)
verListaBtn.addEventListener("click", mostrarListadoAlumnos)
buscarAlumnoBtn.addEventListener("click", buscarAmigo)
buscarHobbieBtn.addEventListener("click", coincidirHobbie)
listaHobbiesBtn.addEventListener("click", mostrarHobbiesAlumnos)
grafitiBtn.addEventListener("click", ()=>{
    document.body.style.backgroundImage = "url(assets/grafiti1.jpg)"
})
nerdyBtn.addEventListener("click", ()=>{
    document.body.style.backgroundImage = "url(assets/nerdyy.jpg)"
})

//Plantilla para crear nuevo estudiante:(Agrego op ternario para cambiar color de edad)

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
                                    <li class="list-group-item ${estudiante.edad <= 40 ? "edadMenor" : "edadMayor"}">Edad: ${estudiante.edad}</li>
                                    <li class="list-group-item">Hobbie: ${estudiante.hobbie}</li>
                                    </ul>
                                    <div class="card-body">
                                    <button type="button" class="btn btn-light" id"botonC${estudiante.id}">Conoceme</button>
                                    <button type="button" class="btn btn-light" id"botonG${estudiante.id}">Agregar a grupo</button>
                                    </div>
                                </div>`
        divEstudiantes.appendChild(nuevoCard)  
        
        //Botón agregar estudiante a un grupo:
        // let botonAgregar = document.getElementById(`boton${estudiante.id}`) 
        // console.log(botonAgregar)

    })  
}

//Plantilla modal para alumnos (en construcción)

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

function ocultarGaleria(){
    divGaleria.innerHTML =""
}

function mostrarListadoAlumnos(){
    const listadoAlumnos = registro.map(estudiante => estudiante.nombre + " " + estudiante.apellido)
            console.log(listadoAlumnos)
            Swal.fire({
                title: "Listado de alumnos",
                text: `${listadoAlumnos}`,
                confirmButtonText: "Cerrar",
                footer: "Si tu compañero no está en la lista¡Invitalo!",
                width: "60%",
                background: "#D9D9D9",
                confirmButtonColor: "#f7a2a1",
                imageUrl: "assets/iconoGrupo.jpg",
                imageWidth: "100px"         
            })
}

//Función mostrar listado de hobbies:

function mostrarHobbiesAlumnos(){
    const hobbiesAlumnos = registro.map(estudiante => estudiante.nombre + " " + estudiante.apellido + " " + estudiante.hobbie)
            console.log(hobbiesAlumnos)
            Swal.fire({
                title: "Lista de hobbies",
                text: `${hobbiesAlumnos}`,
                confirmButtonText: "Cerrar",
                width: "60%",
                background: "#D9D9D9",
                confirmButtonColor: "#f7a2a1",
                imageUrl: "assets/iconoGrupo.jpg",
                imageWidth: "100px"         
            })
}


//Función para buecar un amigo con op ternario:

    function buscarAmigo(){    
        let busqueda = registro.some((estudiante) => estudiante.apellido == buscarAlumno.value)
        busqueda == true ?   Swal.fire({
            title: "Tu amigo está logueado", confirmButtonColor: "#f7a2a1", toast: "true"}) : Swal.fire({
                title: "Tu amigo no está logueado ¡Invitalo!", confirmButtonColor: "#f7a2a1",  toast:"true"}) 

            }
        
//Función reloj:
let html = document.getElementById("tiempo");
setInterval(function(){
    tiempo = new Date();
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();

    if(horas<10)
        horas = "0"+horas;
    if(minutos<10)
        minutos = "0"+minutos;
    if(segundos<10)
        segundos = "0"+segundos;

    html.innerHTML = horas+" : "+minutos+" : "+segundos;

}, 1000);

