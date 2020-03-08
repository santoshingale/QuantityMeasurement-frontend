import axios from 'axios';
//class Configration{

function getConvertedUnit(unitDTO) {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/unitcomparator',
    data: unitDTO
  });
}



//}


export default getConvertedUnit;
