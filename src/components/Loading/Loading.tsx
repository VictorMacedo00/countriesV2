import { Ball, Loader, LoaderGrid } from "./Loading.styles";

import React from "react";

type LoadingType = {
  loading: boolean;
  children: any;
};

const Loading = (props: LoadingType) => {
  return (
    <>
      {props.loading ? (
        <LoaderGrid>
          <Loader>
            <Ball />
            <Ball />
            <Ball />
          </Loader>
        </LoaderGrid>
      ) : (
        props.children
      )}
    </>
  );
};

export default Loading;
