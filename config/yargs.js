const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'  
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea'
}


const argv  = require('yargs')
                .command('crear', 'Crea un elemento por hacer.', {
                    descripcion
                })
                .command('actualizar', 'Actualiza un elemento por hacer existente.', {
                    descripcion,
                    completado 
                })
                .command('borrar', 'Borra un elemento por hacer existente.', {
                    descripcion
                })
                .help()
                .argv;

module.exports = {
  argv
}                