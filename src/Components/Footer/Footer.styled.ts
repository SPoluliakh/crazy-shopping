import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.navBcg};
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
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

export const SotialWrap = styled.div`
  margin-bottom: ${p => p.theme.space[2]}px;

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const HeartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[2]}px;

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
export const AdressWrap = styled.address`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
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
