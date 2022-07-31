let aromaVela = document. getElementById ("aroma");
let cantidadVela = document. getElementById ("cantidad");
let precioVela= document. getElementById ("precio");
let botonSimulador= document. querySelector("#simulador");




function CreaTuVela (aroma,cantidad,precio){
    this.aroma= aroma.value;
    this.cantidad= cantidad.value;
    this.precio=precio.value;
}



botonSimulador.addEventListener("click", () => {
    CreaTuVela(aromaVela,cantidadVela,precioVela)
    return CreaTuVela;
});

const velas= []; 

function agregarVela (vela1){
    velas.push(vela1)
}




