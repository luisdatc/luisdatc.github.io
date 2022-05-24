// Variables

let edad = 10; //tipo number
console.log(edad, typeof edad); //no es un alert() 

// puedo cambiar el valor de edad 
edad = 20;
console.log(edad); //no es un alert() 

//quiero definir una varieble numerica, pero que no se pueda modificar su valor.

const altura = 174.5;
console.log(altura, typeof altura);

var nombre = 'carlos'; // define una variable de forma global

//tipo string 
let apellido = 'lopez';

console.log(nombre, apellido, typeof nombre, typeof apellido);
//operador typeof

const flag = true;
const iguales = false;
console.log(flag, typeof flag);

//array de string 
const nombres = []; // es un array de string vacios

const materias = ['lengua', 'ingles', 'etc']; // es un array de string vacios

//nombreVariable[pos] = valor  
let materia = materias[0];
console.error(materia);

//reasignar en la variable materia el valor de materias [1]

console.info(materias[1]);

//crear objeto 
// quiero crear objeto persona  

let persona = {
    edad : 36, // nombreAtributo: valor
    argentina : true,
    nombre: 'carlos', 
    apellido: 'lopez',
    idiomas : ['español', 'ingles']
};

console.log(persona, typeof persona);

//undefined
let perro = undefined;

perro = {
    apodo: 'firulais',

}
console.log(perro, typeof perro);
perro = {
    apodo : 'perrito',
    edad: 100,
}

console.log(perro, typeof perro);

let gato = null;
gato = {edad: 100};
console.log(gato, typeof gato);

//LOS TIPOS DE DATOS TIENE FUNCIONES O METODOS

let nacionalidad = '    argentina   ';
console.log(nacionalidad);
//al ser string puedo ejecutar ciertos metodos o funciones 
nacionalidad = nacionalidad.trim()
console.log(nacionalidad);

nacionalidad = nacionalidad.toUpperCase();
console.log(nacionalidad);

nacionalidad = nacionalidad.toLocaleLowerCase();
console.log(nacionalidad);

//logintud, tamaño o cantidad de caractares que tiene un string 
console.log(nacionalidad.length);

//ejemplo de number y sus metodos 
let valorNumericoGuardadoEnString = '100';

//sumarle 1
//valorNumericoGuardadoEnString = parseInt(valorNumericoGuardadoEnString)+1;
//valorNumericoGuardadoEnString = +valorNumericoGuardadoEnString+1;
valorNumericoGuardadoEnString = Number(valorNumericoGuardadoEnString) + 1;
console.log(valorNumericoGuardadoEnString);

//NaN: se da cuando quiero convertit a numero un texto no numerico

let valorFlotanteEnString = '175.5';
console.log(parseInt(valorFlotanteEnString));
console.log(parseFloat(valorFlotanteEnString));
console.log(Number(valorFlotanteEnString));