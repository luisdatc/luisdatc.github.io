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

//capturar cantidad de entradas
let cantidadTicket = get('cantidadTickets').value;

//capturo categoria de persona
let categoriaPersona = get('categoria').value;


function precioEntEstu (precioEstudiante, cantidadTicket) {
    precioEstudiante * cantidadTicket;
};

function precioEnttrai (precioTrainee, cantidadTicket) {
    precioTrainee * cantidadTicket;
};

function precioEntJun (precioJunior, cantidadTicket) {
    precioJunior * cantidadTicket;
};

/*let operacion;
function calcular(){

    if(categoriaPersona === '0'){
        precioEntEstu;
    }else if(categoriaPersona === '1'){
        precioEntTrai;
    }else{ 
        (categoriaPersona === '2')
        precioEntJun;
    }
    return operacion     
}

console.log(operacion);
*/
function esValido(cantidadTicket) {
    return cantidadTicket !== '';
}
    

//btnResumen.addEventListener('click', function(e){
//e.preventDefault();

//calcular();


function calcular(operacion){


    let resultado;
    if(cantidadTicket) {
        switch(operacion) {
            case '0': 
                resultado = precioEntEstu (precioEstudiante, cantidadTicket);
                break;
            case '1': 
                resultado = precioEntEstu (precioEstudiante, cantidadTicket);
                break;
            case '2': 
                resultado = precioEntEstu (precioEstudiante, cantidadTicket);
                break;
    }
    actualizarResultado(resultado);    
}
}

console.log(resultado);