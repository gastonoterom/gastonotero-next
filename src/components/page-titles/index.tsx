import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: ${(props) => props.size}px;
  text-align: center;
  text-justify: inter-word;
`;

const PageSubTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
`;

export { PageSubTitle, PageTitle };
