import { PageTitle } from "@components/page-titles";
import React from "react";

import { Wrapper, Container } from "./styled";

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Gaston Otero.</h1>
        <p>Full Stack Dev. &#38; Engineering Student.</p>
      </Container>
    </Wrapper>
  );
};
