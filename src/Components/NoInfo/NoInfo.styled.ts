import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 160px;
  margin: 50px auto 0 auto;
  @media (min-width: 540px) {
    width: 300px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
  padding-bottom: ${p => p.theme.space[4]}px;
`;
