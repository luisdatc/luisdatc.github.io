function get(id) {
    return document.getElementById(id);
};
 
function limpiar(){
    (document.getElementById('entradas')).reset();
};

const btnBorrar = document.getElementById('btnBorrar');

btnBorrar.addEventListener('click', function(){
    limpiar();
});

function esValido(valor) {
    return valor !== '';
}


function calcular(){
    let resultado; 
    let precio = parseFloat(200);
    let precioEstudiante = Number(40);
    let precioTrainee = Number(100);
    let precioJunior = Number(170);
    let cantidad = get('cantidadTickets').value;
    let cate = get('categoria').value;

    if(cantidad>0){
        switch(cate){
            case "estudiante":
                resultado = parseInt(cantidad) * parseInt(precioEstudiante);
                break;
            case "trainee": 
                resultado = parseInt(cantidad) * parseInt(precioTrainee);
                break;
            case "junior":
                resultado = parseInt(cantidad) * parseInt(precioJunior);
                break;
            default:
                resultado = parseInt(cantidad) * (precio);

        }
    }else {
        resultado = 'Ingrese cantidad Correcta';
    }
    actualizar(resultado);
};

function actualizar(res){
    const div = get('totalPagar');
    div.className = 'totalPagar';
    totalPagar.innerHTML = "Total a Pagar: $ " + res;
};
const btnResumen = get('btnResumen');

btnResumen.addEventListener('click', calcular);



