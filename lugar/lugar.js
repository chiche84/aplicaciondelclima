const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl}`,
        headers: { 'x-rapidapi-key': '9860cfc17fmsh43482b475a96e82p17bbb4jsn8df0b42145c2' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion}`);
    }

    const data = resp.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const long = data.lon;

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('Error', err);
    //     });

    return {
        direc,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}