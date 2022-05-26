export const API_URL = "https://restcountries.com/v2/";

type Flags = {
  png: string;
  svg: string;
};

export type GetAllCountries = {
  capital: string;
  flags: Flags;
  name: string;
  population: number;
  region: string;
};

export function GET_ALL_COUNTRIES() {
  return {
    url: API_URL + "all?fields=name,population,region,capital,flags",
    options: {
      method: "GET",
    },
  };
}

export function GET_COUNTRIE(name: string) {
  return {
    url:
      API_URL +
      `name/${name}?fields=name,borders,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,flags`,
    options: {
      method: "GET",
    },
  };
}

export function GET_COUNTRIE_AT_CIOC(cioc: string) {
  return {
    url: API_URL + `alpha/${cioc}?fields=name`,
    options: {
      method: "GET",
    },
  };
}

export function GET_COUNTRIES_AT_CONTINENT(continent: string) {
  return {
    url:
      API_URL +
      `region/${continent}?fields=name,population,region,capital,flags`,
    options: {
      method: "GET",
    },
  };
}
