import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;

export const Switch = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
`;
