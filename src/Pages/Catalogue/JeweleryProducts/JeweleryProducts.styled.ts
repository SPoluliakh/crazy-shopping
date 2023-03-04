import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -30px;
    margin-right: -30px;
  }
`;
