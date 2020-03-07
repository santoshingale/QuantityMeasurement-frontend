import axios from 'axios';
import React from 'react'


function  getConvertedUnit(unitDTO) {
        return axios({
            method: 'post',
            url: 'http://localhost:8080/unitcomparator',
            data: unitDTO
          });
    }
  

export default getConvertedUnit;
