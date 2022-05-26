import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 350px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 0 30px 0;
  border-radius: 3px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

type FlagBackground = {
  backgroundImage: string;
};

export const CardFlag = styled.div<FlagBackground>`
  width: 100%;
  height: 180px;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  border-radius: 3px 3px 0 0;
`;

export const CountrieInfos = styled.div`
  width: auto;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0 0 15px;
`;
