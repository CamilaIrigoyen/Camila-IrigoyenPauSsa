let productos= [
           {id: 1, nombre:" vela aura" , precio: 550, envase: "vidrio",descripcion: "aroma de vainilla",imagen:"./imagenes/vela aura.jpg"},
          {id: 2, nombre: "vela vanina", precio: 620, envase: "madera",descripcion:"vela de soja aroma floral", imagen:"./imagenes/vela aromatica.jpg"},
         {id: 3, nombre: "portavela", precio:580, envase:"vidrio", descripcion:"ideal para decorar tus espacios",imagen:"./imagenes/portavela.jpeg"},
          {id:4, nombre: "pantuflas", precio:2400, descripcion:"Súper cómodas y calentitas , ideales para pasar el invierno", imagen:"./imagenes/pantuflas.jpg"},];
           console.log(productos);

           const seccionProductos = document.getElementById("productos");
          const Tucarrito = document.getElementById("carrito");
         
       function mostrarProductos(){
        for (item of productos)
         {
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
        
          seccionProductos.appendChild(htmlProducto);
        }
       }

        let carrito =[];
        console.log(carrito);

     

          function agregarCarrito(id){
            let productoAComprar = productos.find((el) => el.id == id)
            carrito.push (productoAComprar) 
            mostrarCarrito();}
        
            function mostrarCarrito() {
              const seccionCarrito = document.getElementById("carritoProductos");
              
              seccionCarrito.innerHTML = "" 
              for (item of carrito) {
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
            
       
       
            function quitarCarrito(id) {
              let productoAComprar = productos.find((el) => el.id == id);
              carrito.splice(carrito.indexOf(productoAComprar), 1);
              mostrarCarrito()

          }
        
          function finalizarCompra() {
            if(carrito.length > 0){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Compra realizada con éxito',
                showConfirmButton: false,
                timer: 1500
              })
            } else {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'No hay ningnu articulo para comprar',
                showConfirmButton: false,
                timer: 1500
              });
            }
          }
       

          


    const elegirProductos = async () => {

      const busqueda = await fetch("javascript/data/productos.json");
    
      const data = await busqueda.json();
    
      return data
    
    }
    
    elegirProductos().then(data => {
    
      productos = data;
    
      mostrarProductos()
    
    })

    