const frameworks = [
    { name: 'vuejs', isFrontend: true },
    { name: 'symfony', isFrontend: false },
    { name: 'laravel', isFrontend: false },
    { name: 'react', isFrontend: true },
    { name: 'django', isFrontend: false },
    { name: 'angular', isFrontend: true },
    ]
    
 
    const nombres = frameworks.map((framework) => `${framework.name.toUpperCase()}`)
    console.log(nombres)


   //frameworks.forEach((value) => {
    //console.log(value);
    //});