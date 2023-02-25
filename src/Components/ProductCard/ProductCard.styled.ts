import styled from 'styled-components';

export const Item = styled.li`
  flex-basis: calc(100% / 3 - 30px);
  margin-bottom: 30px;
  margin-right: 30px;
  padding: 10px;
  box-shadow: 2px 9px 5px -1px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
`;

export const AddBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  margin-top: 20px;
  transition: transform 250ms linear;

  :hover {
    transform: rotateZ(360deg) scale(1.5);
    transform-origin: 50%;
  }
`;

export const BtnDetails = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;
`;

export const Span = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.mm}px;
  animation: gradient 10s linear infinite;
  animation-direction: reverse;

  @keyframes gradient {
    0% {
      color: brown;
    }
    50% {
      color: blue;
    }
    100% {
      color: #563833;
    }
  }
`;
