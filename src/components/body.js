import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Body(props) {
  const { imgSrc, explanation } = props;

  return (
    <>
      <img src={imgSrc} alt={explanation} className='image' />
      <p className='explanation'>{explanation}</p>
    </>
  );
}
