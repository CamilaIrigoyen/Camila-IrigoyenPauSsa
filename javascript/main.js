// let precio=100;
// let porcentaje=0.15;
// let cantidad=parseInt(prompt("ingresa cuantas velas llevas")); 
// let valorTotal=precio*cantidad;
// let valorDescuento= valorTotal-(precio-(precio*0.15));
 
 
//  if (cantidad>=4){
//     console.log("el valor final es "+valorDescuento);
//    }
//    else{
//     console.log("tu valor final es el mismo "+valorTotal);
//    }
  

 
 

// // //para validar el ingreso de datos en la pagina de iniciar sesion//
//  let usuario = prompt ("ingresa tu correo");
//  let contraseña =prompt ("ingresa tu clave");

// if ((usuario !=="") && (contraseña !==""))
// {console.log ("Bienvenido a la tienda");}
// else{
//     console.log("campos requeridos");
}
// // //pensado para el carrito de compras//
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
//             break;  

//             default:

//                 console.log  ("Opción no válida");
//                 break;}

//                 opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
//                 if (opción="0");
//                 console.log("Esperamos que disfrutes tu compra");}

               
//          //pensado para los objetos//
//      const vela1= [{id:"1",
//      aroma:"vainilla",
//      envase:"vidrio",
//      precio: "550",}]
//      console.log(vela1);
     
//      function Pijama(talle, precio, color, disponibilidad,){
//      this.talle=talle;
//      this.precio=precio;
//      this.color=color;
//      this.disponibilidad;}
//      Pijama();
     
//      const pijama1=new Pijama("medium","400","gris","si",)
//      console.log(pijama1);
     
//      //array carrito de compras//
//      //pensado para agregar un producto al carrito//
//      let micarrito= [prompt("ingresar cantidad"), parseInt(prompt("ingresar precio"))];
//      let totalALlevar= cantidad*precio;
//      micarrito.push("otro producto");
//      console.log(micarrito);
     
     
//      const productos= [
//           {id: 1, nombre:" vela aura" , precio: 550, envase: "vidrio"},
//           {id: 2, nombre: "vela mango", precio: 620, envase: "madera"},
//           {id: 3, nombre: "vela frutas tropicales", precio:580, envase:"vidrio"},
//           {id:4, nombre: "vela pepino", precio:580, envase: "vidrio"},];
     
//           let entrada= prompt ("ingresar precio");
     
//         console.log (productos);
//         function filtrarPrecio (arr, filtro){
//           const filtrado = arr.filter((el) => {
//                return el.precio.find(filtro); });
//                return el.precio===entrada;
//                return filtrado;}
          
//           const productosFiltrados= filtrarPrecio(productos,entrada);
//           console.log(productosFiltrados);