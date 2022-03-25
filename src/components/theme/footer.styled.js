import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: ${(props) => props.theme.secondaryColor};
  padding-bottom: 1rem;

  img {
    width: 80%;
    height: auto;
  }
  a {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    display: inline-block;
    max-width: 80%;
    font-size: 1.5rem;
    padding: 20px;
    margin: 0;
  }
`;
