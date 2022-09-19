//Idea de proyecto: Galería, tipo muro, de estudiantes, en la que se mostrarán algunos datos de los mismos, una imagen, pasatiempos etc.
//Con el icono "grupo" en el header, se podrá crear un grupo con una lógica similar a la de agregar productos a un carrito.
//También una sección en la que con un alert puede mostrarse la lista de compañeros y una función para buscar amigos con un toast como respuesta.
//Una sección de buscar hobbies afines entre compañeros.
//Un calculador de promedios en el que se ingresan notas por un teclado, las notas se reflejan en pantalla y se calcula el promedio.

//Función constructora:
class Estudiante {
  constructor(
    id,
    nombre,
    apellido,
    edad,
    correo,
    hobbie,
    materiaFavorita,
    insta,
    imagen
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.correo = correo),
      (this.hobbie = hobbie),
      (this.materiaFavorita = materiaFavorita);
    (this.insta = insta), (this.imagen = imagen);
  }
}

//Fetch JSON estudantes:

fetch("estudiantes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let estudiante of data) {
      let nuevoCard = new Estudiante(
        estudiante.id,
        estudiante.nombre,
        estudiante.apellido,
        estudiante.edad,
        estudiante.correo,
        estudiante.hobbie,
        estudiante.materiaFavorita,
        estudiante.insta,
        estudiante.imagen
      );
      registro.push(nuevoCard);
    }
  });


//Arrays declarados:
let registro = [];
let grupoCompañeros = JSON.parse(localStorage.getItem("grupo")) || [];

//Elementos DOM y variables:

//Grupo de compañeros:
let mostrargrupoBtn = document.getElementById("verGrupo");
//Modal de grupo compañeros:
let modalBody = document.getElementById("modal-body");
//Botón mostrar galería:
let mostrarGaleriaBtn = document.getElementById("mostrarGaleria");
//Boton guardar estudiante:
const guardarEstudianteBtn = document.getElementById("guardarEstudiante");
//ocultar galería:
let divGaleria = document.getElementById("alumnosCards");
let ocultarGaleriaBtn = document.getElementById("ocultarGaleria");
//Ver listado:
let verListaBtn = document.getElementById("mostrarListado");
//Buscar compañero:
let buscarAlumno = document.getElementById("apellidoBuscado");
let buscarAlumnoBtn = document.getElementById("buscarEstudiante");
//Buscar Hobbie:
let buscarHobbieBtn = document.getElementById("buscarHobbie");
let hobbieBuscado = document.getElementById("hobbieBuscado");
let listaHobbiesBtn = document.getElementById("listadoHobbies");
//Botones dark y light mode:
let lightBtn = document.getElementById("lightMode");
let darkBtn = document.getElementById("darkMode");
//Cards de estudiantes:
let divEstudiantes = document.getElementById("alumnosCards");


//Eventos:

mostrarGaleriaBtn.addEventListener("click", mostrarGaleria);
guardarEstudianteBtn.addEventListener("click", guardarEstudiante);
ocultarGaleriaBtn.addEventListener("click", ocultarGaleria);
verListaBtn.addEventListener("click", mostrarListadoAlumnos);
buscarAlumnoBtn.addEventListener("click", buscarAmigo);
buscarHobbieBtn.addEventListener("click", coincidirHobbie);
listaHobbiesBtn.addEventListener("click", mostrarHobbiesAlumnos);

//Dark Mode:

let modoOscuro;
if(localStorage.getItem("darkMode")){
  modoOscuro = localStorage.getItem("darkMode")
}else{
  localStorage.setItem("darkMode", "light")
} 
lightBtn.addEventListener("click", () => {
document.body.style.background = "white";
document.body.style.color = "black";
localStorage.setItem("darkMode", "light")  
 });
darkBtn.addEventListener("click", () => {
  document.body.style.background = "black";
  document.body.style.color = "white";
  localStorage.setItem("darkMode", "dark")
});

//Plantilla para crear nuevo estudiante:(Agrego op ternario para cambiar color de edad)

function mostrarGaleria() {
  divEstudiantes.innerHTML = "";
  registro.forEach((estudiante) => {
    let nuevoCard = document.createElement("div");
    nuevoCard.innerHTML += `<div class="card" style="width: 18rem;">
                                    <img src="${
                                      estudiante.imagen
                                    }" class="card-img-top" alt="Avatar">
                                    <div class="card-body">
                                    <h5 class="card-title">${
                                      estudiante.nombre
                                    } ${estudiante.apellido}</h5>
                                    <p class="card-text">Hola, me llamo ${
                                      estudiante.nombre
                                    }. Me encanta ${
      estudiante.hobbie
    } y también ${estudiante.materiaFavorita}. Contactáme!</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                    <li class="list-group-item ${
                                      estudiante.edad <= 40
                                        ? "edadMenor"
                                        : "edadMayor"
                                    }">Edad: ${estudiante.edad}</li>
                                    <li class="list-group-item">Correo: ${
                                      estudiante.correo
                                    }</li>
                                    <li class="list-group-item">Instagram: ${
                                      estudiante.insta
                                    }</li>
                                    </ul>
                                    <div class="card-body">
                                    <button id="grupo${
                                      estudiante.id
                                    }" class="btn btn-light" >Agregar a grupo</button>
                                    </div>
                                </div>`;
    divEstudiantes.appendChild(nuevoCard);

    // Botón agregar estudiante a un grupo:
    let botonAgregar = document.getElementById(`grupo${estudiante.id}`);
    botonAgregar.addEventListener("click", () => {
      agregarAgrupo(estudiante);
    });
  });
}

