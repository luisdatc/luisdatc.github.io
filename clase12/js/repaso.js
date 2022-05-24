//variables
//estructura de iteracion 
let alumnos = ['alan', 'alejandro', 'daiana', 'daniel'];

let tamanio = alumnos.length;
//alert(tamanio);
console.log(tamanio);

//recorrer el array de nombres y mostrar cada uno

for(let i = 0; i < tamanio; i++){
console.log(i, alumnos[i], typeof alumnos[i]);
}

//foreach 
for (let nombre of alumnos) {
    console.log(nombre);
}

//while
console.log('while1');
let i = 0;
while(alumnos[i] !='daiana'){
    console.log(i,alumnos[i]);
    i++;//debemos incrementar el indice que usamos para recorrer
}

console.log('while2');
i=0;//reset de indice
while (i<tamanio){

    if (alumnos[i] ==='daiana'){
        console.log(i,'daiana');
        break; //sale del ciclo while
    }
    i++;
}

//ahora con objetos
let alumnosObj =[
    {
        edad:25,
        nombre:'jose'
    },
    {
        edad:24,
        nombre:'martin'
    },
    {
        edad:35,
        nombre:'maria'
    },
    {
        edad:27,
        nombre:'pepe'
    }
];

//forr/while do-while
//como detecto el menor de los alumnos 

let primero = true;
let alumnoMasChico;//aca va a quedar el alumno mas chico
for(const alumnoObj of alumnosObj){
    if(primero){
        alumnoMasChico = alumnoObj;
        primero = false;
    }
    //si alumnoMasChico es menor alumnoObj, entonces pasa a ser el nuevo menor   

if (alumnoObj.edad < alumnoMasChico.edad){
    alumnoMasChico = alumnoObj;
}
}
console.log('alumno mas chico', alumnoMasChico);

const vector = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,2, 3, 4, 1, 2,3,4];

let contador = 0;
let pos = [];

for(let i=0;i<vector.length;i++) {
    if(vector[i]===3){
        contador++;
        pos.push(i);
    }
}

console.log('cantidad de 3',contador);
console.log('posiciones:',pos);

//filtrar los numeros > a 2  
let mayoresA2 =[];
for(let i of vector){
    if(i > 2){
        mayoresA2.push(i);
    }
} 
console.log(mayoresA2);

//filter
let  mayoresA2ConFilter = vector.filter( num => num>2);//que quiero
console.log(mayoresA2ConFilter);


//valores que js los evalua como false
let aux = 0;
if (aux){
    console.log('false');
}

clase 16 min 15.43