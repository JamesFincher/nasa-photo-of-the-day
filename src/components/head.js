import React from 'react';
import { StyledHead } from './theme/head.styled';
export default function Head(props) {
  const { date, title } = props;
  return (
    <StyledHead>
      <>
        <h1 className='date'>
          NASA PHOTO OF THE DAY FOR
          <br /> {date}
        </h1>

        <h2 className='title'>{title}</h2>
        <br />
      </>
    </StyledHead>
  );
}
