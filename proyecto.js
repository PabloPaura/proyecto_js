//Idea de proyecto: Galería, tipo muro, de estudiantes, en la que se mostrarán algunos datos de los mismos, una imagen, pasatiempos etc.
//Desde el botón "conoceme" se accederá a información de contacto sobre el estudiante.
//Con el icono "grupo" en el header, se podrá crear un grupo con una lógica similar a la de agregar productos a un carrito.
//También una sección en la que con un alert puede mostrarse la lista de compañeros y una función para buscar amigos con un toast como respuesta. 


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

//Fetch JSON estudantes:
let rgistro = []
fetch("estudiantes.json")
.then(response => response.json())
.then(data =>{
    console.log(data)
    for(let estudiante of data){
        let nuevoCard = new Estudiante(estudiante.id, estudiante.nombre, estudiante.apellido, estudiante.edad, estudiante.correo, estudiante.hobbie, estudiante.materiaFavorita, estudiante.insta, estudiante.imagen)
        registro.push(nuevoCard)
    }
})

 //Arrays declarados:
let registro = []
let grupoCompañeros = JSON.parse(localStorage.getItem("grupo")) || []


//Elementos DOM y variables:
let modalBody = document.getElementById("modal-body")

let mostrargrupoBtn = document.getElementById("verGrupo")
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

let divEstudiantes = document.getElementById("alumnosCards")
// divEstudiantes.setAttribute("class", "card")




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

divEstudiantes.innerHTML = ""
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
                                    <li class="list-group-item">Correo: ${estudiante.correo}</li>
                                    <li class="list-group-item">Instagram: ${estudiante.insta}</li>
                                    </ul>
                                    <div class="card-body">
                                    <button id"grupo${estudiante.id}" class="btn btn-light" >Agregar a grupo</button>
                                    </div>
                                </div>`
        divEstudiantes.appendChild(nuevoCard)  
        
        // Botón agregar estudiante a un grupo:
        // let botonAgregar = document.getElementById(`grupo${estudiante.id}`)
        // console.log(botonAgregar)
        // botonAgregar.addEventListener("click", () =>{
        //     agregarAgrupo(estudiante)
            
        // })

    })  
}

//Funciones:

//Función agregar alumno a grupo:

// function agregarAgrupo(estudiante){
//     console.log(`${estudiante.nombre} ${estudiante.apellido} se ha agregado al grupo de trabajo!`)
    
//     let estudianteAgregado = grupoCompañeros.indexOf(estudiante)
//     console.log(estudianteAgregado)
//     console.log(productosEnGrupo);
//     // if (estudianteAgregado == -1){
//     //     estudiantesEnGrupo.push(estudiante)
//     //     console.log(estudiantesEnGrupo);
//     //     //Cargar al storage
//     //     localStorage.setItem("grupo", JSON.stringify(estudiantesEnGrupo))       
//     // }else{
//     //     console.log(`El alumno ${estudiante.nombre} se ha agregado al grupo de trabajo!`)}
        
//     }

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

// // function armarGrupo() {

// //     modalBody.innerHTML = " "  
// //     productosDelStorage.forEach((productoCarrito) => {
        
// //         modalBody.innerHTML += `
// //             <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
// //                 <img class="card-img-top" src="${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
// //                 <div class="card-body">
// //                         <h4 class="card-title">${productoCarrito.titulo}</h4>
                    
// //                         <p class="card-text">$${productoCarrito.precio}</p> 
// //                         <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
// //                 </div>    
            
            
// //             </div>
// //     `
    
      
// // })
// } 
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



//Función mostrar grupo de alumnos:



function ocultarGaleria(){
    divGaleria.innerHTML =""
}

//Buscar hobbies afines con nulish:

function coincidirHobbie(){
    let buscarHobbie = registro.find(estudiante => estudiante.hobbie == hobbieBuscado) ?? "no hay alumnos con ese hobbie"
    console.log(buscarHobbie)
}


//Función mostrar listado de hobbies:

function mostrarHobbiesAlumnos(){
    const hobbiesAlumnos = registro.map(estudiante => estudiante.nombre + " " + estudiante.apellido + " " + estudiante.hobbie)
            // console.log(hobbiesAlumnos)
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



    