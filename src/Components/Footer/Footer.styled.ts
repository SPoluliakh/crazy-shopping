import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.navBcg};
`;

export const Heart = styled.span`
  display: inline-block;
  animation: myAnim 1s ease 0.5s infinite normal forwards;

  @keyframes myAnim {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.5);
    }
  }
`;

export const HeartTwo = styled.span`
  display: inline-block;
  animation: myAnim 1s ease 0s infinite normal forwards;

  @keyframes myAnim {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
