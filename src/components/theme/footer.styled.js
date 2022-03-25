import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: white;
  padding-bottom: 1rem;

  img {
    width: 80%;
    height: auto;
  }
  a {
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: none;
  }
  p {
    display: inline-block;
    max-width: 80%;
    font-size: 1.5rem;
    padding: 20px;
    margin: 0;
  }
`;
