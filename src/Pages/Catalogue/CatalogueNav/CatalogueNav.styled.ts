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
  justify-content: space-around;
`;
