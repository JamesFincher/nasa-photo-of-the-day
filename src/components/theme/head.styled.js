import styled from 'styled-components';

export const StyledHead = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: ${(props) => props.theme.nasaWhite};
  padding: 8px;
  padding-bottom: 3px;
  h1 {
    font-size: 1.7rem;
    font-weight: bold;
    margin: 0;
    padding-bottom: 0.6rem;

    @media (max-width: 450px) {
      font-size: 1.3rem;
    }
  }
  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
`;
