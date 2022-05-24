//definir el precio por entrada
const precio = 200;

//definir precio de entradas por categoria
const precioEstudiante = 40;
const precioTrainee = 100;
const precioJunior = 170;

//funcion document.getElementById
function get(id) {
    return document.getElementById(id);
};

//capturar cantidad
let cantidadTicket = get('cantidadTickets').value;

console.log(cantidadTicket);

function calcular(operacion) {
//tomo el favol del input cantidadTikects
const valorCantidad = cantidadTicket.value;

let resultado;
if(esValido(valorCantidad)){
    
    switch(operacion){
        case 'estudiante':
            resultado = precioEntEstu;
            break;
        case 'trainee':
            resultado = precioEntTrai;
            break;
        case 'junior':
            resultado = precioEntJun;
            break;
    }
}
actualizarResultado(resultado);
}

// verificar que la cantidad no sea nula 
function esValido(cantidadTicket) {
    return cantidadTicket !== '';
}

function precioEntEstu(valorCantidad, precioEstudiante) {
    return valorCantidad * precioEstudiante;
}

function precioEntTrai(valorCantidad, precioTrainee) {
    return valorCantidad * precioTrainee;
}

function precioEntJun(valorCantidad, precioJunior) {
    return valorCantidad * precioJunior;
}
/*

//funcion saber cantidad de entradas
let totalTickets; 
function saberCantidad (cantidadTicket) {
    totalTickets = Number(cantidadTicket);
    return totalTickets;
}

*/

//realizar funcion que realice la multiplicacion de cantidad por categoria 





//asociar al boton resumen el evento click
 btnResumen.addEventListener('click', function() {
    calcular();
});


/*
function calcular(totalTickets, descuento) {
    const ValorA = Number(totalTickets);
    const ValorB = Number(descuento);
    return ValorA * ValorB;
}
*/
/*
get('resultados').innerHTML = calcular();
*/

//arrojar el total en el imput
/*

function actualizarResultado(suma) {
    //capturo el div por su id
    const div = document.getElementById('resultado');
    div.className = 'resultado';
    //actualizo el contenido del div con la variable suma
    div.innerHTML = suma;
}


function calcular(operacion){

    const cantidadE = cantidad.value;

    let resultado;

    switch(operacion){
        case 'estudiante':
            resultado = precioEstudiante(precio);
            break;
        case 'trainee':
            resultado = precioTrainee(precio);
            break;
        case'junior':
        resultado =precioJunior(precio);
        break
    }
    actualizar(resultado);
}

function actualizar(resul){
    const input = document.createElement('resultados');
    input.className = 'resultados';
    input.innerHTML = resul;
}
*/

