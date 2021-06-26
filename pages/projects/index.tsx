import React from "react";
import { Wrapper, Header, Footer } from "@components";
import { BodyContainer } from "@components";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <BodyContainer>
        <p>hello world</p>
      </BodyContainer>
      <Footer />
    </Wrapper>
  );
};
export default Home;
