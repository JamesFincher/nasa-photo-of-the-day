import styled from 'styled-components';

export const StyledHead = styled.div`
  background-color: ${(props) => props.theme.nasaLightBlue};
  color: ${(props) => props.theme.nasaWhite};

  img {
    width: 80%;
    height: auto;
  }

  p {
    display: inline-block;
    max-width: 80%;
    font-size: 1.5rem;
    padding: 20px;
    margin: 0;
  }
`;
