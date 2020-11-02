const frameworks = [
    { name: 'vuejs', isFrontend: true },
    { name: 'symfony', isFrontend: false },
    { name: 'laravel', isFrontend: false },
    { name: 'react', isFrontend: true },
    { name: 'django', isFrontend: false },
    { name: 'angular', isFrontend: true },
    ]
    
    


    
 // const nombres = frameworks.map((framework,i) => `${framework.name} ${i}`)

 const nombres = frameworks.map((framework) => `${framework.name}`)
  console.log(nombres)