
//calcular promedio de los elementos del arreglo
const numbers = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


//suma los elementos del arreglo
let suma = numbers.reduce((previous, current) => current += previous);
let prom = suma / numbers.length;

console.log("Suma:"+suma);
console.log("Promedio:"+prom);