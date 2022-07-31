let botonPromo= document.getElementById ("footer");
let mailPromo= document.getElementById ("promociones");

function enviarPromo () 
{if ((mailPromo.value !==""))
{Swal.fire('En breves estarás recibiendo las promos!!!!');}
else {Swal.fire({
    title: 'Estas seguro que no queres ser el primero en enterarte de las novedades?',
    text: "Esperamos puedas cambiar de opinión!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Esperamos verte pronto por acá',
      )
    }
  })};
}


botonPromo.addEventListener("click",(e) =>{
    e.preventDefault()
enviarPromo()});

