import {
  CountriesArea,
  FilterArea,
  FilterSelect,
  HomepageContainer,
  SearchButton,
  SearchForm,
  SearchInput,
} from "./Homepage.styles";
import { GET_ALL_COUNTRIES, GetAllCountries } from "../../api/api";
import React, { useEffect } from "react";

import Card from "../Card/Card";
import { Container } from "../../GlobalStyles.styles";
import { useFetch } from "../../hooks/useFetch";

const Homepage: React.FC = () => {
  const { data, loading, request } = useFetch<GetAllCountries[]>();

  useEffect(() => {
    request(GET_ALL_COUNTRIES());
  }, [request]);

  return (
    <HomepageContainer>
      {loading ? (
        <>
          <h1>Carregando...</h1>
        </>
      ) : (
        <Container
          flexDirection="column"
          alignItems="center"
          justifyContent={"space-between"}
        >
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
          <CountriesArea>
            {data &&
              data.map((countrie: GetAllCountries) => (
                <Card
                  capital={countrie.capital}
                  flags={countrie.flags}
                  name={countrie.name}
                  population={countrie.population}
                  region={countrie.region}
                />
              ))}
          </CountriesArea>
        </Container>
      )}
    </HomepageContainer>
  );
};

export default Homepage;
