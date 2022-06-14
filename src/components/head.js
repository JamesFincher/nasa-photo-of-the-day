import React from 'react';
import { StyledHead } from './theme/head.styled';
export default function Head(props) {
  const { date, title } = props;
  return (
    <StyledHead>
      <>
        <h1 className='date'>NASA PHOTO OF THE DAY</h1>
        <h2 className='title'>
          {date} - {title}
        </h2>
        <br />
      </>
    </StyledHead>
  );
}
