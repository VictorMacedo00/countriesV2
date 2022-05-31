import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    elements: string;
    input: string;
    loading: string;
  }
}
