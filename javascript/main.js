
// // //pensado para cuando elija comprar velas//
// // let precio=100;
// // let porcentaje=0.15;
// // let cantidad=parseInt(prompt("ingresa cuantas velas llevas")); 
// // let valorTotal=precio*cantidad;
// // let valorDescuento= valorTotal-(precio-(precio*0.15));
 
 
// //  if (cantidad>=4){
// //     console.log("el valor final es "+valorDescuento);
// //    }
// //    else{
// //     console.log("tu valor final es el mismo "+valorTotal);
// //    }
  
// // // //para validar el ingreso de datos en la pagina de iniciar sesion//
//  let usuario = prompt ("ingresa tu correo");
//  let contraseña =prompt ("ingresa tu clave");

// if ((usuario !=="") && (contraseña !==""))
// {console.log ("Bienvenido a la tienda");}
// else{
//     console.log("campos requeridos");
// }
// // // //pensado para el carrito de compras//
// let opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
// while(opción !=="0"){
//     switch(opción){
//         case "1":
//             console.log("Has seleccionado transferencia bancaria");
//             break;

//             case "2":
//                 console.log("Has seleccionado mercado pago");
//                 break;

//                 case "3":
//                     console.log("Has seleccionado cuenta dni");
//             break;

//             case "4":
//                 console.log("Has seleccionado tarjeta de crédito o débito");
//             break;

//             case "5":
//                 console.log("Has seleccionado cuotas");
//                 let tarjeta=prompt("Ingresa una opción \n 1-Tarjeta Visa \n 2-Mastercard \n 3-Otra");
//                 while(opción !=="0"){switch (tarjeta) {
//                     case "visa":
//                         console.log("hasta 3 cuotas sin interes");
//                         break;
//                         case "mastercard":
//                             console.log("una cuota");
//                             break;
//                             case "otra":
//                             console.log("intereés del 5% por cuota");
//                             break;}}
                    

//             default:

//                 console.log  ("Opción no válida");
//                 break;}

//                 opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
//                 if (opción="0");
//                console.log("Esperamos que disfrutes tu compra");}


     //genere un filtro para que el usuario elija que busca en la linea 73 a 85 y de la linea 87 a la 91 para que aumente el precio un 20%)
     
     const productos= [
          {id: 1, nombre:" vela aura" , precio: 550, envase: "vidrio"},
          {id: 2, nombre: "pijama", precio: 6200, envase: "madera"},
          {id: 3, nombre: "portavela", precio:580, envase:"vidrio"},
          {id:4, nombre: "pantuflas", precio:2400, envase: "vidrio"},];
          console.log(productos);

          let ingreso= prompt ("Buscar producto");
     
        console.log (productos);
        function filtrarProducto(arr, filtro){
          const elegido = arr.filter((el) => {
               return el.nombre.includes(filtro);})
               return elegido;}

               const elegido = filtrarProducto (productos, ingreso);

        function porPrecio (productos,precio){
          precio.productos.forEach ((element) => {(console.log (precio*1.20));
            return el.precio;})}

        

    

        const inputPrecio= document.getElementById ("precio");
        const inputAroma= document.getElementById ("aroma");
        const inputCantidad= document.getElementById ("cantidad");
        const botonCrearVela = document.querySelector("#simulador")


              function vela(precio,aroma,cantidad){
                this.precio=precio;
                this.aroma=aroma;
                this.cantidad=cantidad;
               }
               const nuevaVela= new vela(precio,aroma,cantidad);

botonCrearVela.addEventListener('click', () => {

   const nuevaVela = new vela(inputAroma.value, inputPrecio.value , inputCantidad.value);

   console.log(vela)

})

         function calcularDescuento(cantidad,precio){
          if (cantidad>=4){
                console.log("el valor final es "+valorDescuento);
               }
               else{
                console.log("tu valor final es el mismo "+valorTotal);
               }
         }
         function valorDescuento (cantidad,precio){
          const valorTotal = precio  * cantidad;
          return valorTotal;
         }

        


        //  let valorDescuento= valorTotal-(precio-(precio*0.15));
                     

          
          const productosFiltrados= filtrarProducto(productos,ingreso);
          console.log(productosFiltrados);

          //probando acceder a cambiar las etiquetas dentro de js//
          const h3= document.getElementsByTagName("h3");
          console.log(h3);

          h3[0].innerHTML= "<h3>Te mostramos en lo que nos destacamos<br><br><p>Hacete un mimo y autoregalate alguno de nuestros productos</p></h3>"

          console.dir(document.head)

         let h4 = document.getElementById("descuento");
         console.log(h4);
        //pensado para la promocion del dia del amigo//
         const velas= [
          {id: 1, nombre:" vela aura" , precio: 550, aroma: "frutas tropicales"},
          {id: 2, nombre: "vela paz", precio: 520, aroma: "fresa"},
          {id: 3, nombre: "vela amiga", precio:580, aroma: "vainilla"},];
          console.log(velas)

          const PromoVelas = velas.map(el => {
            return el.precio - (1.40);
          });

         
          console.log(PromoVelas);

         //pensado para el carrito cuando aprete en comprar//
         const btnComprar= document.querySelectorAll("#comprar"); 

         let carrito = [];

         function agregarCarrito (arr,filtro) {
          let miCarrito= arr.push ((el) => { return el.nombre==(filtro)
         console.log (agregarCarrito);})}

          btnComprar.addEventListener; ("click", ()=>{
           agregarCarrito(arr,filtro);
           HTMLAllCollection.item(filtro);})


                    
         
         

