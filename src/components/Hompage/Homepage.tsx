import { Container, Text } from "../../GlobalStyles.styles";
import {
  FilterArea,
  FilterSelect,
  HomepageContainer,
  SearchButton,
  SearchForm,
  SearchInput,
} from "./Homepage.styles";

import React from "react";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Container alignItems="center" justifyContent={"space-between"}>
        <FilterArea>
          <SearchForm>
            <SearchButton>O</SearchButton>
            <SearchInput placeholder="Search for a countrie..." />
          </SearchForm>
          <FilterSelect>
            <option selected disabled>
              Filter by Region
            </option>
            <option value="africa">África</option>
            <option value="america">Américas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </FilterSelect>
        </FilterArea>
      </Container>
    </HomepageContainer>
  );
};

export default Homepage;
