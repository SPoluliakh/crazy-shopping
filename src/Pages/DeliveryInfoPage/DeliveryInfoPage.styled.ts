import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.navBcg};
  min-height: calc(100vh - 350px);
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  line-height: 1.5;
`;

export const Text = styled.p`
  line-height: 1.5;
  letter-spacing: 2px;
`;
