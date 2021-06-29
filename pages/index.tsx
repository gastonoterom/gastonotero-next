import React from "react";

import { Wrapper, Main, Footer, Navigation } from "@components";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <title >Gaston Otero.</ title>
      </Head>

      <Main />
      <Navigation />
      <Footer />
    </Wrapper>
  );
};
export default Home;
