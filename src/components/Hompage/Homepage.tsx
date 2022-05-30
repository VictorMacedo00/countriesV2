import {
  CountriesArea,
  FilterArea,
  FilterSelect,
  HomepageContainer,
  SearchButton,
  SearchForm,
  SearchInput,
} from "./Homepage.styles";
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIE,
  GET_COUNTRIES_AT_CONTINENT,
  GetAllCountries,
} from "../../api/api";
import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import { Container } from "../../GlobalStyles.styles";
import { ReactComponent as SearchIcon } from "./../../Assets/Icons/searchIcon.svg";
import { useFetch } from "../../hooks/useFetch";

const Homepage: React.FC = () => {
  const { data, loading, request } = useFetch<GetAllCountries[]>();

  type Search = {
    countrie: string;
  };

  const [search, setSearch] = useState<Search | undefined>();

  const getCountriesAtContinent = async (continent: string) => {
    request(GET_COUNTRIES_AT_CONTINENT(continent));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(search?.countrie);
    if (search === undefined) {
      alert("Insira um valor válido");
    } else {
      request(GET_COUNTRIE(search.countrie));
      setSearch(undefined);
    }
  };

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
            <SearchForm onSubmit={handleSubmit}>
              <SearchButton>
                <SearchIcon />
              </SearchButton>
              <SearchInput
                onChange={(event) =>
                  setSearch({ ...search, countrie: event.currentTarget.value })
                }
                placeholder="Search for a countrie..."
              />
            </SearchForm>
            <FilterSelect
              onChange={({ target }) => getCountriesAtContinent(target.value)}
            >
              <option selected disabled>
                Filter by Region
              </option>
              <option value="africa">África</option>
              <option value="americas">Américas</option>
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
