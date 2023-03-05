import styled from 'styled-components';

let innerWidth: boolean = window.innerWidth <= 520;

export const Container = styled.div`
  position: absolute;
  z-index: 90;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: #0000008a;

  transition: 550ms linear;

  &.enter {
    left: ${() => (innerWidth ? '-40px' : '-55px')};

    opacity: 1;
    pointer-events: auto;
  }
  &.out {
    left: -300px;

    pointer-events: none;
    opacity: 0;
  }
`;

export const MainNav = styled.nav`
  background-color: ${p => p.theme.colors.navBcg};
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  width: 60%;
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const ListItem = styled.li`
  position: relative;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const BasketCount = styled.div`
  position: absolute;
  top: -5px;
  left: 12px;
  padding-left: ${p => p.theme.space[1]}px;
  padding-right: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: ${p => p.theme.colors.basketCount};
  border-radius: ${p => p.theme.radii.round};
`;
