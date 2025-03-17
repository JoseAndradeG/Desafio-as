// Declaracion de variables y  Array
//
let input_Amigos = document.getElementById("amigo");
let nombre_Amigos = [];
const campo = document.getElementById("amigo");
const listaNombres = document.getElementById("listaAmigos");
let sorteado = 0;
const amigo_Sorteado = document.getElementById("resultado");
//
// Funcion para agregar los nombres
function agregarAmigo() {
    // Validacion de nombre vacio
    if (!input_Amigos.value){
        alert("Por favor ingresa un nombre")
    }        
    else{    
     nombre_Amigos.push(input_Amigos.value);
     listaNombres.innerHTML += `<li>${input_Amigos.value}<li>`;
     console.log(`<li>${input_Amigos.value}<li>`);
    }
};
//console.log(nombre_Amigos);

//Funcion para limpiar el campo Nombre
function borrarCampo() {
    if (input_Amigos.value !== ""){
    campo.value = "";
    campo.placeholder = "Escribe otro Nombre";
    }
}

//funcion para sortear el nombre
function sortearAmigo(){
    sorteado = (Math.floor((Math.random() * nombre_Amigos.length)));
    const seleccionado = nombre_Amigos[sorteado];
    amigo_Sorteado.innerHTML += `<li>El Nombre del Amigo es: ${seleccionado}<li>`;
}

