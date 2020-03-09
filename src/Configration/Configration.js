import {postURL , getURLForRequestUnits , getURLForRequestUnitType} from './Enviroment'
const axios = require('axios')

export function getConvertedUnit(unitDTO) {
  return axios({
    method: 'post',
    url: postURL,
    data: unitDTO
  });
}

export function getUnit(unitType) {
    return axios({
        method: 'get',
        url: getURLForRequestUnits+unitType,
    });
}

export function getUnitType() {
    return axios({
        method: 'get',
        url: getURLForRequestUnitType
    });
}

