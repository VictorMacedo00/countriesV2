import styled from "styled-components";

export const BorderCard = styled.div`
  width: auto;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  border-radius: 2px;
  padding: 10px;
  margin: 10px;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
`;
