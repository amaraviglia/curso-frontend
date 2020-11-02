function darnota(numero)
{
var foo = numero;
switch (foo) {
  case 1:
    nota="Desaprobado";
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2: 
    nota="Desaprobado";
    break; 
  case 3:
    nota="Desaprobado";
    break;
  case 4:
    nota="Desaprobado";
    break;
  case 5: 
    nota="Regular";
    break; 
  case 6:
    nota="Regular";
    break;
 case 7:
    nota="Bueno";
    break;
  case 8:
    nota="Bueno";
    break;
  case 9: 
    nota="Muy Bueno";
    break; 
  case 10:
    nota="Muy Bueno";
    break;
  default:
    nota="Nota errónea";  
  
}
return nota;
}

resul = darnota(3);
console.log( resul );