const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para saber el clima',
        demand: true
    }

}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(resp => console.log('La ciudad es:', resp));

// clima.getClima(40.750000, -74.000000)
//     .then(climee => console.log('y EL clima es', climee))
//     .catch(console.log)

const getinfo = async(direccion) => {

    try {
        const lugarete = await lugar.getLugarLatLong(direccion);
        const tempe = await clima.getClima(lugarete.lat, lugarete.long);
        return `El Clima de ${ lugarete.direc} es de ${ tempe}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion}`;
    }
}


getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log);