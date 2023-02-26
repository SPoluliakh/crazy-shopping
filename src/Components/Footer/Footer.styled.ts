import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.navBcg};
  padding: ${p => p.theme.space[2]}px;
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
export const VisaImg = styled.img`
  width: 100px;
`;

export const SotialWrap = styled.div``;
export const HeartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AdressWrap = styled.div``;
export const Phone = styled.a`
  text-decoration: none;
  color: inherit;
`;
export const Mail = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const SocialIcon = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  :not(:last-child) {
    margin-right: 10px;
  }
  transition: transform 300ms linear;

  :hover {
    transform: scale(1.4);
  }
`;
