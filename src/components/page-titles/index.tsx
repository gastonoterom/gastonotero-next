import styled from "styled-components";

const PageTitle = styled.h1<{ size?: Number }>`
  font-size: ${(props) => (props.size ? "40px" : "25")}px;
  text-align: center;
  text-justify: inter-word;
`;

const PageSubTitle = styled.h2<{ size?: Number }>`
  font-size: ${(props) => (props.size ? "40px" : "25")}px;
  text-align: center;
`;

export { PageSubTitle, PageTitle };
