import { FlagBackground } from "../Card/Card.styles";
import styled from "styled-components";

export const CountrieContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`;

export const CountrieGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 650px 1fr;
`;

export const CountrieFlag = styled.div<FlagBackground>`
  grid-column: 1 / 2;
  width: 650px;
  height: 400px;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
`;

export const CountrieInfos = styled.div`
  grid-column: 2 / 3;
  width: 100%;
  height: 400px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const CountrieName = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
`;

export const Infos = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-between;
`;

export const InfosFirstGroup = styled.div`
  width: auto;
`;

export const InfosSecondGroup = styled.div`
  width: auto;
`;

export const BorderCountries = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BorderTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Borders = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
