const axios = require('axios');

const getZona = async ( direccion ) => {
    
    const encodedUrl = encodeURI( direccion );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'x-rapidapi-key': 'd0c2b3c436msh8cf2dd0e94c782ap157302jsn63fbeb483ff5'}
        });

    const resp = await instance.get();
    
    if( resp.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${ direccion }`);
    }
    
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;
    
        return {
            dir,
            lat,
            lng
        };

};

module.exports = {
    getZona
};

