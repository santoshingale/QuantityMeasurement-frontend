import axios from 'axios';
//class Configration{

function getUnitType() {
    return axios({
        method: 'get',
        url: 'http://localhost:8080/unitcomparator'
    });
}
export default getUnitType;
