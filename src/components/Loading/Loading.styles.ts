import styled, { keyframes } from "styled-components";

export const LoaderGrid = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Loader = styled.div`
  width: 120px;
  height: 75px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Bounce = keyframes`
  from {
    tranform: scaleX(1.25);
  }
  to {
    transform: translateY(-50px) scaleX(1)
  }
`;

export const Ball = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  animation: ${Bounce} 0.5s alternate infinite;
  background-color: ${({ theme }) => theme.loading};

  &:nth-child(2) {
    animation-delay: 0.16s;
  }

  &:nth-child(3) {
    animation-delay: 0.32s;
  }
`;
