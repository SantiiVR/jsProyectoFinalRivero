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
const reiniciarTabla = document.getElementById("reinicioTabla")




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
    //TODO: hacer funcion de nombre


    Swal.fire({
        title: "Escribi tu nombre",
        input: "text",
        confirmButtonText: "Guardar",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey : false,
        showLoaderOnConfirm: true,
        preConfirm: (inputValue) => {

        Recods.saveData({
            jugador:inputValue,
            ronda
        })
},
    })



    reinicio.addEventListener("click", reiniciarJuego);


}

function reiniciarJuego (){
    puntosPc=0
    puntajePc.innerHTML= puntosPc
    puntosJugador=0
    puntajeJugador.innerHTML= puntosJugador
    ronda=0
    contadorRondas.innerHTML=ronda
        tipoObjeto.style.visibility= 'visible'
        // datosTabla.push(resumenPartida)
        instrucciones.innerHTML = "Quien llegue a 5 puntos gana"

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







class Recods{
    static getData(){
    return JSON.parse(localStorage.getItem("partidas"))

    }
        static saveData(partidaActual){
        const partidas=this.getData() || [];
        partidaActual.id = partidas.length + 1;
        partidas.push(partidaActual)
        localStorage.setItem('partidas', JSON.stringify(partidas));
    }

    static deleteData(id){
        localStorage.setItem("partidas",JSON.stringify([]))
    }}




const datos=Recods.getData()
datos.forEach((datos)=>{
    tabla.innerHTML+=`
    <tr>
    <td>${datos.jugador}</td>
    <td>${datos.ronda}</td>
    </tr>`
    })


    reiniciarTabla.addEventListener("click", Recods.deleteData);
// corregir: se requiere recargar la pagina para mostrar resultados

