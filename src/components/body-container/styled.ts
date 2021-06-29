import styled from "styled-components";

export const SubContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const Container = styled.div`
  justify-content: center;
  align-item: center;
  padding-top: 5vh;
  padding-left: 10vw;
  padding-right: 10vw;

  min-height: 100%;

  @media (min-width: 550px) {
    padding-left: 20vw;
    padding-right: 20vw;
  }

  background-color: ${({ theme }) => theme.colors.cardsBg};
  color: ${({ theme }) => theme.colors.textColor};
  flex: 1;

  h1 {
    font-size: 40px;
    text-align: center;
  }
  h2 {
  }
  p {
    text-align: justify;
    text-justify: inter-word;
  }

  /* unvisited link */
  a:link {
    color: #ff7600;
  }

  /* visited link */
  a:visited {
    color: #ff7600;
  }

  /* mouse over link */
  a:hover {
    color: #cd113b;
  }

  /* selected link */
  a:active {
    color: #ff7600;
  }
`;
