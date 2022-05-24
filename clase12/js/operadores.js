/*
    aritmeticos
    logicos 
    relacionales
    asignacion
*/

// aritmeticos +,-,*,/,%, ++,--
let a = 10;
let b = 20;
console.log(a,b);

let c = a + b; // 30
console.log(c,'+');

let d = a - b ; // -10
console.log(d, '-');

let div = a / b ;
console.log(div, '/');

let multi = a * b;
console.log(multi, '*');

/* % esel resto de una dvision 
D  d
R  c
*/
let anio = 2022;

//quiero saber si 2022 es par o impar 
// 1 es impar y 0 es par 
// siempre es 0 o 1

let resto = anio % 2 
console.log(resto);

//incremento 
let valor = 0;
valor = valor +1;
console.log(valor, 'valor');
valor++; //esta expresion es igual a la expresion de la linea 39
console.log(valor, 'valor');

//quiero restar 1 a valor

valor = valor - 1; 
valor --;
console.log(valor, 'valor');

//operadores logicos  
//AND &&, OR ||, NOT !
let username = 'root';
let password = '1234';

let usuarioValidoAnd = (username === 'root' && password === '1234') //esto vendria siendo true
let usuarioValidoOr = (username === 'root' || password === '1234') //esto vendria siendo true aunq el username sea pedro

let usuarioValidoNot = (username !== 'root') // termina siendo tru si el username es diferente de root 

// relacionales
// darnos un valor booleano
let x = 10; 
let y = 20; 

let xmayory = (10 > 20);
console.log(x,'>',y, xmayory);
console.log(x,'<',y, x<y);
console.log(x,'>',y, x===y);
console.log(x,'>',y, x>=y);
console.log(x,'>',y, x<=y);

//asignacion



















