import React from "react";

import { Logo } from "@components";
import { Wrapper, Container } from "./styled";



export const Header: React.FC = () => {
  return (
    <Wrapper>

      <Container>

        <Logo />
      </Container>

    </Wrapper >
  );
};
