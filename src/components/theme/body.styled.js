import styled from 'styled-components';

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.nasaLightBlue};
  color: ${(props) => props.theme.nasaWhite};

  img {
    padding-top: 10px;
    width: 65%;
    height: auto;
  }

  p {
    max-width: 63%;
    font-size: 1rem;
    padding: 20px;
    margin: 20px;
    text-align: center;

    @media (max-width: ${(props) => props.theme.breakpoint}) {
      max-width: 100%;
    }
  }
`;
