import styled from "styled-components";

export const HomepageContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 70px);
  height: auto;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
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
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};

  ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px 0 0 3px;
  background-color: ${({ theme }) => theme.elements};
`;

export const FilterSelect = styled.select`
  width: 250px;
  height: 100%;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
`;

export const CountriesArea = styled.section`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
`;
