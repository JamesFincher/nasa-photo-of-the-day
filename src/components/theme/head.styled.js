import styled from 'styled-components';

export const StyledHead = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: ${(props) => props.theme.nasaWhite};
  h2 {
    margin: 0;
  }
`;
