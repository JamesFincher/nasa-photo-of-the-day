import styled from 'styled-components';

export const StyledHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: ${(props) => props.theme.nasaWhite};
  h2 {
    font-size: 1.5rem;
    font-weight: bold;

    margin: 0;
  }
`;
