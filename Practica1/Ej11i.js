
function eliminar(array, pos) {
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (i !== pos) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
  
 
var frameworks = [
    { name: 'vuejs', isFrontend: true },
    { name: 'symfony', isFrontend: false },
    { name: 'laravel', isFrontend: false },
    { name: 'react', isFrontend: true },
    { name: 'django', isFrontend: false },
    { name: 'angular', isFrontend: true },
    ]
    
 //array = eliminar(frameworks, frameworks.length - 1);
 //array = eliminar(frameworks, 0);
 array = eliminar(frameworks, 1);
 console.log( array );
  