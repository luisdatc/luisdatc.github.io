const botonResumen = get('botonResumen');
let totalAPagar;
const valorDeTicket = 200;
const descuentoFinalEstudiante = 40;
const descuentoFinalTrainee = 100;
const descuentoFinalJunior = 170;
let ticketsFinal;
let descuentoCorrecto;

function get(id) {
    return document.getElementById(id);
}

botonResumen.addEventListener('click', function(){
    calcular((+cantidadTickets),(+descuentoCorrecto));
})

let seleccion = get('select')

function detectarDescuentoCorrecto () {
    
    let eleccion = seleccion.value;
    let descuentoCorrecto;
    
    if (eleccion === 'estudiante') {
       descuentoCorrecto = descuentoFinalEstudiante
    }
    else if (eleccion === 'trainee') {
       descuentoCorrecto = descuentoFinalTrainee
    }
    else if (eleccion === 'junior') {
       descuentoCorrecto = descuentoFinalJunior
    }
    return descuentoCorrecto
} 

let cantidadTickets = get('cantidad').value; 

/*function saberCantidad () {
    let ticketsFinal = parseInt(cantidadTickets);
    return ticketsFinal;
}
/*function calcular(ticketsFinal, descuentoCorrecto) {
    const ValorA = Number(ticketsFinal);
    const ValorB = Number(descuentoCorrecto);
    let resultadoFinal= ValorA * ValorB;
    return resultadoFinal
 }*/

 function calcular() {
    let ValorA = parseInt(cantidadTickets);
    let ValorB = parseInt(descuentoCorrecto);
    let resultadoFinal= Number(ValorA * ValorB);
    return resultadoFinal
 }

get('totalAPagar').innerHTML = calcular();
    
 /*const respuesta = get ('totalAPagar')
    const div = document.createElement ('p')
    div.nodevalue = calcular();
    div.appendChild(respuesta);
 
  
    if (precio === "0") {
        let inputPrecio= (valorDeTicket - descuentoFinalEstudiante);
        return inputPrecio
    }
    if (precio === "1") {
        let inputPrecio= (valorDeTicket - descuentoFinalTrainee); 
        return inputPrecio
    }
    if (precio === "2") {
        let inputPrecio= (valorDeTicket - descuentoFinalJunior)
        return inputPrecio
    };
});
*/