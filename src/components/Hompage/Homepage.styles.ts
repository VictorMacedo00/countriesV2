import styled from "styled-components";

export const HomepageContainer = styled.section`
  width: 100vw;
  min-height: calc(100vh - 70px);
  height: auto;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
`;

export const FilterArea = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const SearchForm = styled.form`
  height: 100%;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 10px;
  border-radius: 0 3px 3px 0;

  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px 0 0 3px;
`;

export const FilterSelect = styled.select`
  width: 250px;
  height: 100%;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
`;
