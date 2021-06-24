import React from "react";

import { Wrapper, Main, Footer, Navigation } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Main />
      <Navigation />
      <Footer />
    </Wrapper>
  );
};
export default Home;
