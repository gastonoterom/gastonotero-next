import React from "react";
import { Wrapper, Header, Footer, PageTitle } from "@components";
import { BodyContainer } from "@components";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Wrapper>
        <Header />
        <BodyContainer>
          <PageTitle>Coming soon...</PageTitle>
        </BodyContainer>
        <Footer />
      </Wrapper>
    </>
  );
};
export default Home;