//Funciones:

//Función agregar alumno a grupo:

function agregarAgrupo(estudiante) {

  Swal.fire({
    title: "Grupo",
    text: `${estudiante.nombre} ${estudiante.apellido} se ha agregado al grupo de trabajo!`,
    confirmButtonText: "Cerrar",
    footer: "Bienvenido al nuevo grupo de trabajo!",
    background: "#D9D9D9",
    confirmButtonColor: "#f7a2a1",
    imageUrl: "assets/iconoGrupo.jpg",
    imageWidth: "100px",
  });

  let estudianteAgregado = grupoCompañeros.indexOf(estudiante);
  
  if (estudianteAgregado == -1) {
    grupoCompañeros.push(estudiante);
    
    //Cargar al storage
    console.log(localStorage.setItem("grupo", JSON.stringify(grupoCompañeros)));
  } else {
    Swal.fire({
      title: "Grupo",
      text: `${estudiante.nombre} ${estudiante.apellido} ya es parte de este grupo de trabajo! Elegí otro compañero!`,
      confirmButtonText: "Cerrar",
      background: "#D9D9D9",
      confirmButtonColor: "#f7a2a1",
      imageUrl: "assets/iconoGrupo.jpg",
      imageWidth: "100px",
    });
  }
}
//Función para crear card de estudiante (Se muestra en dom):
function guardarEstudiante() {
  let nombreImput = document.getElementById("nombreIngresado");
  let apellidoImput = document.getElementById("apellidoIngresado");
  let edadImput = document.getElementById("edadIngresada");
  let correoImput = document.getElementById("correoIngresado");
  let hobbieImput = document.getElementById("hobbieIngresado");
  let materiaImput = document.getElementById("materiaIngresada");
  let instaImput = document.getElementById("instaIngresado");
  let estudianteCreado = new Estudiante(
    registro.length + 1,
    nombreImput.value,
    apellidoImput.value,
    edadImput.value,
    correoImput.value,
    hobbieImput.value,
    materiaImput.value,
    instaImput.value,
    "assets/avatar_1.jpg"
  );
  console.log(estudianteCreado);
  //Pushear nuevo estudiante:
  registro.push(estudianteCreado);
  //Guardar nuevo estudiante en storage:
  localStorage.setItem("registro", JSON.stringify(registro));
}
//Función para armar grupo de compañeros (El grupo se muestra en un modal)
function armarGrupo(grupoCompañeros) {
  modalBody.innerHTML = " ";
  grupoCompañeros.forEach((estudianteAgregado) => {
    modalBody.innerHTML += `
             <div class="card border-primary mb-3" id ="grupoCompañeros${estudianteAgregado.id}" style="max-width: 540px;">
                 <img class="card-img-top" src="${estudianteAgregado.imagen}" alt="">
                <div class="card-body">
                         <h4 class="card-title">${estudianteAgregado.nombre} ${estudianteAgregado.apellido}</h4>
                        
                    
                         <p class="card-text">Edad: ${estudianteAgregado.edad}</p> 
                         <p class="card-text">Correo: ${estudianteAgregado.correo}</p> 
                         <p class="card-text">Instagram: ${estudianteAgregado.insta}</p> 
                         <button class= "btn btn-danger" id="botonEliminar${estudianteAgregado.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>                
             </div>
     `;
  });
  grupoCompañeros.forEach((estudianteAgregado, indice) => {
    //capturamos el boton sin usar variable y adjuntamos evento
    document
      .getElementById(`botonEliminar${estudianteAgregado.id}`)
      .addEventListener("click", () => {
        //Dentro del evento:
        Swal.fire({
          title: "Grupo",
          text: `${estudianteAgregado.nombre} ${estudianteAgregado.apellido} se ha eliminado del grupo de trabajo!`,
          confirmButtonText: "Cerrar",          
          background: "#D9D9D9",
          confirmButtonColor: "#f7a2a1",
          imageUrl: "assets/iconoGrupo.jpg",
          imageWidth: "100px",
        });

        //Eliminamos del DOM
        let cardEstudiante = document.getElementById(
          `botonEliminar${estudianteAgregado.id}`
        );
        console.log(cardEstudiante);
        cardEstudiante.remove(estudianteAgregado);

        //Eliminamos del array compras
        grupoCompañeros.splice(indice, 1);
        console.log(grupoCompañeros);
        localStorage.setItem("grupo", JSON.stringify(grupoCompañeros));
        armarGrupo(grupoCompañeros);
      });
  });
}
//Mostrar listado de alumnos: 
function mostrarListadoAlumnos() {
  const listadoAlumnos = registro.map(
    (estudiante) => estudiante.nombre + " " + estudiante.apellido
  );
 
  Swal.fire({
    title: "Listado de alumnos",
    text: `${listadoAlumnos}`,
    confirmButtonText: "Cerrar",
    footer: "Si tu compañero no está en la lista¡Invitalo!",
    width: "60%",
    background: "#D9D9D9",
    confirmButtonColor: "#f7a2a1",
    imageUrl: "assets/iconoGrupo.jpg",
    imageWidth: "100px",
  });
}

