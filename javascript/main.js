
// // // //pensado para el carrito de compras//
// let opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
// while(opción !=="0"){
//     

     //genere un filtro para que el usuario elija que busca en la linea 73 a 85 y de la linea 87 a la 91 para que aumente el precio un 20%)
     
     const productos= [
          {id: 1, nombre:" vela aura" , precio: 550, envase: "vidrio",descripcion: "aroma de vainilla",imagen:"./imagenes/vela aura.jpg"},
          {id: 2, nombre: "vela vanina", precio: 620, envase: "madera",descripcion:"vela de soja aroma floral", imagen:"./imagenes/vela aromatica.jpg"},
          {id: 3, nombre: "portavela", precio:580, envase:"vidrio", descripcion:"ideal para decorar tus espacios",imagen:"./imagenes/portavela.jpeg"},
          {id:4, nombre: "pantuflas", precio:2400, descripcion:"Súper cómodas y calentitas , ideales para pasar el invierno", imagen:"./imagenes/pantuflas.jpg"},];
          console.log(productos);

          const seccionProductos = document.getElementById("productos");

          for (item of productos) {
            const htmlProducto = document.createElement("div");
            htmlProducto.classList.add("row");
          
            htmlProducto.innerHTML = `
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body img-fluid">
                    <h5 class="card-title">${item.nombre}</h5>
                    <img src="${item.imagen}" class="card-img-top imgp" alt="paz">
                      <p class="card-text">${item.descripcion}</p>
                      <button class="btn btn-primary" onclick="agregarCarrito(${item.id})">Comprar $${item.precio}</span>
                  </div>
                </div>
              </div>
            `;
          
            seccionProductos.appendChild(htmlProducto);
          }

          let carrito =[];
          console.log(carrito);

          let botonComprar= document.getElementById ("comprar");

          function agregarCarrito(arr,filtro)  {
            let productoAComprar = arr.push ((el) => {
              return el.precio.includes(filtro);});
              return productoAComprar}
              
              agregarCarrito(carrito,productoAComprar);
 

          boton.onclick = () => {agregarCarrito(producto.value)}
         
function elegirPago (arr,filtro){
  let metodoPago = arr.filter ((el) => {switch(filtro) {

            case "1": 
                console.log("Has seleccionado transferencia bancaria");
                break;
    
                case "2":
                    console.log("Has seleccionado mercado pago");
                    break;
    
                    case "3":
                        console.log("Has seleccionado cuenta dni");
                break;
    
                case "4":
                    console.log("Has seleccionado tarjeta de crédito o débito");
                break;
    
                case "5":
                    console.log("Has seleccionado cuotas");
                    let tarjeta=prompt("Ingresa una opción \n 1-Tarjeta Visa \n 2-Mastercard \n 3-Otra");
                    while(opción !=="0"){switch (tarjeta) {
                        case "visa":
                            console.log("hasta 3 cuotas sin interes");
                            break;
                            case "mastercard":
                                console.log("una cuota");
                                break;
                                case "otra":
                                console.log("intereés del 5% por cuota");
                                break;}};
                        
    
                default:
    
                    console.log  ("Opción no válida");
                    break;}
    
                    opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
                    if (opción="0");
                   console.log("Esperamos que disfrutes tu compra"));};



    const eleccionPago = function elegirPago (metodoPago, filtro): 
     



  



//         function porPrecio (productos,precio){
//           precio.productos.forEach ((element) => {(console.log (precio*1.20));
//             return el.precio;})}

//             const productosFiltrados= filtrarProducto(productos,ingreso);
//           console.log(productosFiltrados);

          //probando acceder a cambiar las etiquetas dentro de js//
          const h3= document.getElementsByTagName("h3");
          console.log(h3);

          h3[0].innerHTML= "<h3>Te mostramos en lo que nos destacamos<br><br><p>Hacete un mimo y autoregalate alguno de nuestros productos</p></h3>"

          console.dir(document.head)

         let h4 = document.getElementById("descuento");
         console.log(h4);
        
         //pensado para el carrito cuando aprete en comprar//
         const btnComprar= document.querySelectorAll("#comprar"); 

        

          // btnComprar.addEventListener; ("click", ()=>{
          //  agregarCarrito(arr,filtro);
          //  HTMLAllCollection.item(filtro);})


                    
         
