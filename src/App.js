import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Head from './components/head';
import Body from './components/body';
import Foot from './components/footer';
import { BASE_URL, API_KEY } from './constants.js';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.table(data);
  return (
    <div className='App'>
      <Head className='head' title={data.title} date={data.date} />
      <Body className='body' />
      <Foot className='footer' />
    </div>
  );
}

export default App;
