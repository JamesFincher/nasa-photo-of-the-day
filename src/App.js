import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Head from './components/head';
import Body from './components/body';
import Foot from './components/footer';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    const key = process.env.REACT_APP_API_KEY;

    axios
      .get(`${url}?api_key=${key}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='App'>
      <Head className='head' title={data.title} date={data.date} />
      <Body
        className='body'
        imgSrc={data.hdurl}
        explanation={data.explanation}
      />
      <Foot className='footer' />
    </div>
  );
}

export default App;
