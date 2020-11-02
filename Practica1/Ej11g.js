const frameworks = [
    { name: 'vuejs', isFrontend: true },
    { name: 'symfony', isFrontend: false },
    { name: 'laravel', isFrontend: false },
    { name: 'react', isFrontend: true },
    { name: 'django', isFrontend: false },
    { name: 'angular', isFrontend: true },
    ]
    
    

  /**  frameworks.forEach(function(f) {
        if (f.isFrontend) 
        {  console.log(f.name);}
    });
*/

//imprimir los que son frontend
    frameworks.forEach((f) => {
        if (f.isFrontend) 
        {  console.log(f.name);}
    });

   
    