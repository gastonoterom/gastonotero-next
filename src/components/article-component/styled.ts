import styled from "styled-components";

export const Container = styled.div`
  .custom-img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  .unset-img {
    width: 100%;
  }
  .unset-img > div {
    position: unset !important;
  }

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
  }

  h4 {
    text-align: center;
  }
  p {
    justify-content: center;
    margin-bottom: 5px;
  }

  li {
    margin-bottom: 5px;
  }

  max-width: 800px !important;
  margin: auto;
  margin-bottom: 50px;
  code {
    overflow: auto;
    display: block;
  }

  pre {
    background: #171717;
  }

`;
