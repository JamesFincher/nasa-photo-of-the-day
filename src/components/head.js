import React from 'react';
export default function Head(props) {
  const { date, title } = props;
  return (
    <>
      <h1 className='date'>NASA PHOTO OF THE DAY FOR {date}:</h1>

      <h2 className='title'>{title}</h2>
    </>
  );
}
