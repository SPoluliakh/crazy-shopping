import styled from 'styled-components';

export const CutalogueNav = styled.nav`
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
  border-top: ${p => p.theme.borders.navBorder};
  border-bottom: ${p => p.theme.borders.navBorder};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: -5px;
  flex-wrap: wrap;
  text-align: center;
  @media (min-width: 768px) {
    justify-content: space-around;
    margin-bottom: ${p => p.theme.space[0]}px;
    flex-wrap: nowrap;
  }
`;

export const ListItem = styled.li`
  @media (max-width: 767px) {
    flex-basis: calc(100% / 2 - 5px);
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
