import styled from 'styled-components';

export const Img = styled.img`
  width: 50px;
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.basketItem};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.buttonsShadow};
  padding: ${p => p.theme.space[2]}px;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Title = styled.h2`
  margin-right: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${p => p.theme.space[4]}px;
`;

export const Buttons = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${p => (p.name === 'increment' ? 'green' : 'indianred')};
`;

export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
