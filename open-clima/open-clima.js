const axios = require('axios');

const getClima = async (lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=5f05a2607b2cdbfed7dc4ca1bf59600f&units=metric`);
    
    return resp.data.main.temp;
};

module.exports = {
    getClima
};