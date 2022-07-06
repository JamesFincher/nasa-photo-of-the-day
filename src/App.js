import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from './components/head';
import Body from './components/body';
import Foot from './components/footer';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.table(data);
  return (
    <div className='App'>
      <Head className='head' title={data.title} date={data.date} />
      <Body
        className='body'
        imgSrc={data.url}
        explanation={data.explanation}
      />
      <Foot className='footer' />
    </div>
  );
}

export default App;
