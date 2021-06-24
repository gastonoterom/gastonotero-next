import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-item: center;
  padding: 10vh;
  @media (min-width:480px){
    padding-left: 20vh;
    padding-right: 20vh;
  }
  
  background-color: ${({ theme }) => theme.colors.cardsBg};
  color: ${({ theme }) => theme.colors.textColor};

  h1 {
    font-size: 40px;
    text-align: center;
  }
  h2 {
    font-size: 30px;
    text-align: justify;
    text-justify: inter-word;
  }
  p {
    text-align: justify;
    text-justify: inter-word;
  }
`;
