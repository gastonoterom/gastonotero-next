import React from "react";
import { Wrapper, Header, Footer } from "@components";
import { Container } from "./styled"

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <p>hello world</p>
      </Container>
      <Footer />
    </Wrapper>
  );
};
export default Home;
