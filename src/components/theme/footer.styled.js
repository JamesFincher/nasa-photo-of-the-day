import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.nasaDarkBlue};
  color: white;

  a {
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    text-decoration: none;
  }
`;
