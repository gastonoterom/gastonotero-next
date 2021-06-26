import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-item: center;
  padding-top: 5vh;
  padding-left: 10vw;
  padding-right: 10vw;
  @media (min-width:550px){
    padding-left: 20vw;
    padding-right: 20vw;
  }
  
  background-color: ${({ theme }) => theme.colors.cardsBg};
  color: ${({ theme }) => theme.colors.textColor};

  p {
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 40px;
  text-align: center;
`

export const StyledSubtitle = styled.h2`
  text-align: center ;
  font-size: 25px;
`