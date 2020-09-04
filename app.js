//const fs = require('fs');
//const multiplicar = require('../03-bases-node/multiplicar');
/* import argv from 'yargs';
import { crearArchivo } from '../03-bases-node/multiplicar'; */
const {crearArchivo,listarTabla} = require('../03-bases-node/multiplicar')
const argv = require('./config/yargs').argv;
const colors=require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo =>console.log(`Archivo Creado ${archivo}`.green))
        console.log(`crear`);
        break;
    default:
        console.log(`Comando no conocido`.red)
        break;
}
//console.log(argv);
//destructuración
//const fs = require('express'); // framework NodeJs
//const fs = require ('../03-bases-node');

//fs.writeFile(file, data[, options], callback)

let argv2=process.argv;


//let parametro=argv[2];

//let base=parametro.split('=')[1];

//let base=5;

//console.log (argv2);



/* crearArchivo(base)
.then(archivo=>console.log(`Archivo creado: ${archivo}`))
.catch(e=>console.log(e)) */


