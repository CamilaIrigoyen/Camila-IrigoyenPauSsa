
const usuario = document.getElementById("nombre");
const mail= document.getElementById("correo");
const contraseña= document.getElementById("exampleInputPassword1");

const  checkbox=document.getElementById("exampleCheck1");
let botonEnviar= document.getElementById ("boton1");



function validar () 
{if ((mail.value !=="") && (contraseña.value !==""))
{console.log ("Bienvenido a PauSsa");}
else {console.log("Campos obligatorios")};
}



// mail.addEventListeneraddEventListener('keyup', validar);
// contraseña.addEventListeneraddEventListener('keyup', validar);

botonEnviar.addEventListener("click",validar());


// boton.addEventListener("click", respuestaEnviar);
// function respuestaEnviar() {
//   console.log ("Su usuario fue creado con exito");
// }

// function respuestaEnviar (arr,fn) {
//     if ((correo==mail) && (contraseña==exampleInputPassword1)){
//         console.log("Bienvenido has ingresado a la tienda");}
//         else {(console.log ("Datos incorrectos"));}}
    

// localStorage.setItem ("credenciales", "Ingrese sus credenciales");
// let mensaje = localStorage.getItem(credenciales)
//localStorage.setItem (crendeciales , "ingrese sus credenciales");//