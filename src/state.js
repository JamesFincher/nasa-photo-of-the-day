import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = process.env.REACT_APP_API_URL;
const key = process.env.REACT_APP_API_KEY;

const [data, setData] = useState([]);

function fetchData() {
  return axios
    .get(`${url}?api_key=${key}`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.log(err));
}

export { fetchData, data };
