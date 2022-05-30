import styled from "styled-components";

type ContainerType = {
  justifyContent: "center" | "space-between";
  alignItems: "center";
  flexDirection?: string;
};

export const Container = styled.div<ContainerType>`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "initial"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

type TextType = {
  fontSize: string | number;
  fontWeight: string | number;
  color: string;
  before?: string;
  margin?: string;
};

export const Text = styled.p<TextType>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};

  &::before {
    content: "${(props) => props.before}";
    font-weight: bold;
  }
`;
