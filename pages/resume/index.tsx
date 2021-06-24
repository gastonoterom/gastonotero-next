import React from "react";

import { Wrapper, Header, Footer } from "@components";
import GlobalStyle from "@styles/globalStyles";

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { GetStaticProps } from 'next'

import { Container } from "./styled"

import { getResumeMarkdown } from "@modules"

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

export default function Resume({ mdxSource }: Props) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Container>
        <MDXRemote {...mdxSource} />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resumeMarkdown = getResumeMarkdown();
  const mdxSource = await serialize(resumeMarkdown)
  return { props: { mdxSource } }
}


