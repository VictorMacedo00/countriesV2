import { Container, Text } from "../../GlobalStyles.styles";

import { HeaderContainer } from "./Header.styles";
import React from "react";

const Header = () => {
  return (
    <HeaderContainer>
      <Container alignItems="center" justifyContent={"space-between"}>
        <Text fontSize="1.1rem" fontWeight="bold" color="#000">
          Where in the world?
        </Text>
        <Text fontSize="1rem" fontWeight="bold" color="#000">
          Dark Mode
        </Text>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
