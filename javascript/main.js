
//pensado para cuando elija comprar velas//
let precio=100;
let porcentaje=0.15;
let cantidad=parseInt(prompt("ingresa cuantas velas llevas")); 
let valorTotal=precio*cantidad;
let valorDescuento= valorTotal-(precio-(precio*0.15));
 
 
 if (cantidad>=4){
    console.log("el valor final es "+valorDescuento);
   }
   else{
    console.log("tu valor final es el mismo "+valorTotal);
   }
  
// // //para validar el ingreso de datos en la pagina de iniciar sesion//
 let usuario = prompt ("ingresa tu correo");
 let contraseña =prompt ("ingresa tu clave");

if ((usuario !=="") && (contraseña !==""))
{console.log ("Bienvenido a la tienda");}
else{
    console.log("campos requeridos");
}
// // //pensado para el carrito de compras//
let opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
while(opción !=="0"){
    switch(opción){
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
                            break;}}
                    

            default:

                console.log  ("Opción no válida");
                break;}

                opción= prompt("Ingresa una opción \n 1-transferencia bancaria \n 2-mercado pago \n 3-cuenta dni \n 4-tarjeta de crédito o débito \n 5-cuotas \n");
                if (opción="0");
               console.log("Esperamos que disfrutes tu compra");}

               
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
     
     
     const productos= [
          {id: 1, nombre:" vela aura" , precio: 550, envase: "vidrio"},
          {id: 2, nombre: "pijama", precio: 6200, envase: "madera"},
          {id: 3, nombre: "portavela", precio:580, envase:"vidrio"},
          {id:4, nombre: "pantuflas", precio:2400, envase: "vidrio"},];
          console.log(productos);
          let ingreso= prompt ("Buscar producto");
     
        console.log (productos);
        function filtrarproducto(arr, filtro){
          const filtrado = arr.filter((el) => {
               return el.nombre.includes(filtro);})
               return filtrado;}
          
          const productosFiltrados= filtrarproducto(productos,ingreso);
          console.log(productosFiltrados);