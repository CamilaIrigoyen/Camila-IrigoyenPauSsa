const productos= [
           {id: 1, nombre:" vela aura" , precio: 550, envase: "vidrio",descripcion: "aroma de vainilla",imagen:"./imagenes/vela aura.jpg"},
          {id: 2, nombre: "vela vanina", precio: 620, envase: "madera",descripcion:"vela de soja aroma floral", imagen:"./imagenes/vela aromatica.jpg"},
         {id: 3, nombre: "portavela", precio:580, envase:"vidrio", descripcion:"ideal para decorar tus espacios",imagen:"./imagenes/portavela.jpeg"},
          {id:4, nombre: "pantuflas", precio:2400, descripcion:"Súper cómodas y calentitas , ideales para pasar el invierno", imagen:"./imagenes/pantuflas.jpg"},];
           console.log(productos);

          
          const Tucarrito = document.getElementById("carrito");
          seccionProductos.appendChild(htmlProducto);
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
                      <button class="btn btn-primary" id="botonComprar" onclick="agregarCarrito(${item.id})">Comprar $${item.precio}</button>
                  </div>
                </div>
              </div>
            `;
          
            
          }

        let carrito =[];
        console.log(carrito);

          let compras= document.getElementById ("botonComprar");

          compras.addEventListener ("click", (e) =>{
          agregarCarrito();
          mostrarCarrito();
          });

          function agregarCarrito(id){
            let productoAComprar = productos.find((el) => el.id == id) //busco el producto//
            carrito.push (productoAComprar) //agrego el producto al carrito//
            mostrarCarrito();} //muestro el carrito//
        
            function mostrarCarrito() {
              const seccionCarrito = document.getElementById("carritoProductos");
              
              seccionCarrito.innerHTML = "" //lo limpio para que no se dupliquen//
              for (item of carrito) { //recorro el carrito//
                const htmlProducto = document.createElement("div");
                htmlProducto.classList.add("row");
            
                htmlProducto.innerHTML = `
                            <div class="col-md-12">
                              <div class="card">
                                <div class="card-body img-fluid">
                                  <h5 class="card-title">${item.nombre}</h5>
                                  <img src="${item.imagen}" class="card-img-top imgp" alt="paz">
                                    <p class="card-text">${item.descripcion}</p>
                                    <button class="btn btn-primary" onclick="quitarCarrito(${item.id})">quitar del carrito</button>
                                </div>
                              </div>
                            </div>
                          `;
                  seccionCarrito.appendChild(htmlProducto);
              }}
            
       
        //para vaciar carrito
            function quitarCarrito(id) {
              let productoAComprar = productos.find((el) => el.id == id);
              carrito.splice(carrito.indexOf(productoAComprar), 1);
              mostrarCarrito()
            }
           
          
         
            
          for (item of productos) {
            seccionProductos.appendChild(htmlProducto);
            const htmlProducto = document.createElement("div");
            htmlProducto.classList.add("row");
          
            htmlProducto.innerHTML = `
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-body img-fluid">
                              <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">${item.descripcion}</p>
                                <button class="btn btn-primary" onclick="agregarCarrito(${item.id})">Comprar $${item.precio}</span>
                            </div>
                          </div>
                        </div>
                      `;
          
            
          }
          const seccionProductos = document.getElementById("productos");
                    


// const seccionProductos = document.getElementById("productos");

// for (item of productos) {
//   const htmlProducto = document.createElement("div");
//   htmlProducto.classList.add("row");

//   htmlProducto.innerHTML = `
//               <div class="col-md-12">
//                 <div class="card">
//                   <div class="card-body img-fluid">
//                     <h5 class="card-title">${item.nombre}</h5>
//                       <p class="card-text">${item.descripcion}</p>
//                       <button class="btn btn-primary" onclick="agregarCarrito(${item.id})">Comprar $${item.precio}</span>
//                   </div>
//                 </div>
//               </div>
//             `;

//   seccionProductos.appendChild(htmlProducto);
// }
            
         
   
         
// function elegirPago (arr,filtro) {
//   let metodoPago = arr.filter ((el) => {switch(filtro) {

//             case "1": 
//                 console.log("Has seleccionado transferencia bancaria");
//                 break;
    
//                 case "2":
//                     console.log("Has seleccionado mercado pago");
//                     break;
    
//                     case "3":
//                         console.log("Has seleccionado cuenta dni");
//                 break;
    
//                 case "4":
//                     console.log("Has seleccionado tarjeta de crédito o débito");
//                 break;
    
//                 case "5":
//                     console.log("Has seleccionado cuotas");
//                     let tarjeta=prompt("Ingresa una opción \n 1-Tarjeta Visa \n 2-Mastercard \n 3-Otra");
//                     while(opción !=="0"){switch (tarjeta) {
//                         case "visa":
//                             console.log("hasta 3 cuotas sin interes");
//                             break;
//                             case "mastercard":
//                                 console.log("una cuota");
//                                 break;
//                                 case "otra":
//                                 console.log("intereés del 5% por cuota");
//                                 break;}};
                        
    
//                 default:
    
//                     console.log  ("Opción no válida");
//                     break;}
    
//                     opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
//                     if (opción="0");
//                    console.log("Esperamos que disfrutes tu compra");});}



//     const eleccionPago = function elegirPago (metodoPago, filtro): 
     



  



//         function porPrecio (productos,precio){
//           precio.productos.forEach ((element) => {(console.log (precio*1.20));
//             return el.precio;})}

//             const productosFiltrados= filtrarProducto(productos,ingreso);
//           console.log(productosFiltrados);

          //probando acceder a cambiar las etiquetas dentro de js//
        //   let h3= document.getElementsByTagName("h3");
        //   console.log(h3);

        //   h3[0].innerHTML= "<h3>Te mostramos en lo que nos destacamos<br><br><p>Hacete un mimo y autoregalate alguno de nuestros productos</p></h3>"

        //   console.dir(document.head)

        //  let h4 = document.getElementById("descuento");
        //  console.log(h4);
        
        

        

                    
         
