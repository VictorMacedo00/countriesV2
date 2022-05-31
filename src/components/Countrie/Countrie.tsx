import {
  BackButton,
  BorderCountries,
  BorderTitle,
  Borders,
  CountrieContainer,
  CountrieFlag,
  CountrieGrid,
  CountrieInfos,
  CountrieName,
  Infos,
  InfosFirstGroup,
  InfosSecondGroup,
} from "./Countrie.styled";
import { GET_COUNTRIE, GetCountrie } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";

import Border from "../Border/Border";
import { Container } from "../../GlobalStyles.styles";
import { Text } from "./../../GlobalStyles.styles";
import { useFetch } from "../../hooks/useFetch";

const Countrie = () => {
  const { name } = useParams<{ name: string }>();

  const { data, loading, request } = useFetch<GetCountrie[]>();

  useEffect(() => {
    if (typeof name === "string") {
      request(GET_COUNTRIE(name));
    }
  }, []);

  return (
    <CountrieContainer>
      {data ? (
        <Container alignItems="center" justifyContent="space-between">
          <CountrieGrid>
            <Link to={"/"}>
              <BackButton>← Back</BackButton>
            </Link>
            <CountrieFlag backgroundImage={data[0].flags.svg}></CountrieFlag>
            <CountrieInfos>
              <CountrieName>
                <Text color="#000" fontSize="2rem" fontWeight="bold">
                  {data[0].name}
                </Text>
              </CountrieName>
              <Infos>
                <InfosFirstGroup>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Native Name: "
                    margin="0 0 10px 0"
                  >
                    {" " + data[0].nativeName}
                  </Text>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Population: "
                    margin="0 0 10px 0"
                  >
                    {" " + data[0].population}
                  </Text>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Region: "
                    margin="0 0 10px 0"
                  >
                    {" " + data[0].region}
                  </Text>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Subregion: "
                    margin="0 0 10px 0"
                  >
                    {" " + data[0].subregion}
                  </Text>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Capital: "
                    margin="0 0 10px 0"
                  >
                    {" " + data[0].capital}
                  </Text>
                </InfosFirstGroup>
                <InfosSecondGroup>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Top Level Domain: "
                    margin="0 0 10px 0"
                  >
                    {" " + data[0].topLevelDomain}
                  </Text>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Currencies: "
                    margin="0 0 10px 0"
                  >
                    {" " +
                      data[0].currencies.map((currencie) => currencie.name)}
                  </Text>
                  <Text
                    color="#000"
                    fontSize="1.2rem"
                    fontWeight="normal"
                    before="Languages: "
                    margin="0 0 10px 0"
                  >
                    {" " +
                      data[0].languages.map((language) => " " + language.name)}
                  </Text>
                </InfosSecondGroup>
              </Infos>
              <BorderCountries>
                <BorderTitle>
                  <Text color="#000" fontSize="1.5rem" fontWeight="bold">
                    Borders:
                  </Text>
                </BorderTitle>
                <Borders>
                  {data[0].borders &&
                    data[0].borders.map((border) => <Border cioc={border} />)}
                </Borders>
              </BorderCountries>
            </CountrieInfos>
          </CountrieGrid>
        </Container>
      ) : (
        <></>
      )}
    </CountrieContainer>
  );
};

export default Countrie;
