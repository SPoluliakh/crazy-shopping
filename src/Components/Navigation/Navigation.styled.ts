import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.navBcg};
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const MainNav = styled.nav``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[5]}px;
  }

  :nth-last-child(1) {
    margin-left: ${p => p.theme.space[7]}px;
  }
`;
