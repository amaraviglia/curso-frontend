// función que retorne si un determinado framework se encuentra en
//el arreglo, pasando como parámetro el nombre del mismo.

function buscarfr (pframe)
{
    const frameworks = [
        { name: 'vuejs', isFrontend: true },
        { name: 'symfony', isFrontend: false },
        { name: 'laravel', isFrontend: false },
        { name: 'react', isFrontend: true },
        { name: 'django', isFrontend: false },
        { name: 'angular', isFrontend: true },
        ]

 var lvar = 'No Está' ;

 frameworks.forEach((f) =>
 {
   if (f.name == pframe)
    {  
        lvar = 'Está' ;
     }
 })

 return lvar;
} // termina la definicion de la funcion


const pepe = buscarfr('angular');
console.log (pepe);

