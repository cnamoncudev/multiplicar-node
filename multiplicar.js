const { resolve } = require("path");
const { rejects } = require("assert");

const fs = require('fs');

let crearArchivo = (base,limite=10) =>{
    return new Promise ((resolve,reject)=>{
    let data=''
    if (!Number(base)){
        reject(`No es un numero`);
        return;
    }

       for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n `;
        }
       
        fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{
           if(err){
               reject(err)
           }else
           {
               resolve(`tabla-${base}.txt`);
           }
       
        });
});
}

let listarTabla = (base,limite=10)=>{
    let data ='';
    for (let index = 1; index <=limite; index++) {
        data += `${base} * ${index} = ${base * index}\n `;
        console.log(data);
        
    }
}

module.exports={
    crearArchivo,
    listarTabla
}