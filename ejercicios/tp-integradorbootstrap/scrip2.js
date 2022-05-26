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

function limpiar(){
    document.getElementById('entradas').reset;
}

const btnBorrar = document.getElementById('btnBorrar');

btnBorrar.addEventListener('click', (){
    limpiar();
});





//capturar cantidad de entradas
var cantidadTicket = parseInt(get('cantidadTickets').value);

//capturo categoria de persona
var categoriaPersona = get('categoria').value;

let end;
function precioEntEstu (precioEstudiante, cantidadTicket) {
    let end = Number(precioEstudiante * 5);
    return end;
};

console.log(end)

function precioEnttrai (precioTrainee, cantidadTicket) {
    precioTrainee * cantidadTicket;
};

function precioEntJun (precioJunior, cantidadTicket) {
    end = parseInt(precioJunior * cantidadTicket);
    return end
};

function esValido(cantidadTicket) {
    return cantidadTicket !== '';
}
    



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

// capturar la captidad
// volver la string de cntidad a number 
//capturar la categoria
//hacer las funciones que multipliquen la cantidad por categoria (estduainte, trainee, junior).
// hacer funcion de case por categoria
//hacer evento de boton resumen  