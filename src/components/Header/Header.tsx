import { Container, Text } from "../../GlobalStyles.styles";
import { HeaderContainer, Switch } from "./Header.styles";

import React from "react";

// type Theme = {
//   switchTheme: boolean;
// };

const Header = (props: any) => {
  return (
    <HeaderContainer>
      <Container alignItems="center" justifyContent={"space-between"}>
        <Text fontSize="1.1rem" fontWeight="bold" color="#000">
          Where in the world?
        </Text>
        <Switch onClick={() => props.switchTheme()}>
          {props.theme ? "Light Theme" : "Dark Theme"}
        </Switch>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
