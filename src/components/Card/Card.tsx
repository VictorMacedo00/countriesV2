import { CardContainer, CardFlag, CountrieInfos } from "./Card.styles";

import { GetAllCountries } from "../../api/api";
import React from "react";
import { Text } from "../../GlobalStyles.styles";
import { useNavigate } from "react-router-dom";

const Card = ({
  capital,
  flags,
  name,
  population,
  region,
}: GetAllCountries) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      onClick={() => {
        navigate(`countrie/${name}`);
      }}
    >
      <CardFlag backgroundImage={flags.svg} />
      <CountrieInfos>
        <Text color="#000" fontSize="1.4rem" fontWeight="bold">
          {name}
        </Text>
        <Text
          color="#000"
          fontSize="1rem"
          fontWeight="normal"
          before="Population: "
        >
          {population}
        </Text>
        <Text
          color="#000"
          fontSize="1rem"
          fontWeight="normal"
          before="Region: "
        >
          {region}
        </Text>
        <Text
          color="#000"
          fontSize="1rem"
          fontWeight="normal"
          before="Capital: "
        >
          {capital}
        </Text>
      </CountrieInfos>
    </CardContainer>
  );
};

export default Card;
