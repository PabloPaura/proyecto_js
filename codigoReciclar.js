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

//Instanciación de objetos:
// const estudiante1 = new Estudiante("1","Pablo", "Paura", 48, "pp@mail.com", "Tocar el piano", "Matemática", "@pablop", "assets/avatar_1.jpg")
// const estudiante2 = new Estudiante("2","Lorena", "Suarez", 41, "losu@mail.com", "Andar en bici", "Lengua", "@lgon", "assets/avatar_4.jpg")
// const estudiante3 = new Estudiante("3","Adrián", "Gonzalez", 36, "adrigon@mail.com", "Jugar al fútbol", "Naturales", "@adrigon", "assets/avatar_2.jpg")
// const estudiante4 = new Estudiante("4","Lucía", "Mendez", 44, "lumendez@mail.com", "Cocinar", "Música", "@lulimen", "assets/avatar_5.jpg")
// const estudiante5 = new Estudiante("5","Marcelo", "Pérez", 29, "marceloperez@mail.com", "Ir al gym", "Química", "@marcepp", "assets/avatar_3.jpg")
// const estudiante6 = new Estudiante("6","Mariela", "Gonzalez", 40, "marigonzalez@mail.com", "Fotografía", "Música", "@marigon", "assets/avatar_7.jpg")
// const estudiante7 = new Estudiante("7","Cintia", "Basualdo", "38", "cinbasualdo@mail.com", "Viajar", "Geografía", "@cinbas", "assets/avatar_4.jpg")
// const estudiante8 = new Estudiante("8","Mariano", "Villanueva", "26", "mvilla@mail.com", "Manejar", "Literatura", "@mvilla", "assets/avatar_1.jpg")


//Lógica para inicializar galería:

// if(localStorage.getItem("registro")){
//     registro = JSON.parse(localStorage.getItem("registro"))
//     console.log(registro)
// }else{
//     registro.push(estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8)
//     localStorage.setItem("registro", JSON.stringify(registro))
//     console.log(registro)
// }

//Lógica para armar grupo de compañeros:
// if(localStorage.getItem("grupo")){
//     grupoCompañeros = JSON.parse(localStorage.getItem("grupo"))
// }else{
//     localStorage.setItem("grupo", [])
//     console.log(grupoCompañeros)
// }