let botonPromo= document.getElementById ("footer");
let mailPromo= document.getElementById ("promociones");

function enviarPromo () 
{if ((promociones !==""))
{console.log ("En breve te estaran llegando las novedades");}
else {console.log("Te esperamos")};
}


botonPromo.addEventListener("click",(e) =>{
    e.preventDefault()
enviarPromo(promociones.value)});

