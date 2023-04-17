let btnInicio = document.getElementById("btnInicio"),
    btnPausa = document.getElementById("btnPausa"),
    btnReset = document.getElementById("btnReset");

let horas = document.getElementById("horas"),
    minutos = document.getElementById("minutos"),
    segundos = document.getElementById("segundos"),
    milisegundos = document.getElementById("milisegundos");

let tiempoCronometrado = 0;
let intervalo;

btnInicio.addEventListener("click",iniciar)
btnPausa.addEventListener("click",pausar)
btnReset.addEventListener("click",reset)

let mseg =0;
let seg = 0;
let min = 0;
let hs = 0;

function cronometrarTiempo() {
    
    tiempoCronometrado ++;
    mseg=tiempoCronometrado % 1000;

    if (mseg === 0) {
        seg ++;
    }
    if (seg === 60) {
        min ++;
        seg=0;
    }
    if (min === 60) {
        hs ++;
        min=0;
    }
}
function actualizarTiempo(){
    milisegundos.innerHTML = `${mseg}<small class="fs-6 ps-1 d-none d-md-inline">mseg</small>`
    segundos.innerHTML = `${seg}<small class="fs-6 ps-1 d-none d-md-inline">seg</small>`
    minutos.innerHTML = `${min}<small class="fs-6 ps-1 d-none d-md-inline">min</small>`
    horas.innerHTML = `${hs}<small class="fs-6 ps-1 d-none d-md-inline">hs</small>`
}
function iniciar() {
    intervalo = setInterval(cronometrarTiempo,1)
    actualizar = setInterval(actualizarTiempo,100)
    btnInicio.disabled =true
    btnPausa.disabled =false
    btnReset.disabled =false
}
function pausar() {
    clearInterval(intervalo);
    clearInterval(actualizar);
    btnInicio.disabled =false
    btnPausa.disabled =true
}
function reset() {
    clearInterval(intervalo);
    clearInterval(actualizar);
    tiempoCronometrado = 0;
    mseg =0;
    seg = 0;
    min = 0;
    hs = 0;
    actualizarTiempo();
    btnReset.disabled =true
    btnPausa.disabled =true
    btnInicio.disabled =false
}