mostrargrupoBtn.addEventListener("click", () => {
  armarGrupo(grupoCompañeros);
});

function ocultarGaleria() {
  divGaleria.innerHTML = "";
}

//Buscar hobbies afines:

function coincidirHobbie() {
  let buscarHobbie =
    registro.find((estudiante) => estudiante.hobbie === hobbieBuscado) ??
    Swal.fire({
      title: "No hay amigos con ese hobbie",
      confirmButtonColor: "#f7a2a1",
      toast: "true",
    });

}

// //Función mostrar listado de hobbies:

function mostrarHobbiesAlumnos() {
  const hobbiesAlumnos = registro.map(
    (estudiante) =>
      estudiante.nombre + " " + estudiante.apellido + " " + estudiante.hobbie
  );
  // console.log(hobbiesAlumnos)
  Swal.fire({
    title: "Lista de hobbies",
    text: `${hobbiesAlumnos}`,
    confirmButtonText: "Cerrar",
    width: "60%",
    background: "#D9D9D9",
    confirmButtonColor: "#f7a2a1",
    imageUrl: "assets/iconoGrupo.jpg",
    imageWidth: "100px",
  });
}

//Función para buscar un amigo con op ternario:

function buscarAmigo() {
  let busqueda = registro.some(
    (estudiante) => estudiante.apellido == buscarAlumno.value
  );
  busqueda == true
    ? Swal.fire({
        title: "Tu amigo está logueado",
        confirmButtonColor: "#f7a2a1",
        toast: "true",
      })
    : Swal.fire({
        title: "Tu amigo no está logueado ¡Invitalo!",
        confirmButtonColor: "#f7a2a1",
        toast: "true",
      });
}

//Función reloj:
let html = document.getElementById("tiempo");
setInterval(function () {
  tiempo = new Date();
  horas = tiempo.getHours();
  minutos = tiempo.getMinutes();
  segundos = tiempo.getSeconds();

  if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  html.innerHTML = horas + " : " + minutos + " : " + segundos;
}, 1000);

//Calculador de promedios:
//Array con el acumulador de notas
let accumulator = []
let result = 0;


//Variable con el display
const display = document.getElementById("calcDisplay");

//Variable donde voy a mostrar las notas ingresadas
const promDisplay = document.getElementById("promDisplay");

//Tomo los botones y les agrego el evento para que se vean en pantalla
const btnEvent = document.querySelectorAll("#calcNumber");
btnEvent.forEach((key) => {
  key.addEventListener("click", () => {
    displayNumber(key.innerText);
  });
});

//Funcion para mostrar lo que se escribe en pantalla
function displayNumber(number) {
  display.innerText === "0"
    ? (display.innerText = number)
    : (display.innerText += number);
}

//Tomo el boton guardar nota y siguiente y le agrego el evento
const addNotes = document.getElementById("calcAdd");
addNotes.addEventListener("click", () => addNote(display.innerHTML));

//funcion de sumar nota
function addNote(add) {
  accumulator.push(add);
  promDisplay.innerHTML += `Nota ${accumulator.length}: ${display.innerHTML}<br>`;
  display.innerHTML = "0";
  console.log(accumulator);
}

//boton de promedio y agrego evento
const promBtn = document.getElementById("calcResult");
promBtn.addEventListener('click', () => {
  console.log(accumulator)
  prom(accumulator)
})

//Funcion que suma las notas del acumulador
function prom(accumulator) {
  let length = accumulator.length
  let accNumerico = accumulator.map(num => Number(num)).reduce((acc, num) => acc + num);
  console.log(accNumerico / length)
  Swal.fire({
    title: "Promedio",
    text: `Tu promedio es ${accNumerico / length}`,
    confirmButtonText: "Cerrar",
    background: "#D9D9D9",
    confirmButtonColor: "#f7a2a1",
  });
}
//Función para borrar promedio y dejar el array vacío:
const btnBorrar = document.getElementById("calcBorrar")
btnBorrar.addEventListener("click", ()=> {
  clear(accumulator)
} )
function clear (accumulator){
  accumulator = []
  display.innerHTML = " "
  promDisplay.innerHTML = " "

}

