let aromaVela = document. getElementById ("aroma");
let q = document. getElementById ("cantidad");
let p= document. getElementById ("precio");
let monto= document.getElementById ("valor");
let botonSimulador= document. querySelector("#simulador");
const botonSaldo =document.getElementById ("valor");



function CreaTuVela (aroma,cantidad,precio){
    this.aroma= aroma;
    this.cantidad= cantidad;
    this.precio=precio;
}

const vela1 = new CreaTuVela (aroma,cantidad,precio);
return vela1;


botonSimulador.addEventListener("click", () => {
    CreaTuVela (this.aroma,this.cantidad,this.precio);
});

const velas= []; 

function agregarVela (vela1){
    velas.push(vela1)
}




function valorFinal () {if(cantidad>4){console.log("Pagas" + valorDescuento());}
else {console.log(valorTotal);}

}

function multiplicar (precio,cantidad){
    let valorTotal= precio*cantidad;
    return multiplicar
}


function valorDescuento(){
    let descuento= ( multiplicar(precio.value,cantidad.value) - (precio.value - 0.15));}

botonSaldo.addEventListener("click",()=>{
    valorFinal(cantidad.value,precio.value)
});


