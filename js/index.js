// Piedra, Papel, Tijera  

let jugador;
let pc;



function aleatoria() {
    return Math.ceil (Math.random()*3)
}

jugador = prompt ("Elije: 1-Piedra, 2-Papel, 3-Tijera 4-cerrar");
console.log("tu eleccion fue: "+ eleccion (jugador))
pc = aleatoria (); 
console.log("La pc eligio: " + eleccion (pc))

for (jugador=prompt; jugador===4; prompt){

}

function eleccion (jugada){
    let resultado = " "
    if (jugada == 1){
        resultado = "Piedra"}

    else if (jugada == 2){
        resultado = "Papel"}

        else if (jugada == 3){
            resultado = "Tijera"}
        
    else (jugada = "Eleccion incorrecta")
    return resultado
}


if (jugador == pc){
    console.log("Empate")
}
else if (jugador==1 && pc==3){
    console.log("Ganaste");
    ganaJugador();
}
else if (jugador==2 && pc==1){
    console.log("Ganaste")
    ganaJugador();
} 
else if (jugador==3 && pc==2){
    console.log("Ganaste")
    ganaJugador();
}
else{
    console.log("Perdiste")
    puntosPc();
}


function ganaJugador( ) {
    puntosJugador++;
}
function ganapc(  ) {
    puntosPc++;
}
