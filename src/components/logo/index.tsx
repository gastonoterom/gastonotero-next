import React from "react";
import { Wrapper, Container, StyledTitle } from "./styled";

import Link from 'next/link'


export const Logo: React.FC = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Container>
          <StyledTitle>Gaston Otero.</StyledTitle>
        </Container>
      </Link>
    </Wrapper>

  );
};
