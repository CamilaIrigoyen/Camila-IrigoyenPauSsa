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

const vela1 = new CreaTuVela (this.aroma,this.cantidad,this.precio);


botonSimulador.addEventListener("click", () => {
   CreaTuVela(aroma.value,cantidad.value,precio.value);
})

const velas= []; 
velas.push(vela1);
console.log(velas);



function valorFinal () {if(cantidad>4){console.log("Pagas" + valorDescuento);}
else {console.log(valorTotal);}

}

function multiplicar (){
    let valorTotal= precio*cantidad;
    return multiplicar
}


function valorDescuento(){
    let descuento= ( multiplicar(precio.value,cantidad.value) - (precio.value - 0.15));}

botonSaldo.addEventListener("click",()=>{
    valorFinal(cantidad.value,precio.value)
});


