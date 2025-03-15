// Declaracion de variables y  Array
//
let input_Amigos = document.getElementById("amigo");
let nombre_Amigos = [];
const campo = document.getElementById("amigo")
//
// Funcion para agregar los nombres
//
function agregarAmigo() {
    // Validacion de nombre vacio
    if (!input_Amigos.value){
        alert("Por favor ingresa un nombre")
    }        
    else{    
     nombre_Amigos.push(input_Amigos.value);
    }
};
console.log(nombre_Amigos);
function borrarCampo() {
    if (input_Amigos.value !== ""){
    campo.value = "";
    campo.placeholder = "Escribe otro Nombre";
    }
}


