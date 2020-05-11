const axios = require('axios');

const getClima = async(lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat}&lon=${ long}&units=metric&appid=a7559c580e5e1a5165c9eb1807dbd99d`);


    return resp.data.main.temp;
}

module.exports = {
    getClima
}