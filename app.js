const colors = require('colors');
const zona = require('./zona/zona');
const openClima = require('./open-clima/open-clima');
const argv = require('yargs')
    .options({
        ciudad: {
            alias: 'c',
            desc: 'Ciudadad',
            demand: true
        }
    })
    .argv;
    

const getInfo = async ( direccion ) => {
    let resp; 
    try {
        const coords = await zona.getZona(direccion);
        const temp = await openClima.getClima(coords.lat, coords.lng);
        resp = 'En ' +  colors.green( coords.dir ) +', la temperatura en de ' + colors.blue( temp + 'º' );
    } catch (error) {
        resp = 'No se pudo conseguir el clima de' + colors.red( direccion );
    }

    return resp;
};

getInfo( argv.ciudad )
    .then(console.log)
    .catch(console.log);
