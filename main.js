let tarjetasDestapadas = 0;
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let temporizador = false
let tiempo = 30
let tiempoInicial = 30
let BreakInterval = null







mostrarTiempo = document.getElementById("time")
mostrarAciertos = document.getElementById("aciertos")
mostrarMovimientos = document.getElementById("moves")


function contarTiempo(){
    BreakInterval = setInterval(()=>{
        tiempo--;
        mostrarTiempo.innerHTML = `Tiempo: ${tiempo} segundos`
        if (tiempo == 0){
            clearInterval(BreakInterval)
            bloquearTarjetas()
        }
    }, 1000)
}
function bloquearTarjetas(){
    for (let i = 0; i<=15;i++  ){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = `${numeros[i]}`
        tarjetaBloqueada.disabled = true
    }
}




let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
numeros = numeros.sort(()=>{
    return Math.random() - 0.5
})
function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)

    if (tarjetasDestapadas == 1 ){
        tarjeta1 = document.getElementById(id)
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado
        tarjeta1.disabled = true
    }
    else if (tarjetasDestapadas == 2 ){
        tarjeta2 = document.getElementById(id)
        segundoResultado = numeros[id]
        tarjeta2.innerHTML = segundoResultado
        tarjeta2.disabled = true

        movimientos++;
        
        
        mostrarMovimientos.innerHTML =  `Movimientos: ${movimientos} `
        
        

        if (primerResultado == segundoResultado){
            tarjetasDestapadas = 0
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
            if(aciertos == 8){
                clearInterval(BreakInterval)
                mostrarTiempo.innerHTML = `Fantastico! solo tardaste ${tiempoInicial - tiempo} segundos`
            }

        }
        else {
            
            setTimeout(()=>{
                tarjeta1.disabled = false
                tarjeta2.disabled = false
                tarjeta1.innerHTML = " "
                tarjeta2.innerHTML = " "
                tarjetasDestapadas = 0
            }, 500)
           
        }
    }
    
    
}
console.log(numeros)

