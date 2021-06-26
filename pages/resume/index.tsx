import React from "react";
import { Wrapper, Header, Footer } from "@components";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticProps } from "next";
import { Container, StyledTitle, StyledSubtitle } from "./styled";
import { getResume } from "@lib";

interface Props {
  resumeMdx: MDXRemoteSerializeResult;
}

export default function Resume({ resumeMdx }: Props) {
  return (
    <Wrapper>
      <Header />
      <Container>
        <StyledTitle>Contact Me At</StyledTitle>
        <StyledSubtitle>mail@gastonotero.com</StyledSubtitle>
        <MDXRemote {...resumeMdx} />
      </Container>
      <Footer />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resume = getResume();
  const resumeMdx = await serialize(resume);

  return { props: { resumeMdx } };
};
