import React from 'react';
import { StyledFooter } from './theme/footer.styled';
export default function Foot() {
  return (
    <StyledFooter>
      <>
        <footer className='footer'>
          <a href='https://apod.nasa.gov/apod/lib/about_apod.html'>
            Learn about APOD
          </a>
          <br />

          <a href='https://spacecenter.org/support/make-a-gift/ways-to-give/'>
            Donate to Space Center
          </a>
          <br />
          <a href='https://www.nasa.gov/education/maianse/resources'>
            Learn even more!
          </a>
        </footer>
      </>
    </StyledFooter>
  );
}
