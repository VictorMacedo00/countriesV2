import { GET_COUNTRIE_AT_CIOC, GetCountrieAtCioc } from "../../api/api";
import React, { useEffect } from "react";

import { BorderCard } from "./Border.styles";
import { request } from "http";
import { useFetch } from "../../hooks/useFetch";

type CIOC = {
  cioc: string;
};

const Border = (props: CIOC) => {
  const { data, loading, request } = useFetch<GetCountrieAtCioc>();

  useEffect(() => {
    request(GET_COUNTRIE_AT_CIOC(props.cioc));
  }, []);

  return <>{data ? <BorderCard>{data.name}</BorderCard> : <></>}</>;
};

export default Border;
