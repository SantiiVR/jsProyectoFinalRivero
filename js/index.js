// Piedra, Papel, Tijera   

const resumenPartida={victorias:0 , nombre:"", rondas:1}
const tabla=document.getElementById("tabla")

const datosTabla=[]
//resumenPartida.nombre=prompt("Ingresa tu nombre")

//Elecciones
let jugador;
let pc;


//puntuacion final
let puntosJugador =0
let puntosPc =0
let ronda=1
let nombreJugador

//eleccion de la pc
// function aleatoria() {
//     return ""+Math.ceil (Math.random()*3)
// }

//posibles elecciones
const EMPATE= 0
const VICTORIA= 1
const DERROTA= 2


const mensajeResultado = document.getElementById("ganaPunto")
const elegisteObjeto = document.getElementById ("eleccionUsuario")
const eleccionPcObjeto = document.getElementById ("eleccionPc")
const puntajeJugador = document.getElementById ("puntosJugador")
const puntajePc = document.getElementById ("puntosComputadora")
const contadorRondas = document.getElementById ("ronda")
const tipoObjeto = document.getElementById ("elegiTuArma")
const reinicio = document.getElementById("reiniciar")




let botonObjetos = document.querySelectorAll(".arma")
botonObjetos.forEach(boton =>{
    boton.addEventListener("click", jugar)
})

function jugar(jugador){
    //eleccion de la pc
    let eleccionPC=Math.floor(Math.random() *3)
    let eleccionJugador=jugador.currentTarget.id

    if (eleccionPC === 0){
        eleccionPC = "piedra✊"
    } else if(eleccionPC===1){
        eleccionPC= "papel✋"
    } else if(eleccionPC ===2){
        eleccionPC = "tijera✌"
    }

    elegisteObjeto.innerHTML= eleccionJugador
    eleccionPcObjeto.innerHTML= eleccionPC

    const RESULTADO = resultadoRonda(eleccionJugador,eleccionPC)

    function ganaJugador(){
        puntosJugador++
        puntajeJugador.innerHTML= puntosJugador
    }
    function ganoPc() {
        puntosPc++
        puntajePc.innerHTML= puntosPc
    }
    function siguienteRonda(){
        ronda++
    }
    



    switch (RESULTADO) {
        case EMPATE:
            mensajeResultado.innerHTML = "Empataron"
            siguienteRonda()
            break;
        case DERROTA:
            mensajeResultado.innerHTML = "Perdiste"
            ganoPc()
            siguienteRonda()
            break;
        case VICTORIA:
            mensajeResultado.innerHTML = "Ganaste"
            ganaJugador()
            siguienteRonda()
            break;
    }

contadorRondas.innerHTML= ronda
function final(){
    tipoObjeto.style.visibility= 'hidden'
    reinicio.style.visibility= 'visible'
}

if (puntosJugador === 5 || puntosPc === 5) {

    final()

    if (puntosJugador === 5) {
        instrucciones.innerHTML = "Ganaste el juego"
    }
    if (puntosPc === 5) {
        instrucciones.innerHTML = "La pc gano"
    } 
    
    
    reiniciar.addEventListener("click", reiniciarJuego);
}

function reiniciarJuego (){
    puntosPc=0
    puntajePc.innerHTML= puntosPc
    puntosJugador=0
    puntajeJugador.innerHTML= puntosJugador
        tipoObjeto.style.visibility= 'visible'
        datosTabla.push(resumenPartida)
}
}





function resultadoRonda (eleccionJugador, eleccionPC){
    
if (eleccionJugador === eleccionPC){
    return EMPATE
} else if (eleccionJugador==="piedra✊"){
    if (eleccionPC==="papel✋") return DERROTA;
    if (eleccionPC=== "tijera✌") return VICTORIA;
    
} else if (eleccionJugador==="papel✋"){
    if (eleccionPC=== "tijera✌") return DERROTA;
    if (eleccionPC=== "piedra✊") return VICTORIA;
    

} 
else if (eleccionJugador==="tijera✌"){
    if (eleccionPC==="piedra✊") return DERROTA;
    if (eleccionPC=== "papel✋") return VICTORIA;
}

resumenPartida.rondas=ronda
resumenPartida.victorias=puntosJugador

}



/*
function eleccion (jugador){
switch (jugador) {
    case "1":
        return "Piedra"
        break;
    case "2":
        return "Papel"
        break;
    
    case "3":
        return "Tijera"
        break;

        case "4":
            return "Fin de juego"
            break;

    default:
        return "selecciona una opcion valida"
        break;
}
}

function ganaJugador(){
    puntosJugador++
}
function ganoPc() {
    puntosPc++
}

do{
    resumenPartida.rondas=ronda
console.log ("-------------- " + ronda+ " ----------------")

    console.log ("tus puntos "+puntosJugador)
    resumenPartida.victorias=puntosJugador
    datosTabla.push(resumenPartida)

    console.log ("los puntos del pc son " +puntosPc)

jugador = prompt ("Elije: 1-Piedra, 2-Papel, 3-Tijera 4-cerrar");
console.log("tu eleccion fue: "+ eleccion (jugador))

if (jugador==="1" || jugador==="2" || jugador==="3"){
    ronda++
    pc = aleatoria(); 
console.log("La pc eligio: " + eleccion (pc))



if (jugador == pc){
    console.log("Empate")
}
else if (jugador==1 && pc==3){
    ganaJugador();
    console.log("Ganaste");

}
else if (jugador==2 && pc==1){
    ganaJugador();
    console.log("Ganaste")

} 
else if (jugador==3 && pc==2){
    ganaJugador();
    console.log("Ganaste")
}

else{
    ganoPc();
    console.log("Perdiste");
    
};
}


} while ( jugador!=4){
}
*/
datosTabla.forEach((el)=>{
    tabla.innerHTML+=`
    <tr>
    <td>${el.nombre}</td>
    <td>${el.victorias}</td>
    <td>${el.rondas}</td>
    </tr>`
    })
/* se debe elegir la opcion 4 para ejecurtar la tabla */




