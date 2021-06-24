import React from "react";

import { Wrapper, Header, Main, Footer, Navigation } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Footer />
    </Wrapper>
  );
};
export default Home;
