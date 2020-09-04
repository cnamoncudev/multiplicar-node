const opciones = {
    base:{
        demand:true,
        alias:'b'
    },
        limite:{
            alias:'l',
            default:'20'
   },

}


const argv =require ('yargs')
                    .command ('listar','Imprime en consola la tabla de multiplicar', opciones)
                    .command('Crear', 'Crear Archivo de Tabla',opciones)
                    .help()
                    .argv;

module.exports={

    argv    
}