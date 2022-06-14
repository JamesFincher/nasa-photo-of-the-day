import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: white;

  @media (max-width: 450px) {
    flex-direction: row;
    justify-content: space-around;
  }
  a {
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    text-decoration: none;
  }
`;
