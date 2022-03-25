import styled from 'styled-components';

export const StyledHead = styled.div`
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: ${(props) => props.theme.nasaWhite};
  h2 {
    margin: 0;
  }
`;
