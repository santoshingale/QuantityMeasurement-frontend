import axios from 'axios';
//class Configration{

function getUnit(unitType) {
    return axios({
        method: 'get',
        url: "http://localhost:8080/unitcomparator/"+unitType,
    });
}

export default getUnit;
