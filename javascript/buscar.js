let buscoProducto = document.getElementById ("buscar");
let botonBuscar = document.getElementById ("encontrar");

const productosBuscado = [{
    id: 1,
    nombre: " vela aura",
    precio: 550,
    envase: "vidrio",
    descripcion: "aroma de vainilla",
    imagen: "./imagenes/vela aura.jpg"
  },
  {
    id: 2,
    nombre: "vela vanina",
    precio: 620,
    envase: "madera",
    descripcion: "vela de soja aroma floral",
    imagen: "./imagenes/vela aromatica.jpg"
  },
  {
    id: 3,
    nombre: "portavela",
    precio: 580,
    envase: "vidrio",
    descripcion: "ideal para decorar tus espacios",
    imagen: "./imagenes/portavela.jpeg"
  },
  {
    id: 4,
    nombre: "pantuflas",
    precio: 2400,
    descripcion: "Súper cómodas y calentitas , ideales para pasar el invierno",
    imagen: "./imagenes/pantuflas.jpg"
  },]

  function buscarProducto (arr,filtro)
  { const encontrado = arr.filter ((el)  =>{
    return el.nombre.includes(filtro);});
    return encontrado;
  }
 



botonBuscar.addEventListener ("click", (e)=> {
  e.preventDefault()
    const resultadoEncontrado= buscarProducto(productosBuscado,buscoProducto.value) 
    console.log(resultadoEncontrado);
 
});


